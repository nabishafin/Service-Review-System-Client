import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const user = useContext(AuthContext); // Fetching user context
    const [reviews, setReviews] = useState([]); // State to hold the reviews
    useEffect(() => {
        fetchReviews(); // Fetch reviews when the component is mounted or when user.email changes
    }, [user?.user?.email]);

    const fetchReviews = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews/${user?.user?.email}`);
            setReviews(data); // Correctly set the state with the fetched data
        } catch (error) {
            console.error('Error fetching reviews:', error); // Handle any errors that may occur
            alert('Failed to fetch reviews');  // Display an error message if fetching fails
        }
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Count full stars
        const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Check if there's a half star
        const emptyStars = 5 - fullStars - halfStars; // Calculate empty stars
        return (
            <>
                {'⭐'.repeat(fullStars)}  {/* Full stars */}
                {'☆'.repeat(halfStars)}  {/* Half star */}
                {'☆'.repeat(emptyStars)} {/* Empty stars */}
            </>
        );
    };

    const handleDeletedReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${import.meta.env.VITE_API_URL}/review/${id}`); // Wait for the delete to complete
                fetchReviews();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='py-10 px-2'>
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800'>My Posted Reviews</h2>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
                        {reviews.length}
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Email</span>
                                                </div>
                                            </th>

                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 hidden sm:table-cell'>
                                                <span>Ratings</span>
                                            </th>

                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 hidden sm:table-cell'>
                                                Description
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'>
                                                Edit
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {reviews.map(review => (
                                            <tr key={review._id}>
                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {review?.user?.email}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap hidden sm:table-cell'>
                                                    {renderStars(review.rating)} {/* Display rating for each review */}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap hidden sm:table-cell'>
                                                    <p>{review.description} ...</p>
                                                </td>

                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-6'>
                                                        <button onClick={() => handleDeletedReview(review._id)} className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none'>
                                                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                                                                <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                                                            </svg>
                                                        </button>

                                                        <Link to={`/updatereview/${review._id}`} className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none'>
                                                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                                                                <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyReviews;
