// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8sccojbgMllnT8PUbNQ8R_yhUFL-o_y8",
  authDomain: "netflixgpt-c36d1.firebaseapp.com",
  projectId: "netflixgpt-c36d1",
  storageBucket: "netflixgpt-c36d1.appspot.com",
  messagingSenderId: "546362434975",
  appId: "1:546362434975:web:89f7e8f08c4df073c509aa",
  measurementId: "G-51TKX8934E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
