// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsGubJGSoC9KEmRN1H5syRySsvJxnD0YM",
  authDomain: "webapp-acf4c.firebaseapp.com",
  projectId: "webapp-acf4c",
  storageBucket: "webapp-acf4c.firebasestorage.app",
  messagingSenderId: "82376106318",
  appId: "1:82376106318:web:ce2683a7d9e52f3b5b3e1f",
  measurementId: "G-4LNKL90EL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
