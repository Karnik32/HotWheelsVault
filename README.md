# 🚗 Hot Wheels Vault

> A modern full-stack web application for managing and showcasing a Hot Wheels collection.

🌐 **Live Website:** https://hotwheels-61e33.web.app/

---

## 📖 About

Hot Wheels Vault is a personal collection management platform built completely from scratch.

The project allows authenticated users to add, edit and manage Hot Wheels cars while visitors can freely browse the collection.

Instead of using Local Storage, the application stores data in **Firebase Firestore**, images in **Cloudinary**, and is deployed using **Firebase Hosting**, making the collection accessible from anywhere.

This project was built to learn real-world full-stack web development concepts including authentication, databases, cloud storage, deployment, and backend security.

---

# ✨ Features

- 🔍 Search Hot Wheels by name
- ➕ Add new cars
- ✏️ Edit existing cars
- 🗑️ Delete cars
- 📸 Upload images
- ☁️ Cloud image hosting using Cloudinary
- 🔐 Google Authentication
- 🗄️ Firestore Database
- 🌍 Live website deployed on Firebase Hosting
- 📱 Responsive Design
- 🔒 Backend security using Firestore Rules

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Firebase Firestore
- Firebase Authentication
- Firebase Hosting

## Cloud Services

- Cloudinary

## Version Control

- Git
- GitHub

---

# 🏗 Project Architecture

```
User
   │
   ▼
Frontend (HTML/CSS/JS)
   │
   ├──────────────► Firebase Authentication
   │
   ├──────────────► Firestore Database
   │
   └──────────────► Cloudinary
                     │
                     ▼
                 Image URL
```

---

# 🔐 Security

This project implements backend security using **Firestore Security Rules**.

Visitors can:

- View the collection

Only authorized Google accounts can:

- Add cars
- Edit cars
- Delete cars

Security is enforced by Firebase itself, meaning unauthorized users cannot bypass restrictions even through browser developer tools.

---

# 📂 Project Structure

```
HotWheelsVault
│
├── index.html
├── style.css
├── script.js
├── firebase.js
├── firebase-config.js
├── auth.js
├── cloudinary.js
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

---

# 🚀 Development Journey

This project was built step-by-step from scratch.

### Phase 1

- Planned project structure
- Designed UI

### Phase 2

- Built responsive frontend
- Added search functionality

### Phase 3

- Integrated Firebase Firestore
- Stored collection online

### Phase 4

- Added Google Authentication

### Phase 5

- Integrated Cloudinary for image uploads

### Phase 6

- Implemented Firestore Security Rules

### Phase 7

- Deployed using Firebase Hosting

---

# 📚 What I Learned

While building this project, I learned:

- Full-stack web development
- Firebase Authentication
- Firestore CRUD operations
- Cloudinary API integration
- Git & GitHub workflow
- Firebase Hosting
- Backend security rules
- Project deployment
- Modular JavaScript

---

# 🔮 Future Improvements

- Collection statistics dashboard
- Advanced filtering
- Sorting options
- Wishlist
- Favorite cars
- User profiles
- Dark mode
- Pagination
- Admin dashboard
- Mobile PWA support

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Karnik32/HotWheelsVault.git
```

Open the project

```bash
cd HotWheelsVault
```

Configure Firebase

- Create a Firebase project
- Enable Firestore
- Enable Google Authentication
- Replace Firebase configuration inside:

```
firebase-config.js
```

Configure Cloudinary

Replace your Cloudinary credentials inside

```
cloudinary.js
```

Run the project

```
Open index.html

or

Use Live Server
```

---

# 👨‍💻 Author

**Karnik Udayan Shah**

Computer Science Engineering Student

GitHub:
https://github.com/Karnik32

LinkedIn:
www.linkedin.com/in/karnik-shah-1111adf

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
