# 📚 Course Selling App

> **A backend-focused course marketplace built with the MERN stack foundation.**

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=jsonwebtokens)

This project demonstrates structured backend development, secure authentication workflows, middleware usage, and modular route handling. While it includes a minimal frontend for testing, the core focus is on a robust REST API architecture.

---

## 🚀 Features

### Core Functionality
* **Course Management:** Admins can create and manage course content.
* **Marketplace:** Users can view available courses and purchase them.
* **Role-Based Access:** Distinct workflows for **Admins** and **Users**.

### Security & Architecture
* 🔐 **JWT Authentication:** Secure stateless authentication using JSON Web Tokens.
* 🛡️ **Protected Routes:** Custom middleware to verify tokens and user roles.
* 🗄️ **Database:** MongoDB integration using Mongoose ODM.
* 🔧 **Configuration:** Secure environment variable management with `dotenv`.

---

## 🛠 Tech Stack

| Component | Technologies |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth** | JSON Web Tokens (JWT) |
| **Frontend** | HTML, CSS, JavaScript (Minimal) |

---

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-link>
cd Course-Selling-APP
```

### 2️⃣ Install dependencies
```bash
npm install
```
  
### 3️⃣ Create a .env file in the root directory

Create a file named .env and add:
```bash
MONGO_URL=your_mongodb_connection_string
JWT_USER_PASSWORD=your_user_secret
JWT_ADMIN_PASSWORD=your_admin_secret
```

---
⚠️**NOTE**
>  Ensure your MongoDB instance is running locally or you are using a MongoDB Atlas connection string.
---

### 4️⃣ Run the server
```bash
node index.js
```

Server will run on:
<
http://localhost:3000

## 📡 API Endpoints

### 👤 User Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/user/signup` | Register a new user |
| `POST` | `/user/signin` | Login an existing user |
| `GET` | `/user/courses` | View all available courses |
| `POST` | `/user/purchase` | Purchase a specific course |

### 👮‍♂️ Admin Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/admin/signup` | Register a new admin |
| `POST` | `/admin/signin` | Login an admin |
| `POST` | `/admin/course` | Create a new course |
| `GET` | `/admin/course` | View courses created by you |

---

## 🔐 Authentication Flow

1.  **Sign In:** User/Admin submits credentials.
2.  **Token Generation:** Server validates credentials and generates a signed **JWT**.
3.  **Storage:** The token is sent to the client and stored (e.g., localStorage).
4.  **Request:** For protected routes, the client sends the token in the `Authorization` header.
5.  **Verification:** Middleware intercepts the request, verifies the signature, and grants/denies access.

---

## 🧠 Learning Objectives

This project was built to master the following concepts:
* [x] Express.js route structuring and modularity.
* [x] Middleware chaining for validation and auth.
* [x] Implementing JWT for stateless authentication.
* [x] Managing environment variables securely.
* [x] REST API design principles.
* [x] MongoDB schema modeling with relationships.

---

## ⚠️ Note
> The frontend included is **intentionally minimal** and serves primarily to test the API endpoints. The project focuses on backend architecture, logic, and security flows.

---

## 📌 Future Improvements
* [ ] Migrate frontend to **React.js**.
* [ ] Integrate a real **Payment Gateway** (Stripe/Razorpay).
* [ ] Implement **Refresh Tokens** for better security.
* [ ] Add course progress tracking.
* [ ] Deploy to cloud (Render, Railway, or AWS).

---

## 👨‍💻 Author

**Harsh Aggarwal**

* Backend Developer & Enthusiast.
👨‍💻 Author

Harsh Aggarwal
