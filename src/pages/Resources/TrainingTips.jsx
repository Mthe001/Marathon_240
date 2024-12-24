import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRunning, FaWater, FaAppleAlt, FaDumbbell, FaRestroom, FaClock, FaMedal, FaTrophy, FaBrain, FaFirstAid } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TrainingTips = () => {
    useEffect(() => {
        document.title = 'Training Tips - Marathon_240'; // Set the title to "Training Tips - Marathon_240"
        // GSAP Animations for Title and Tips
        gsap.fromTo(
            ".training-title",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Animation for each training tip when it enters the viewport
        gsap.utils.toArray(".training-tip").forEach(tip => {
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
        <div className="training-tips-container bg-gray-100 dark:bg-stone-900 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto text-center">
                {/* Training Tips Title */}
                <h2 className="training-title text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Marathon Training Tips
                </h2>

                {/* Training Tips List */}
                <div className="training-tips-list text-left">
                    <ol className="space-y-8">
                        {/* Tip 1 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaRunning className="text-4xl text-blue-500 dark:text-blue-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    1. Start with a Warm-Up
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                A proper warm-up is essential before any run. It helps increase flexibility, reduce muscle stiffness, and prevent injuries.
                            </p>
                        </li>

                        {/* Tip 2 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaWater className="text-4xl text-blue-500 dark:text-blue-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    2. Stay Hydrated
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Hydration is key during long runs. Make sure to drink enough water before, during, and after your workouts to stay energized.
                            </p>
                        </li>

                        {/* Tip 3 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaAppleAlt className="text-4xl text-green-500 dark:text-green-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    3. Fuel Your Body Right
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Eating the right foods can boost your performance. Focus on balanced meals with carbs, protein, and healthy fats to fuel your runs.
                            </p>
                        </li>

                        {/* Tip 4 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaDumbbell className="text-4xl text-red-500 dark:text-red-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    4. Cross-Training Matters
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Incorporate cross-training to improve your overall fitness. Cycling, swimming, or strength training can complement your running and reduce injury risks.
                            </p>
                        </li>

                        {/* Tip 5 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaRestroom className="text-4xl text-yellow-500 dark:text-yellow-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    5. Take Rest Days
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Rest is just as important as training. Allow your muscles time to recover to avoid burnout and injury, so you can run stronger.
                            </p>
                        </li>

                        {/* Tip 6 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaClock className="text-4xl text-purple-500 dark:text-purple-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    6. Pace Yourself
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                It's important to pace yourself during training. Gradually increase your distance and speed to build endurance without overexerting yourself.
                            </p>
                        </li>

                        {/* Tip 7 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaMedal className="text-4xl text-orange-500 dark:text-orange-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    7. Don't Skip Stretching
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Stretching before and after runs can help improve flexibility, prevent injuries, and promote muscle recovery, which is key for long-term success.
                            </p>
                        </li>

                        {/* Tip 8 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaTrophy className="text-4xl text-yellow-600 dark:text-yellow-400" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    8. Focus on Running Form
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Good running form can reduce the risk of injury and increase efficiency. Keep your posture tall, arms relaxed, and strides controlled.
                            </p>
                        </li>

                        {/* Tip 9 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaBrain className="text-4xl text-indigo-500 dark:text-indigo-300" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    9. Stay Mentally Strong
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Marathon running is as much a mental challenge as it is a physical one. Stay positive and focus on your goals during tough moments.
                            </p>
                        </li>

                        {/* Tip 10 */}
                        <li className="training-tip bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <FaFirstAid className="text-4xl text-red-600 dark:text-red-400" />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    10. Prioritize Post-Run Recovery
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                After each run, focus on recovery. Proper post-run stretching, hydration, and nutrition are key to preparing for the next session and preventing injuries.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default TrainingTips;
