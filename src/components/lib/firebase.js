// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import  { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAKB4wznR17Rvd1ZSSLujRSIA_lgSfwdE",
    authDomain: "chat-application-6a7d4.firebaseapp.com",
    projectId: "chat-application-6a7d4",
    storageBucket: "chat-application-6a7d4.appspot.com",
    messagingSenderId: "470414277048",
    appId: "1:470414277048:web:fda117bc11d3ae9390774d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app


