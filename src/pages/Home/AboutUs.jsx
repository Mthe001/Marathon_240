import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin
import './AboutUs.css';

gsap.registerPlugin(ScrollTrigger); // Register the plugin

const AboutUs = () => {

    useEffect(() => {
        // GSAP animation for scrolling the title
        gsap.fromTo(".about-us-title",
            { opacity: 0, y: -50 },
            {
                opacity: 1, y: 0, duration: 0.6,
                scrollTrigger: {
                    trigger: ".about-us-title",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });

        // GSAP animation for scrolling the quote section (text from left, image from right)
        gsap.fromTo(".motivational-quote .text-left",
            { opacity: 0, x: -200 },
            {
                opacity: 1, x: 0, duration: 0.8,
                scrollTrigger: {
                    trigger: ".motivational-quote",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });

        gsap.fromTo(".motivational-quote .image-right",
            { opacity: 0, x: 200 },
            {
                opacity: 1, x: 0, duration: 0.8,
                scrollTrigger: {
                    trigger: ".motivational-quote",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });

        // GSAP animation for about us content section (text and images from left and right)
        gsap.fromTo(".about-us-content .content-left",
            { opacity: 0, x: -200 },
            {
                opacity: 1, x: 0, duration: 0.8,
                scrollTrigger: {
                    trigger: ".about-us-content",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });

        gsap.fromTo(".about-us-content .content-right",
            { opacity: 0, x: 200 },
            {
                opacity: 1, x: 0, duration: 0.8,
                scrollTrigger: {
                    trigger: ".about-us-content",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });

    }, []);

    return (
        <div className="about-us-container bg-gray-50 dark:bg-zinc-900 py-16 px-6 sm:px-8 md:px-16 lg:px-24 overflow-x-hidden">
            <div className="container mx-auto">

                {/* Title Section */}
                <h2 className="about-us-title text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-12">
                    About Our Marathon Website
                </h2>

                {/* Motivational Quote Section */}
                <div className="motivational-quote grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                    <div className="text-center sm:text-left">
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-300 italic">
                            "The journey of a thousand miles begins with a single step."
                        </p>
                    </div>
                    <div className="relative image-right">
                        <img
                            src="https://i.ibb.co.com/xhCd4Tb/Screenshot-2024-12-22-114012-removebg-preview.png"
                            alt="Marathon"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* About Us Content Section */}
                <div className="about-us-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg p-6 md:p-8 text-center content-left">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">Who We Are</h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                            We are a passionate community of runners dedicated to providing a platform for runners of all levels.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 md:p-8 text-center content-left">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                            Our mission is to connect, motivate, and inspire people to take on challenges and achieve their marathon goals.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-amber-950 rounded-lg shadow-lg p-6 md:p-8 text-center content-right">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">Join Us</h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                            Join us in our upcoming events and be a part of the marathon movement, pushing boundaries, and achieving greatness.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
