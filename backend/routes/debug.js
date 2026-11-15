
"use strict";

const express = require("express");
const router = express.Router();

const { analyzeCode } = require("../services/ai");

router.post("/analyze", async (req, res, next) => {
  try {
    const { code, language } = req.body || {};

    if (typeof code !== "string" || !code.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide code to analyze."
      });
    }

    const result = await analyzeCode(code, language);

    return res.status(result.success ? 200 : 501).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
