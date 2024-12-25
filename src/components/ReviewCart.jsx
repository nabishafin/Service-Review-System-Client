import React, { useState } from 'react';
import { motion } from "framer-motion";

const ReviewCart = ({ review }) => {
    const [rating, setRating] = useState(review.rating); // Dynamic rating value (can be updated)
    const generateStars = (rating) => {
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? "⭐" : "☆";
        }
        return stars;
    };

    return (
        <div className=" max-w-96 bg-white p-6 rounded-lg shadow-md">
            <p> Review User Name :</p>
            {/* User Information */}
            <p className="text-lg font-semibold text-gray-700">
                <strong>Name:</strong> {review?.user?.name}
            </p>
            <p className="text-sm text-gray-500">
                <strong>Email:</strong> {review?.user?.email}
            </p>

            {/* Dynamic Rating Section */}
            <div className="mt-4">
                <p className="text-lg text-gray-700">
                    <strong>Rating:</strong>{" "}
                    <motion.span
                        className="text-2xl font-bold text-yellow-500"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {rating}
                    </motion.span>
                </p>
                <div className="mt-2 text-3xl">{generateStars(rating)}</div>

                <p className="text-sm text-gray-500 mt-2">
                    {review.description}
                </p>
            </div>
        </div>




    );
};

export default ReviewCart;