// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA_DH5Llr6Ro0TagwF-1QrftzitcKY-FE",
  authDomain: "netflix-4dfc7.firebaseapp.com",
  projectId: "netflix-4dfc7",
  storageBucket: "netflix-4dfc7.appspot.com",
  messagingSenderId: "219719523257",
  appId: "1:219719523257:web:b0164bc5a3a5b5d1ab3468",
  measurementId: "G-NX849T0ZND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

