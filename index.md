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
<section>
  <h2>What I Do</h2>
  <ul>
    <li>Lead design in high-risk financial environments</li>
    <li>Align product, engineering and business stakeholders</li>
    <li>Transform ambiguity into scalable product decisions</li>
    <li>Design systems that reduce cognitive and operational risk</li>
  </ul>
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
<section>
  <h2>How I Lead</h2>

  <p>
    I believe design leadership is about decision architecture,
    not visual authority.
  </p>

  <ul>
    <li>Define principles before defining screens</li>
    <li>Create clarity in high-ambiguity environments</li>
    <li>Mentor designers toward autonomy and accountability</li>
    <li>Balance user needs with business and regulatory constraints</li>
  </ul>
</section>
