import React, { useState } from 'react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the current FAQ
    };

    const faqData = [
        {
            question: "What is Marathon 240?",
            answer: "Marathon 240 is a platform where you can join virtual running events, track your progress, and connect with other runners worldwide."
        },
        {
            question: "How do I join a virtual run?",
            answer: "Simply sign up on our website, select the virtual run you’re interested in, and follow the instructions to participate."
        },
        {
            question: "Is there a registration fee?",
            answer: "Some virtual runs are free, while others may have a registration fee depending on the event and rewards offered."
        },
        {
            question: "Can I participate in a virtual run from anywhere?",
            answer: "Yes! Virtual runs are designed to be flexible, allowing you to participate from anywhere at your own pace."
        },
        {
            question: "Do I receive a medal or certificate?",
            answer: "Yes, most of our virtual runs offer medals or certificates upon completion. Details will be provided for each event."
        },
        {
            question: "How do I track my run?",
            answer: "You can track your run using any fitness app or device of your choice. Simply upload your results to the platform."
        },
    ];

    return (
        <div className="faq-container  bg-gray-100 dark:bg-zinc-900 px-6 py-10 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Frequently Asked Questions</h1>
            <div className="faq-list w-full max-w-3xl space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item bg-white dark:bg-zinc-800 shadow-md rounded-lg p-4 transition-all ${openIndex === index ? "shadow-lg" : ""
                            }`}
                    >
                        {/* Question */}
                        <div
                            className="faq-question flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFaq(index)}
                        >
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {faq.question}
                            </h2>
                            <span className="text-indigo-500 font-bold">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </div>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="faq-answer mt-3 text-gray-600 dark:text-gray-300">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
