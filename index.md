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
<section class="hero container">
  <h1>{{ t.hero.title }}</h1>
  <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
  <div class="hero-cta">
    <a href="{{ '/cases/' | relative_url }}" class="btn-primary">
      {{ t.hero.cta_primary }}
    </a>
    <a href="mailto:vasquez.alf@gmail.com" class="btn-secondary">
      {{ t.hero.cta_secondary }}
    </a>
  </div>
</section>
<!-- CREDIBILITY -->
<section class="credibility container">
  <p>{{ t.credibility }}</p>
</section>
<!-- WHAT I DO -->
<section class="what-i-do container">
  <h2>{{ t.what.title }}</h2>
  <p>{{ t.what.description }}</p>
</section>
<!-- CAPABILITIES -->
<section class="capabilities container">
  <h2>{{ t.capabilities.title }}</h2>
  <div class="capability-grid">
    <div class="capability">
      <h3>{{ t.capabilities.org.title }}</h3>
      <ul>
        {% for item in t.capabilities.org.items %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="capability">
      <h3>{{ t.capabilities.product.title }}</h3>
      <ul>
        {% for item in t.capabilities.product.items %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="capability">
      <h3>{{ t.capabilities.business.title }}</h3>
      <ul>
        {% for item in t.capabilities.business.items %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
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

<section id="hero" class="container">
   <div id="hero-picture" class="col-4 flex-center-row">
   </div>
   <div class="hero-content col-8 flex-left-row">
    <h2>{{ t.home.hero.name }}</h2>
    <h1>{{ t.home.hero.title }}</h1>
    <h3 class="hero-subheadline">{{ t.home.hero.headline }}</h3>
    <p class="hero-support">{{ t.home.hero.description }}</p>
    <div class="hero-cta">
      <a href="{{ '/cases/' | relative_url }}" class="btn btn-primary">{{ t.home.hero.cta.primary }}</a>
      <a href="mailto:vasquez.alf@gmail.com" class="btn btn-secondary">{{ t.home.hero.cta.secondary }}</a>
    </div>
  </div>
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

