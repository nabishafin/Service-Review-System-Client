import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const ServiceInfoPage = () => {
    const user = useContext(AuthContext);
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const { id } = useParams();

    console.log(user);
    const [service, setService] = useState([]); // Corrected state name

    const handleRatingChange = (value) => {
        setRating(value);
    };

    useEffect(() => {
        fetchAllJobs(); // Fetch jobs when the component is mounted or when the service ID changes
    }, [id]);

    const fetchAllJobs = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`);
            setService(data); // Correctly set the state with the fetched data
        } catch (error) {
            console.error('Error fetching jobs:', error); // Handle any errors that may occur
        }
    };

    const handleReviewForm = async (e) => {
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

        try {
            // Send POST request to server with review data
            await axios.post(`${import.meta.env.VITE_API_URL}/allreview`, reviewData);
            toast.success('Review Added Successfully');

            // Reset the form fields
            setDescription('');
            setRating(0);
            setDate(new Date());

            // Optionally navigate to another page
            navigate('/');
        } catch (error) {
            toast.error('Failed to add review. Please try again later.');
            console.error('Error posting review:', error);
        }
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
                {/* Job Details */}
                <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm font-light text-gray-800 '>
                            Date: {service.date}
                        </span>
                        <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                            {service.category}
                        </span>
                    </div>

                    <div>
                        <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                            {service.title}
                        </h1>

                        <p className='mt-2 text-lg text-gray-600 '>
                            {service.description}
                        </p>
                        <p className='mt-6 text-sm font-bold text-gray-600 '>
                            Details:
                        </p>
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mt-2 text-sm  text-gray-600 '>
                                    Name: {user?.user?.displayName}
                                </p>
                                <p className='mt-2 text-sm  text-gray-600 '>
                                    Email: {user?.user?.email}
                                </p>
                            </div>
                            <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                                <img
                                    src={user?.user?.photoURL}
                                    alt=''
                                />
                            </div>
                        </div>
                        <p className='mt-6 text-lg font-bold text-gray-600 '>
                            Price: BDT {service.price}
                        </p>
                    </div>
                </div>
                {/* Place A Bid Form */}
                <section className="p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[300px]">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize">Place A Review</h2>

                    <form onSubmit={handleReviewForm}>
                        <div className="mb-4">
                            <label className="text-gray-700" htmlFor="description">
                                Review
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="2"
                                placeholder="Description"
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
                                Place Review
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ServiceInfoPage;
