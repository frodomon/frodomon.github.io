---
layout: default
lang: en
title: Home
page_key: home
og_type: website
permalink: /
---

{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.data.translations[lang][page.page_key] %}

 <!-- HERO -->
<section id="hero">
  <div>
    <p class="hero-eyebrow">{{ t.hero.eyebrow }}</p>
    <h1 class="hero-title">{{ t.hero.title }}</h1>
    <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
    <div class="hero-actions">
      <a href="{{ '/cases/' | relative_url }}" class="btn btn-primary">{{ t.hero.cta_primary }}</a>
      <a href="mailto:vasquez.alf@gmail.com" class="btn btn-secondary">{{ t.hero.cta_secondary }}</a>
    </div>
  </div>
</section>
<!-- CREDIBILITY -->
 <section class="credibility">
    <div>
      <p class="credibility-text">{{ t.credibility }}</p>
    </div>
  </section>
<!-- WHAT I DO -->
<section class="leadership">
    <div>
      <h2 class="section-title">{{ t.what.title }}</h2>
      <p class="section-lead">{{ t.what.description }}</p>
    </div>
  </section>
<!-- CAPABILITIES -->
<section>
  <div>
    <h2 class="section-title">{{ t.capabilities.title }}</h2>
    <div class="capability-grid">
      <div class="card">
        <h3>{{ t.capabilities.org.title }}</h3>
        <ul class="list">
          {% for item in t.capabilities.org.items %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ t.capabilities.product.title }}</h3>
        <ul class="list">
          {% for item in t.capabilities.product.items %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ t.capabilities.business.title }}</h3>
        <ul class="list">
          {% for item in t.capabilities.business.items %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</section>
<!-- FEATURED CASES -->
<section class="featured-cases">
  <h2 class="section-title">{{ t.cases.title }}</h2>
  <p>{{ t.cases.description }}</p>
  <div class="hero-actions">
    <a href="{{ '/cases/' | relative_url }}" class="btn btn-primary">{{ t.cases.cta }}</a>
  </div>
</section>
<!-- LEADERSHIP PHILOSOPHY-->
<section class="leadership">
  <h2 class="section-title">{{ t.leadership.title }}</h2>
  <p>{{ t.leadership.text }}</p>
</section>
<!-- SIGNATURE-->
<section class="credibility">
  <div>
    <p class="signature-text">{{ t.signature.statement }}</p>
  </div>
</section>
<!-- FINAL CTA -->
<section>
  <h2 class="section-title">{{ t.final.title }}</h2>
  <a href="mailto:vasquez.alf@gmail.com" class="btn btn-primary">{{ t.final.cta }}</a>
</section>

