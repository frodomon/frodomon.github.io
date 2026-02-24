export function initAnalytics() {

  // Google
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-9R6ZEYGM3E";
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-9R6ZEYGM3E');

  // Contentsquare
  const csScript = document.createElement("script");
  csScript.src = "https://t.contentsquare.net/uxa/f0a53c561bc3f.js";
  document.head.appendChild(csScript);
}