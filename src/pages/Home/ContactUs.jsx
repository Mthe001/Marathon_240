import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Animate form section on scroll
        gsap.fromTo(
            formRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 70%',
                },
            }
        );


        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 70%',
                },
            }
        );

        // Fade in the entire container on scroll
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="contact-us bg-stone-100 dark:bg-zinc-900 my-10 rounded-lg py-12 lg:mt-14 px-6 sm:px-12 lg:px-24 shadow-xl dark:shadow-2xl transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section: Text and Form */}
                <div ref={formRef} className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                        Have questions about our marathon events or want to collaborate? Reach
                        out to us!
                    </p>
                    <form className="space-y-6 bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-lg dark:shadow-2xl transition-all duration-300">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        {/* Message Textarea */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Message</label>
                            <textarea
                                placeholder="Write your message here"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-2xl hover:bg-blue-600 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Section: Image */}
                <div ref={imageRef} className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhbGwlMjBjZW50ZXJ8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=1080"
                        alt="Contact us"
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-20 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

