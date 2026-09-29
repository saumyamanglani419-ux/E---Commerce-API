# E-Commerce API

A RESTful E-Commerce API built using Node.js, Express.js, and MongoDB.

This API provides functionality for user authentication, products, and shopping cart management.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API
- Thunder Client / Postman for API testing

## 📁 Project Structure

```text
e-comm-api/
│
├── Controllers/
│   ├── cart.js
│   ├── product.js
│   └── user.js
│
├── Middlewares/
│   └── Auth.js
│
├── Models/
│   ├── Cart.js
│   ├── Product.js
│   └── User.js
│
├── Routes/
│   ├── cart.js
│   ├── product.js
│   └── user.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js