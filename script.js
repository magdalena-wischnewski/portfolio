/* Mobile nav toggle, publications expand/collapse, footer year */
(function () {
  "use strict";

  // --- Mobile navigation ---
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close after tapping a link
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );
    // Close when tapping outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // --- Publications view all / show less ---
  const viewBtn = document.getElementById("viewAllBtn");
  const allPubs = document.getElementById("allPublications");
  if (viewBtn && allPubs) {
    viewBtn.addEventListener("click", () => {
      const open = allPubs.classList.toggle("open");
      viewBtn.textContent = open ? "Show fewer publications" : "View all publications";
      viewBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // --- Footer year ---
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
