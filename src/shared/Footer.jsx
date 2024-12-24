import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-900 text-base-content dark:text-gray-50">
            <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Logo and About Section */}
                    <aside className="flex flex-col items-center lg:items-start">
                        <img
                            src="https://i.ibb.co/xhCd4Tb/Screenshot-2024-12-22-114012-removebg-preview.png"
                            alt="Marathon Logo"
                            className="w-32 mb-4"
                        />
                        <p className="text-center lg:text-left text-gray-600 dark:text-gray-300">
                            Marathon World Ltd.
                            <br />
                            Inspiring runners since 2005
                        </p>
                    </aside>

                    {/* Events Section */}
                    <nav>
                        <h6 className="footer-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Events
                        </h6>
                        <a href="#upcomging_marathon" className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300">
                            Upcoming marathons
                        </a>
                        <Link
                            to="/virtual-runs"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Virtual Runs
                        </Link>
                        <Link
                            to="/charity_events"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Charity Events
                        </Link>
                        <Link
                            to="/race-results"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Race Results
                        </Link>
                    </nav>

                    {/* Resources Section */}
                    <nav>
                        <h6 className="footer-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Resources
                        </h6>
                        <Link
                            to="/training-tips"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Training Tips
                        </Link>
                        <Link
                            to="/nutrition-guides"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Nutrition Guides
                        </Link>
                        <Link
                            to="/gear-recommendations"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Gear Recommendations
                        </Link>
                        <Link
                            to="/blog"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Blog
                        </Link>
                    </nav>

                    {/* Contact Section */}
                    <nav>
                        <h6 className="footer-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Contact
                        </h6>
                        <Link
                            to="/about-us"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            to="/volunteer"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            Volunteer
                        </Link>
                        <Link
                            to="/faqs"
                            className="block link-hover text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                        >
                            FAQs
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Divider and Copyright Section */}
            <hr className="border-base-300 dark:border-zinc-700" />
            <div className="text-center py-4">
                <p className="text-gray-500 dark:text-gray-300">
                    © {new Date().getFullYear()} Marathon World Ltd. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
