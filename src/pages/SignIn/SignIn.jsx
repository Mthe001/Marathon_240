import React, { useContext, useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios';

const SignIn = () => {
    const { signinUser, googleSignIn, githubSignIn } = useContext(AuthContext); // Include GitHub sign-in from context
    const navigate = useNavigate(); // Initialize useNavigate hook
    const location = useLocation(); // Initialize useLocation hook

    const from = location.state?.from || '/'; // Default to '/' if no state is provided.

    useEffect(() => {
        document.title = 'Sign In - MyApp'; // Replace "MyApp" with your app name
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Sign In Data Submitted:', { email, password });

        signinUser(email, password)
            .then((result) => {
                console.log('Sign In Successful:', result.user.email);
                const user = { email: result.user.email }
                axios.post('https://job-city-server-six.vercel.app/jwt', user, { withCredentials: true })
                    .then(
                        res => {
                            console.log(res.data);
                        }
                    )
                navigate(from, { replace: true }); // Redirect after successful sign-in
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log("Google Sign-In successful", result);
                navigate(from, { replace: true }); // Redirect after successful Google sign-in
            })
            .catch(error => {
                console.error("Google Sign-In Error: ", error);
            });
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log("GitHub Sign-In successful", result);
                navigate(from, { replace: true }); // Redirect after successful GitHub sign-in
            })
            .catch(error => {
                console.error("GitHub Sign-In Error: ", error);
            });
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-700 rounded-xl shadow-lg bg-zinc-800">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-zinc-900 rounded"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                            Remember me
                        </label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none"
                >
                    Sign In
                </button>
            </form>
            <div className="my-6 text-center">
                <p className="text-sm text-gray-400 mb-4">Or sign in with</p>
                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full py-3 px-6 border border-gray-600 rounded-lg shadow-sm bg-zinc-900 hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white mb-4"
                >
                    <FcGoogle className="text-2xl mr-2" /> Sign in with Google
                </button>
                <button
                    onClick={handleGithubSignIn}
                    className="flex items-center justify-center w-full py-3 px-6 border border-gray-600 rounded-lg shadow-sm bg-zinc-900 hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
                >
                    <FaGithub className="text-2xl mr-2" /> Sign in with GitHub
                </button>
            </div>
            <p className="mt-6 text-center text-sm text-gray-400">
                Don’t have an account?
                <a href="/register" className="text-blue-500 hover:underline">Register here</a>
            </p>
        </div>
    );
};

export default SignIn;
