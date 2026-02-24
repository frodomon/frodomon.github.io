export function initHeader() {

  const body = document.body;
  const logo = document.getElementById("logo-header");
  const header = document.querySelector("header");

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
    if (window.scrollY > 80) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
}