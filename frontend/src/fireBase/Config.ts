// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMhz4WdX7lKTsNJqMaBl_NomdP47qVy_w",
  authDomain: "music-zone-96e50.firebaseapp.com",
  projectId: "music-zone-96e50",
  storageBucket: "music-zone-96e50.appspot.com",
  messagingSenderId: "458252843634",
  appId: "1:458252843634:web:4ae227c78b73d632eda0eb",
  measurementId: "G-JD0HE7DT7Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()