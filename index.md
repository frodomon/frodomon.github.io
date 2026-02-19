---
layout: default
lang: en
page_key: home
og_type: website
permalink: /
---

{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.data.translations[lang][page.page_key] %}

 <!-- HERO -->
<section id="hero">
  <div class="container">
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
<section>
    <div class="container">
      <h2 class="section-title">{{ t.what.title }}</h2>
      <p class="section-lead">{{ t.what.description }}</p>
    </div>
  </section>
<!-- CAPABILITIES -->
<section class="section">
    <div class="container">
      <h2 class="section-title">{{ t.capabilities.title }}</h2>
      <div class="capability-grid">
        <div class="card">
          <h3 class="card-title">{{ t.capabilities.org.title }}</h3>
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
<section class="featured-cases container">
  <h2>{{ t.cases.title }}</h2>
  <p>{{ t.cases.description }}</p>
  <a href="{{ '/cases/' | relative_url }}" class="btn-primary">
    {{ t.cases.cta }}
  </a>
</section>
<!-- LEADERSHIP -->
<section class="leadership container">
  <h2>{{ t.leadership.title }}</h2>
  <p>{{ t.leadership.text }}</p>
</section>

<!-- FINAL CTA -->
<section class="final-cta container">
  <h2>{{ t.final.title }}</h2>
  <a href="mailto:vasquez.alf@gmail.com" class="btn-primary">
    {{ t.final.cta }}
  </a>
</section>

<section>
  <h2>Selected Work</h2>

  <article>
    <h3><a href="/janus.html">Digital Mortgage Product (Janus)</a></h3>
    <p>
      Led strategic design decisions in a regulated fintech mortgage
      product balancing compliance, clarity and business outcomes.
    </p>
  </article>

  <article>
    <h3><a href="/eltablerodeotto.html">Otto – Community Business Design</a></h3>
    <p>
      Entrepreneurial case integrating service design, business model
      strategy and technology to build a sustainable ecosystem.
    </p>
  </article>
</section>

