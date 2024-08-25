// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWSvc-S8h9TuR28WKp8or6o_KQUEwERgI",
  authDomain: "multilingo-extention.firebaseapp.com",
  projectId: "multilingo-extention",
  storageBucket: "multilingo-extention.appspot.com",
  messagingSenderId: "925790065182",
  appId: "1:925790065182:web:881fdf09da21728776940f",
  measurementId: "G-6MZ0MV4Y7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);

const analytics = getAnalytics(app);

export { app, analytics, auth };
