import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAJnqv9V6eTBLwEPdY_ssVlgKUelyOrs4",
    authDomain: "clone-ananya.firebaseapp.com",
    projectId: "clone-ananya",
    storageBucket: "clone-ananya.appspot.com",
    messagingSenderId: "132338303740",
    appId: "1:132338303740:web:5545d1a8c0b91e5bcacd79",
    measurementId: "G-C1Q6YX1X2G"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };