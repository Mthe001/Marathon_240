import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-12 px-6 lg:px-20 py-12">
                {/* Text Section */}
                <div className="text-center lg:text-left space-y-6 max-w-lg">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Unite{" "}
                        <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Run
                        </motion.span>{" "}
                        Conquer!
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg">
                        Push beyond your limits and embrace the thrill of the race. This is more than a run; it’s a journey of achievement. Join us and experience the magic of the marathon.
                    </p>
                    <Link to='/all_marathon' className="btn btn-outline btn-sm sm:btn-md lg:btn-lg">Let's Run</Link>
                </div>

                {/* Images Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6">
                    <motion.img
                        src="https://images.pexels.com/photos/1564470/pexels-photo-1564470.jpeg?auto=compress&cs=tinysrgb&w=300"
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                    <motion.img
                        src="https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=300"
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                    />
                </div>
            </div>
        </div >
    );
};

export default Banner;
