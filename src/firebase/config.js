// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5hJK3cwnP80jYOl0y_4BrTYw4YKrt4bQ",
  authDomain: "she-farm.firebaseapp.com",
  projectId: "she-farm",
  storageBucket: "she-farm.appspot.com",
  messagingSenderId: "951600832932",
  appId: "1:951600832932:web:02948ec03d3252612ba131",
  measurementId: "G-B9GJM6JRZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);