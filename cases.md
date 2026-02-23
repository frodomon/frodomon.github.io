---
layout: default
lang: en
page_key: cases
og_type: website
permalink: /cases/
body_class: dark-header
---

{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.data.translations[lang][page.page_key] %}

<!-- HERO WRAPPER -->
<section class="dark-hero-wrapper">
  <div class="dark-hero">
    <h1 class="dark-hero-title">{{ t.title }}</h1>
    <p class="dark-hero-description">{{ t.description }}</p>
  </div>
</section>
<!-- MENU FILTER -->
<div class="cases-filter">
  <button data-filter="all" class="active">All</button>
  <button data-filter="fintech">Fintech</button>
  <button data-filter="governance">Governance</button>
  <button data-filter="design-systems">Design Systems</button>
</div>
<!-- CASES GRID -->
<section class="masonry-grid">
  {% for case in t.case_studies %}
  <article class="case-card" data-category="{% for cat in case.categories %}{{ cat | downcase }} {% endfor %}">
    <a href="{{ case.url | relative_url }}">
      <div class="case-image">
        <img src="{{ case.image }}" alt="{{ case.title }}">
      </div>
      <div class="case-content">
        <span class="case-date">{{ case.date }}</span>
        <h2>{{ case.title }}</h2>
        <p class="case-subtitle">{{ case.subtitle }}</p>
        <div class="case-categories">
          {% for cat in case.categories %}
            <span class="category-tag">{{ cat }}</span>
          {% endfor %}
        </div>
      </div>
    </a>
  </article>
  {% endfor %}
</section>

<script>
  document.addEventListener("DOMContentLoaded", function() {

  const header = document.querySelector("header");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function() {

    if (window.scrollY > 80) {
      header.classList.add("scrolled");
      body.classList.remove("dark-header");
    } else {
      header.classList.remove("scrolled");
      body.classList.add("dark-header");
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