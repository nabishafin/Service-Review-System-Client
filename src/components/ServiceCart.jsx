import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
const ServiceCart = ({ service }) => {

    return (
        <div>
            <motion.div
                className="flex items-center space-x-4 p-4 border-b border-gray-200 shadow-lg "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src={service.serviceImage} className="w-40 h-40 object-cover rounded-lg" />

                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.description.slice(0, 70)} .....</p>
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-gray-800">${service.price}</p>
                        <Link to={`/serviceinfo/${service._id}`}><button className="btn btn-primary btn-sm mt-8">See Details</button></Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceCart;