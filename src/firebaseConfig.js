import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCLPWPJygpq720pa4y4OdfMRlS8JUvCgA",
    authDomain: "duy-reactjs-190604.firebaseapp.com",
    databaseURL: "https://duy-reactjs-190604.firebaseio.com",
    projectId: "duy-reactjs-190604",
    storageBucket: "",
    messagingSenderId: "659992428163",
    appId: "1:659992428163:web:38353a6b82f5503f9465b6"
  };

  export default function initFirebase() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }