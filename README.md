###📚 Course Selling App

A backend-focused course selling application built using Express.js, MongoDB, and JWT authentication.
This project demonstrates structured backend development, secure authentication workflows, middleware usage, and modular route handling.

The frontend is minimal and included primarily for API interaction and testing.

🚀 Features

User Signup & Signin

Admin Signup & Signin

JWT-based Authentication

Role-based Authorization (User / Admin)

Protected Routes using Middleware

Course Creation (Admin)

Course Listing & Purchase (User)

MongoDB Integration with Mongoose

Environment Variable Configuration using dotenv

🛠 Tech Stack

Backend

Node.js

Express.js

MongoDB

Mongoose

JSON Web Tokens (JWT)

dotenv

Frontend

Basic HTML, CSS, JavaScript

⚙️ How to Run Locally
1️⃣ Clone the repository
git clone <your-repo-link>
cd Course-Selling-APP

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in the root directory

Create a file named .env and add:

MONGO_URL=your_mongodb_connection_string
JWT_USER_PASSWORD=your_user_secret
JWT_ADMIN_PASSWORD=your_admin_secret


Make sure:

MongoDB is running locally
OR

You are using MongoDB Atlas

4️⃣ Start the server
node index.js


Server will run on:

http://localhost:3000

5️⃣ Open the application

Visit:

http://localhost:3000

🔐 Authentication Flow

User/Admin signs in

Server generates JWT

Token is stored on frontend

Token is sent in Authorization header

Middleware verifies token before granting access

📡 API Endpoints
User Routes
Method	Endpoint	Description
POST	/user/signup	Register new user
POST	/user/signin	Login user
GET	/user/courses	Get available courses
POST	/user/purchase	Purchase course
Admin Routes
Method	Endpoint	Description
POST	/admin/signup	Register admin
POST	/admin/signin	Login admin
POST	/admin/course	Create new course
GET	/admin/course	View created courses
🧠 Learning Objectives

Express route structuring

Middleware chaining

JWT authentication implementation

Environment variable management

REST API design

MongoDB schema modeling

Role-based access control

⚠️ Notes

The frontend is intentionally minimal.

Focus is on backend architecture and authentication logic.

Production deployment would require additional validation and security enhancements.

📌 Future Improvements

React-based frontend

Payment gateway integration

Refresh tokens

Course progress tracking

Deployment setup (Render / Railway / AWS)

👨‍💻 Author

Harsh Aggarwal
