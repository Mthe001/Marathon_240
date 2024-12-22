import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto">

                {/* Title Section */}
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Our Marathon Website
                </motion.h2>

                {/* Motivational Quote Section */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center sm:text-left">
                        <motion.p
                            className="text-lg sm:text-xl font-semibold text-gray-600 italic"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            "The journey of a thousand miles begins with a single step."
                        </motion.p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://i.ibb.co.com/xhCd4Tb/Screenshot-2024-12-22-114012-removebg-preview.png"
                            alt="Marathon"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* About Us Content Section */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Who We Are</h3>
                        <p className="text-gray-600">
                            We are a passionate community of runners dedicated to providing a platform for runners of all levels.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            Our mission is to connect, motivate, and inspire people to take on challenges and achieve their marathon goals.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Join Us</h3>
                        <p className="text-gray-600">
                            Join us in our upcoming events and be a part of the marathon movement, pushing boundaries, and achieving greatness.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AboutUs;
