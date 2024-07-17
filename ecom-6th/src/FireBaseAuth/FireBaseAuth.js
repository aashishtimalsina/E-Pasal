// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
 apiKey: "AIzaSyCMSZ28_rLEf5D6E-dR-dweABfMAmH7Hdw",
  authDomain: "delta-carving-355908.firebaseapp.com",
  projectId: "delta-carving-355908",
  storageBucket: "delta-carving-355908.appspot.com",
  messagingSenderId: "1032689265869",
  appId: "1:1032689265869:web:7847503b9da0185d1c4d84",
  measurementId: "G-TQYCQVZNEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);


export{app,auth,db}