import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import Headline from '../components/Headline';
import ReviewCart from '../components/ReviewCart';
import CustomizeButton from '../shared/CustomizeButton';

const ServiceInfoPage = () => {
    const { user } = useContext(AuthContext);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const { id } = useParams();
    const [service, setService] = useState(null); // Initialize as null to handle loading state
    const [reviews, setReviews] = useState([]);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`);
                setService(data);
            } catch (error) {
                console.error('Error fetching service details:', error);
                toast.error('Failed to load service details.');
            }
        };

        fetchServiceDetails();
    }, [id]);

    useEffect(() => {
        const fetchAllReviews = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchAllReviews();
    }, []);

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
            navigate('/reviews');
        } catch (error) {
            toast.error('Failed to add review. Please try again later.');
            console.error('Error posting review:', error);
        }
    };


    if (!service) {
        return <div className="w-11/12 md:w-10/12 mx-auto py-10 text-center">Loading service details...</div>;
    }

    return (
        <div className="py-8 bg-gray-100">
            <div className="w-full md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-light text-gray-600">
                                Posted on: {new Date(service.date).toLocaleDateString()}
                            </span>
                            <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                                {service.category}
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h1>
                        <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <img
                                    src={user?.user?.photoURL}
                                    alt={user?.user?.displayName}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <p className="text-sm text-gray-600 ml-2">{user?.user?.displayName}</p>
                            </div>
                            <p className="text-lg font-semibold text-gray-700">Price: BDT {service.price}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Leave a Review</h2>
                    <form onSubmit={handleReviewForm} className="space-y-4">
                        <div>
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                                Your Review
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                placeholder="Share your experience..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
                                Rating
                            </label>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => handleRatingChange(star)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="bi bi-star"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.39.208-.852-.2-.763-.627l.833-4.573-3.436-2.997c-.343-.298-.166-.888.293-.95l4.568-.415L8.685.792c.204-.53.897-.53 1.101 0l2.77 5.123 4.569.415c.459.062.636.652.293.95l-3.436 2.997.833 4.573c.089.426-.373.834-.763.627L8 13.187l-4.388 2.256z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-bold mb-2">
                                Your Email
                            </label>
                            <input
                                id="emailAddress"
                                type="email"
                                name="email"
                                value={user?.user?.email}
                                disabled
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"

                            >
                                <CustomizeButton text={'Submit'} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="py-8">
                    <Headline
                        tittle={'What Others Are Saying'}
                        description={'Read reviews from customers who have experienced our service.'}
                    />
                    <div className="mt-6">
                        <p className="text-lg font-semibold text-gray-700 mb-4">
                            Total Reviews: <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full">{reviews.length}</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review) => (
                                <ReviewCart key={review._id} review={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfoPage;