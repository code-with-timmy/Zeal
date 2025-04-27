import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA2CxhQwvX6Ggki8v5yxnFfkF6iig2mfzg",
  authDomain: "zeal-e2116.firebaseapp.com",
  projectId: "zeal-e2116",
  storageBucket: "zeal-e2116.firebasestorage.app",
  messagingSenderId: "847106852375",
  appId: "1:847106852375:web:7c2fd1482cfa2e92353e52",
  measurementId: "G-PELQGTLJ0K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const updateUserProfile = updateProfile;
export const createUser = createUserWithEmailAndPassword;

export const logOut = signOut;

export const authChange = onAuthStateChanged;
export const signInUser = signInWithEmailAndPassword;
export const db = getDatabase(app);
