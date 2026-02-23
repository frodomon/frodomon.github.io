document.addEventListener("DOMContentLoaded", function () {

  const body = document.querySelector("body");
  const logo = document.getElementById("logo-header");

  function updateLogo() {
    if (body.classList.contains("dark-header")) {
      logo.src = logo.dataset.dark;
    } else {
      logo.src = logo.dataset.light;
    }
  }
  updateLogo();
  
  const observer = new MutationObserver(updateLogo);
  observer.observe(header, { attributes: true, attributeFilter: ["class"] });

});

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".cases-filter button");
  const cards = document.querySelectorAll(".case-card");

  buttons.forEach(button => {

    button.addEventListener("click", function () {

      const filter = this.dataset.filter;

      buttons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      cards.forEach(card => {

        const categories = card.dataset.category;

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  });

});