import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllMarathon = () => {
    const [marathons, setMarathons] = useState([]); // State to hold marathons data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state
    // Fetch marathons from the API
    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const response = await axios.get('http://localhost:5000/marathons', {
                    withCredentials: true, // Include credentials (cookies)
                });
                setMarathons(response.data); // Set the marathon data
                setLoading(false); // Stop loading
            } catch (err) {
                setError('Failed to fetch marathons'); // Handle error
                setLoading(false);
            }
        };

        fetchMarathons(); // Fetch marathons on component mount
    }, []);

    // If loading, display a loading message
    if (loading) {
        return <div className="text-center text-lg font-semibold"><span className="loading loading-infinity loading-lg"></span></div>;
    }

    // If there is an error, display the error message
    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }



    return (
        <div>
            {/* Show Marathon List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-8">
                {marathons.map((marathon) => (
                    <div
                        key={marathon._id}
                        className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl p-5 border-2 border-green-500"
                    >
                        {/* Use imageUrl field to display the image */}
                        <img
                            src={marathon.imageUrl} // Use marathon.imageUrl to load the image
                            alt={marathon.title}
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 truncate">
                                {marathon.title}
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                {marathon.description}
                            </p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                    Location: {marathon.location}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Running Distance: {marathon.runningDistance}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Start Date: {new Date(
                                        marathon.marathonStartDate
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                            {/* See Details Button */}
                            <button
                                onClick={() => handleSeeDetails(marathon)}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AllMarathon;
