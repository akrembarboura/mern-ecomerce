const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// -- Register --
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    

    const hashed = await bcrypt.hash(password, 12);
    const user = new User({ userName, email, password: hashed });
    await user.save();

    console.log("User saved:", user);

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// -- Login -- 
const loginUser = async (req, res) => {
  res.status(200).json({ success: true, message: "Login coming soon" });
}; 

module.exports = { registerUser};