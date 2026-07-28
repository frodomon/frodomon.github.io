export function initHeader() {

  const body = document.body;
  const logo = document.getElementById("logo-header");

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

  // El toggle de header.scrolled al hacer scroll vive en menu.js —
  // acá solo se resuelve el logo (claro/oscuro) según la clase del body.
}