---
layout: default
lang: en
page_key: home
permalink: /
---

{% assign t = site.data.translations[page.lang] %}

<section id="hero" class="container">
   <div id="hero-picture" class="col-4 flex-center-row">
   </div>
   <div class="hero-content col-8 flex-left-row">
    <h1>{{ t.home.hero.name }}</h1>
    <h2>{{ t.home.hero.title }}</h2>
    <p class="hero-subheadline">{{ t.home.hero.headline }}</p>
    <p class="hero-support">{{ t.home.hero.description }}</p>
    <div class="hero-cta">
      <a href="{{ '/cases.html' | relative_url }}" class="btn btn-primary">{{ t.home.hero.cta.primary }}</a>
      <a href="mailto:vasquez.alf@gmail.com" class="btn btn-secondary">{{ t.home.hero.cta.secondary }}</a>
    </div>
  </div>
</section>
<section class="container">
  <div class="col-12 flex-center-row">
    <h2>{{ t.leadership.title }}</h2>
    <p>{{ t.leadership.description }}</p>
  </div>
  <div class="col-4 flex-center-row">  
    <h3>{{ t.leadership.experience.title }}</h3>
    <ul>
      {% for item in t.leadership.experience.highlights %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="col-4 flex-center-row">
    <h3>{{ t.leadership.principles.title }}</h3>
    <ul>
      {% for item in t.leadership.principles.items %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
  <div class="col-4 flex-center-row">
    <h3>{{ t.leadership.teamwork.title }}</h3>
    <ul>
      {% for item in t.leadership.teamwork.items %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
</section>
