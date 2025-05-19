import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomizeButton from '../shared/CustomizeButton';

const ServiceCart = ({ service }) => {
    return (
        <motion.div
            className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col lg:flex-row items-start lg:items-center gap-6 p-4 sm:p-5 md:p-6 border dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Image Section */}
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-48 h-52 sm:h-60 md:h-48 relative">
                <img
                    src={service.serviceImage}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                />
                <div className="absolute top-2 right-2 bg-blue-950 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {service.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.description.length > 70 ? `${service.description.slice(0, 70)}...` : service.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-lg sm:text-xl font-bold text-blue-950 dark:text-blue-900">
                        ${service.price}
                    </p>
                    <Link to={`/serviceinfo/${service._id}`}>
                        <CustomizeButton text="Details" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCart;
