import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBR8mFMrsNkQwKlYUrEMECCQIL6GoMZQ9c",
  authDomain: "localhost-project-b19e3.firebaseapp.com",
  projectId: "localhost-project-b19e3",
  storageBucket: "localhost-project-b19e3.appspot.com",
  messagingSenderId: "934782727255",
  appId: "1:934782727255:web:51a2595218842a8d645f12",
  measurementId: "G-HFC6WR0ZBN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");

export const db = getFirestore(app);
export const storage = getStorage(app);
