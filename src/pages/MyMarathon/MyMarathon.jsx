import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import AuthContext from '../../context/AuthContext/AuthContext';

const MyMarathons = () => {
    const { user } = useContext(AuthContext);
    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedMarathon, setSelectedMarathon] = useState(null); // Store marathon for updates
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const navigate = useNavigate();  // Initialize useNavigate hook

    // Fetch marathons from the server
    const fetchMarathons = async () => {
        setLoading(true);
        setError('');
        try {
            if (!user || !user.email) {
                throw new Error('User is not authenticated or email is missing');
            }
            const response = await axios.get('http://localhost:5000/my-marathons', {
                withCredentials: true,
            });
            setMarathons(response.data);
        } catch (err) {
            console.error('Error fetching marathons:', err);
            setError('Failed to fetch marathon data');
        } finally {
            setLoading(false);
        }
    };

    // Trigger data fetch on component mount
    useEffect(() => {
        if (user) {
            fetchMarathons();
        } else {
            setError('You need to be logged in to view your marathons.');
            setLoading(false);
        }
    }, [user]);

    const handleUpdate = (marathon) => {
        // Navigate to the update page and pass the marathon ID as a URL parameter
        navigate(`/update-marathon/${marathon._id}`);
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

    if (loading) {
        return <div><span className="loading loading-bars loading-lg"></span></div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-2xl max-w-6xl mx-auto mt-8 my-24">
            <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-gray-200">
                My Marathons
            </h2>

            {marathons.length === 0 ? (
                <div className="text-center p-8 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg">
                    <p className="text-xl text-gray-700 dark:text-gray-300">No marathons found.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
                        <thead className="bg-gray-100 dark:bg-zinc-700">
                            <tr>
                                <th className="px-4 py-2 text-black dark:text-gray-200">Title</th>
                                <th className="px-4 py-2 text-black dark:text-gray-200">Location</th>
                                <th className="px-4 py-2 text-black dark:text-gray-200">Start Date</th>
                                <th className="px-4 py-2 text-black dark:text-gray-200">Distance</th>
                                <th className="px-4 py-2 text-black dark:text-gray-200">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marathons.map((marathon) => (
                                <tr key={marathon._id} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{marathon.title}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{marathon.location}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {new Date(marathon.marathonStartDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{marathon.runningDistance}</td>
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
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyMarathons;
