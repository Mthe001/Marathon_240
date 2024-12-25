import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back icon
import Swal from 'sweetalert2'; // Import SweetAlert

const UpdateMyMarathon = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [marathon, setMarathon] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        runningDistance: '',
        description: '',
        imageUrl: ''
    });
    const [initialFormData, setInitialFormData] = useState({
        title: '',
        location: '',
        runningDistance: '',
        description: '',
        imageUrl: ''
    });

    // Dynamic document title
    useEffect(() => {
        document.title = marathon ? `Update: ${marathon.title}` : 'Update Marathon';
    }, [marathon]);

    useEffect(() => {
        // Fetch the marathon details based on the ID from the URL
        axios.get(`https://job-city-server-six.vercel.app/marathons/${id}`, { withCredentials: true })
            .then((response) => {
                const data = response.data;
                setMarathon(data);
                setFormData({
                    title: data.title,
                    location: data.location,
                    runningDistance: data.runningDistance || '', // Ensure default value is set if runningDistance is missing
                    description: data.description,
                    imageUrl: data.imageUrl
                });
                // Set the initial form data for comparison later
                setInitialFormData({
                    title: data.title,
                    location: data.location,
                    runningDistance: data.runningDistance || '',
                    description: data.description,
                    imageUrl: data.imageUrl
                });
            })
            .catch((error) => {
                console.error('Error fetching marathon details:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the form data has changed compared to initial data
        if (JSON.stringify(formData) === JSON.stringify(initialFormData)) {
            // If no changes are made, show SweetAlert
            Swal.fire({
                icon: 'info',
                title: 'No Changes',
                text: 'You haven\'t made any changes to the marathon details.',
                confirmButtonText: 'Okay'
            });
        } else {
            // If changes are made, proceed with the update
            const updatedData = { ...formData };

            // Update the marathon details
            axios.put(`https://job-city-server-six.vercel.app/marathons/${id}`, updatedData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Ensure credentials (cookies) are sent with the request
            })
                .then(() => {
                    navigate('/dashboard/my_marathon'); // Redirect to the all marathons page after successful update
                })
                .catch((error) => {
                    console.error('Error updating marathon:', error.response ? error.response.data : error);
                });
        }
    };

    if (!marathon) {
        return <div><span className="loading loading-bars loading-lg"></span></div>;
    }

    return (
        <div className="p-6 w-10/12 mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
            {/* Back Button */}
            <button
                className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 mb-4"
                onClick={() => navigate(-1)} // Navigate back to the previous page
            >
                <FaArrowLeft className="mr-2" /> Back
            </button>

            <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">Update Marathon</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-2">
                    <label className="text-lg text-black dark:text-white">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-lg text-black dark:text-white">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-lg text-black dark:text-white">Running Distance:</label>
                    <select
                        name="runningDistance"
                        value={formData.runningDistance}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                        required
                    >
                        <option value="">Select Distance</option>
                        <option value="3k">3k</option>
                        <option value="10k">10k</option>
                        <option value="25k">25k</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-lg text-black dark:text-white">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                        required
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-lg text-black dark:text-white">Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                    />
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Update Marathon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMyMarathon;






