import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDklWptSXhbKIerssLXtZxcWcLQwBSY_gU",
  authDomain: "ecommerce-e8475.firebaseapp.com",
  projectId: "ecommerce-e8475",
  storageBucket: "ecommerce-e8475.firebasestorage.app",
  messagingSenderId: "645019415307",
  appId: "1:645019415307:web:a291081c248443f805e80e"
};

const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app);
