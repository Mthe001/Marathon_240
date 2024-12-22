// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_Key, // Firebase API Key
  authDomain: import.meta.env.VITE_AUTH_DOMAIN, // Firebase Auth Domain
  projectId: import.meta.env.VITE_PROJECT_ID, // Firebase Project ID
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET, // Firebase Storage Bucket
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID, // Firebase Messaging Sender ID
  appId: import.meta.env.VITE_APP_ID // Firebase App ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;
// // Now you can use 'auth' for authentication operations like sign in, sign up, etc.
