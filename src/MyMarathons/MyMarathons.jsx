import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext/AuthContext';


const MyMarathons = () => {
    const { user } = useContext(AuthContext); // Get logged-in user from AuthContext
    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedMarathon, setSelectedMarathon] = useState(null); // For updating
    const [showUpdateModal, setShowUpdateModal] = useState(false); // Modal visibility for update
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal visibility for delete
    const [deleteId, setDeleteId] = useState(null); // Store marathon ID for deletion

    // Fetch user's marathons using their email
    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/marathons?email=${user.email}`, {
                    withCredentials: true,
                });

                setMarathons(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching marathons:', err);
                setError('Failed to fetch your marathons.');
                setLoading(false);
            }
        };

        if (user && user.email) {
            fetchMarathons();
        } else {
            setError('You need to be logged in to see your marathons.');
            setLoading(false);
        }
    }, [user]);

    const handleUpdate = (marathon) => {
        setSelectedMarathon({ ...marathon });
        setShowUpdateModal(true);
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/marathons/${deleteId}`, { withCredentials: true });
            setMarathons((prev) => prev.filter((m) => m._id !== deleteId));
            setShowDeleteModal(false);
        } catch (err) {
            console.error('Error deleting marathon:', err);
            alert('Failed to delete the marathon.');
        }
    };

    const handleSaveUpdate = async (updatedMarathon) => {
        try {
            const updatedData = {
                ...updatedMarathon,
            };

            await axios.put(`http://localhost:5000/marathons/${updatedMarathon._id}`, updatedData, { withCredentials: true });

            setMarathons((prev) =>
                prev.map((m) => (m._id === updatedMarathon._id ? updatedMarathon : m))
            );
            setShowUpdateModal(false);
        } catch (err) {
            console.error('Error updating marathon:', err);
            alert('Failed to update the marathon.');
        }
    };

    if (loading) {
        return <div className="text-center text-gray-600 dark:text-gray-300">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-2xl max-w-6xl mx-auto mt-8 my-24">
            <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-gray-200">
                My Marathons
            </h2>

            {/* Display user email */}
            {user && user.email && (
                <div className="text-center mb-4 text-black dark:text-gray-300">
                    <strong>Email: </strong>{user.email}
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-zinc-700">
                        <tr>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Serial No.</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Title</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Description</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Start Date</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Location</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marathons.length > 0 ? (
                            marathons.map((marathon, index) => (
                                <tr key={marathon._id} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{index + 1}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{marathon.title}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{marathon.description}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {new Date(marathon.marathonStartDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{marathon.location}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            onClick={() => handleUpdate(marathon)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => handleDelete(marathon._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-4 py-4 text-center text-gray-500 dark:text-gray-400"
                                >
                                    You have not created any marathons yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Update Modal */}
            {showUpdateModal && selectedMarathon && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-md w-full shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">
                            Update Marathon
                        </h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSaveUpdate(selectedMarathon);
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-black dark:text-gray-300">Title:</label>
                                <input
                                    type="text"
                                    value={selectedMarathon.title}
                                    onChange={(e) =>
                                        setSelectedMarathon({ ...selectedMarathon, title: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-black dark:text-gray-300">Location:</label>
                                <input
                                    type="text"
                                    value={selectedMarathon.location}
                                    onChange={(e) =>
                                        setSelectedMarathon({ ...selectedMarathon, location: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-400 text-black dark:text-gray-200 rounded hover:bg-gray-500"
                                    onClick={() => setShowUpdateModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-md w-full shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">
                            Confirm Deletion
                        </h3>
                        <p className="mb-6 text-black dark:text-gray-300">
                            Are you sure you want to delete this marathon?
                        </p>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-400 text-black dark:text-gray-200 rounded hover:bg-gray-500"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={confirmDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyMarathons;
