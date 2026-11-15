
"use strict";

/* ZYNTRIX AI — DEBUGGER DEMO */

document.addEventListener("DOMContentLoaded", () => {
  const debugButton = document.querySelector("#debugButton");
  const codeInput = document.querySelector("#codeInput");
  const resultBox = document.querySelector("#debugResult");

  if (!debugButton || !codeInput || !resultBox) return;

  debugButton.addEventListener("click", () => {
    const code = codeInput.value.trim();

    if (!code) {
      resultBox.textContent = "Please enter some code first.";
      return;
    }

    resultBox.textContent =
      "Demo mode: AI debugging is not connected yet. Your code has not been sent anywhere.";
  });
});
