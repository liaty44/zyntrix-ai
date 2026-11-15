
"use strict";

const express = require("express");
const router = express.Router();

// AI debugging placeholder
router.post("/analyze", (req, res) => {
  const { code, language } = req.body || {};

  if (typeof code !== "string" || !code.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please provide code to analyze."
    });
  }

  res.status(501).json({
    success: false,
    message: "AI debugging service is not connected yet.",
    language: language || "unknown"
  });
});

module.exports = router;
