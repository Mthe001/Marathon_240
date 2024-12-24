import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GearRecommendations = () => {
    useEffect(() => {

        document.title = 'Gear Recommendations - Marathon_240'; // Set

        // GSAP Animation for Gear Items
        gsap.fromTo(
            ".gear-item",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".gear-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="gear-recommendations-container bg-gray-100 dark:bg-zinc-800 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Gear Recommendations
                </h2>

                {/* Responsive Bento Grid for Gear Items */}
                <div className="gear-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px]">
                    {/* Gear Item 1 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 lg:col-span-2 lg:row-span-2">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Running Shoes
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Invest in a high-quality pair of running shoes designed for long distances.
                        </p>
                    </div>

                    {/* Gear Item 2 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-1 lg:col-span-2 lg:row-span-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Hydration Packs
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Stay hydrated during long runs with lightweight hydration gear.
                        </p>
                    </div>

                    {/* Gear Item 3 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Running Watch
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Track your pace, distance, and time with a GPS watch.
                        </p>
                    </div>

                    {/* Gear Item 4 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Sun Protection Hat
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Keep yourself cool and protected from the sun during runs.
                        </p>
                    </div>

                    {/* Gear Item 5 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-3 lg:col-span-3 lg:row-span-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Moisture-Wicking Clothes
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Wear breathable and moisture-wicking apparel for comfort.
                        </p>
                    </div>

                    {/* Gear Item 6 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-1 lg:col-span-1 lg:row-span-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Sunglasses
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Protect your eyes from UV rays while running outdoors.
                        </p>
                    </div>

                    {/* Gear Item 7 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Lightweight Backpack
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Carry essentials like snacks and hydration without weighing you down.
                        </p>
                    </div>

                    {/* Gear Item 8 */}
                    <div className="gear-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-2">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Wireless Earbuds
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Listen to music or podcasts while keeping your hands free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GearRecommendations;
