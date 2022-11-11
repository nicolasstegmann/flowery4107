// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtAgF4W305ljOKB8T1EkzoGhDnHSE4oRA",
  authDomain: "flowery4107.firebaseapp.com",
  projectId: "flowery4107",
  storageBucket: "flowery4107.appspot.com",
  messagingSenderId: "387547875747",
  appId: "1:387547875747:web:9a1f8674e1b8b0b6657216",
  measurementId: "G-ZJGZSHKCYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Firestore
export const db = getFirestore(app);