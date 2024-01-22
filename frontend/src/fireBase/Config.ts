// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Define Firebase configuration type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCMhz4WdX7lKTsNJqMaBl_NomdP47qVy_w",
  authDomain: "music-zone-96e50.firebaseapp.com",
  projectId: "music-zone-96e50",
  storageBucket: "music-zone-96e50.appspot.com",
  messagingSenderId: "458252843634",
  appId: "1:458252843634:web:4ae227c78b73d632eda0eb",
  measurementId: "G-JD0HE7DT7Y"
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const analytics: Analytics = getAnalytics(app);

export const auth: Auth = getAuth();