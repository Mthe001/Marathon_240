import React from 'react';

const AboutUs = () => {
    return (
        <div className=" bg-gray-100 dark:bg-zinc-900 px-6 py-10 flex flex-col items-center">
            <div className="card w-full max-w-7xl bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-8">
                {/* Title Section */}
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    About Us
                </h1>

                {/* Bento Grid Layout */}
                <section className="bento-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    {/* Intro Section - Full Width */}
                    <div className="intro bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-6 col-span-1 sm:col-span-2 lg:col-span-4">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Who We Are</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Welcome to <strong>Marathon 240</strong>, the ultimate platform for virtual runners and fitness enthusiasts. Our mission is to bring people together from all corners of the world to challenge themselves through virtual runs. We provide an inclusive and exciting community where anyone can participate, track their progress, and achieve their fitness goals.
                        </p>
                    </div>

                    {/* Mission Section - 2 Columns */}
                    <div className="mission bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Our mission is to make fitness accessible to all, regardless of location, by organizing virtual events. We aim to foster a supportive community where runners of all skill levels can come together to improve and stay motivated.
                        </p>
                    </div>

                    {/* Vision Section - 2 Columns */}
                    <div className="vision bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Vision</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            We envision a world where fitness is no longer confined to physical boundaries, but becomes an inclusive and empowering experience for everyone, everywhere. Our goal is to inspire a global movement of virtual runners pushing their limits for a healthy and active life.
                        </p>
                    </div>

                    {/* Team Section - 2 Cards */}
                    <div className="team bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Team</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="team-member text-center">
                                <img
                                    src="https://images.pexels.com/photos/19424722/pexels-photo-19424722/free-photo-of-black-man-wearing-a-jacket-and-turtleneck-fashion.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Team Member"
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-gray-800 dark:text-white">John Doe</h3>
                                <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
                            </div>
                            <div className="team-member text-center">
                                <img
                                    src="https://images.pexels.com/photos/17657259/pexels-photo-17657259/free-photo-of-insta-mhrb_zhb.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Team Member"
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-gray-800 dark:text-white">Jane Smith</h3>
                                <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section - Full Width */}
                    <div className="contact bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-6 col-span-1 sm:col-span-2 lg:col-span-4">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Have questions or suggestions? Feel free to reach out to us! We’d love to hear from you.
                        </p>
                        <ul className="list-none space-y-2 mt-4">
                            <li className="text-gray-600 dark:text-gray-300">Email: <a href="mailto:info@marathon240.com" className="text-indigo-600 dark:text-indigo-400">info@marathon240.com</a></li>
                            <li className="text-gray-600 dark:text-gray-300">Phone: +123-456-7890</li>
                            <li className="text-gray-600 dark:text-gray-300">Address: 123 Fitness St, Health City, USA</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
