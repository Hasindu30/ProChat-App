// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTBYT1nOESeX2XHpZqGYMxhS3Iawh-kNM",
  authDomain: "pro-chat-30125.firebaseapp.com",
  projectId: "pro-chat-30125",
  storageBucket: "pro-chat-30125.appspot.com",
  messagingSenderId: "695849069507",
  appId: "1:695849069507:web:2beb9f7fb4587daa5a2b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth,email,password);
            
        } catch (error) {
            
        }
}