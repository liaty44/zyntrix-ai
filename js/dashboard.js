
"use strict";

/* ZYNTRIX AI — DASHBOARD */

document.addEventListener("DOMContentLoaded", () => {
  initializeDashboard();
});

function initializeDashboard() {
  const projectCount = document.querySelector("#projectCount");
  const welcomeMessage = document.querySelector("#welcomeMessage");

  if (welcomeMessage) {
    welcomeMessage.textContent = "Welcome to your ZYNTRIX AI workspace.";
  }

  if (projectCount) {
    projectCount.textContent = "0";
  }

  document.querySelectorAll("[data-dashboard-message]").forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.dataset.dashboardMessage);
    });
  });
}
