// import React, { useContext, useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
// import AuthContext from '../../context/AuthContext/AuthContext';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // For user-friendly alerts

// const SignIn = () => {
//     const { signinUser, googleSignIn, forgotPassword } = useContext(AuthContext); // Include forgotPassword from context
//     const navigate = useNavigate(); // Initialize useNavigate hook
//     const location = useLocation(); // Initialize useLocation hook
//     const [resetEmail, setResetEmail] = useState('');

//     // If there is a state from the previous page (e.g., an attempt to access a protected route), we will redirect there after login.
//     const from = location.state?.from || '/'; // Default to '/' if no state is provided.

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         console.log('Sign In Data Submitted:', { email, password });

//         signinUser(email, password)
//             .then((result) => {
//                 console.log('Sign In Successful:', result.user.email);
//                 const user = { email: result.user.email }
//                 axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
//                     .then(
//                         res => {
//                             console.log(res.data);
//                         }
//                     )
//                 navigate(from, { replace: true }); // Redirect after successful sign-in
//             })
//             .catch((error) => {
//                 console.error('Error signing in:', error);
//             });
//     };

//     const handleGoogleSignIn = () => {
//         googleSignIn()
//             .then(result => {
//                 console.log("Google Sign-In successful", result);
//                 navigate(from, { replace: true }); // Redirect after successful Google sign-in
//             })
//             .catch(error => {
//                 console.error("Google Sign-In Error: ", error);
//                 // Handle the error (e.g., show an error message to the user)
//             });
//     };

//     // Forgot password function
//     const handleForgotPassword = () => {
//         if (!resetEmail) {
//             Swal.fire('Error', 'Please enter your email address to reset your password.', 'error');
//             return;
//         }

//         forgotPassword(resetEmail)
//             .then((message) => {
//                 Swal.fire('Success', message, 'success');
//             })
//             .catch((error) => {
//                 Swal.fire('Error', error.message, 'error');
//             });
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 border border-gray-700 rounded-xl shadow-lg bg-zinc-800">
//             <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign In</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
//                         placeholder="Enter your email"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         required
//                         className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
//                         placeholder="Enter your password"
//                     />
//                 </div>
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                         <input
//                             id="remember"
//                             name="remember"
//                             type="checkbox"
//                             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-zinc-900 rounded"
//                         />
//                         <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
//                             Remember me
//                         </label>
//                     </div>
//                     <button
//                         type="button"
//                         onClick={handleForgotPassword} // Trigger forgot password on button click
//                         className="text-sm text-blue-500 hover:underline"
//                     >
//                         Forgot Password?
//                     </button>
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-3 px-6 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none"
//                 >
//                     Sign In
//                 </button>
//             </form>
//             <div className="my-6 text-center">
//                 <p className="text-sm text-gray-400 mb-4">Or sign in with</p>
//                 <button
//                     onClick={handleGoogleSignIn}
//                     className="flex items-center justify-center w-full py-3 px-6 border border-gray-600 rounded-lg shadow-sm bg-zinc-900 hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
//                 >
//                     <FcGoogle className="text-2xl mr-2" /> Sign in with Google
//                 </button>
//             </div>
//             <p className="mt-6 text-center text-sm text-gray-400">
//                 Don’t have an account?
//                 <a href="/register" className="text-blue-500 hover:underline">Register here</a>
//             </p>

//             {/* Forgot Password Modal */}
//             <div className="mt-4">
//                 <input
//                     type="email"
//                     value={resetEmail}
//                     onChange={(e) => setResetEmail(e.target.value)} // Update email for reset
//                     className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
//                     placeholder="Enter your email to reset password"
//                 />
//                 <button
//                     type="button"
//                     onClick={handleForgotPassword}
//                     className="w-full py-3 px-6 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none mt-4"
//                 >
//                     Reset Password
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SignIn;





import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2'; // For user-friendly alerts

const SignIn = () => {
    const { signinUser, googleSignIn } = useContext(AuthContext); // Include forgotPassword from context if needed
    const navigate = useNavigate(); // Initialize useNavigate hook
    const location = useLocation(); // Initialize useLocation hook

    // If there is a state from the previous page (e.g., an attempt to access a protected route), we will redirect there after login.
    const from = location.state?.from || '/'; // Default to '/' if no state is provided.

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Sign In Data Submitted:', { email, password });

        signinUser(email, password)
            .then((result) => {
                console.log('Sign In Successful:', result.user.email);
                const user = { email: result.user.email }
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(
                        res => {
                            console.log(res.data);
                        }
                    )
                navigate(from, { replace: true }); // Redirect after successful sign-in
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log("Google Sign-In successful", result);
                navigate(from, { replace: true }); // Redirect after successful Google sign-in
            })
            .catch(error => {
                console.error("Google Sign-In Error: ", error);
                // Handle the error (e.g., show an error message to the user)
            });
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-700 rounded-xl shadow-lg bg-zinc-800">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-900 text-white placeholder-gray-400"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-zinc-900 rounded"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                            Remember me
                        </label>
                    </div>
                    {/* Use Link to navigate to Forgot Password route */}
                    <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none"
                >
                    Sign In
                </button>
            </form>
            <div className="my-6 text-center">
                <p className="text-sm text-gray-400 mb-4">Or sign in with</p>
                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full py-3 px-6 border border-gray-600 rounded-lg shadow-sm bg-zinc-900 hover:bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
                >
                    <FcGoogle className="text-2xl mr-2" /> Sign in with Google
                </button>
            </div>
            <p className="mt-6 text-center text-sm text-gray-400">
                Don’t have an account?
                <a href="/register" className="text-blue-500 hover:underline">Register here</a>
            </p>
        </div>
    );
};

export default SignIn;
