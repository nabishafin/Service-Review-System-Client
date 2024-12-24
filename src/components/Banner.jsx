import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'animate.css';
import { motion } from 'framer-motion';



const Banner = () => {
    const bannerData = [
        {
            title: 'Discover, Review, and Share Services',
            image: 'https://i.ibb.co.com/rsft04z/system-1.jpg',
            description: 'We believe in continuous improvement, and your opinion is essential in guiding us toward better services'
        },
        {
            title: 'Help Us Serve You Better with Your Review',
            image: 'https://i.ibb.co.com/60cZrVg/img-mdzc.jpg',
            description: ' By sharing your thoughts, you help us understand how we can make every experience better',
        },

        {
            title: 'Rate Our Service and Share Your Thoughts',
            image: 'https://i.ibb.co.com/PTLHk4v/istockphoto-1924190337-612x612.jpg',
            description: 'Your feedback is incredibly important to us.  you provide us with valuable insights that help us deliver even better experiences',
        },

    ];
    return (
        <div>
            <div>
                <div className="w-full relative">
                    {/* Swiper Slider */}
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {bannerData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="w-full h-[400px] bg-cover bg-center relative "
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <div className="absolute top-1/2 left-0 w-full text-center text-white transform -translate-y-1/2 px-6">
                                        <motion.h1
                                            className="text-2xl md:text-5xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white  to-white"
                                            initial={{ x: -100 }}
                                            animate={{ x: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 25,
                                                duration: 1.2,
                                            }}
                                        >
                                            {item.title}
                                        </motion.h1>
                                        <motion.p
                                            className="text-lg mb-8 text-white font-bold"
                                            initial={{ y: 50 }}
                                            animate={{ y: 0 }}
                                            transition={{
                                                duration: 1.2,
                                                ease: "easeOut",
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                            }}
                                        >
                                            {item.description}
                                        </motion.p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
                        <FaArrowLeft />
                    </div>
                    <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;