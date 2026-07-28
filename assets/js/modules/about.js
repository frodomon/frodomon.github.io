export function initAbout() {
  initTypedHats();
  initMantrasCarousel();
  initTimelineFilters();
}

/* ================= TYPED HATS ================= */

function initTypedHats() {

  const el = document.getElementById("typed-hats");
  if (!el) return;

  let words = [];
  try {
    words = JSON.parse(el.dataset.words || "[]");
  } catch (e) {
    words = [];
  }
  if (!words.length) return;

  if (typeof Typed === "undefined") return;

  new Typed("#typed-hats", {
    strings: words,
    typeSpeed: 55,
    backSpeed: 28,
    loop: true,
    backDelay: 1800,
    startDelay: 400,
    showCursor: true,
    cursorChar: "|"
  });
}

/* ================= MANTRAS CAROUSEL ================= */

function initMantrasCarousel() {

  const el = document.querySelector(".mantras-swiper");
  if (!el) return;

  if (typeof Swiper === "undefined") return;

  new Swiper(".mantras-swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 700,
    spaceBetween: 32, // == --space-7
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

/* ================= TIMELINE FILTERS ================= */

function initTimelineFilters() {

  const scope = document.getElementById("about-timeline");
  if (!scope) return;

  const buttons = scope.querySelectorAll(".filter-btn");
  if (!buttons.length) return;

  const items = scope.querySelectorAll(".timeline-item");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      buttons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");

      const filter = this.dataset.filter;

      items.forEach(item => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hidden", !match);
      });
    });
  });
}
