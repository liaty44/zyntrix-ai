
"use strict";

/* =================================
   ZYNTRIX AI — MAIN APP
================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();
  initializeAppMessages();
  initializeCurrentYear();
});

// Mobile navigation menu
function initializeMobileMenu() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });
}

// App message buttons
function initializeAppMessages() {
  const buttons = document.querySelectorAll("[data-message]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showAppMessage(button.dataset.message);
    });
  });
}

// Display notification
function showAppMessage(message) {
  if (!message) return;

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
      padding: "14px 20px",
      maxWidth: "90%",
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

// Update footer year
function initializeCurrentYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const year = new Date().getFullYear();

  yearElements.forEach((element) => {
    element.textContent = year;
  });
}
