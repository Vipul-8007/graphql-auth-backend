# GraphQL Auth Backend 🔐

A backend authentication system built using **Node.js, Express, GraphQL (Apollo Server), MongoDB, and JWT**.  
This project demonstrates secure user authentication with **JWT-based authorization** using GraphQL APIs.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Secure Password Hashing with bcrypt
- GraphQL Queries & Mutations
- MongoDB with Mongoose ODM
- Modular & Scalable Project Structure
- Environment Variable Support using dotenv

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **GraphQL**
- **Apollo Server**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Token)**
- **bcrypt**
- **dotenv**

---

## 📁 Project Structure

src/
│── config/
│ └── db.js # MongoDB connection
│
│── graphql/
│ ├── schema.js # GraphQL schema
│ ├── resolvers/
│ │ └── userResolver.js
│ └── typeDefs/
│ └── userType.js
│
│── middleware/
│ └── auth.js # JWT authentication middleware
│
│── models/
│ └── User.js # User model
│
│── app.js # Express & Apollo setup
│── index.js # Server entry point


## How to Run

git clone <repo-url>
cd graphql-auth-backend
npm install
npm start

## Environment Variables

Create a `.env` file:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
