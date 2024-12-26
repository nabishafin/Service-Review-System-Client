import React from 'react';
import { FaHandsHelping, FaRegThumbsUp, FaUserShield } from 'react-icons/fa';

const WhyChoseUs = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-indigo-950 to-black text-white py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                    <p className="text-xl mb-12">
                        We are committed to providing exceptional services and building long-term relationships with our clients.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Tailored Solutions */}
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                            <div className="text-indigo-600 text-4xl mb-4">
                                <FaRegThumbsUp />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Tailored Solutions</h3>
                            <p className="text-lg">
                                Our services are personalized to meet your specific needs, ensuring you get the best results.
                            </p>
                        </div>

                        {/* Card 2: Trusted Experts */}
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                            <div className="text-indigo-600 text-4xl mb-4">
                                <FaUserShield />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Trusted Experts</h3>
                            <p className="text-lg">
                                Our team consists of seasoned professionals with years of experience delivering exceptional results.
                            </p>
                        </div>

                        {/* Card 3: Client-Centered Approach */}
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                            <div className="text-indigo-600 text-4xl mb-4">
                                <FaHandsHelping />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Client-Centered Approach</h3>
                            <p className="text-lg">
                                We prioritize understanding your needs and delivering solutions that exceed your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoseUs;