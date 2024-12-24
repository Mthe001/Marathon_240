import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaAppleAlt, FaSeedling, FaTint, FaHamburger, FaGlassWhiskey, FaCarrot, FaLemon, FaHeartbeat, FaFish, FaChevronUp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const NutritionsGuides = () => {
    useEffect(() => {
        document.title = 'Nutrition Guides - Marathon_240'; // Set the title to "Nutrition Guides - Marathon_240"
        // GSAP Animations for Title and Nutrition Tips
        gsap.fromTo(
            ".nutrition-title",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Animation for each nutrition tip when it enters the viewport
        gsap.utils.toArray(".nutrition-tip").forEach(tip => {
            gsap.fromTo(
                tip,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: tip,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <div className="nutrition-guides-container bg-gray-100 dark:bg-zinc-800 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto text-center">
                {/* Nutrition Guides Title */}
                <h2 className="nutrition-title text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Marathon Nutrition Guides
                </h2>

                {/* Bento Grid Layout for Nutrition Tips */}
                <div className="nutrition-tips-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                    {/* Tip 1 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <FaAppleAlt className="text-3xl text-blue-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                1. Focus on Carbohydrates
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Carbohydrates are the primary fuel source for long-distance running. Ensure you include whole grains, fruits, and vegetables in your diet.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Carbs help provide energy for the body during long runs, especially in the hours before your race.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 2 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaSeedling className="text-3xl text-green-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                2. Include Healthy Fats
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Healthy fats from sources like nuts, seeds, and avocados are essential for long-term energy, especially during endurance runs.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Fats provide a slow-releasing energy that helps maintain stamina during long runs.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 3 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaTint className="text-3xl text-teal-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                3. Stay Hydrated
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Drink water consistently throughout the day to stay hydrated. Add electrolyte drinks to maintain proper sodium and potassium levels.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Hydration is crucial for maintaining muscle function and preventing fatigue during a run.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 4 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <FaHamburger className="text-3xl text-orange-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                4. Plan Your Pre-Race Meal
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Have a balanced meal 2-3 hours before the race. A mix of carbs, protein, and some fats is perfect for long-lasting energy.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Avoid heavy or greasy foods before the race, as they can make you feel sluggish or lead to gastrointestinal issues.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 5 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaGlassWhiskey className="text-3xl text-red-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                5. Avoid Alcohol and Sugary Drinks
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Alcohol and sugary drinks can dehydrate you and cause energy crashes. Stick to water or electrolyte drinks before and after your run.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Drinking alcohol can interfere with hydration and recovery, so it's best to avoid it before and after runs.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 6 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaCarrot className="text-3xl text-orange-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                6. Eat More Vegetables
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Vegetables are rich in essential vitamins and minerals. They help boost your immune system and support recovery after training.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Including leafy greens and colorful veggies can provide necessary nutrients for better recovery and energy.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 7 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaLemon className="text-3xl text-yellow-400 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                7. Don't Skip Breakfast
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Starting the day with a nutritious breakfast helps fuel your body for the day’s activities and prevents muscle breakdown during long runs.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="A balanced breakfast with protein, carbs, and fats will give you the energy you need to perform your best.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 8 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <FaHeartbeat className="text-3xl text-red-600 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                8. Focus on Protein for Muscle Recovery
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            After a run, consume protein to repair muscle fibers and aid in recovery. Chicken, fish, and plant-based proteins are great options.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Protein is essential to help muscle recovery, and you should aim for 20-30 grams post-workout.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 9 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaFish className="text-3xl text-teal-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                9. Include Omega-3 Fatty Acids
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Omega-3s are important for reducing inflammation and supporting heart health. Salmon, walnuts, and chia seeds are great sources.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Omega-3s help reduce muscle inflammation and improve recovery after long runs.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>

                    {/* Tip 10 */}
                    <div className="nutrition-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <FaChevronUp className="text-3xl text-purple-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                10. Don't Overeat Post-Run
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            After running, your body needs recovery food but overeating can lead to weight gain. Opt for a moderate portion size with protein and carbs.
                        </p>
                        <span className="tooltip tooltip-bottom" data-tip="Post-run, focus on replenishing glycogen stores and repairing muscles without overeating.">
                            <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutritionsGuides;
