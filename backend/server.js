
"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "ZYNTRIX AI",
    message: "Backend server is running!"
  });
});

app.listen(PORT, () => {
  console.log(`ZYNTRIX AI server running on port ${PORT}`);
});
