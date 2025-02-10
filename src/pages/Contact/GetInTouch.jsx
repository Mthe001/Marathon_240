import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const GetInTouch = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

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
            Swal.fire({
                title: 'Message Sent!',
                text: 'Your message has been sent successfully!',
                icon: 'success',
                confirmButtonText: 'Ok',
                background: '#f4f7fc',
                color: '#333',
                showConfirmButton: true,
                timer: 3000
            });

            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 px-6 py-10 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
                {/* Back Button */}
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline bg-transparent border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                        <IoArrowBackCircleOutline className="mr-2 text-lg" /> Back
                    </button>
                </div>

                {/* Title and Description */}
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    Get In <span className='text-purple-500'>Touch</span>
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    Have questions? We'd love to hear from you! Fill out the form below or reach out to us via phone or email.
                </p>

                {/* Contact Form & Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
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

                    {/* Contact Details */}
                    <div className="bg-gray-50 dark:bg-zinc-700 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact <span className='text-violet-400'>Details</span></h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Reach us directly via the following methods.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-indigo-500" />
                                <span className="text-gray-700 dark:text-gray-300">+1 234 567 890</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-indigo-500" />
                                <span className="text-gray-700 dark:text-gray-300">contact@yourcompany.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-indigo-500" />
                                <span className="text-gray-700 dark:text-gray-300">123 Business St, New York, USA</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-6 flex gap-4">
                            <a href="#" className="text-blue-600 dark:text-blue-400"><FaFacebookF /></a>
                            <a href="#" className="text-blue-400 dark:text-blue-300"><FaTwitter /></a>
                            <a href="#" className="text-blue-700 dark:text-blue-500"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
