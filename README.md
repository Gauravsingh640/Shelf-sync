# 📚 ShelfSync – Book Management System

A full-stack MERN application that allows users to manage books with secure authentication and complete CRUD functionality.

---

## 🚀 Live Demo

* 🌐 **Frontend (Live App):** https://heroic-zabaione-a21447.netlify.app/login
* ⚙️ **Backend API:** https://todo-t1lc.onrender.com

---

## 🛠 Tech Stack

**Frontend**

* React.js (Vite)
* Tailwind CSS
* Axios

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas

**Authentication**

* JWT (JSON Web Token)

---

## ✨ Features

* 🔐 User Signup & Login (JWT Authentication)
* ➕ Add new books
* ✏️ Update existing books
* ❌ Delete books
* 📋 View all books
* 🔒 Protected routes (only logged-in users can access dashboard)

---

## 📁 Project Structure

```
Shelf-sync/
 ├── frontend/        # React frontend
 ├── server/          # Node + Express backend
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Gauravsingh640/Shelf-sync.git
cd Shelf-sync
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
```

Create a `.env` file inside `server/`:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

Run backend:

```
node index.js
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### 🔐 Auth

* POST `/user/signup`
* POST `/user/login`

### 📚 Books

* GET `/book/booklists`
* POST `/book/addbook`
* PUT `/book/updatebook`
* POST `/book/deletebook`

---

## 📌 Future Improvements

* 📸 Image upload for books
* 🔍 Search & filter functionality
* 📊 Pagination
* 👤 User profile management

---

## 👨‍💻 Author

* Gaurav Singh
* GitHub: https://github.com/Gauravsingh640

---

## ⭐ Show your support

If you like this project, please give it a ⭐ on GitHub!
