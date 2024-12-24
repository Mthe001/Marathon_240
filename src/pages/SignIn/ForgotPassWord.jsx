import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2'; // For showing alerts

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // For redirection after reset email is sent

    // Accessing AuthContext from AuthProvider
    const { forgotPassword } = useContext(AuthContext);

    // Handle form submission to send password reset email
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        forgotPassword(email)
            .then(() => {
                Swal.fire('Success', 'Password reset email sent!', 'success');
                navigate('/signin'); // Redirect to the sign-in page after sending reset email
            })
            .catch((error) => {
                console.error('Error sending password reset email:', error);
                Swal.fire('Error', error.message, 'error');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-700 rounded-xl shadow-lg bg-zinc-800">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Forgot Password</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Enter your Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Handle email change
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-6 ${loading ? 'bg-gray-600' : 'bg-blue-600'} text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none`}
                >
                    {loading ? 'Sending Reset Email...' : 'Send Reset Email'}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-400">
                Remember your password?
                <a href="/signin" className="text-blue-500 hover:underline">Sign In here</a>
            </p>
        </div>
    );
};

export default ForgotPassword;
