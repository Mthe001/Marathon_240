import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';  // Import theme icons from react-icons
import { MdOutlineLogin } from 'react-icons/md';
import { SiReacthookform } from 'react-icons/si';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation(); // Get the current route

    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleLogOut = () => {
        logoutUser()
            .then(() => {
                console.log('Successfully signed out');
            })
            .catch(() => {
                console.log('Error during sign out');
            });
    };

    const defaultPhotoUrl = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    const userPhotoUrl = user?.photoUrl || defaultPhotoUrl;

    // Check if the current route is inside the Dashboard or its child routes
    const isDashboardPage = location.pathname.startsWith('/dashboard');


    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold'
                        : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                }
            >
                <li>
                    <a>Home</a>
                </li>
            </NavLink>

            {/* Show Dashboard only when the user is logged in */}
            {user && (
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 font-bold'
                            : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                    }
                >
                    <li>
                        <a>Dashboard</a>
                    </li>
                </NavLink>
            )}

            <NavLink
                to="/all_marathon"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold'
                        : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                }
            >
                <li>
                    <a>All Marathons</a>
                </li>
            </NavLink>

            {/* Show Contact and Blog only when the user is logged in */}
            {user && (
                <>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-500 font-bold'
                                : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                        }
                    >
                        <li>
                            <a>Contact</a>
                        </li>
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-500 font-bold'
                                : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                        }
                    >
                        <li>
                            <a>Blog</a>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/nutrition-guides"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-500 font-bold'
                                : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                        }
                    >
                        <li>
                            <a>Nutrion Guide</a>
                        </li>
                    </NavLink>
                </>
            )}
        </>
    );






    return (
        <div className="w-full fixed top-0 left-0 z-50 navbar border-b-2 rounded-lg bg-base-100 dark:bg-zinc-900 dark:text-gray-50 shadow-md">
            <div className="w-[95%] mx-auto navbar bg-base-100 dark:bg-zinc-900 dark:text-gray-50">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to="/">
                        <img src="https://i.ibb.co/xhCd4Tb/Screenshot-2024-12-22-114012-removebg-preview.png" alt="logo" className='w-20' />
                    </Link>
                </div>

                {/* Navbar Links without Search Bar */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* Avatar and Theme Toggle */}
                <div className="navbar-end flex items-center gap-4">
                    {/* Avatar and dropdown menu */}
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src={userPhotoUrl}  // Use the determined userPhotoUrl
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-zinc-800"
                            >
                                <li>
                                    <Link className="justify-between btn btn-ghost dark:text-stone-400" to="/profile">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <Link className="justify-between btn btn-ghost dark:text-stone-300" to="/settings">
                                    Settings
                                    <span className='badge'>Hot</span>
                                </Link>
                                <li>
                                    <a className='justify-between btn btn-ghost dark:text-zinc-300' onClick={handleLogOut}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link className="btn btn-link  dark:text-green-300 dark:font-bold text-xl" to="/register">
                                <SiReacthookform />
                            </Link>
                            <Link className="btn btn-link dark:text-red-500 text-xl" to="/signIn">
                                <MdOutlineLogin />
                            </Link>
                        </div>
                    )}

                    {/* Theme Toggle Button with React Icons */}
                    <button
                        className="swap swap-rotate ml-2"
                        onClick={toggleTheme}
                    >
                        {/* If the theme is dark, show the sun icon, otherwise show the moon icon */}
                        {theme === 'dark' ? (
                            <FaSun className="h-6 w-6 text-yellow-500" />
                        ) : (
                            <FaMoon className="h-6 w-6 text-gray-800" />
                        )}
                    </button>
                </div>

                {/* Hamburger menu for mobile/tablet view */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn btn-ghost">
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-64 h-full bg-base-100 dark:bg-zinc-800 p-4 z-10">
                    <ul className="menu menu-vertical p-2 space-y-2">
                        {links}

                        {/* Theme Toggle Button inside the dropdown */}
                        <div className="mt-4">
                            <button
                                className="swap swap-rotate ml-2"
                                onClick={toggleTheme}
                            >
                                {/* If the theme is dark, show the sun icon, otherwise show the moon icon */}
                                {theme === 'dark' ? (
                                    <FaSun className="h-6 w-6 text-yellow-500" />
                                ) : (
                                    <FaMoon className="h-6 w-6 text-gray-800" />
                                )}
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
