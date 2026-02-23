let currentColumns = 0;
let resizeTimer;

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

function filterCards(activeFilters) {

  const cards = document.querySelectorAll(".case-card");

  cards.forEach(card => {

    const categories = card.dataset.category.split(" ");

    const match = activeFilters.every(filter =>
      categories.includes(filter)
    );

    if (activeFilters.length === 0 || match) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
      card.style.opacity = 0;   
    }
  });
  setTimeout(function() { masonryLayout(); }, 350);
}



document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".cases-filter button");
  let activeFilters = [];

  buttons.forEach(button => {

    button.addEventListener("click", function () {

      const filter = this.dataset.filter;

      if (filter === "all") {
        activeFilters = [];
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
      } else {

        this.classList.toggle("active");

        activeFilters = Array.from(buttons)
          .filter(btn => btn.classList.contains("active") && btn.dataset.filter !== "all")
          .map(btn => btn.dataset.filter);

        document.querySelector('[data-filter="all"]').classList.remove("active");
      }

      updateURL(activeFilters);
      filterCards(activeFilters);

    });

  });

});

function updateURL(filters) {

  const url = new URL(window.location);

  if (filters.length > 0) {
    url.searchParams.set("category", filters.join(","));
  } else {
    url.searchParams.delete("category");
  }

  window.history.replaceState({}, "", url);

}


document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");

  if (categoryParam) {

    const filtersFromURL = categoryParam.split(",");

    filtersFromURL.forEach(filter => {
      const btn = document.querySelector(`[data-filter="${filter}"]`);
      if (btn) btn.classList.add("active");
    });

    filterCards(filtersFromURL);

  }
});
/* FILTRO ANTIGO 
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
*/
/* Dark Header */
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

function masonryLayout() {

  const grid = document.querySelector(".masonry-grid");
  const cards = Array.from(document.querySelectorAll(".case-card:not(.is-hidden)"));

  if (!grid) return;

  if (cards.length === 0) {
    grid.style.height = "0px";
    return;
  }

  const gap = 32;
  const columnWidth = cards[0].offsetWidth;
  const columns = Math.max(1, Math.floor(grid.clientWidth / (columnWidth + gap)));

  if (columns === currentColumns && grid.dataset.initialized === "true") {
    return;
  }

  currentColumns = columns;
  grid.dataset.initialized = "true";

  let columnHeights = new Array(columns).fill(0);

  cards.forEach(card => {

    const minColumn = columnHeights.indexOf(Math.min(...columnHeights));

    const x = minColumn * (columnWidth + gap);
    const y = columnHeights[minColumn];

    card.style.transform = `translate(${x}px, ${y}px)`;

    columnHeights[minColumn] += card.offsetHeight + gap;

  });

  grid.style.height = Math.max(...columnHeights) + "px";
  grid.classList.add("is-ready");
}

window.addEventListener("load", function() {

  const images = document.querySelectorAll(".case-card img");

  let loadedImages = 0;

  images.forEach(img => {
    if (img.complete) {
      loadedImages++;
    } else {
      img.addEventListener("load", () => {
        loadedImages++;
        if (loadedImages === images.length) {
          masonryLayout();
        }
      });
    }
  });

  if (loadedImages === images.length) {
    masonryLayout();
  }

});

window.addEventListener("resize", function() {

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(function() {
    masonryLayout();
  }, 200);

});
