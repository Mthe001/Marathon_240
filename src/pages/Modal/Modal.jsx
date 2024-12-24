// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, title, children, onSubmit }) => {
    if (!isOpen) return null; // If the modal is not open, don't render it

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <form onSubmit={onSubmit}>
                    {children} {/* The form fields passed as children */}
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
