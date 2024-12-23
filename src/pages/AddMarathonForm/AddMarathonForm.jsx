import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';
import Swal from 'sweetalert2'; // Import SweetAlert2
import useAuth from '../../hooks/useAuth'; // Import useAuth hook
import axios from 'axios'; // Import axios

const AddMarathonForm = () => {
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const { user } = useAuth();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
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

        // Send the marathon data to the server using axios
        try {
            const response = await axios.post('http://localhost:5000/marathons', marathonDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // To include cookies in requests
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
        <div className="add-marathon p-8 bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl mx-auto mt-8 my-24 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-gray-200 transition-all duration-300">
                Create Marathon Event
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* User Email (Read-only) */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">Your Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user?.email || ''}
                        readOnly
                        className="input input-bordered w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 border-gray-400 dark:border-gray-600 shadow-md focus:outline-none"
                    />
                </div>

                {/* Marathon Title */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">Marathon Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    />
                </div>

                {/* Start Registration Date */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">Start Registration Date:</label>
                    <DatePicker
                        selected={startRegDate}
                        onChange={(date) => setStartRegDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select start date"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    />
                </div>

                {/* End Registration Date */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">End Registration Date:</label>
                    <DatePicker
                        selected={endRegDate}
                        onChange={(date) => setEndRegDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select end date"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    />
                </div>

                {/* Marathon Start Date */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">Marathon Start Date:</label>
                    <DatePicker
                        selected={marathonStartDate}
                        onChange={(date) => setMarathonStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select marathon start date"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    />
                </div>

                {/* Location */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">Location:</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    />
                </div>

                {/* Running Distance */}
                <div className="form-control col-span-1">
                    <label className="label font-semibold text-black dark:text-gray-300">Running Distance:</label>
                    <select
                        name="runningDistance"
                        className="select select-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    >
                        <option value="">Select Distance</option>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-control col-span-2">
                    <label className="label font-semibold text-black dark:text-gray-300">Description:</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        required
                    ></textarea>
                </div>

                {/* Marathon Image URL */}
                <div className="form-control col-span-2">
                    <label className="label font-semibold text-black dark:text-gray-300">Marathon Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        className="input input-bordered w-full border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="btn btn-success w-full mt-6 text-white bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500"
                    >
                        Create Marathon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathonForm;
