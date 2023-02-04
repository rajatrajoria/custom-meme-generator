import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJnGJ48_DDLxDkWf2c8uNNSAZ9yk3anj0",
  authDomain: "meme-generator-9c5b2.firebaseapp.com",
  projectId: "meme-generator-9c5b2",
  storageBucket: "meme-generator-9c5b2.appspot.com",
  messagingSenderId: "258224010718",
  appId: "1:258224010718:web:52e5fb5fa99ca81685594f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);