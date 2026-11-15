
"use strict";

// Authentication guard placeholder.
// Protected routes should reject requests until
// real token verification is implemented.

function requireAuth(req, res, next) {
  return res.status(501).json({
    success: false,
    message: "Authentication is not configured yet."
  });
}

module.exports = requireAuth;
