// Import the required functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import getAuth properly
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9P_ivsq0mBNYXNZ12dQ9G4m4LtOV2GGs",
  authDomain: "movie-finder-64234.firebaseapp.com",
  projectId: "movie-finder-64234",
  storageBucket: "movie-finder-64234.appspot.com", // ✅ Fixed storage bucket URL
  messagingSenderId: "970073076173",
  appId: "1:970073076173:web:30f012ddeec3ddad4c1484",
  measurementId: "G-FM1PPWSCSZ",
  databaseURl:"https://console.firebase.google.com/u/0/project/movie-finder-64234/database/movie-finder-64234-default-rtdb/data/~2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Initialize Firebase Authentication

// Initialize Analytics (only in browser environments)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { auth, app, analytics }; // ✅ Export required instances
