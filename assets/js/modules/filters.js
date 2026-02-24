export function initFilters() {

  const buttons = document.querySelectorAll(".cases-filter button");
  if (!buttons.length) return;

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

        document.querySelector('[data-filter="all"]')?.classList.remove("active");
      }

      updateURL(activeFilters);
      filterCards(activeFilters);
    });
  });

  initFromURL();
}

function filterCards(activeFilters) {

  const cards = document.querySelectorAll(".case-card");

  cards.forEach(card => {
    const categories = card.dataset.category.split(" ");
    const match = activeFilters.every(filter => categories.includes(filter));
    card.classList.toggle("is-hidden", !(activeFilters.length === 0 || match));
  });

  // 🔥 desacoplado
  document.dispatchEvent(new CustomEvent("layout:refresh"));
}

function updateURL(filters) {
  const url = new URL(window.location);

  if (filters.length > 0) {
    url.searchParams.set("category", filters.join(","));
  } else {
    url.searchParams.delete("category");
  }

  window.history.replaceState({}, "", url);
}

function initFromURL() {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");

  if (!categoryParam) return;

  const filtersFromURL = categoryParam.split(",");

  filtersFromURL.forEach(filter => {
    const btn = document.querySelector(`[data-filter="${filter}"]`);
    if (btn) btn.classList.add("active");
  });

  filterCards(filtersFromURL);
}