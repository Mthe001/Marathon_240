// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import AuthContext from '../context/AuthContext/AuthContext';
// import { ThemeContext } from '../context/ThemeContext';

// const Navbar = () => {
//     const { user, logoutUser } = useContext(AuthContext);
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     const handleLogOut = () => {
//         logoutUser()
//             .then(() => {
//                 console.log('successfully signed out');
//             })
//             .catch(() => {
//                 console.log('error during sign out');
//             });
//     };

//     const links = (
//         <>
//             <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                     isActive
//                         ? 'text-blue-500 font-bold'
//                         : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
//                 }
//             >
//                 <li>
//                     <a>Home</a>
//                 </li>
//             </NavLink>
//             <NavLink
//                 to="add_marathon"
//                 className={({ isActive }) =>
//                     isActive
//                         ? 'text-blue-500 font-bold'
//                         : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
//                 }
//             >
//                 <li>
//                     <a>Add a Marathon</a>
//                 </li>
//             </NavLink>
//             <NavLink
//                 to="/my_posted_jobs"
//                 className={({ isActive }) =>
//                     isActive
//                         ? 'text-blue-500 font-bold'
//                         : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
//                 }
//             >
//                 <li>
//                     <a>For Marathon</a>
//                 </li>
//             </NavLink>

//             <NavLink
//                 to="/all_marathon"
//                 className={({ isActive }) =>
//                     isActive
//                         ? 'text-blue-500 font-bold'
//                         : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
//                 }
//             >
//                 <li>
//                     <a>All Marathons</a>
//                 </li>
//             </NavLink>
//         </>
//     );

//     return (
//         <div>
//             <div className="navbar bg-base-100 dark:bg-zinc-900 dark:text-gray-50">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16"
//                                 />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className={`menu menu-sm dropdown-content ${theme === 'dark' ? 'bg-zinc-900' : 'bg-base-100'} rounded-box z-[1] mt-3 w-52 p-2 shadow`}
//                         >
//                             {links}
//                         </ul>
//                     </div>
//                     <Link className="btn btn-ghost text-xl" to="/">
//                         Job-City
//                     </Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">{links}</ul>
//                 </div>
//                 <div className="navbar-end">
//                     {/* Theme Toggle Button */}
//                     <label className="swap swap-rotate">
//                         {/* Hidden checkbox controls the state */}
//                         <input
//                             type="checkbox"
//                             className="theme-controller"
//                             checked={theme === 'dark'}
//                             onChange={toggleTheme}
//                         />

//                         {/* Sun icon (Light Mode) */}
//                         <svg
//                             className="swap-off h-10 w-10 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
//                             />
//                         </svg>

//                         {/* Moon icon (Dark Mode) */}
//                         <svg
//                             className="swap-on h-10 w-10 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
//                             />
//                         </svg>
//                     </label>

//                     {user ? (
//                         <>
//                             <button onClick={handleLogOut} className="btn">
//                                 Log out
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <Link className="btn btn-outline" to="/register">
//                                 Register
//                             </Link>
//                             <Link className="btn btn-link" to="/signIn">
//                                 Sign in
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;



import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Loading state for spinner
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading behavior when the page is hard-refreshing
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds
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
            <NavLink
                to="add_marathon"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold'
                        : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                }
            >
                <li>
                    <a>Add a Marathon</a>
                </li>
            </NavLink>
            <NavLink
                to="/my_posted_jobs"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold'
                        : 'text-gray-700 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400'
                }
            >
                <li>
                    <a>For Marathon</a>
                </li>
            </NavLink>

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
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-zinc-900 dark:text-gray-50">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to="/">
                        Job-City
                    </Link>
                </div>

                {/* Search bar */}
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                </div>

                {/* Navbar Links and Theme Toggle */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end">
                    {/* Avatar and dropdown menu */}
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* Display user's photoUrl if available, otherwise use a default placeholder */}
                                    <img
                                        alt="User Avatar"
                                        src={user.photoUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                {/* Logout */}
                                <li>
                                    <a onClick={handleLogOut}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link className="btn btn-outline" to="/register">
                                Register
                            </Link>
                            <Link className="btn btn-link" to="/signIn">
                                Sign in
                            </Link>
                        </div>
                    )}

                    {/* Theme Toggle Button */}
                    <label className="swap swap-rotate ml-2">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                        />
                        {/* Sun icon (Light Mode) */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                            />
                        </svg>
                        {/* Moon icon (Dark Mode) */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
