// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgDkDxEN4eeY4KRMd8ABAFDgUcIIex-mg",
  authDomain: "netflixgpt-884f7.firebaseapp.com",
  projectId: "netflixgpt-884f7",
  storageBucket: "netflixgpt-884f7.firebasestorage.app",
  messagingSenderId: "182791597433",
  appId: "1:182791597433:web:1355315f2d7052c9b2d3a8",
  measurementId: "G-8YDK7DX1VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();