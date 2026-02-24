---
layout: default
lang: en
page_key: cases
title: Cases
og_type: website
permalink: /cases/
body_class: dark-header
---

{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.data.translations[lang][page.page_key] %}
{% assign cases = site.cases | where: "lang", page.lang %}

<!-- HERO WRAPPER -->
<section class="dark-hero-wrapper">
  <div class="dark-hero">
    <h1 class="dark-hero-title">{{ t.title }}</h1>
    <p class="dark-hero-description">{{ t.description }}</p>
  </div>
</section>
<!-- BREADCRUMBS -->
{% if page.layout != 'home' %}
  {% include breadcrumb.html %}
{% endif %}
<!-- MENU FILTER -->
{% assign all_categories = "" | split: "" %}
{% for case in cases %}
  {% for cat in case.categories %}
    {% unless all_categories contains cat %}
      {% assign all_categories = all_categories | push: cat %}
    {% endunless %}
  {% endfor %}
{% endfor %}
<div class="cases-filter">
  <button data-filter="all" class="active">All</button>
  {% for cat in all_categories %}
    <button data-filter="{{ cat | downcase }}">
      {{ cat }}
    </button>
  {% endfor %}
</div>
<!-- CASES GRID -->
<section class="masonry-grid">
  {% for case in cases %}
  <article class="case-card" data-date="{{ case.date }}" data-category="{{ case.categories | join: ' ' }}">
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