import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc, deleteDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2NeomlNHM7jTFQXoCIt3xR3L1rKGWjoc",
  authDomain: "bakery-site-3b5a3.firebaseapp.com",
  projectId: "bakery-site-3b5a3",
  storageBucket: "bakery-site-3b5a3.firebasestorage.app",
  messagingSenderId: "35232571735",
  appId: "1:35232571735:web:8a9c607dc990802d135e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export for other scripts to use
export { db, collection, getDocs, setDoc, doc, updateDoc, deleteDoc, addDoc };
