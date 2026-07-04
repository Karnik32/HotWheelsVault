import { login, logout, observeAuth } from "./auth.js";
import { uploadImage } from "./cloudinary.js";
import {
    addCar,
    getCars,
    updateCar,
    deleteCar
} from "./firebase.js";

// =========================
// GLOBAL VARIABLES
// =========================

let cars = [];
let editingCarId = null;
let currentImageUrl = "";

// =========================
// DOM ELEMENTS
// =========================

const form = document.getElementById("carForm");
const formCard = document.getElementById("formCard");

const collectionGrid = document.getElementById("collectionGrid");
const searchInput = document.getElementById("searchInput");
const carCount = document.getElementById("carCount");
const saveBtn = document.getElementById("saveBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userInfo = document.getElementById("userInfo");

// =========================
// FORM SUBMIT
// =========================

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("carName").value.trim();
    const year = document.getElementById("carYear").value.trim();
    const place = document.getElementById("carPlace").value.trim();
    const imageFile = document.getElementById("carImage").files[0];

    if (!name || !year || !place) {

        alert("Please fill all fields.");

        return;

    }

    try {

        saveBtn.disabled = true;
        saveBtn.textContent = "Uploading...";

        let imageUrl = currentImageUrl;

        // =========================
        // CREATE
        // =========================

        if (!editingCarId) {

            if (!imageFile) {

                alert("Please select an image.");

                saveBtn.disabled = false;
                saveBtn.textContent = "Save Car";

                return;

            }

            imageUrl = await uploadImage(imageFile);

            await addCar({

                name,
                year,
                place,
                image: imageUrl

            });

        }

        // =========================
        // UPDATE
        // =========================

        else {

            if (imageFile) {

                imageUrl = await uploadImage(imageFile);

            }

            await updateCar(editingCarId, {

                name,
                year,
                place,
                image: imageUrl

            });

            editingCarId = null;
            currentImageUrl = "";

            saveBtn.textContent = "Save Car";

        }

        form.reset();

        await loadCars();

        alert("Saved Successfully!");

    }

    catch (error) {

        console.error(error);

        alert("Something went wrong.");

    }

    finally {

        saveBtn.disabled = false;
        saveBtn.textContent = "Save Car";

    }

});
// =========================
// DISPLAY CARS
// =========================

function displayCars(list) {

    collectionGrid.innerHTML = "";

    if (list.length === 0) {

        collectionGrid.innerHTML = `
            <div class="empty-state">
                <h3>No cars added yet</h3>
                <p>Start building your collection by adding your first Hot Wheels.</p>
            </div>
        `;

        carCount.textContent = 0;
        return;
    }

    carCount.textContent = list.length;

    list.forEach(car => {

        const card = document.createElement("div");

        card.className = "car-card";

        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">

            <div class="card-body">

                <h3>${car.name}</h3>

                <p>📅 ${car.year}</p>

                <p>📍 ${car.place}</p>

                <div class="card-actions">

                    <button class="edit-btn"
                        onclick="handleEdit('${car.id}')">
                        Edit
                    </button>

                    <button class="delete-btn"
                        onclick="handleDelete('${car.id}')">
                        Delete
                    </button>

                </div>

            </div>
        `;

        collectionGrid.appendChild(card);

    });

}

// =========================
// EDIT
// =========================

async function handleEdit(id) {

    const car = cars.find(c => c.id === id);

    if (!car) return;

    document.getElementById("carName").value = car.name;
    document.getElementById("carYear").value = car.year;
    document.getElementById("carPlace").value = car.place;

    editingCarId = id;
    currentImageUrl = car.image;

    saveBtn.textContent = "Update Car";

}

// =========================
// DELETE
// =========================

async function handleDelete(id) {

    const confirmed = confirm("Are you sure you want to delete this car?");

    if (!confirmed) return;

    try {

        await deleteCar(id);

        await loadCars();

    } catch (error) {

        console.error(error);

        alert("Failed to delete car.");

    }

}

// =========================
// SEARCH
// =========================

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = cars.filter(car =>

        car.name.toLowerCase().includes(value) ||

        car.year.toString().includes(value) ||

        car.place.toLowerCase().includes(value)

    );

    displayCars(filtered);

});

// =========================
// LOAD CARS
// =========================

async function loadCars() {

    cars = await getCars();

    displayCars(cars);

}

// =========================
// GLOBAL FUNCTIONS
// =========================

window.handleEdit = handleEdit;
window.handleDelete = handleDelete;

// =========================
// START APP
// =========================

loadCars();
// =========================
// LOGIN BUTTON
// =========================

loginBtn.addEventListener("click", async () => {
    await login();
});

// =========================
// LOGOUT BUTTON
// =========================

logoutBtn.addEventListener("click", async () => {
    await logout();
});
// =========================
// AUTH STATE
// =========================

observeAuth((user) => {

    if (user) {

        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";

        userInfo.innerHTML = `
            <img
                src="${user.photoURL}"
                width="45"
                height="45"
                style="border-radius:50%; vertical-align:middle; margin-right:10px;"
            >

            <span style="font-weight:600;">
                ${user.displayName}
            </span>
        `;

        formCard.style.display = "block";

    } else {

        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";

        userInfo.innerHTML = "";

        formCard.style.display = "none";

    }

});