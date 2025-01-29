// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9P_ivsq0mBNYXNZ12dQ9G4m4LtOV2GGs",
  authDomain: "movie-finder-64234.firebaseapp.com",
  projectId: "movie-finder-64234",
  storageBucket: "movie-finder-64234.firebasestorage.app",
  messagingSenderId: "970073076173",
  appId: "1:970073076173:web:30f012ddeec3ddad4c1484",
  measurementId: "G-FM1PPWSCSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);