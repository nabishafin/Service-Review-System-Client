// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("API Key:", import.meta.env.VITE_apiKey);

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: "service-review-system-clint.firebaseapp.com",
    projectId: "service-review-system-clint",
    storageBucket: "service-review-system-clint.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth