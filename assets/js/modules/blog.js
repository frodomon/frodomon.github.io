import { initMasonry } from "./masonry.js";
import { initFilters } from "./filters.js";

export function initBlog() {
  // Corren en cualquier página (no solo en el listado), porque post.html
  // también puede tener un post de tipo gallery/video/audio/link — ya sea
  // como el post principal o como related-post reusando post-card.html.
  initCardGalleries();
  initCardEmbeds();

  const grid = document.querySelector(".blog-grid");
  if (!grid) return;

  initMasonry({ gridSelector: ".blog-grid", cardSelector: ".post-card" });
  initFilters({ buttonSelector: ".filter-btn[data-filter]", cardSelector: ".post-card" });
  initMonthFilter();
  initSearch();
  initFilterReset();
  initImageLightbox();

  document.addEventListener("layout:refresh", updateNoResults);
}

function initMonthFilter() {
  const buttons = document.querySelectorAll(".filter-btn[data-month]");
  if (!buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const month = this.dataset.month;

      buttons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");

      document.querySelectorAll(".post-card").forEach(card => {
        const match = month === "all" || card.dataset.month === month;
        card.classList.toggle("is-hidden", !match);
      });

      document.dispatchEvent(new CustomEvent("layout:refresh"));
    });
  });
}

function initSearch() {
  const input = document.getElementById("post-search");
  if (!input) return;

  input.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    document.querySelectorAll(".post-card").forEach(card => {
      const title = card.querySelector(".post-title")?.textContent.toLowerCase() || "";
      const excerpt = card.querySelector(".post-excerpt")?.textContent.toLowerCase() || "";
      const match = query.length === 0 || title.includes(query) || excerpt.includes(query);
      card.classList.toggle("is-hidden", !match);
    });

    document.dispatchEvent(new CustomEvent("layout:refresh"));
  });
}

// Categoría, mes y búsqueda son mutuamente excluyentes: activar uno
// resetea los otros dos a su estado "sin filtro".
function initFilterReset() {
  const categoryButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const monthButtons = document.querySelectorAll(".filter-btn[data-month]");
  const searchInput = document.getElementById("post-search");

  const resetMonth = () => {
    monthButtons.forEach(btn => btn.classList.remove("active"));
    Array.from(monthButtons).find(btn => btn.dataset.month === "all")?.classList.add("active");
  };
  const resetCategory = () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    Array.from(categoryButtons).find(btn => btn.dataset.filter === "all")?.classList.add("active");
  };
  const resetSearch = () => {
    if (searchInput) searchInput.value = "";
  };

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => { resetMonth(); resetSearch(); });
  });
  monthButtons.forEach(btn => {
    btn.addEventListener("click", () => { resetCategory(); resetSearch(); });
  });
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim().length > 0) { resetCategory(); resetMonth(); }
    });
  }
}

// Un mini-carrusel de Swiper por cada card de tipo "gallery" en el listado —
// a diferencia del carrusel de mantras, este sí muestra flechas y dots.
function initCardGalleries() {
  if (typeof Swiper === "undefined") return;

  document.querySelectorAll(".post-card-gallery-media, .post-gallery-swiper").forEach(el => {
    new Swiper(el, {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev")
      },
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true
      }
    });
  });
}

// Las cards de video/audio arrancan livianas (miniatura + botón de play).
// El iframe real solo se inyecta cuando el usuario hace click.
function initCardEmbeds() {
  document.querySelectorAll(".post-card-play-btn").forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const media = this.closest(".post-card-media");
      if (!media) return;

      if (media.dataset.videoUrl) {
        const url = media.dataset.videoUrl;
        const isYouTube = url.includes("youtube") || url.includes("youtu.be");
        media.innerHTML = isYouTube
          ? `<iframe src="${url}" title="video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
          : `<video src="${url}" controls autoplay></video>`;
      } else if (media.dataset.audioUrl) {
        media.innerHTML = `<iframe src="${media.dataset.audioUrl}" allow="autoplay; encrypted-media" loading="lazy"></iframe>`;
        media.classList.add("is-loaded");
      } else if (media.dataset.embedUrl) {
        media.innerHTML = `<iframe src="${media.dataset.embedUrl}" frameborder="0" allowfullscreen title="LinkedIn post"></iframe>`;
        media.classList.add("is-loaded");
      }

      document.dispatchEvent(new CustomEvent("layout:refresh"));
    });
  });
}

// Las cards de tipo "image" abren un lightbox de pantalla completa
// en vez de navegar a la página del post (que no existe para este tipo).
function initImageLightbox() {
  const triggers = document.querySelectorAll(".post-card-lightbox-trigger");
  if (!triggers.length) return;

  const closeLabel = triggers[0].dataset.closeLabel || "Close";

  const lightbox = document.createElement("div");
  lightbox.className = "post-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML = `
    <button type="button" class="post-lightbox-close" aria-label="${closeLabel}">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <figure>
      <img src="" alt="">
      <figcaption></figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  const closeBtn = lightbox.querySelector(".post-lightbox-close");

  let lastFocused = null;

  const open = (trigger) => {
    lastFocused = trigger;
    img.src = trigger.dataset.lightboxImage;
    img.alt = trigger.dataset.lightboxAlt || "";
    caption.textContent = trigger.dataset.lightboxCaption || "";
    lightbox.setAttribute("aria-label", trigger.dataset.lightboxAlt || "");
    lightbox.classList.add("active");
    document.body.classList.add("menu-open");
    closeBtn.focus();
  };

  const close = () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("menu-open");
    lastFocused?.focus();
  };

  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => open(trigger));
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;
    if (event.key === "Escape") close();
    // El botón de cerrar es el único elemento enfocable del overlay —
    // atrapamos el foco ahí mientras está activo.
    if (event.key === "Tab") {
      event.preventDefault();
      closeBtn.focus();
    }
  });
}

function updateNoResults() {
  const message = document.querySelector(".no-results-message");
  if (!message) return;

  const anyVisible = Array.from(document.querySelectorAll(".post-card"))
    .some(card => !card.classList.contains("is-hidden"));

  message.classList.toggle("d-none", anyVisible);
}
