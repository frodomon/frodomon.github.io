export function initHeader() {

  const body = document.body;
  const logo = document.getElementById("logo-header");
  const header = document.querySelector("header");

  if (logo && header) {
    function updateLogo() {
      const isDarkContext = body.classList.contains("dark-header") && !header.classList.contains("scrolled");
      logo.src = isDarkContext ? logo.dataset.dark : logo.dataset.light;
    }

    updateLogo();

    // body.dark-header ya no cambia dinámicamente (es fijo según el tipo
    // de página), pero header.scrolled sí — lo togglea menu.js al hacer
    // scroll. Observamos el header, no el body, para reaccionar a eso.
    const observer = new MutationObserver(updateLogo);
    observer.observe(header, { attributes: true, attributeFilter: ["class"] });
  }
}