
"use strict";

/* =================================
   ZYNTRIX AI — AUTHENTICATION UI
   Frontend demo only
================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeLoginForm();
  initializeRegisterForm();
});

// Login form demo
function initializeLoginForm() {
  const loginForm = document.querySelector("#loginForm");

  if (!loginForm) return;

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginForm.querySelector(
      'input[type="email"]'
    );

    const password = loginForm.querySelector(
      'input[type="password"]'
    );

    if (!email || !password) return;

    if (!email.value.trim() || !password.value.trim()) {
      showAuthMessage("Please fill in all fields.");
      return;
    }

    showAuthMessage(
      "Login demo only. Secure authentication is not connected yet."
    );
  });
}

// Registration form demo
function initializeRegisterForm() {
  const registerForm = document.querySelector("#registerForm");

  if (!registerForm) return;

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = registerForm.querySelector(
      'input[name="password"]'
    );

    const confirmPassword = registerForm.querySelector(
      'input[name="confirmPassword"]'
    );

    if (!password || !confirmPassword) return;

    if (password.value.length < 8) {
      showAuthMessage("Password must be at least 8 characters.");
      return;
    }

    if (password.value !== confirmPassword.value) {
      showAuthMessage("Passwords do not match.");
      return;
    }

    showAuthMessage(
      "Registration demo only. Account creation is not connected yet."
    );
  });
}

// Show authentication feedback
function showAuthMessage(message) {
  let messageBox = document.querySelector("#authMessage");

  if (!messageBox) {
    messageBox = document.createElement("p");
    messageBox.id = "authMessage";
    messageBox.setAttribute("role", "status");

    messageBox.style.marginTop = "15px";
    messageBox.style.color = "#c4b5fd";

    const form = document.querySelector("#loginForm, #registerForm");

    if (form) {
      form.appendChild(messageBox);
    }
  }

  messageBox.textContent = message;
}
