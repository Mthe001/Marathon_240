import React, { useEffect } from 'react';

const CharityEvents = () => {
    useEffect(() => {
        // Set the document title when the component is rendered
        document.title = "Charity Events - Join Us to Make a Difference";
    }, []);

    return (
        <div className="charity-events-container bg-gray-100 dark:bg-zinc-800 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Charity Events
                </h2>

                {/* Responsive Bento Grid for Charity Events */}
                <div className="event-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px]">
                    {/* Event Item 1 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Beach Clean-Up
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Join us for a day of cleaning up the beach and protecting our oceans.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 2 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Food Drive
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Help feed the hungry by donating non-perishable food items.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 3 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Charity Run
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Participate in a charity run to raise funds for cancer research.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 4 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Tree Planting
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Help us make the world greener by planting trees in the local park.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 5 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Blood Donation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Donate blood to save lives at our local blood donation center.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 6 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Clothing Drive
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Donate clothes to help those in need during the winter season.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 7 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Fundraising Gala
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Join us for an elegant evening to raise funds for the arts.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Event Item 8 */}
                    <div className="event-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Volunteer Abroad
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            Volunteer overseas to help communities in need.
                        </p>
                        <button className="mt-4 py-2 px-6 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharityEvents;
