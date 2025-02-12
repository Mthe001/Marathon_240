import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from '../../shared/Navbar'; // Import Navbar component
import Footer from '../../shared/Footer'; // Import Footer component
import { BiError, BiErrorCircle } from 'react-icons/bi';

const ErrorPage = () => {
    // Set document title using useEffect
    useEffect(() => {
        document.title = 'Error - Marathon_240'; // Set document title
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gradient-to-r dark:bg-zinc-900 text-white">
                <div className="text-center max-w-lg p-8 rounded-lg shadow-lg bg-zinc-800">
                    <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
                    <p className="text-xl mb-6">
                        Something went wrong. We can't seem to find the page you're looking for.
                    </p>

                    <img
                        src="https://i.ibb.co.com/whg3bZrP/Screenshot-2025-02-12-175817.png" 
                        alt="404"
                        className="mx-auto rounded-xl mb-6"
                        width="300"
                    />
                    
                    <Link
                        to="/"
                        className="bg-blue-600 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Go Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;
