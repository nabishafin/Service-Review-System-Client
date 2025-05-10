import React from 'react';

import logo1 from '../assets/Company Logo (1).png';
import logo2 from '../assets/Company Logo (2).png';
import logo3 from '../assets/Company Logo (3).png';
import logo4 from '../assets/Company Logo (4).png';
import logo5 from '../assets/Company Logo (5).png';
import logo6 from '../assets/Company Logo (6).png';

const PartnersSection = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <section className="bg-gradient-to-r from-black via-gray-900 to-black mt-0 dark:from-gray-100 dark:to-white py-16 px-6 transition-colors duration-500 mt-28">
            <div className="w-full md:w-10/12 md:px-0 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left side - Logos */}
                <div className="grid grid-cols-2 gap-6 w-full md:w-1/2">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-full h-24 bg-white dark:bg-gray-100 flex items-center justify-center shadow-md rounded-2xl"
                        >
                            <img
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="max-h-full max-w-full object-contain rounded-xl"
                            />
                        </div>
                    ))}
                </div>

                {/* Right side - Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="uppercase tracking-widest text-sm text-gray-400 dark:text-gray-600 mb-2">
                        Team. Customer. Community
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-4">
                        We Work With the Best Partners
                    </h2>
                    <p className="text-gray-300 dark:text-gray-700 mb-6">
                        While we are at the forefront of and specialize in design-build,
                        we are very familiar with a number of delivery methods and are
                        confident we can find the process that will best help you meet your goals.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-white text-black font-medium py-2 px-5 rounded hover:bg-yellow-500 transition"
                    >
                        READ MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;

