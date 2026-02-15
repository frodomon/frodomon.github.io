document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".overlay-nav");
  const links = document.querySelectorAll(".overlay-content a");

  function openMenu() {
    toggle.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    toggle.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  toggle.addEventListener("click", function () {
    overlay.classList.contains("active") ? closeMenu() : openMenu();
  });

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  overlay.addEventListener("click", function (e) {
    if (!e.target.closest(".overlay-content")) {
      closeMenu();
    }
  });

})