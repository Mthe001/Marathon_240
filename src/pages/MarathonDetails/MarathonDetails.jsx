import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext/AuthContext';

const MarathonDetails = () => {
    const marathon = useLoaderData(); // Marathon data fetched by the loader
    const navigate = useNavigate();

    const { user } = useContext(AuthContext); // Logged-in user context
    const email = user ? user.email : ''; // Get the user's email
    const token = user ? user.token : ''; // User's token (if needed)

    const [registrationOpen, setRegistrationOpen] = useState(false);
    const [registrationCount, setRegistrationCount] = useState(marathon.totalRegistrationCount || 0);

    useEffect(() => {
        const currentDate = new Date();
        const startRegistrationDate = new Date(marathon.startRegistrationDate);
        const endRegistrationDate = new Date(marathon.endRegistrationDate);

        if (currentDate >= startRegistrationDate && currentDate <= endRegistrationDate) {
            setRegistrationOpen(true);
        }

        // Set the document title to "Marathon Details"
        document.title = marathon.title ? `${marathon.title} - Details` : 'Marathon Details';
    }, [marathon]);

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            contactNumber: e.target.contactNumber.value,
            additionalInfo: e.target.additionalInfo.value,
            marathonTitle: marathon.title, // Adding marathon title to form data
            marathonStartDate: marathon.marathonStartDate, // Adding marathon start date to form data
        };

        try {
            const response = await axios.post('http://localhost:5000/register', {
                marathonId: marathon._id,
                ...formData,
            }, {
                withCredentials: true,
            });

            if (response.status === 201) {
                // Fetch the updated registration count from the server
                const updatedMarathon = await axios.get(`http://localhost:5000/marathons/${marathon._id}`);
                setRegistrationCount(updatedMarathon.data.totalRegistrationCount);

                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                navigate('/all_marathon');
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Registration failed. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error during registration:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Registration failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="marathon-details p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-2xl max-w-4xl mx-auto mt-8 my-24">
            <div className="mb-4">
                <button
                    onClick={() => navigate(-1)} // Navigate back to the previous page
                    className="text-black dark:text-gray-200 hover:text-blue-500 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back
                </button>
            </div>

            {/* Header */}
            <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-gray-200">
                {marathon.title || 'Marathon Details'}
            </h2>

            {/* Marathon Image */}
            {marathon.imageUrl && (
                <img
                    src={marathon.imageUrl}
                    alt={marathon.title}
                    className="w-full rounded-lg shadow-lg mb-6"
                />
            )}

            {/* Marathon Information */}
            <div className="marathon-info grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold text-black dark:text-gray-300">
                        Marathon Start Date:
                    </h3>
                    <p className="text-black dark:text-gray-400">
                        {new Date(marathon.marathonStartDate).toLocaleDateString()}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-black dark:text-gray-300">
                        Total Registrations:
                    </h3>
                    <p className="text-black dark:text-gray-400">{registrationCount}</p>
                </div>
            </div>

            {/* Register Button */}
            {registrationOpen && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => document.getElementById('registration-form').scrollIntoView()}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
                    >
                        Register Now
                    </button>
                </div>
            )}

            {/* Registration Form */}
            {registrationOpen && (
                <div className="mt-10 flex justify-center">
                    <form
                        id="registration-form"
                        onSubmit={handleRegister}
                        className="w-full max-w-md space-y-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg"
                    >
                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                readOnly
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Marathon Title */}
                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">Marathon Title:</label>
                            <input
                                type="text"
                                name="marathonTitle"
                                value={marathon.title}
                                readOnly
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Marathon Title"
                                required
                            />
                        </div>

                        {/* Marathon Start Date */}
                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">Marathon Start Date:</label>
                            <input
                                type="text"
                                name="marathonStartDate"
                                value={new Date(marathon.marathonStartDate).toLocaleDateString()}
                                readOnly
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Start Date"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">Contact Number:</label>
                            <input
                                type="text"
                                name="contactNumber"
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Enter your contact number"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold text-black dark:text-gray-300">Additional Info:</label>
                            <textarea
                                name="additionalInfo"
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Enter additional information (optional)"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
                            >
                                Submit Registration
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MarathonDetails;
