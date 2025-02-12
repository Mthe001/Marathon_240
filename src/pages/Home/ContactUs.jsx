import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarathonHighlights = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div
            ref={sectionRef}
            className="border-2 border-gray-600 text-white py-16 px-8 rounded-lg shadow-xl my-10 max-w-6xl mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Section: Marathon Highlights */}
                <div ref={textRef} className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Marathon Highlights</h2>
                    <p className="text-center text-gray-600 mb-6">
                        Experience the best moments from our latest marathon events!
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>Top performances and race records</li>
                        <li>Inspiring stories from participants</li>
                        <li>Upcoming events and special announcements</li>
                    </ul>
                </div>

                {/* Right Section: Highlights Image */}
                <div ref={imageRef} className="relative">
                    <img
                        src="https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1000"
                        alt="Marathon Highlights"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default MarathonHighlights;