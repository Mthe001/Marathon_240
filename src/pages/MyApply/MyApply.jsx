import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext/AuthContext';

const MyApply = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user from context
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedRegistration, setSelectedRegistration] = useState(null); // For updating
    const [showUpdateModal, setShowUpdateModal] = useState(false); // Modal visibility for update
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal visibility for delete
    const [deleteId, setDeleteId] = useState(null); // Store registration ID for deletion

    useEffect(() => {
        document.title = 'My Marathon Registrations'; // Set the document title

        const fetchRegistrations = async () => {
            try {
                // Fetch the user's registration data
                const response = await axios.get('http://localhost:5000/my-registrations', {
                    withCredentials: true, // Include credentials (cookies)
                });

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
        setSelectedRegistration({ ...registration }); // Copy the registration object to prevent reference issues
        setShowUpdateModal(true);
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/registrations/${deleteId}`, { withCredentials: true });
            setRegistrations((prev) => prev.filter((reg) => reg._id !== deleteId));
            setShowDeleteModal(false); // Close delete modal
        } catch (err) {
            console.error('Error deleting registration:', err);
            alert('Failed to delete the registration.');
        }
    };

    const handleSaveUpdate = async (updatedRegistration) => {
        try {
            // Prepare the data to update
            const updatedData = {
                _id: updatedRegistration._id,  // Include the unique ID for the update
                firstName: updatedRegistration.firstName,
                contactNumber: updatedRegistration.contactNumber,
                additionalInfo: updatedRegistration.additionalInfo  // Include any other fields if necessary
            };

            // Send the updated data to the backend
            await axios.put(`http://localhost:5000/registrations/${updatedRegistration._id}`, updatedData, { withCredentials: true });

            // Update the state with the updated registration data
            setRegistrations((prev) => prev.map((reg) => reg._id === updatedRegistration._id ? updatedRegistration : reg));
            setShowUpdateModal(false); // Close the update modal
        } catch (err) {
            console.error('Error updating registration:', err.response || err);
            alert('Failed to update the registration.');
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
            {/* Show User Email */}
            {user && user.email && (
                <div className="text-center mb-4 text-black dark:text-gray-300">
                    <strong>Email: </strong>{user.email}
                </div>
            )}

            {/* Table to display registrations */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-zinc-700">
                        <tr>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Serial No.</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Marathon</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">First Name</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Contact</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Additional Info</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Start Date</th>
                            <th className="px-4 py-2 text-black dark:text-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.length > 0 ? (
                            registrations.map((registration, index) => (
                                <tr key={registration._id} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {index + 1} {/* Display Serial No. */}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.marathonTitle || 'N/A'}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.firstName}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.contactNumber} {/* Display contact number */}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.additionalInfo
                                            ? registration.additionalInfo.length > 30
                                                ? `${registration.additionalInfo.substring(0, 30)}...`
                                                : registration.additionalInfo
                                            : 'N/A'}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.marathonStartDate
                                            ? new Date(registration.marathonStartDate).toLocaleDateString()
                                            : 'N/A'} {/* Display the start date */}
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
                                    colSpan="7"
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
            {showUpdateModal && selectedRegistration && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-md w-full shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">
                            Update Registration
                        </h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSaveUpdate(selectedRegistration);  // Handle form submission
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-black dark:text-gray-300">First Name:</label>
                                <input
                                    type="text"
                                    value={selectedRegistration.firstName}  // Bind the first name
                                    onChange={(e) => setSelectedRegistration({ ...selectedRegistration, firstName: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-black dark:text-gray-300">Contact Number:</label>
                                <input
                                    type="number"
                                    value={selectedRegistration.contactNumber}  // Bind the contact number
                                    onChange={(e) => setSelectedRegistration({ ...selectedRegistration, contactNumber: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-black dark:text-gray-300">Additional Information:</label>
                                <input
                                    type="text"
                                    value={selectedRegistration.additionalInfo}  // Bind the additional info
                                    onChange={(e) => setSelectedRegistration({ ...selectedRegistration, additionalInfo: e.target.value })}
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

            {/* Modal for confirming deletion */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-md w-full shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">
                            Confirm Deletion
                        </h3>
                        <p className="mb-6 text-black dark:text-gray-300">
                            Are you sure you want to delete this registration?
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

export default MyApply;
