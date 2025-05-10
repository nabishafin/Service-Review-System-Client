import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomizeButton from '../shared/CustomizeButton';

const ServiceCart = ({ service }) => {
    return (
        <motion.div
            className="w-full  bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 p-5 border dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-full md:w-48 h-48">
                <img
                    src={service.serviceImage}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                />
                <div className="absolute top-3 right-3 bg-blue-950 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                </div>
            </div>

            <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description.length > 70 ? `${service.description.slice(0, 70)}...` : service.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">${service.price}</p>
                    <Link to={`/serviceinfo/${service._id}`}>
                        <CustomizeButton text={'Details'} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCart;
