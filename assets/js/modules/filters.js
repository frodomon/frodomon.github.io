export function initFilters(config = {}) {
  const {
    buttonSelector = ".cases-filter button",
    cardSelector = ".case-card"
  } = config;

  const buttons = document.querySelectorAll(buttonSelector);
  if (!buttons.length) return;

  let activeFilters = [];

  const filterCards = (filters) => {
    const cards = document.querySelectorAll(cardSelector);

    cards.forEach(card => {
      const categories = card.dataset.category.split(" ");
      const match = filters.every(filter => categories.includes(filter));
      card.classList.toggle("is-hidden", !(filters.length === 0 || match));
    });

    document.dispatchEvent(new CustomEvent("layout:refresh"));
  };

  const updateURL = (filters) => {
    const url = new URL(window.location);
    if (filters.length > 0) {
      url.searchParams.set("category", filters.join(","));
    } else {
      url.searchParams.delete("category");
    }
    window.history.replaceState({}, "", url);
  };

  const syncAriaPressed = () => {
    buttons.forEach(btn => {
      if (btn.hasAttribute("aria-pressed")) {
        btn.setAttribute("aria-pressed", btn.classList.contains("active"));
      }
    });
  };

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

        Array.from(buttons).find(btn => btn.dataset.filter === "all")?.classList.remove("active");
      }

      syncAriaPressed();
      updateURL(activeFilters);
      filterCards(activeFilters);
    });
  });

  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("category");
  if (categoryParam) {
    activeFilters = categoryParam.split(",");
    activeFilters.forEach(filter => {
      const btn = Array.from(buttons).find(b => b.dataset.filter === filter);
      if (btn) btn.classList.add("active");
    });
    syncAriaPressed();
    filterCards(activeFilters);
  }
}
