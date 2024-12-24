import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import AuthContext from '../../context/AuthContext/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userPhotoUrl, setUserPhotoUrl] = useState('');
    const defaultPhotoUrl = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

    useEffect(() => {
        setUserPhotoUrl(user?.photoUrl || defaultPhotoUrl);
    }, [user]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-zinc-900 px-4">
            <div className="max-w-lg w-full bg-white dark:bg-black p-8 rounded-3xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-lg">
                {/* Back Button */}
                <button
                    className="flex items-center mb-6 text-gray-800 dark:text-white hover:underline"
                    onClick={() => navigate('/')}
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>

                {user ? (
                    <div className="text-center">
                        {/* Welcome Greeting */}
                        <h1 className="text-3xl font-semibold dark:text-white text-gray-800 mb-4">
                            Welcome Back, <span className="text-indigo-500">{user.displayName || 'User'}</span>!
                        </h1>

                        {/* User Avatar */}
                        <div className="relative group mb-6">
                            <img
                                src={userPhotoUrl}
                                alt="User Avatar"
                                className="w-40 h-40 rounded-full mx-auto border-4 border-indigo-500 shadow-lg transform transition duration-300 group-hover:scale-110"
                            />
                        </div>

                        {/* User Details */}
                        <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-2">{user.displayName || 'User'}</h2>
                        <p className="text-gray-500 dark:text-gray-300 text-lg mb-4">
                            Email: <span className="font-medium text-gray-800 dark:text-white">{user.email}</span>
                        </p>
                        {user.phoneNumber && (
                            <p className="text-gray-500 dark:text-gray-300 text-lg mb-4">
                                Phone: <span className="font-medium text-gray-800 dark:text-white">{user.phoneNumber}</span>
                            </p>
                        )}
                        <p className="text-gray-500 dark:text-gray-300 text-lg mb-4">
                            UID: <span className="font-medium text-gray-800 dark:text-white">{user.uid}</span>
                        </p>

                        {/* Update Profile Button */}
                        <Link
                            to="/settings"
                            className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
                        >
                            Update Profile
                        </Link>
                    </div>
                ) : (
                    <div className="text-center text-gray-800 dark:text-white">
                        <p className="text-2xl font-semibold mb-4">You are not logged in.</p>
                        <Link
                            to="/login"
                            className="text-lg bg-indigo-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
                        >
                            Login Now
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
