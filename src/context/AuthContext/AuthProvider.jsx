// import React, { useEffect, useState } from 'react';
// import AuthContext from './AuthContext';
// import auth from '../../firebase/firebase.init';
// import {
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signOut,
//     signInWithPopup,
//     GoogleAuthProvider,
//     updateProfile,
//     sendPasswordResetEmail
// } from 'firebase/auth';
// import axios from 'axios';

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const googleProvider = new GoogleAuthProvider();

//     // Create user with email, password, name, and photo URL
//     const createUser = (email, password, displayName, photoURL) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;

//                 // Update the user profile with displayName and photoURL
//                 return updateProfile(user, {
//                     displayName: displayName,
//                     photoURL: photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 }).then(() => {
//                     // After updating the profile, return the user data
//                     const userData = {
//                         email: user.email,
//                         displayName: user.displayName,
//                         photoUrl: user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                     };
//                     setUser(userData);
//                     setLoading(false);
//                     return userData;
//                 });
//             })
//             .catch((error) => {
//                 console.error('Error during user creation:', error.message);
//                 setLoading(false);
//                 throw error; // Optional: handle the error as you see fit
//             });
//     };

//     // Sign in with email and password
//     const signinUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     // Log out user
//     const logoutUser = () => {
//         setLoading(true);
//         return signOut(auth);
//     };

//     // Google Sign-In
//     const googleSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 const user = result.user;
//                 console.log('Google Sign-In successful', user);

//                 // Get photoURL and other user data
//                 const photoURL = user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

//                 const userData = {
//                     email: user.email,
//                     photoUrl: photoURL,
//                     displayName: user.displayName,
//                 };

//                 // Update user state
//                 setUser(userData);
//                 setLoading(false);
//                 return userData;
//             })
//             .catch((error) => {
//                 console.error('Error with Google Sign-In:', error.message);
//                 setLoading(false);
//                 throw error; // Optional: handle the error as you see fit
//             });
//     };

//     // Forgot password function
//     const forgotPassword = (email) => {
//         setLoading(true);
//         return sendPasswordResetEmail(auth, email)
//             .then(() => {
//                 console.log('Password reset email sent successfully');
//                 setLoading(false);
//                 return 'Password reset email sent successfully';
//             })
//             .catch((error) => {
//                 console.error('Error sending password reset email:', error.message);
//                 setLoading(false);
//                 throw error;
//             });
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             if (currentUser) {
//                 setUser({
//                     email: currentUser.email,
//                     photoUrl: currentUser.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
//                     displayName: currentUser.displayName,
//                 });

//                 // Send the user data to the backend for token management
//                 const user = { email: currentUser.email };
//                 axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
//                     .then(response => {
//                         console.log('Log in token received:', response.data);
//                         setLoading(false);
//                     })
//                     .catch(error => {
//                         console.error('Error with JWT token:', error);
//                         setLoading(false);
//                     });
//             } else {
//                 setUser(null); // If no user is logged in, set user state to null
//                 axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
//                     .then(response => {
//                         console.log('User logged out', response.data);
//                         setLoading(false);
//                     })
//                     .catch(error => {
//                         console.error('Error during logout:', error);
//                         setLoading(false);
//                     });
//             }
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signinUser,
//         logoutUser,
//         googleSignIn,
//         forgotPassword, // Expose the forgotPassword function
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;




import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../firebase/firebase.init';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    sendPasswordResetEmail
} from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // Create user with email, password, name, and photo URL
    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Update the user profile with displayName and photoURL
                return updateProfile(user, {
                    displayName: displayName,
                    photoURL: photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }).then(() => {
                    const userData = {
                        email: user.email,
                        displayName: user.displayName,
                        photoUrl: user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    };
                    setUser(userData);
                    setLoading(false);
                    return userData;
                });
            })
            .catch((error) => {
                console.error('Error during user creation:', error.message);
                setLoading(false);
                throw error;
            });
    };

    // Update user's profile (display name and photo URL)
    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL || auth.currentUser.photoURL
            }).then(() => {
                // Update local user state
                const updatedUser = {
                    ...user,
                    displayName: displayName || user.displayName,
                    photoUrl: photoURL || user.photoUrl
                };
                setUser(updatedUser);
                setLoading(false);
                return updatedUser;
            }).catch((error) => {
                console.error('Error updating user profile:', error.message);
                setLoading(false);
                throw error;
            });
        } else {
            const error = new Error('No user is currently logged in.');
            console.error(error.message);
            setLoading(false);
            throw error;
        }
    };

    // Sign in with email and password
    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Google Sign-In
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const photoURL = user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

                const userData = {
                    email: user.email,
                    photoUrl: photoURL,
                    displayName: user.displayName,
                };

                setUser(userData);
                setLoading(false);
                return userData;
            })
            .catch((error) => {
                console.error('Error with Google Sign-In:', error.message);
                setLoading(false);
                throw error;
            });
    };

    // Forgot password function
    const forgotPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Password reset email sent successfully');
                setLoading(false);
                return 'Password reset email sent successfully';
            })
            .catch((error) => {
                console.error('Error sending password reset email:', error.message);
                setLoading(false);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser({
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
                    displayName: currentUser.displayName,
                });

                // Send user data to backend for token management
                const user = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(response => {
                        console.log('Log in token received:', response.data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error with JWT token:', error);
                        setLoading(false);
                    });
            } else {
                setUser(null);
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(response => {
                        console.log('User logged out', response.data);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error during logout:', error);
                        setLoading(false);
                    });
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signinUser,
        logoutUser,
        googleSignIn,
        forgotPassword,
        updateUserProfile, // Expose updateUserProfile function
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
