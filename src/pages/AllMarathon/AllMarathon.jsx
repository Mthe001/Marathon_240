import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllMarathon = () => {
    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState('desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;

    const fetchMarathons = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://job-city-server-six.vercel.app/marathons`, {
                params: {
                    sort: sortOrder,
                    page: currentPage,
                    limit: itemsPerPage,
                },
                withCredentials: true,
            });

            setMarathons(response.data.marathons || []);
            setTotalPages(response.data.totalPages || 1);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching marathons:', err);
            setError('Failed to fetch marathons');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarathons();
    }, [sortOrder, currentPage]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        // Removed `setCurrentPage(1)` to preserve the current page
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return (
            <div className="text-center text-lg font-semibold">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    return (
        <div>
            {/* Sort Options */}
            <div className="flex justify-end p-8">
                <label htmlFor="sortOrder" className="mr-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Sort by:
                </label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="p-2 rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200"
                >
                    <option value="desc">Newest to Oldest</option>
                    <option value="asc">Oldest to Newest</option>
                </select>
            </div>

            {/* Show Marathon List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {Array.isArray(marathons) && marathons.length > 0 ? (
                    marathons.map((marathon) => (
                        <div
                            key={marathon._id}
                            className="card bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl p-5 border-2 border-green-500 dark:border-green-700"
                        >
                            <img
                                src={marathon.imageUrl}
                                alt={marathon.title}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 truncate">
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
                                        Start Date: {new Date(
                                            marathon.marathonStartDate
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                                <Link to={`/all_marathon/${marathon._id}`}
                                    className="mt-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600 btn"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        No marathons found.
                    </p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 gap-2">
                {/* Previous Button */}
                <button
                    onClick={handlePrevClick}
                    className={`btn w-24 ${currentPage === 1 ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {/* Page Buttons */}
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageClick(page + 1)}
                        className={`btn w-12 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                    >
                        {page + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={handleNextClick}
                    className={`btn w-24 ${currentPage === totalPages ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllMarathon;
