import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; // Importing the timer component
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext/AuthContext';

const MarathonDetails = () => {
    const marathon = useLoaderData();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const email = user ? user.email : '';

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
            marathonTitle: marathon.title,
            marathonStartDate: marathon.marathonStartDate,
        };

        try {
            const response = await axios.post('http://localhost:5000/register', {
                marathonId: marathon._id,
                ...formData,
            }, {
                withCredentials: true,
            });

            if (response.status === 201) {

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


    const getTimeUntilStart = () => {
        const now = new Date();
        const marathonStartDate = new Date(marathon.marathonStartDate);
        const remainingTime = (marathonStartDate - now) / 1000;
        return remainingTime > 0 ? remainingTime : 0;
    };

    // Renderer for countdown time
    const renderTime = ({ remainingTime }) => {
        if (remainingTime <= 0) {
            return <div className="text-lg font-semibold">Marathon Started!</div>;
        }

        const days = Math.floor(remainingTime / (24 * 60 * 60));
        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        const seconds = Math.floor(remainingTime % 60);

        return (
            <div className="flex flex-col items-center">
                <div className="text-lg font-semibold dark:text-white">
                    {days}<span className='dark:text-green-500 text-orange-600'>d</span> {hours}<span className='dark:text-yellow-400 text-green-400'>h</span> {minutes}<span className='dark:text-orange-500 text-purple-600'>m</span> {seconds}<span className='dark:text-red-500 text-blue-600'>s</span>
                </div>
                <p className="text-sm dark:text-gray-200 dark:font-semibold">Until Marathon Starts</p>
            </div>
        );
    };


    return (
        <div className="marathon-details p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-2xl w-10/12  md:w-9/12 lg:w-9/12 mx-auto mt-8 my-24">
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
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

            {/* Countdown Timer */}
            <div className="flex justify-center mb-6">
                <CountdownCircleTimer
                    isPlaying
                    duration={getTimeUntilStart()} // Remaining time in seconds
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7 * 24 * 60 * 60, 2 * 24 * 60 * 60, 1 * 24 * 60 * 60, 0]}
                    size={180}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>


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
                <div>
                    <h3 className="text-xl font-semibold text-black dark:text-gray-300">
                        Registration Start Date:
                    </h3>
                    <p className="text-black dark:text-gray-400">
                        {new Date(marathon.startRegistrationDate).toLocaleDateString()}
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-black dark:text-gray-300">
                        Registration End Date:
                    </h3>
                    <p className="text-black dark:text-gray-400">
                        {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                    </p>
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
