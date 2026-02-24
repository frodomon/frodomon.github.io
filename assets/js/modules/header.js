export function initHeader() {

  const body = document.body;
  const logo = document.getElementById("logo-header");
  const header = document.querySelector("header");

  if (logo) {
    function updateLogo() {
      logo.src = body.classList.contains("dark-header")
        ? logo.dataset.dark
        : logo.dataset.light;
    }

    updateLogo();

    const observer = new MutationObserver(updateLogo);
    observer.observe(body, { attributes: true, attributeFilter: ["class"] });
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      header?.classList.add("scrolled");
      body.classList.remove("dark-header");
    } else {
      header?.classList.remove("scrolled");
      body.classList.add("dark-header");
    }
  });
}