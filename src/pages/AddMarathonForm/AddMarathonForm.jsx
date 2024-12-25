import React, { useState, useRef, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation hook
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';
import Swal from 'sweetalert2'; // Import SweetAlert2
// Import useAuth hook
import axios from 'axios'; // Import axios
import AuthContext from '../../context/AuthContext/AuthContext';

const AddMarathonForm = () => {
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const { user } = useContext(AuthContext);
    const formRef = useRef(null);
    const location = useLocation(); // Get the current location (URL)

    // Set the document title based on the route
    useEffect(() => {
        if (location.pathname === '/add_marathon') {
            document.title = 'Create Marathon - Marathon Management'; // Title for the "Add Marathon" route
        } else if (location.pathname === '/other-route') {
            document.title = 'Other Page - Marathon Management'; // Change for other routes
        } else {
            document.title = 'Marathon Management'; // Default title
        }
    }, [location.pathname]); // Dependency array ensures this effect runs whenever the route changes

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const location = formData.get('location');
        const runningDistance = formData.get('runningDistance');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');

        if (
            !title ||
            !location ||
            !runningDistance ||
            !description ||
            !imageUrl ||
            !startRegDate ||
            !endRegDate ||
            !marathonStartDate
        ) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all required fields!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        const marathonDetails = {
            title,
            startRegistrationDate: startRegDate,
            endRegistrationDate: endRegDate,
            marathonStartDate: marathonStartDate,
            location,
            runningDistance,
            description,
            imageUrl,
            createdAt: new Date(),
            totalRegistrationCount: 0,
            createdBy: user.email, // Attach user's email for reference
        };

        try {
            const response = await axios.post('https://job-city-server-six.vercel.app/marathons', marathonDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (response.status === 201) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Marathon created successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    formRef.current.reset();
                    setStartRegDate(null);
                    setEndRegDate(null);
                    setMarathonStartDate(null);
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: response.data.message || 'Failed to create marathon event',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while submitting the form.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="add-marathon p-8 w-11/12 bg-white dark:bg-zinc-900 rounded-lg shadow-2xl max-w-4xl mx-auto mt-8 my-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black dark:text-gray-200">
                Create Marathon Event
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* User Email */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Your Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user?.email || ''}
                        readOnly
                        className="input input-bordered w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 border-gray-400 dark:border-gray-600 shadow-md"
                    />
                </div>

                {/* Marathon Title */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Marathon Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    />
                </div>

                {/* Start Registration Date */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Start Registration Date:</label>
                    <DatePicker
                        selected={startRegDate}
                        onChange={(date) => setStartRegDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select start date"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    />
                </div>

                {/* End Registration Date */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">End Registration Date:</label>
                    <DatePicker
                        selected={endRegDate}
                        onChange={(date) => setEndRegDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select end date"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    />
                </div>

                {/* Marathon Start Date */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Marathon Start Date:</label>
                    <DatePicker
                        selected={marathonStartDate}
                        onChange={(date) => setMarathonStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select marathon start date"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    />
                </div>

                {/* Location */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Location:</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    />
                </div>

                {/* Running Distance */}
                <div className="form-control">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Running Distance:</label>
                    <select
                        name="runningDistance"
                        className="select select-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    >
                        <option value="">Select Distance</option>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-control sm:col-span-2">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Description:</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        required
                    ></textarea>
                </div>

                {/* Marathon Image URL */}
                <div className="form-control sm:col-span-2">
                    <label className="label font-semibold text-sm sm:text-base text-black dark:text-gray-300">Marathon Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                    <button
                        type="submit"
                        className="btn w-full bg-green-500 hover:bg-green-600 text-white shadow-md"
                    >
                        Create Marathon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathonForm;
