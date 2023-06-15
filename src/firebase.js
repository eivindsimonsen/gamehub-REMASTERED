// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAWmlV2mL4zCn7Nld1NKK_yIy0o0PhnQs",
  authDomain: "gamehub-1060e.firebaseapp.com",
  projectId: "gamehub-1060e",
  storageBucket: "gamehub-1060e.appspot.com",
  messagingSenderId: "356771856454",
  appId: "1:356771856454:web:5c7ae697b835a6b47c8a47",
  measurementId: "G-YVLSVDLCZ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
