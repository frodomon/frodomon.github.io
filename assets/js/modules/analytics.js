let analyticsInitialized = false;

export function initAnalytics() {

  if (analyticsInitialized) return;
  if (typeof window === "undefined") return;

  analyticsInitialized = true;

  initGA4();
  initContentsquare();
}


/* ==============================
   GOOGLE ANALYTICS 4
============================== */

function initGA4() {

  const GA_ID = "G-9R6ZEYGM3E";

  // Evitar doble carga
  if (window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());

  window.gtag("config", GA_ID, {
    page_path: window.location.pathname,
    page_language: getCurrentLanguage()
  });
}


/* ==============================
   CONTENTSQUARE
============================== */

function initContentsquare() {

  const CS_ID = "f0a53c561bc3f";

  // Si ya existe, no volver a cargar
  if (window._uxa && window._uxa.loaded) return;

  window._uxa = window._uxa || [];

  window._uxa.push([
    "setPath",
    window.location.pathname + window.location.search
  ]);

  window._uxa.push([
    "setCustomVariable",
    1,
    "language",
    getCurrentLanguage()
  ]);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://t.contentsquare.net/uxa/${CS_ID}.js`;

  script.onload = () => {
    window._uxa.loaded = true;
  };

  document.head.appendChild(script);
}


/* ==============================
   HELPERS
============================== */

function getCurrentLanguage() {

  // Prioridad 1: atributo html lang
  if (document.documentElement.lang) {
    return document.documentElement.lang;
  }

  // Fallback por estructura de carpetas
  if (window.location.pathname.startsWith("/es/")) {
    return "es";
  }

  return "en";
}