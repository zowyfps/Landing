// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoTQwVdRj6HJr6s9lELqI7L-uVYbZC6H0",
  authDomain: "underclub-ecommerce.firebaseapp.com",
  projectId: "underclub-ecommerce",
  storageBucket: "underclub-ecommerce.appspot.com",
  messagingSenderId: "560767285610",
  appId: "1:560767285610:web:b85b0e5ad29547b2ba0d13",
  measurementId: "G-0N5X4BKG8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);