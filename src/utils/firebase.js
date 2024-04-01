// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnh5rKSCgMhmorn-AzBZBqpFaMGECVLGw",
  authDomain: "netflixgpt-83c8a.firebaseapp.com",
  projectId: "netflixgpt-83c8a",
  storageBucket: "netflixgpt-83c8a.appspot.com",
  messagingSenderId: "996904324535",
  appId: "1:996904324535:web:27198a4ad021ed7f0f6c32",
  measurementId: "G-29QY5YTH56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);