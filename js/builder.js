
"use strict";

/* ZYNTRIX AI — WEBSITE BUILDER DEMO */

document.addEventListener("DOMContentLoaded", () => {
  const buildButton = document.querySelector("#buildButton");
  const promptInput = document.querySelector("#websitePrompt");
  const previewBox = document.querySelector("#websitePreview");

  if (!buildButton || !promptInput || !previewBox) return;

  buildButton.addEventListener("click", () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
      previewBox.textContent = "Describe the website you want to build.";
      return;
    }

    previewBox.textContent =
      "Builder demo mode: AI generation is not connected yet.";
  });
});
