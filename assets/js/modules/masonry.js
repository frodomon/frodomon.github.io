export function initMasonry(config = {}) {
  const {
    gridSelector = ".masonry-grid",
    cardSelector = ".case-card",
    gap = 32
  } = config;

  const grid = document.querySelector(gridSelector);
  if (!grid) return; // la página no tiene este grid

  if (typeof window === "undefined") return;

  let resizeTimer;
  let masonryInitialized = false;

  const apply = () => applyMasonry(gridSelector, cardSelector, gap);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !masonryInitialized) {
        masonryInitialized = true;
        apply();
        window.addEventListener("resize", () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(apply, 200);
        });
        document.addEventListener("layout:refresh", apply);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(grid);
}

function applyMasonry(gridSelector, cardSelector, gap) {

  const grid = document.querySelector(gridSelector);
  const cards = Array.from(document.querySelectorAll(`${cardSelector}:not(.is-hidden)`));

  if (!grid || cards.length === 0) {
    if (grid) grid.style.height = "0px";
    return;
  }

  if (window.innerWidth <= 480) {
    grid.style.height = "auto";
    grid.classList.add("is-ready");
    return;
  }

  const computedStyle = window.getComputedStyle(grid);
  const paddingTop = parseFloat(computedStyle.paddingTop);
  const paddingBottom = parseFloat(computedStyle.paddingBottom);
  const paddingHeight = paddingTop + paddingBottom;

  const columnWidth = cards[0].offsetWidth;
  const columns = Math.max(1, Math.floor(grid.clientWidth / (columnWidth + gap)));

  let columnHeights = new Array(columns).fill(0);

  cards.forEach(card => {
    const minColumn = columnHeights.indexOf(Math.min(...columnHeights));
    const x = minColumn * (columnWidth + gap);
    const y = columnHeights[minColumn];

    card.style.transform = `translate(${x}px, ${y}px)`;
    columnHeights[minColumn] += card.getBoundingClientRect().height + gap;
  });
  const maxHeight = Math.max(...columnHeights);
  grid.style.height = (maxHeight + paddingHeight) + "px";
  grid.classList.add("is-ready");
}
