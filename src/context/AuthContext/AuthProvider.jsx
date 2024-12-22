// import React, { useEffect, useState } from 'react';
// import AuthContext from './AuthContext';
// import auth from '../../firebase/firebase.init'; // Ensure Firebase is correctly initialized
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import axios from 'axios';

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const googleProvider = new GoogleAuthProvider();

//     // Create user with email and password
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
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

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             console.log('state captured', currentUser?.email);

//             if (currentUser?.email) {
//                 const user = { email: currentUser.email };

//                 axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
//                     .then(response => {
//                         console.log('log in token', response.data);
//                         setLoading(false);
//                     });
//             } else {
//                 axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
//                     .then(response => {
//                         console.log('logout', response.data);
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
import auth from '../../firebase/firebase.init'; // Ensure Firebase is correctly initialized
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // Create user with email, password, name, and photoURL
    const createUser = (email, password, name, photoURL = '') => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = result.user;

                // Update user's profile with displayName and photoURL
                return updateProfile(newUser, {
                    displayName: name,
                    photoURL: photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', // Default photoURL
                }).then(() => {
                    // Update local state with new user info
                    setUser({
                        ...newUser,
                        displayName: name,
                        photoURL: photoURL,
                    });
                    setLoading(false);
                    return newUser;
                });
            })
            .catch((error) => {
                console.error('Error creating user:', error.message);
                setLoading(false);
                throw error;
            });
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
                console.log('Google Sign-In successful', user);

                // Get photoURL and other user data
                const photoURL = user.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

                const userData = {
                    email: user.email,
                    photoUrl: photoURL,
                    displayName: user.displayName,
                };

                // Update user state
                setUser(userData);
                setLoading(false);
                return userData;
            })
            .catch((error) => {
                console.error('Error with Google Sign-In:', error.message);
                setLoading(false);
                throw error; // Optional: handle the error as you see fit
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser?.email);

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(response => {
                        console.log('log in token', response.data);
                        setLoading(false);
                    });
            } else {
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(response => {
                        console.log('logout', response.data);
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
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
