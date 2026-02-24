export function initHeader() {

  const body = document.body;
  const logo = document.getElementById("logo-header");
  const header = document.querySelector("header");
  const wasInitiallyDark = body.classList.contains("dark-header");

  if (logo) {
    function updateLogo() {
      if (body.classList.contains("dark-header")) {
        logo.src = logo.dataset.dark;
      } 
      else {
        logo.src = logo.dataset.light;
      }
    }

    updateLogo();

    const observer = new MutationObserver(updateLogo);
    observer.observe(body, { attributes: true, attributeFilter: ["class"] });
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
      if (wasInitiallyDark) {
        body.classList.remove("dark-header");
      }
    }
    else {
      header.classList.remove("scrolled");
      if (wasInitiallyDark) {
        body.classList.add("dark-header");
      }
    }
  });
}