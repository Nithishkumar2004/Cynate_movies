// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUjGivrk0nOx7Q8ZlxQRtiG-tnqYsiuZ4",
  authDomain: "cynate-movies.firebaseapp.com",
  projectId: "cynate-movies",
  storageBucket: "cynate-movies.appspot.com",
  messagingSenderId: "90520124251",
  appId: "1:90520124251:web:8f4d4e56b62782ac25b87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);