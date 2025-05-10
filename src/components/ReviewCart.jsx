import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReviewCart = ({ review }) => {
    const [rating, setRating] = useState(review.rating);

    const generateStars = (rating) => {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '⭐' : '☆';
        }
        return stars;
    };

    return (
        <motion.div
            className="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Review by:</p>
                <p className="text-lg font-bold text-gray-800 dark:text-white">{review?.user?.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{review?.user?.email}</p>
            </div>

            <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Rating</p>
                <motion.div
                    className="text-xl font-semibold text-yellow-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {generateStars(rating)}
                </motion.div>
            </div>

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Review</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{review.description}</p>
            </div>
        </motion.div>
    );
};

export default ReviewCart;
