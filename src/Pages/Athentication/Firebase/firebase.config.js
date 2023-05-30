// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnsRlLGhpLMK5UEb3E4bkHbYguvlXfQoI",
    authDomain: "final-projects-bistro.firebaseapp.com",
    projectId: "final-projects-bistro",
    storageBucket: "final-projects-bistro.appspot.com",
    messagingSenderId: "1085218025850",
    appId: "1:1085218025850:web:5e6b735ba8a44b73f366c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app