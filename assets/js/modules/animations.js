let observer;
let animationsInitialized = false;

export function initAnimations() {

  // Prerender safe (por si algún día usas SSR más complejo)
  if (typeof window === "undefined") return;

  const cards = document.querySelectorAll(".case-card");
  if (!cards.length) return; // 🔥 solo existe en cases

  if (animationsInitialized) return;
  animationsInitialized = true;

  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  cards.forEach(card => {
    prepareCard(card);
    observer.observe(card);
  });

  // 🔥 Si el layout cambia (filtros / masonry), re-observar nuevos visibles
  document.addEventListener("layout:refresh", reobserveVisibleCards);
}

/* ================= HANDLERS ================= */

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateIn(entry.target);
      observer.unobserve(entry.target); // 🔥 solo animar una vez
    }
  });
}

function reobserveVisibleCards() {
  const cards = document.querySelectorAll(".case-card:not(.is-hidden)");
  cards.forEach(card => observer.observe(card));
}

/* ================= ANIMATION LOGIC ================= */

function prepareCard(card) {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
}

function animateIn(card) {
  card.style.opacity = "1";
  card.style.transform = "translateY(0)";
}