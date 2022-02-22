import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5UdaxMAsRcFXIO_n5yLETuvEaTPJRQFI",
  authDomain: "shopkart-e35b9.firebaseapp.com",
  projectId: "shopkart-e35b9",
  storageBucket: "shopkart-e35b9.appspot.com",
  messagingSenderId: "745086518780",
  appId: "1:745086518780:web:0cf7e1eee11c6890455e79",
  measurementId: "G-V7PNB7J1RT",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
