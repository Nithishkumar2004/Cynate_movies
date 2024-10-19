import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAUjGivrk0nOx7Q8ZlxQRtiG-tnqYsiuZ4",
  authDomain: "cynate-movies.firebaseapp.com",
  projectId: "cynate-movies",
  storageBucket: "cynate-movies.appspot.com",
  messagingSenderId: "90520124251",
  appId: "1:90520124251:web:8f4d4e56b62782ac25b87e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);