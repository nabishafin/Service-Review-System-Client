import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react'; // optional: replace with any icon you like
import CustomizeButton from '../shared/CustomizeButton';

const SingleSirviceCart = ({ service }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition-all hover:shadow-2xl flex flex-col">
            <img
                className="w-full h-56 object-cover"
                src={service.serviceImage}
                alt={service.title}
            />

            {/* Card Content */}
            <div className="flex flex-col justify-between flex-1 p-5 text-gray-800 dark:text-gray-100">
                <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {service.description.slice(0, 80)}...
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span>Category: {service.category}</span>
                        <span>By: <span className="font-medium">Nabi</span></span>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">BDT {service.price}</p>
                        <div className="flex items-center space-x-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Button always at bottom */}
                <div className="mt-auto pt-2">
                    <Link to={`/serviceinfo/${service._id}`}>
                        <CustomizeButton text={'See Details'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleSirviceCart;
