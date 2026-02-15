document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const links = document.querySelectorAll(".nav a");

  function closeMenu() {
    toggle.classList.remove("active");
    nav.classList.remove("active");
  }

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Cerrar cuando clickeas un link
  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar cuando clickeas fuera
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav") && !event.target.closest(".menu-toggle")) {
      closeMenu();
    }
  });

});