import React from 'react';
import { Link } from 'react-router-dom';

const MarathonCampaign = () => {
    const marathons = [
        {
            id: 1,
            title: 'City Run 2024',
            description: 'Join the annual city run and explore the vibrant streets of downtown.',
            location: 'New York, USA',
            runningDistance: '10 km',
            date: '2024-04-15',
            image: 'https://images.pexels.com/photos/2002209/pexels-photo-2002209.jpeg?auto=compress&cs=tinysrgb&w=300', // Replace with actual image URL
        },
        {
            id: 2,
            title: 'Beachside Dash',
            description: 'Enjoy a scenic run along the beautiful coastline.',
            location: 'Miami, USA',
            runningDistance: '5 km',
            date: '2024-05-10',
            image: 'https://images.pexels.com/photos/1578384/pexels-photo-1578384.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
        {
            id: 3,
            title: 'Mountain Challenge',
            description: 'Conquer the trails with this challenging mountain marathon.',
            location: 'Denver, USA',
            runningDistance: '15 km',
            date: '2024-06-20',
            image: 'https://images.pexels.com/photos/1555351/pexels-photo-1555351.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
        {
            id: 4,
            title: 'Night Glow Run',
            description: 'Experience the thrill of running under the stars.',
            location: 'Los Angeles, USA',
            runningDistance: '7 km',
            date: '2024-07-05',
            image: 'https://images.pexels.com/photos/1568929/pexels-photo-1568929.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
        {
            id: 5,
            title: 'Forest Escape',
            description: 'Run through the serene forest trails and reconnect with nature.',
            location: 'Seattle, USA',
            runningDistance: '12 km',
            date: '2024-08-15',
            image: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
        {
            id: 6,
            title: 'Desert Run Adventure',
            description: 'Test your endurance with this unique desert running experience.',
            location: 'Phoenix, USA',
            runningDistance: '8 km',
            date: '2024-09-30',
            image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=300',
        },
    ];

    return (
        <div className="p-8 bg-gray-100 dark:bg-zinc-900 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                Upcoming  Marathon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {marathons.map((marathon) => (
                    <div
                        key={marathon.id}
                        className="card bg-white dark:bg-zinc-950 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl p-5"
                    >
                        <img
                            src={marathon.image}
                            alt={marathon.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                {marathon.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                                {marathon.description}
                            </p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Location: {marathon.location}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Running Distance: {marathon.runningDistance}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Start Date: {new Date(marathon.date).toLocaleDateString()}
                                </p>
                            </div>
                            {/* "Let's Participate" Button */}
                            <div className="mt-4">
                                <Link to="/all_marathon">
                                    <button
                                        className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
                                    >
                                        Let's Participate
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MarathonCampaign;
