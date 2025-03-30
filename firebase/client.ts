// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuOHj0DtnEn89HL0gE31cW21n6ekx8UqI",
    authDomain: "convoquest-191ba.firebaseapp.com",
    projectId: "convoquest-191ba",
    storageBucket: "convoquest-191ba.firebasestorage.app",
    messagingSenderId: "591259160108",
    appId: "1:591259160108:web:264c4f69b1c46f30d5cb89",
    measurementId: "G-3XLWL5RYW2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);