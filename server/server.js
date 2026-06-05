require("dotenv").config();
const authRouter = require("./routes/auth/auth-routes")
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

// -- Middleware --
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

// -- Routes --
app.use("/api/auth", authRouter);
app.get("/", (req, res) => res.send("Backend is running"));

// -- MongoDB --
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not set");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });