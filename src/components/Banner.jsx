import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomizeButton from '../shared/CustomizeButton';
import img2 from '../assets/syustem-2.jpg';
import img3 from '../assets/system-1.png';
import img1 from '../assets/service.webp';

const Banner = () => {
    const images = [img1, img2, img3]; // Replace with your image imports


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (

        <div className="py-0 md:py-16 dark:bg-gray-900  px-4 md:px-8 transition-colors duration-500 ">
            <div className=" w-full  md:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 ">

                {/* Left Content */}
                <motion.div
                    className="flex flex-col space-y-6 w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Share Your Service. Build Trust.
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                        Add your services and let others know what you offer. Clients can leave honest reviews to build your credibility in the marketplace.
                    </p>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2 pl-5 list-disc">
                        <li>✔ Easily add and manage your services</li>
                        <li>✔ Get real-time reviews from users</li>
                        <li>✔ Trusted platform for professionals and customers</li>
                    </ul>
                    <div className="flex gap-4">
                        <CustomizeButton text={'Add Service'} />
                        <button className="px-6 py-2  border border-blue-600 dark:text-white text-black rounded-lg shadow-md hover:bg-blue-900 transition duration-200">
                            Browse Reviews
                        </button>
                    </div>
                </motion.div>

                {/* Right Slider with Thumbnails */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    {/* Main Image with animation */}
                    <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 rounded-xl"></div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Arrows */}
                        <button
                            onClick={goToPrev}
                            className="absolute z-20 left-3 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white p-2 rounded-full hover:bg-white"
                        >
                            ◀
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute z-20 right-3 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white p-2 rounded-full hover:bg-white"
                        >
                            ▶
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-4 mt-4">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`w-20 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${index === currentIndex
                                    ? 'border-blue-600'
                                    : 'border-transparent'
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
