---
layout: default
lang: es
page_key: cases
og_type: website
permalink: /cases/
---

{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.data.translations[lang][page.page_key] %}

<!-- HERO -->
<section class="cases-hero container">
  <h1>{{ t.title }}</h1>
  <p class="cases-description">{{ t.description }}</p>
</section>

<section class="cases-list container">
	{% for case in t.case_studies %}
    <article class="case-card">
      <a href="{{ case.url | relative_url }}"><h2>{{ case.title }}</h2></a> 
      <p>{{ case.subtitle }}</p>
      <p>{{ case.description }}</p>
    </article>
  {% endfor %}
</section>