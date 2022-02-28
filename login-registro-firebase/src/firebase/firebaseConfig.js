// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpUL4lOwCXNSnSS6J0a5s_tlFVeKWPg8A",
  authDomain: "frontend8-31e98.firebaseapp.com",
  projectId: "frontend8-31e98",
  storageBucket: "frontend8-31e98.appspot.com",
  messagingSenderId: "133812766018",
  appId: "1:133812766018:web:d2b127b7a13c291ad234db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore()


export{
    app, 
    google,
    db
    
}
