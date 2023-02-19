import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAP4R7Jn2gp1LOpC9hJ1uBfqnGeTw-iJgA",
  authDomain: "hamza-portfolio-a9f19.firebaseapp.com",
  projectId: "hamza-portfolio-a9f19",
  storageBucket: "hamza-portfolio-a9f19.appspot.com",
  messagingSenderId: "538593054654",
  appId: "1:538593054654:web:8ed15663431540c36d33ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()