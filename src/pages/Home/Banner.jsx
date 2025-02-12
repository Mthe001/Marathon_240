import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200 dark:bg-zinc-950 rounded-lg mt-20">
            <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-12 lg:py-20">
                {/* Text Section */}
                <div className="text-center lg:text-left space-y-6 max-w-lg lg:max-w-xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
                        Unite{" "}
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Run
                        </motion.span>{" "}
                        Conquer!
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Push beyond your limits and embrace the thrill of the race. This is more than a run; it’s a journey of achievement. Join us and experience the magic of the marathon.
                    </p>
                    <Link
                        to='/all_marathon'
                        className="btn btn-outline btn-sm sm:btn-md lg:btn-lg text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white dark:text-gray-300 dark:border-gray-300 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                    >
                        Let's Run
                    </Link>
                </div>

                {/* Images Section */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-center gap-6 lg:gap-8">
                    <motion.img
                        src="https://images.pexels.com/photos/1564470/pexels-photo-1564470.jpeg?auto=compress&cs=tinysrgb&w=300"
                        className="w-full sm:w-1/2 lg:w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl dark:shadow-gray-700"
                        alt="Marathon Runner"
                    />
                    <motion.img
                        src="https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=300"
                        className="w-full sm:w-1/2 lg:w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl dark:shadow-gray-700"
                        alt="Runners Starting"
                    />
                </div>
            </div>
        </div >
    );
};

export default Banner;
