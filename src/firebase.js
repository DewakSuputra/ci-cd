import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-dashboard-2dc08.firebaseapp.com",
  projectId: "react-dashboard-2dc08",
  storageBucket: "react-dashboard-2dc08.appspot.com",
  messagingSenderId: "355634734288",
  appId: "1:355634734288:web:dd6ad5457b76857c2aaad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);