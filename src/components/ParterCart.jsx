import React from 'react';
import { motion } from 'framer-motion';

const ParterCart = ({ name, description, logo }) => {
    return (
        <div>
            <motion.div
                className="bg-slate-100 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <img
                    src={logo}
                    className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </motion.div>
        </div>
    );
};

export default ParterCart;