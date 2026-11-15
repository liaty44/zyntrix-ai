
"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/auth");
const debugRoutes = require("./routes/debug");
const builderRoutes = require("./routes/builder");
const rateLimit = require("./middleware/rateLimit");

const app = express();
const PORT = process.env.PORT || 3000;

// Security and request settings
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "100kb" }));

// Basic health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "ZYNTRIX AI",
    message: "Backend server is running."
  });
});

// API rate limiting
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  maxRequests: 30
});

// API routes
app.use("/api/auth", apiLimiter, authRoutes);
app.use("/api/debug", apiLimiter, debugRoutes);
app.use("/api/builder", apiLimiter, builderRoutes);

// Unknown route handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found."
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal server error."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`ZYNTRIX AI server running on port ${PORT}`);
});
