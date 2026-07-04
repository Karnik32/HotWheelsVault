import { db, auth } from "./firebase-config.js";

import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
// ==========================
// ADD CAR
// ==========================

export async function addCar(car) {

    try {

        if (!auth.currentUser) {
            throw new Error("You must be logged in to add a car.");
        }

        const docRef = await addDoc(collection(db, "cars"), {

            ...car,

            ownerId: auth.currentUser.uid,

            ownerName: auth.currentUser.displayName

        });

        console.log("Car saved with ID:", docRef.id);

        return docRef.id;

    } catch (error) {

        console.error(error);

        throw error;

    }

}

// ==========================
// GET ALL CARS
// ==========================

export async function getCars() {

    const snapshot = await getDocs(collection(db, "cars"));

    const cars = [];

    snapshot.forEach(doc => {

        cars.push({

            id: doc.id,

            ...doc.data()

        });

    });

    return cars;

}
// ==========================
// DELETE CAR
// ==========================

export async function deleteCar(id) {

    try {

        await deleteDoc(doc(db, "cars", id));

        console.log("Car deleted successfully");

    } catch (error) {

        console.error("Error deleting car:", error);

        throw error;

    }

}
// ==========================
// UPDATE CAR
// ==========================

export async function updateCar(id, car) {

    try {

        await updateDoc(doc(db, "cars", id), car);

        console.log("Car updated successfully");

    } catch (error) {

        console.error("Error updating car:", error);

        throw error;

    }

}