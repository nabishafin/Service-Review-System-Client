import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const UpdateReview = () => {
    const user = useContext(AuthContext);
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);  // This will store the rating value
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const { id } = useParams();

    console.log(id);

    // get default value by id
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetchReviewData();
    }, []);

    const fetchReviewData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/review/${id}`);
        setReview(data);
        setDescription(data.description);
        setRating(data.rating); // Set the rating state to the existing rating from the fetched review
        setDate(new Date(data.date)); // Assuming data.date is in a format that can be parsed
    };

    const handleRatingChange = (value) => {
        setRating(value); // Update the rating state when a star is clicked
    };

    const handleUpdateReview = async (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page

        if (!description || !rating || !date) {
            toast.error("Please fill all the required fields.");
            return;
        }

        // Structure the reviewData object
        const reviewData = {
            user: {
                name: user?.user?.displayName,
                email: user?.user?.email,
            },
            description,
            rating,
            date,
        };

        // Call API to update the review
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/updatereview/${id}`, reviewData);
            toast.success("Review updated successfully!");
            navigate(`/reviews`); // Navigate back to the review page or another page after success
        } catch (error) {
            toast.error("Error updating the review.");
            console.error(error);
        }
    };






    return (
        <div className='my-10'>
            <div className="flex flex-col md:flex-row justify-around gap-5 items-center min-h-[300px] md:max-w-screen-xl mx-auto">
                <section className="p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[300px]">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize">Update Your Review</h2>

                    <form onSubmit={handleUpdateReview}>
                        <div className="mb-4">
                            <label className="text-gray-700" htmlFor="description">
                                Review
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="2"
                                defaultValue={review?.description}
                                value={description}  // Binding the textarea value to state
                                onChange={(e) => setDescription(e.target.value)}  // Updating the description state
                                className="textarea textarea-bordered w-full"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-700" htmlFor="rating">
                                Rating
                            </label>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <label
                                        key={star}
                                        className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => handleRatingChange(star)}  // Update the rating state on click
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className={`bi bi-star ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.39.208-.852-.2-.763-.627l.833-4.573-3.436-2.997c-.343-.298-.166-.888.293-.95l4.568-.415L8.685.792c.204-.53.897-.53 1.101 0l2.77 5.123 4.569.415c.459.062.636.652.293.95l-3.436 2.997.833 4.573c.089.426-.373.834-.763.627L8 13.187l-4.388 2.256z" />
                                        </svg>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-700" htmlFor="emailAddress">
                                Email Address
                            </label>
                            <input
                                id="emailAddress"
                                type="email"
                                name="email"
                                value={user?.user?.email}  // Binding the email input value to state
                                disabled={true}  // Make the input read-only
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Update Review
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateReview;
