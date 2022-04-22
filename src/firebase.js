// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSHIxDfNTyNt3xj4EJl4XpHjCfU-3MvDc",
  authDomain: "fakebook-217da.firebaseapp.com",
  projectId: "fakebook-217da",
  storageBucket: "fakebook-217da.appspot.com",
  messagingSenderId: "5289423533",
  appId: "1:5289423533:web:edf9e8f8301d05db458c24",
  measurementId: "G-1SLQPRW7GZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup }
export default db;