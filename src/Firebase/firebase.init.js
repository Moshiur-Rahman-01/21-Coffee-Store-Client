import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCN22yok9MoxG7f5axR4hSbyIoV3ez48sQ",
    authDomain: "coffee-store-37a9f.firebaseapp.com",
    projectId: "coffee-store-37a9f",
    storageBucket: "coffee-store-37a9f.firebasestorage.app",
    messagingSenderId: "911221291612",
    appId: "1:911221291612:web:2b36af9f999adaf0194499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
