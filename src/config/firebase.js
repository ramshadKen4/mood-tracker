// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mood-tracker-991fa.firebaseapp.com",
    projectId: "mood-tracker-991fa",
    storageBucket: "mood-tracker-991fa.appspot.com",
    messagingSenderId: "859850364835",
    appId: "1:859850364835:web:4727283f3f8423726cec16",
    measurementId: "G-NGVJFWSD6N"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);