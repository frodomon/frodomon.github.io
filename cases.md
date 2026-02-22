---
layout: default
lang: en
page_key: cases
og_type: website
permalink: /cases/
---

{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.data.translations[lang][page.page_key] %}

<!-- HERO WRAPPER -->
<section class="cases-hero-wrapper">
  <div class="cases-hero container">
    <h1 class="cases-title">{{ t.title }}</h1>
    <p class="cases-description">{{ t.description }}</p>
  </div>
</section>

<!-- CASES GRID -->
<section class="cases-grid container">
  {% for case in t.case_studies %}
  <article class="case-card">
    <a href="{{ case.url | relative_url }}">
      <div class="case-image">
        <img src="{{ case.image }}" alt="{{ case.title }}">
      </div>
      <div class="case-content">
        <h2>{{ case.title }}</h2>
        <p class="case-subtitle">{{ case.subtitle }}</p>
      </div>
    </a>
  </article>
  {% endfor %}
</section>

<script>
  document.addEventListener("DOMContentLoaded", function() {

  const header = document.querySelector("header");

  window.addEventListener("scroll", function() {

    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });

});
</script>
<script>
document.addEventListener("DOMContentLoaded", function() {

  const cards = document.querySelectorAll(".case-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });

});
</script>