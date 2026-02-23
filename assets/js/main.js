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
  observer.observe(body, { attributes: true, attributeFilter: ["class"] });

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

document.addEventListener("DOMContentLoaded", function() {

  const header = document.querySelector("header");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function() {

    if (window.scrollY > 80) {
      header.classList.add("scrolled");
      body.classList.remove("dark-header");
    } else {
      header.classList.remove("scrolled");
      body.classList.add("dark-header");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {

  const cards = document.querySelectorAll(".case-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });
});