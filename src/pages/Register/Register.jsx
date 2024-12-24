import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For toggling confirm password visibility

    // Set document title using useEffect
    useEffect(() => {
        document.title = 'Registration - Collade'; // Set document title
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/;

        if (!emailRegex.test(email)) {
            Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
            return;
        }

        if (!passwordRegex.test(password)) {
            Swal.fire(
                'Weak Password',
                'Password must be at least 6 characters long, include at least one letter, one number, and one special character (@#$%^&+=!).',
                'error'
            );
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire('Password Mismatch', 'Passwords do not match!', 'error');
            return;
        }

        // Pass name and photoUrl along with email and password
        createUser(email, password, name, photoUrl)
            .then((result) => {
                console.log('User created successfully:', result.user);
                Swal.fire('Success', 'Registration successful!', 'success');
                navigate('/'); // Redirect to the home page
            })
            .catch((error) => {
                console.error('Registration error:', error.message);
                Swal.fire('Error', 'Error registering user. Please try again.', 'error');
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white">
            <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white dark:bg-zinc-800">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="photoUrl" className="block text-sm font-medium mb-1">
                            Photo URL:
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            required
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password:
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                required
                                className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 dark:text-gray-300"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium mb-1"
                        >
                            Confirm Password:
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 dark:text-gray-300"
                            >
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-6">
                    <span className="text-sm">Already have an account? </span>
                    <button
                        onClick={() => navigate('/signIn')}
                        className="text-sm text-blue-500 dark:text-blue-400 hover:underline"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
