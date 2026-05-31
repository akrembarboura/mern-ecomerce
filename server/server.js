require("dotenv").config();

const dns = require('dns');
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
  console.log('Using DNS servers:', dns.getServers());
} catch (e) {
  console.warn('Failed to set DNS servers:', e.message);
}

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// MongoDB connection
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI environment variable is not set");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("✓ Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`✓ Server is running on port ${PORT}`);
    });
    app.get("/", (req, res) => {
     res.send("Backend is running");
});
  })
  .catch((error) => {
    console.error("✗ Error connecting to MongoDB:", error.message);
    process.exit(1);
  });