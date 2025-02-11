import React, { useEffect } from 'react';

const RaceResults = () => {
    useEffect(() => {
        // Set the document title when the component is rendered
        document.title = "Race Results - Track Your Progress";
    }, []);

    const raceResults = [
        { position: 1, name: 'John Doe', time: '1:10:25' },
        { position: 2, name: 'Jane Smith', time: '1:12:33' },
        { position: 3, name: 'Michael Johnson', time: '1:14:50' },
        { position: 4, name: 'Sarah Lee', time: '1:16:05' },
        { position: 5, name: 'David Brown', time: '1:17:40' },
        { position: 6, name: 'Emily Davis', time: '1:18:00' },
    ];

    return (
        <div className="race-results-container w-[90%] mx-auto rounded-xl lg:mt-20 bg-gray-100 dark:bg-zinc-800 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Race Results
                </h2>

                {/* Race Results Grid */}
                <div className="results-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {raceResults.map((result, index) => (
                        <div
                            key={index}
                            className="result-item bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                Position: {result.position}
                            </h3>
                            <p className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">
                                {result.name}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                Time: {result.time}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RaceResults;
