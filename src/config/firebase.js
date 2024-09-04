// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

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
            const user = res.user;
            await setDoc(doc(db,"users",user.uid),{
              id:user.uid,
              username:username.toLowerCase(),
              email,
              name:"",
              avatar:"",
              bio:"hey ,There i am using ProChat",
              lastSeen:Date.now()
            })
            await setDoc(doc(db,"chats",user.uid),{
              chatsData:[]
            })
        } catch (error) {
            console.error(error)
            toast.error(error.code.split('/')[1].split('-').join(" "));
        }
}

const login = async (email,password) => {
    try {
      await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
      console.error(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () =>{
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
  
}

export {signup,login,logout,auth,db}