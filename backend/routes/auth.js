
"use strict";

const express = require("express");
const router = express.Router();

// Registration placeholder
router.post("/register", (req, res) => {
  res.status(501).json({
    success: false,
    message: "Registration service is not connected yet."
  });
});

// Login placeholder
router.post("/login", (req, res) => {
  res.status(501).json({
    success: false,
    message: "Login service is not connected yet."
  });
});

// Logout placeholder
router.post("/logout", (req, res) => {
  res.status(501).json({
    success: false,
    message: "Logout service is not connected yet."
  });
});

module.exports = router;
