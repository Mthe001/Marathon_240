import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'; // Import useLocation for active route detection
import { FaRunning, FaClipboardList, FaHome, FaBars } from 'react-icons/fa'; // Icons for the navigation links

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard | Marathon 240'; // Set the title to "Marathon_240"
    }, []); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
    const location = useLocation(); // Get current route

    // Function to check if a link is active
    const isActive = (path) => location.pathname === path ? "text-blue-500 font-bold" : "text-gray-700 dark:text-gray-300";

    return (
        <div className="min-h-screen mt-20 flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-gray-50">
            {/* Main Navbar */}
            <div className="bg-primary dark:bg-zinc-900 text-white shadow-lg w-full">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <Link className="text-2xl text-blue-500 font-bold">Dashboard</Link>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                            <FaBars className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Desktop Navbar */}
                    <ul className="hidden md:flex space-x-6">
                        <li><Link to="/about-us" className="text-blue-400 hover:underline">About Us</Link></li>
                        <li><Link to="/contact" className="text-blue-400 hover:underline">Contact</Link></li>
                    </ul>
                </div>
            </div>

            {/* Mobile Navbar (Hamburger Menu) */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white p-4">
                    <ul className="space-y-4">
                        <li><Link to="/about-us" className="text-blue-400 hover:underline">About Us</Link></li>
                        <li><Link to="/contact" className="text-blue-400 hover:underline">Contact</Link></li>
                    </ul>
                </div>
            )}

            {/* Dashboard Navigation Bar */}
            <div className="bg-gray-100 dark:bg-zinc-800 shadow w-full">
                <div className="container mx-auto flex items-center justify-between p-4">
                    {/* Mobile Version of Dashboard Navbar */}
                    <ul className="md:hidden flex flex-col w-full space-y-4">
                        <li>
                            <Link
                                to="/dashboard/add_marathon"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all ${isActive("/dashboard/add_marathon")}`}
                            >
                                <FaRunning className="w-5 h-5" />
                                <span>Add Marathon</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/my_apply"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all ${isActive("/dashboard/my_apply")}`}
                            >
                                <FaClipboardList className="w-5 h-5" />
                                <span>My Apply</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/my_marathon"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all ${isActive("/dashboard/my_marathon")}`}
                            >
                                <FaHome className="w-5 h-5" />
                                <span>My Marathons</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop Version of Dashboard Navbar */}
                    <ul className="hidden md:flex space-x-6 w-full justify-between">
                        <li>
                            <Link
                                to="/dashboard/add_marathon"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all ${isActive("/dashboard/add_marathon")}`}
                            >
                                <FaRunning className="w-5 h-5" />
                                <span>Add Marathon</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/my_apply"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all ${isActive("/dashboard/my_apply")}`}
                            >
                                <FaClipboardList className="w-5 h-5" />
                                <span>My Apply</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/my_marathon"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all ${isActive("/dashboard/my_marathon")}`}
                            >
                                <FaHome className="w-5 h-5" />
                                <span>My Marathons</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-base-200 p-6 dark:bg-zinc-800">
                <div className="card bg-white dark:bg-zinc-700 shadow-lg p-6 rounded-lg">
                    {/* Default Content - Visible before Outlet renders */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">Welcome to your Dashboard!</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Here you can manage your marathons, see your past applications, and add new events. Choose an option from the navigation above to get started.</p>
                    </div>

                    {/* Sections for Default Dashboard */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-100 dark:bg-zinc-600 p-4 rounded-lg shadow">
                            <h3 className="font-semibold">Recent Marathons</h3>
                            <p className="text-gray-600 dark:text-gray-200">Check out the latest marathons you've participated in or applied for.</p>
                        </div>
                        <div className="bg-green-100 dark:bg-zinc-600 p-4 rounded-lg shadow">
                            <h3 className="font-semibold">Upcoming Events</h3>
                            <p className="text-gray-600 dark:text-gray-200">View upcoming marathons and events you can join.</p>
                        </div>
                    </div>

                    {/* Child Routes */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
