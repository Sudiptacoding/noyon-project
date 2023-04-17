import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBB6WIJqo8m4EyKEMZngXjuaVSVULko0VE",
    authDomain: "fir-auth-6f9be.firebaseapp.com",
    projectId: "fir-auth-6f9be",
    storageBucket: "fir-auth-6f9be.appspot.com",
    messagingSenderId: "22073278016",
    appId: "1:22073278016:web:db4181ee83ae446b9569a5"
  };

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);