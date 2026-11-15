
"use strict";

const express = require("express");
const router = express.Router();

// AI website builder placeholder
router.post("/generate", (req, res) => {
  const { prompt } = req.body || {};

  if (typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please describe the website you want."
    });
  }

  res.status(501).json({
    success: false,
    message: "Website generation service is not connected yet."
  });
});

module.exports = router;
