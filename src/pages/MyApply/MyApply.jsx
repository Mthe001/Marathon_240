import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext/AuthContext';

const MyApply = () => {
    const { user } = useContext(AuthContext);
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRegistrations, setFilteredRegistrations] = useState([]);

    useEffect(() => {
        document.title = 'My Marathon Registrations';

        const fetchRegistrations = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/my-registrations', {
                    withCredentials: true,
                });
                setRegistrations(response.data);
                setFilteredRegistrations(response.data);
                setLoading(false);
            } catch {
                setError('You are not registered for any marathons.');
                setLoading(false);
            }
        };


        if (user) {
            fetchRegistrations();
        } else {
            setError('You need to be logged in to see your registrations.');
            setLoading(false);
        }
    }, [user]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (searchTerm.trim() === '') {
            setFilteredRegistrations(registrations);
        } else {
            const filtered = registrations.filter((reg) =>
                reg.marathonTitle.toLowerCase().includes(searchTerm)
            );
            setFilteredRegistrations(filtered);
        }
    };

    const handleUpdate = (registration) => {
        setSelectedRegistration({ ...registration });
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
            setFilteredRegistrations((prev) => prev.filter((reg) => reg._id !== deleteId));
            setShowDeleteModal(false);
        } catch {
            alert('Failed to delete the registration.');
        }
    };

    const handleSaveUpdate = async (updatedRegistration) => {
        try {
            const updatedData = {
                _id: updatedRegistration._id,
                firstName: updatedRegistration.firstName,
                contactNumber: updatedRegistration.contactNumber,
                additionalInfo: updatedRegistration.additionalInfo,
            };

            await axios.put(`http://localhost:5000/registrations/${updatedRegistration._id}`, updatedData, {
                withCredentials: true,
            });

            setRegistrations((prev) =>
                prev.map((reg) => (reg._id === updatedRegistration._id ? updatedRegistration : reg))
            );
            setFilteredRegistrations((prev) =>
                prev.map((reg) => (reg._id === updatedRegistration._id ? updatedRegistration : reg))
            );
            setShowUpdateModal(false);
        } catch {
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
        <div className="p-4 sm:p-8  bg-white dark:bg-zinc-800 rounded-lg shadow-2xl w-11/12 mx-auto mt-8 my-24">
            <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-gray-200">
                My Marathon Registrations
            </h2>
            {user && user.email && (
                <div className="text-center mb-4 text-black dark:text-gray-300">
                    <strong>Email: </strong>{user.email}
                </div>
            )}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by Marathon Title"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                />
            </div>

            {/* Card Layout for Registrations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {filteredRegistrations.length > 0 ? (
                    filteredRegistrations.map((registration) => (
                        <div key={registration._id} className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-lg">
                            <h3 className="text-lg font-semibold text-black dark:text-gray-200">
                                {registration.marathonTitle || 'N/A'}
                            </h3>
                            <p className="text-sm text-black dark:text-gray-300">
                                <strong>Name: </strong>{registration.firstName}
                            </p>
                            <p className="text-sm text-black dark:text-gray-300">
                                <strong>Contact: </strong>{registration.contactNumber}
                            </p>
                            <p className="text-sm text-black dark:text-gray-300">
                                <strong>Additional Info: </strong>{registration.additionalInfo || 'N/A'}
                            </p>
                            <p className="text-sm text-black dark:text-gray-300">
                                <strong>Start Date: </strong>{registration.marathonStartDate
                                    ? new Date(registration.marathonStartDate).toLocaleDateString()
                                    : 'N/A'}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-300">
                        No marathon registrations found to display.
                    </p>
                )}
            </div>

            {/* Table Layout for Larger Screens */}
            {searchTerm.trim() !== '' && (
                <div className="overflow-x-auto mt-8">
                    <table className="table-auto min-w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
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
                            {filteredRegistrations.map((registration, index) => (
                                <tr key={registration._id} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{index + 1}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{registration.marathonTitle || 'N/A'}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{registration.firstName}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">{registration.contactNumber}</td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.additionalInfo || 'N/A'}
                                    </td>
                                    <td className="px-4 py-2 text-black dark:text-gray-300">
                                        {registration.marathonStartDate ? new Date(registration.marathonStartDate).toLocaleDateString() : 'N/A'}
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
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Update Modal */}
            {showUpdateModal && selectedRegistration && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4 text-center text-black dark:text-gray-200">Update Registration</h3>
                        <form onSubmit={(e) => { e.preventDefault(); handleSaveUpdate(selectedRegistration); }}>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200"
                                value={selectedRegistration.firstName}
                                onChange={(e) => setSelectedRegistration({ ...selectedRegistration, firstName: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200 mt-4"
                                value={selectedRegistration.contactNumber}
                                onChange={(e) => setSelectedRegistration({ ...selectedRegistration, contactNumber: e.target.value })}
                                placeholder="Contact Number"
                                required
                            />
                            <textarea
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-zinc-700 dark:text-gray-200 mt-4"
                                value={selectedRegistration.additionalInfo || ''}
                                onChange={(e) => setSelectedRegistration({ ...selectedRegistration, additionalInfo: e.target.value })}
                                placeholder="Additional Info"
                            />
                            <button
                                type="submit"
                                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Save Update
                            </button>
                        </form>
                        <button
                            className="mt-4 w-full px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                            onClick={() => setShowUpdateModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4 text-center text-black dark:text-gray-200">Confirm Deletion</h3>
                        <p className="text-black dark:text-gray-300">
                            Are you sure you want to delete this registration?
                        </p>
                        <div className="mt-4 flex justify-around">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                onClick={confirmDelete}
                            >
                                Yes, Delete
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyApply;
