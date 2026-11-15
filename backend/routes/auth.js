
"use strict";

const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.status(501).json({
    success: false,
    message: "Registration is not connected to a database yet."
  });
});

router.post("/login", (req, res) => {
  res.status(501).json({
    success: false,
    message: "Login is not connected to authentication yet."
  });
});

router.post("/logout", (req, res) => {
  res.status(501).json({
    success: false,
    message: "Logout is not configured yet."
  });
});

module.exports = router;
