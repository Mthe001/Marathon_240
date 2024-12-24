import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { IoArrowBackCircleOutline } from 'react-icons/io5'; // Import an icon from react-icons

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = { name: '', email: '', message: '' };
        let isValid = true;

        // Validate Name
        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate Message
        if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Fake message sent successfully alert using SweetAlert2
            Swal.fire({
                title: 'Message Sent!',
                text: 'Your message has been sent successfully!',
                icon: 'success',
                confirmButtonText: 'Ok',
                background: '#f4f7fc', // Light background
                color: '#333', // Dark text color for better visibility
                showConfirmButton: true,
                timer: 3000 // Optional, automatically closes after 3 seconds
            });

            // Reset form data after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <div className="get-in-touch-container min-h-screen bg-gray-100 dark:bg-zinc-900 px-6 py-10 flex items-center justify-center">
            <div className="card w-full max-w-4xl bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-8">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/')} // Navigate to the previous page
                        className="btn btn-outline bg-transparent border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                        <IoArrowBackCircleOutline className="mr-2 text-lg" /> Back
                    </button>
                </div>

                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    Get In Touch
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={`input input-bordered w-full bg-gray-100 dark:bg-zinc-900 dark:text-white ${errors.name ? 'input-error' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">Your Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`input input-bordered w-full bg-gray-100 dark:bg-zinc-900 dark:text-white ${errors.email ? 'input-error' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Message Field */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">Your Message</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            className={`textarea textarea-bordered w-full bg-gray-100 dark:bg-zinc-900 dark:text-white h-32 ${errors.message ? 'input-error' : ''}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary w-full bg-indigo-500 hover:bg-indigo-600 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;
