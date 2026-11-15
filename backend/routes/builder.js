
"use strict";

const express = require("express");
const router = express.Router();

const { generateWebsite } = require("../services/ai");

router.post("/generate", async (req, res, next) => {
  try {
    const { prompt } = req.body || {};

    if (typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please describe the website you want."
      });
    }

    const result = await generateWebsite(prompt);

    return res.status(result.success ? 200 : 501).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
