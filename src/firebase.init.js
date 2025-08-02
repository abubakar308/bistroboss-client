// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvzGWkJJJRLqWzyZBlqJNMYWiwj0LM4c",
  authDomain: "bistro-boss-5fe25.firebaseapp.com",
  projectId: "bistro-boss-5fe25",
  storageBucket: "bistro-boss-5fe25.firebasestorage.app",
  messagingSenderId: "770393937956",
  appId: "1:770393937956:web:8b71649373fa84ae5ce0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;