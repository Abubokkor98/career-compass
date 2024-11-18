// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhRD6B7uEk__BqIrZqtCcNh07W7eTFWog",
  authDomain: "career-compass-auth.firebaseapp.com",
  projectId: "career-compass-auth",
  storageBucket: "career-compass-auth.firebasestorage.app",
  messagingSenderId: "766685566735",
  appId: "1:766685566735:web:7208b3b47e6d795c62507a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);