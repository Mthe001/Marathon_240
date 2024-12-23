import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext/AuthContext';

const MarathonDetails = () => {
    // Use the data fetched by the loader
    const marathon = useLoaderData();
    const navigate = useNavigate();

    // Assume we get the logged-in user from context or other authentication methods
    const { user } = useContext(AuthContext); // Example: replace this with your actual user context
    const email = user ? user.email : ''; // Logged-in user's email
    const token = user ? user.token : ''; // User's authentication token (assuming it's in the context)

    const [registrationOpen, setRegistrationOpen] = useState(false); // To track if registration is open
    const [registrationCount, setRegistrationCount] = useState(marathon.totalRegistrations || 0);

    useEffect(() => {
        // Check if registration is open
        const currentDate = new Date();
        const startRegistrationDate = new Date(marathon.startRegistrationDate);
        const endRegistrationDate = new Date(marathon.endRegistrationDate);

        if (currentDate >= startRegistrationDate && currentDate <= endRegistrationDate) {
            setRegistrationOpen(true);
        }
    }, [marathon]);

    // Handle registration form submission
    const handleRegister = async (e) => {
        e.preventDefault();

        // Collect form data from e.target values
        const formData = {
            email: e.target.email.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            contactNumber: e.target.contactNumber.value,
            additionalInfo: e.target.additionalInfo.value,
        };
        console.log(formData);

        try {
            // Submit registration data to the API
            const response = await axios.post(
                'http://localhost:5000/register',
                {
                    marathonId: marathon._id,
                    ...formData,
                },
                {
                    withCredentials: true, // Include credentials (cookies)
                }
            );

            if (response.status === 201) { // Correct status for successful registration
                // Increment the registration count if registration is successful
                setRegistrationCount((prevCount) => prevCount + 1);

                // Show SweetAlert success
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
            console.error('Error registering:', error);
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
            <div className="marathon-info grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Other marathon details */}
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
                                value={email} // Displaying the logged-in user's email
                                readOnly
                                className="w-full p-3 mt-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Enter your email"
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
