import { auth } from "./firebase-config.js";

import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

// =====================
// GOOGLE LOGIN
// =====================

export async function login() {

    try {

        await signInWithPopup(auth, provider);

    } catch (error) {

        console.error(error);

    }

}

// =====================
// LOGOUT
// =====================

export async function logout() {

    await signOut(auth);

}

// =====================
// AUTH STATE
// =====================

export function observeAuth(callback) {

    onAuthStateChanged(auth, callback);

}