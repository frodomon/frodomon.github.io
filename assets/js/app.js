import { initHeader } from "./modules/header.js";
import { initMenu } from "./modules/menu.js";
import { initFilters } from "./modules/filters.js";
import { initMasonry } from "./modules/masonry.js";
import { initAnimations } from "./modules/animations.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMenu();
  initFilters();
  initAnimations();
});

window.addEventListener("load", () => {
  initMasonry();
});