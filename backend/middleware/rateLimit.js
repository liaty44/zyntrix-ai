
"use strict";

const requests = new Map();

function rateLimit(options = {}) {
  const windowMs = options.windowMs || 60000;
  const maxRequests = options.maxRequests || 30;

  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();

    let record = requests.get(key);

    if (!record || now - record.start >= windowMs) {
      record = { start: now, count: 0 };
    }

    record.count += 1;
    requests.set(key, record);

    if (record.count > maxRequests) {
      return res.status(429).json({
        success: false,
        message: "Too many requests. Try again later."
      });
    }

    next();
  };
}

module.exports = rateLimit;
