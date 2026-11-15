
/* =================================
   ZYNTRIX AI — MAIN APP JAVASCRIPT
================================= */

"use strict";

// Run after the page has loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeButtons();
  initializeYear();
});

// Mobile navigation
function initializeNavigation() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

// Handle buttons with data-message attributes
function initializeButtons() {
  const buttons = document.querySelectorAll("[data-message]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const message = button.dataset.message;

      if (message) {
        showAppMessage(message);
      }
    });
  });
}

// Display a simple app message
function showAppMessage(message) {
  let notice = document.getElementById("zyntrix-notice");

  if (!notice) {
    notice = document.createElement("div");
    notice.id = "zyntrix-notice";
    notice.setAttribute("role", "status");

    Object.assign(notice.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      maxWidth: "90%",
      padding: "14px 20px",
      background: "#171d35",
      color: "#ffffff",
      border: "1px solid #a78bfa",
      borderRadius: "10px",
      zIndex: "9999",
      textAlign: "center"
    });

    document.body.appendChild(notice);
  }

  notice.textContent = message;
}

// Automatically update footer year
function initializeYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}
