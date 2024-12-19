// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChyAUVWR2y9KYpYVONYnBa06nB-mfs9Gc",
  authDomain: "vincentio.firebaseapp.com",
  projectId: "vincentio",
  storageBucket: "vincentio.firebasestorage.app",
  messagingSenderId: "238413701333",
  appId: "1:238413701333:web:ef24c2205fad2b9b14825c",
  measurementId: "G-7DKQ1DFQ3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);