import { initHeader } from "./modules/header.js";
import { initMenu } from "./modules/menu.js";
import { initFilters } from "./modules/filters.js";
import { initMasonry } from "./modules/masonry.js";
import { initAnimations } from "./modules/animations.js";
import { initAnalytics }  from "./modules/analytics.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMenu();
  initFilters();
  initAnimations();
  initAnalytics();
});

window.addEventListener("load", () => {
  initMasonry();
});