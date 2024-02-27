// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAROsqV8RNic7DoanO-8L_H25e0NwIpn98",
//   authDomain: "clone-724be.firebaseapp.com",
//   projectId: "clone-724be",
//   storageBucket: "clone-724be.appspot.com",
//   messagingSenderId: "1065335731881",
//   appId: "1:1065335731881:web:1e2f2bb0bf87e8ea645bb8",
// };

// // Initialize Firebase
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Initialize Auth instance
// const db = getFirestore(app); // Initialize Firestore instance

// export { auth, db };

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAROsqV8RNic7DoanO-8L_H25e0NwIpn98",
  authDomain: "clone-724be.firebaseapp.com",
  projectId: "clone-724be",
  storageBucket: "clone-724be.appspot.com",
  messagingSenderId: "1065335731881",
  appId: "1:1065335731881:web:1e2f2bb0bf87e8ea645bb8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = firebase.auth();
export const db = app.firestore();
