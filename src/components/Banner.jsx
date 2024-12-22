
import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css'; // Make sure you import DaisyUI if it's installed

const Banner = () => {
    return (
        <div>
            <motion.div
                className="relative bg-gradient-to-r from-teal-100 via-pink-100 to-yellow-100 text-gray-800 py-20 px-8 rounded-lg shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto text-center">
                    {/* Animated Heading */}
                    <motion.h1
                        className="text-5xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            duration: 1.2,
                        }}
                    >
                        Discover, Review, and Share Services
                    </motion.h1>

                    {/* Animated Text */}
                    <motion.p
                        className="text-lg mb-8"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        Join our community, find great services, and leave meaningful reviews!
                    </motion.p>

                    {/* Animated Button */}
                    <motion.button
                        className="btn btn-primary"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Animated Background Circles */}
                <motion.div
                    className="absolute top-16 right-16 w-56 h-56 bg-indigo-300 opacity-40 rounded-full animate-pulse"
                    style={{ animationDuration: '5s' }}
                />
                <motion.div
                    className="absolute bottom-16 left-16 w-48 h-48 bg-lime-200 opacity-30 rounded-full animate-pulse"
                    style={{ animationDuration: '6s' }}
                />
            </motion.div>
        </div>
    );
};

export default Banner;