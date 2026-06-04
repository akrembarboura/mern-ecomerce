# MERN E-Commerce

A full-stack e-commerce application built with MongoDB, Express.js, React, and Node.js.

## Overview

This project is designed to provide a complete online shopping experience, including authentication, product management, shopping cart functionality, and an administrative dashboard.

## Features

### Customer

* User registration and authentication
* Product browsing and search
* Product filtering
* Shopping cart
* Checkout process
* Order history
* Profile management

### Admin

* Dashboard overview
* Product management (Create, Read, Update, Delete)
* Order management
* User management
* Analytics and reporting

## Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcrypt

## Project Structure

```text
mern-ecommerce/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/akrembarboura/mern-ecommerce.git
```

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

Backend:

```bash
npm run server
```

Frontend:

```bash
npm run dev
```

## Screenshots

Add screenshots of:

* Homepage
* Product Listing Page
* Product Details Page
* Shopping Cart
* Authentication Pages
* Admin Dashboard

## Roadmap

* Authentication System
* Product Management
* Shopping Cart
* Order Management
* Stripe Integration
* Product Reviews
* Wishlist
* Email Notifications

## Contributing

Contributions and suggestions are welcome.

## License

This project is licensed under the MIT License.

## Author

Akrem Barboura

LinkedIn: https://www.linkedin.com/in/akrembarboura
