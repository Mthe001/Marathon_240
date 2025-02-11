import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    // Set document title using useEffect
    useEffect(() => {
        document.title = 'Blog - Marathon_240'; // Set document title
        // GSAP Animations for Title and Blog Posts
        gsap.fromTo(
            ".blog-title",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Animation for each blog post when it enters the viewport
        gsap.utils.toArray(".blog-post").forEach(post => {
            gsap.fromTo(
                post,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: post,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <div className="blog-container bg-gray-100 lg:mt-20 dark:bg-zinc-800 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
            <div className="container mx-auto text-center">
                {/* Blog Title */}
                <h2 className="blog-title text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Marathon Blog
                </h2>

                {/* Blog Posts Grid */}
                <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16">
                    {/* Blog Post 1 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/2421566/pexels-photo-2421566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Marathon Running"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            The Benefits of Running Long Distances
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Long-distance running has several physical and mental benefits. It helps improve cardiovascular health, strengthens muscles, and enhances mental clarity...
                        </p>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/3554625/pexels-photo-3554625.jpeg?auto=compress&cs=tinysrgb&w=500"
                            alt="Marathon Training"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Preparing for Your First Marathon
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Running your first marathon can be both exciting and overwhelming. With the right training plan and mindset, you can achieve your marathon goals...
                        </p>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/25078526/pexels-photo-25078526/free-photo-of-a-man-running-on-a-rocky-mountain-peak.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Nutrition for Marathon"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Nutrition Tips for Marathon Runners
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Fueling your body with the right nutrients is key to marathon success. Learn which foods and supplements will keep you energized during your long runs...
                        </p>
                    </div>

                    {/* Blog Post 4 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/2923872/pexels-photo-2923872.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Marathon Tips"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Tips for Marathon Success
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Running a marathon is a journey. Here are some practical tips to help you stay on track, avoid injuries, and achieve your goals on race day...
                        </p>
                    </div>

                    {/* Blog Post 5 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Marathon Recovery"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Marathon Recovery: What You Need to Know
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Recovery after a marathon is crucial. Learn how to effectively recover, minimize soreness, and get back into training...
                        </p>
                    </div>

                    {/* Blog Post 6 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Running Shoes"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Choosing the Right Running Shoes
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            The right pair of running shoes can make all the difference in your marathon training. Find out what to look for when choosing your shoes...
                        </p>
                    </div>

                    {/* Blog Post 7 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Marathon Mentality"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Building a Marathon Mentality
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Running a marathon isn't just physical; it requires mental strength. Learn how to build the mindset to help you succeed...
                        </p>
                    </div>

                    {/* Blog Post 8 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Marathon Goals"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Setting and Achieving Your Marathon Goals
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Achieving marathon success starts with setting the right goals. Discover how to set realistic, achievable goals for your race...
                        </p>
                    </div>

                    {/* Blog Post 9 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/1551051/pexels-photo-1551051.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Marathon Event"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            How to Choose the Right Marathon Event
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            With so many marathon events to choose from, it's important to pick the right one. Find out what factors to consider when choosing a race...
                        </p>
                    </div>

                    {/* Blog Post 10 */}
                    <div className="blog-post bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://images.pexels.com/photos/2168292/pexels-photo-2168292.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Marathon Gear"
                            className="w-full h-48 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Must-Have Gear for Marathon Training
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            The right gear can make your marathon training more effective and enjoyable. Check out the must-have equipment for runners...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
