document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  const links = nav.querySelectorAll("a");

  function openMenu() {
    toggle.classList.add("active");
    nav.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    toggle.classList.remove("active");
    nav.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.contains("active") ? closeMenu() : openMenu();
  });

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav") && !e.target.closest(".menu-toggle")) {
      closeMenu();
    }
  });

});