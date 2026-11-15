
"use strict";

const API_KEY = process.env.AI_API_KEY;

async function callAI(prompt) {
  if (!API_KEY) {
    return {
      success: false,
      message: "AI provider is not configured. Add an API key privately."
    };
  }

  // Provider integration will be added after choosing
  // a provider and its official API endpoint.
  return {
    success: false,
    message: "AI provider integration is not implemented yet."
  };
}

async function analyzeCode(code, language) {
  if (typeof code !== "string" || !code.trim()) {
    throw new Error("Code is required.");
  }

  return callAI(
    `Analyze this ${language || "unknown"} code and explain possible bugs:\n${code}`
  );
}

async function generateWebsite(prompt) {
  if (typeof prompt !== "string" || !prompt.trim()) {
    throw new Error("Website prompt is required.");
  }

  return callAI(
    `Create a website based on this description:\n${prompt}`
  );
}

module.exports = {
  analyzeCode,
  generateWebsite
};
