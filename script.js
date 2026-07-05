const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// View all publications toggle
const viewAllPublicationsBtn = document.getElementById("viewAllPublicationsBtn");
const allPublicationsList = document.getElementById("all-publications-list");

if (viewAllPublicationsBtn && allPublicationsList) {
  viewAllPublicationsBtn.addEventListener("click", () => {
    const isOpen = allPublicationsList.classList.toggle("show-publications");
    viewAllPublicationsBtn.textContent = isOpen ? "Show fewer publications" : "View all publications";
    viewAllPublicationsBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
