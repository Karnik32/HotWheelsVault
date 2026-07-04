// Firebase Core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyB3b30fOF1jaSaT4sp2vuLg-eiV93tJSEc",
    authDomain: "hotwheels-61e33.firebaseapp.com",
    projectId: "hotwheels-61e33",
    storageBucket: "hotwheels-61e33.firebasestorage.app",
    messagingSenderId: "905183640508",
    appId: "1:905183640508:web:8a6b07c4664fc4bd3349b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

export { db, auth };