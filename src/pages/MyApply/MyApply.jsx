import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext/AuthContext';

const MyApply = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user from context
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedRegistration, setSelectedRegistration] = useState(null); // For updating
    const [showModal, setShowModal] = useState(false); // Modal visibility

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                // Make a request to the backend to fetch the user's registration data
                const response = await axios.get('http://localhost:5000/my-registrations', {
                    withCredentials: true, // Include credentials (cookies)
                });

                // Update the state with the registration data
                setRegistrations(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching registrations:', err);
                setError('Failed to fetch your registration data');
                setLoading(false);
            }
        };

        if (user) {
            fetchRegistrations(); // Fetch the data if the user is logged in
        } else {
            setError('You need to be logged in to see your registrations.');
            setLoading(false);
        }
    }, [user]);

    const handleUpdate = (registration) => {
        setSelectedRegistration(registration);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this registration?')) {
            // Call backend API to delete the registration
            axios
                .delete(`http://localhost:5000/registrations/${id}`, { withCredentials: true })
                .then(() => {
                    setRegistrations((prev) => prev.filter((reg) => reg._id !== id));
                })
                .catch((err) => {
                    console.error('Error deleting registration:', err);
                    alert('Failed to delete the registration.');
                });
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
                My Marathon Registrations
            </h2>

            {/* Table to display registrations */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-zinc-700">
                        <tr>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Marathon</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">First Name</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Last Name</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Email</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Contact</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.length > 0 ? (
                            registrations.map((registration) => (
                                <tr key={registration._id} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.marathonId || 'N/A'}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.firstName}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.lastName}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.email}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.contactNumber}
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            onClick={() => handleUpdate(registration)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => handleDelete(registration._id)}
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
                                    You have not registered for any marathons yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal for updating registration */}
            {showModal && selectedRegistration && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-md w-full shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">
                            Update Registration
                        </h3>
                        <form>
                            <label className="block mb-2 text-black dark:text-gray-300">First Name:</label>
                            <input
                                type="text"
                                defaultValue={selectedRegistration.firstName}
                                className="w-full mb-4 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                            />

                            <label className="block mb-2 text-black dark:text-gray-300">Last Name:</label>
                            <input
                                type="text"
                                defaultValue={selectedRegistration.lastName}
                                className="w-full mb-4 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                            />

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-400 text-black dark:text-gray-200 rounded hover:bg-gray-500"
                                    onClick={() => setShowModal(false)}
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
        </div>
    );
};

export default MyApply;
