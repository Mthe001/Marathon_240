import React from 'react';

const VirtualRuns = () => {
    return (
        <div className="virtual-runs-container  bg-gray-100 dark:bg-zinc-900 px-6 py-10 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Join a Virtual Run Today!
            </h1>
            <div className="runs-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Virtual Run 1 */}
                <div className="run-item bg-white dark:bg-zinc-800 shadow-xl rounded-xl overflow-hidden p-6 transform transition-all hover:scale-105">
                    <img
                        src="https://images.pexels.com/photos/22620845/pexels-photo-22620845/free-photo-of-runners-at-marathon-in-city.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Virtual Run 1"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Run for Charity</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Join our virtual run to raise funds for a good cause. Participate from anywhere in the world.
                    </p>
                </div>
                {/* Virtual Run 2 */}
                <div className="run-item bg-white dark:bg-zinc-800 shadow-xl rounded-xl overflow-hidden p-6 transform transition-all hover:scale-105">
                    <img
                        src="https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Virtual Run 2"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Marathon Challenge</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        A virtual marathon challenge! Track your time and earn a medal upon completion.
                    </p>
                </div>
                {/* Virtual Run 3 */}
                <div className="run-item bg-white dark:bg-zinc-800 shadow-xl rounded-xl overflow-hidden p-6 transform transition-all hover:scale-105">
                    <img
                        src="https://images.pexels.com/photos/3764164/pexels-photo-3764164.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Virtual Run 3"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">5K Fun Run</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Get active with a 5K virtual run! You can complete it anytime, anywhere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VirtualRuns;
