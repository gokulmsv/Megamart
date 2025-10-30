// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSToGvl74NRk-Yg4GxzUV0-RtE6mJop_I",
  authDomain: "megamart-2eca9.firebaseapp.com",
  projectId: "megamart-2eca9",
  storageBucket: "megamart-2eca9.firebasestorage.app",
  messagingSenderId: "569025628929",
  appId: "1:569025628929:web:3d92d8ac928e58c6142900",
  measurementId: "G-T50BMDZT8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);