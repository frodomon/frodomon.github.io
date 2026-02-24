let resizeTimer;
let observer;
let masonryInitialized = false;

export function initMasonry() {

  const grid = document.querySelector(".masonry-grid");
  if (!grid) return; // 🔥 solo existe en cases

  // Pre-render safe
  if (typeof window === "undefined") return;

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !masonryInitialized) {
        masonryInitialized = true;
        applyMasonry();
        initResize();
        document.addEventListener("layout:refresh", applyMasonry);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(grid);
}

function initResize() {
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyMasonry, 200);
  });
}

function applyMasonry() {

  const grid = document.querySelector(".masonry-grid");
  const cards = Array.from(document.querySelectorAll(".case-card:not(.is-hidden)"));

  if (!grid || cards.length === 0) {
    if (grid) grid.style.height = "0px";
    return;
  }

  if (window.innerWidth <= 480) {
    grid.style.height = "auto";
    return;
  }

  const gap = 32;
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
}