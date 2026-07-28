Read every file listed below completely before doing anything.
Do not make any changes. This is an audit only.

@_layouts/default.html
@_layouts/index.html
@_layouts/cases.html
@_layouts/case.html
@_layouts/about.html
@_layouts/blog.html
@_layouts/post.html
@_includes/header.html
@_includes/footer.html
@_includes/menu.html
@_includes/breadcrumb.html
@_includes/language-switcher.html
@_includes/structured-data.html
@_includes/dark-hero.html
@_includes/mantras-carousel.html
@_includes/typed-hats.html
@_includes/related-cases.html
@_includes/related-posts.html
@_includes/post-card.html
@_includes/post-sidebar.html
@_includes/post-standard.html
@_includes/post-image.html
@_includes/post-video.html
@_includes/post-link.html
@_includes/post-gallery.html
@_includes/post-audio.html
@_includes/post-card-standard.html
@_includes/post-card-image.html
@_includes/post-card-video.html
@_includes/post-card-audio.html
@_includes/post-card-link.html
@_includes/post-card-gallery.html
@404.html
@css/main.scss
@css/_components.scss
@css/_layout.scss
@css/_pages.scss
@css/_reset.scss
@css/_responsive.scss
@css/_tokens.scss
@css/_typography.scss
@css/_utilities.scss
@css/_blog.scss
@_config.yml
@about.md
@es/about.md
@index.md
@es/index.md
@cases.md
@es/cases.md
@blog.md
@es/blog.md
@assets/js/app.js
@assets/js/modules/masonry.js
@assets/js/modules/filters.js
@assets/js/modules/blog.js
@assets/js/modules/about.js
@assets/js/modules/header.js
@assets/js/modules/menu.js
@assets/js/modules/animations.js
@assets/js/modules/analytics.js

Also read all files inside _cases/, _blog/ and _data/.

Note: header.js, menu.js, animations.js and analytics.js were missing from
this list for most of the project's history — that gap is exactly how a
real bug (two modules independently toggling the same header state at
different scroll thresholds, one of them silently breaking the dark-hero
background) went undetected across many audit rounds. Every file that
app.js imports and runs on every page load must stay in this list, even
if it feels like "just glue code."

---

AUDIT RULES

The reference architecture for this project is:
- Templates live in _layouts/ — one template per page type, 
  used by both EN and ES
- Content lives in front matter of .md files — never hardcoded 
  in templates
- Bilingual content in _data/ uses separate EN and ES files
  (e.g. mantras.yml / mantras_es.yml)
- page.lang controls language switching in templates
- Primary language is English, secondary is Spanish. The blog's
  content is drafted in Spanish first as an editorial workflow
  choice — this does NOT invert the site's URL convention: root
  is still EN and /es/ is still ES for blog.md and every _blog/
  post, exactly like cases.md and _cases/*.md.
- All CSS lives in css/main.scss and its partials (_tokens.scss,
  _reset.scss, _typography.scss, _layout.scss, _components.scss,
  _pages.scss, _utilities.scss, _blog.scss, _responsive.scss),
  imported via @use from main.scss (compiled by Jekyll's built-in
  Sass converter — no build step or external tooling involved)
- All JS lives in assets/js/modules/ and is imported from app.js
- No inline styles anywhere
- No inline scripts anywhere
- Liquid handles all data binding — no JS reads content 
  that Liquid should provide

---

AREA 1 — ARCHITECTURE AUDIT

For each layout file in _layouts/:

1. Template purity
   - Is there any content hardcoded in the template that should 
     come from front matter or _data/?
   - List every hardcoded string found (text, URLs, labels)
   - Is every user-facing string coming from front matter or 
     site.data with correct page.lang switching?

2. Liquid correctness
   - Are all variables assigned before being used?
   - Are there any filters applied incorrectly?
   - Are there any if/for blocks that could be simplified?
   - Is page.lang used consistently to switch between EN and ES 
     data files across all layouts?

3. Include usage
   - Is each include used correctly with the right parameters?
   - Are there any includes that duplicate logic already in 
     another include?
   - Is there any logic in _layouts/ that belongs in an include?

4. Front matter consistency
   - For each page type (index, cases, case, about, blog, post), 
     are the front matter field names identical between EN and 
     ES files?
   - Are there any fields present in EN but missing in ES or 
     vice versa?
   - Are required fields (lang, permalink, meta_title, 
     meta_description) present in every .md file?
   - ref: is required only in _cases/*.md and _blog/*.md 
     (collection items paired by ref: for hreflang). index.md, 
     cases.md, about.md and blog.md (and their es/ counterparts) 
     intentionally do NOT use ref: — Jekyll already pairs them by 
     permalink convention (EN at the root, ES under the same path 
     with an /es/ prefix), which default.html resolves via 
     `page.url | remove_first: '/es'`. Do not flag missing ref: 
     on these eight files.

5. hreflang and bilingual integrity
   - For _cases/*.md and _blog/*.md: does every EN item have a 
     corresponding ES counterpart connected via ref:?
   - For index.md/cases.md/about.md/blog.md (and es/ counterparts): 
     does the EN/ES pair resolve correctly via the /es/ permalink 
     convention (no ref: expected here)?
   - Is the language switcher working correctly for all page types?

---

AREA 2 — CSS AUDIT

Read main.scss and all its partials (_tokens.scss, _reset.scss,
_typography.scss, _layout.scss, _components.scss, _pages.scss,
_utilities.scss, _blog.scss, _responsive.scss) fully, then:

1. Variable usage
   - List every CSS variable defined in :root
   - Flag every hardcoded color, size or spacing value in either 
     file that matches or should use an existing variable
   - Are there variables defined but never used?

2. Duplication
   - List every rule that appears more than once across both files
   - List every class that is defined more than once
   - Are there groups of rules that could be consolidated into 
     a single reusable class?

3. Specificity
   - Flag every use of !important
   - Flag every selector with unnecessary specificity 
     (e.g. div.class when .class is enough)
   - Are there any selector conflicts between partials 
     (e.g. a component rule fighting its own _responsive.scss 
     override)?

4. Dead CSS
   - List every class defined in CSS that does not appear in 
     any template or include file
   - List every class used in templates that does not exist 
     in any partial

5. Responsive
   - Are all breakpoints consistent across _responsive.scss?
   - Are there any layout rules in a non-responsive partial 
     that should be in _responsive.scss?
   - Are there any mobile-first violations (styles written 
     desktop-first that should be inverted)?

6. Efficiency
   - Are there longhand properties that could be shorthand?
   - Are there repeated property groups that could be a 
     reusable class?
   - Estimate the reduction in lines achievable through 
     consolidation

---

AREA 3 — HTML QUALITY AUDIT

For each template and include:

1. Semantic correctness
   - Is the heading hierarchy correct (one h1 per page, 
     logical h2/h3 order)?
   - Are semantic elements used correctly (nav, main, article, 
     section, aside, header, footer)?
   - Are there any divs used where a semantic element fits?

2. Accessibility
   - Are all images missing alt attributes?
   - Are there interactive elements (buttons, links) without 
     accessible labels?
   - Is aria-current used correctly in navigation and breadcrumb?
   - Are there any aria attributes used incorrectly?

3. Inline code violations
   - List every inline style found in any template or include
   - List every inline script found in any template or include
   - List every CDN link found outside of default.html

4. Redundancy
   - Is there any HTML block repeated across templates that 
     should be extracted into an include?

---

AREA 4 — PERFORMANCE AUDIT

1. Asset loading
   - Are all CSS files loaded in the correct order in default.html?
   - Are JS modules loaded with defer or as ES modules correctly?
   - Are there any render-blocking resources?
   - Are Google Fonts loaded with preconnect + display=swap?
   - Are there any CDN scripts loaded synchronously that should 
     be deferred?

2. Images
   - Are all images using modern formats (webp)?
   - Are width and height attributes present to prevent CLS?
   - Are images that appear below the fold missing loading="lazy"?
   - Are cover images in _cases/ front matter pointing to 
     files that actually exist in assets/images/?

3. Liquid performance
   - Are there any loops inside loops that could be flattened?
   - Are there any includes called multiple times with the 
     same output that could be assigned to a variable?

---

AREA 5 — SEO AUDIT

1. Meta tags
   - Does every page/post have a unique meta_title and 
     meta_description (no two pages sharing the exact same text)?
   - Are meta_title values within ~50-60 characters and 
     meta_description within ~150-160 characters?
   - Is the canonical URL correct and self-referencing for 
     every page (EN/ES pairs pointing to themselves, not to 
     each other)?
   - Is the robots meta tag present and correctly permissive 
     on all public pages?

2. Open Graph & Twitter Cards
   - Does every page emit og:title, og:description, og:url, 
     og:image (with width/height) and og:site_name?
   - Does og:image resolve to a real file for every page type 
     (home, cases, case, about, blog, post)?
   - Is og:locale/og:locale:alternate correct for both languages?
   - Are Twitter card tags present and consistent with Open Graph?

3. hreflang and structured data
   - Does every page emit correct hreflang (en/es/x-default) 
     pointing to real, resolvable URLs?
   - Is JSON-LD present and valid for WebSite, Person (home only), 
     Article (cases/posts only) and BreadcrumbList?
   - Do Article schema fields (datePublished, dateModified, 
     articleSection, keywords, author, publisher) resolve to 
     real front matter values, not blank/default fallbacks?
   - Does BreadcrumbList reflect the real breadcrumb trail for 
     collection items (cases and blog posts), using the dynamic 
     per-collection label, not a hardcoded one?

4. URL & indexability
   - Are permalinks clean and consistent (trailing slash) across 
     all page types, including the new blog/post types?
   - Does jekyll-sitemap correctly include cases, blog posts and 
     all normal pages in both languages?
   - Is there a robots.txt, and does it correctly allow crawling 
     of both / and /es/ trees?

5. Content SEO signals
   - Does every image — including post-card thumbnails, gallery 
     images, video posters — have meaningful alt text, not empty 
     or filename-based?
   - Is heading hierarchy (one h1 per page, logical h2/h3) intact 
     across the new blog/post templates specifically?
   - Do post_type-specific templates (video/audio/link/gallery) 
     expose enough real text content for indexing, or are they 
     effectively media-only with no crawlable text?

---

AREA 6 — DEEP TECHNICAL VERIFICATION (run before any production push)

Unlike Areas 1-5, this area is not satisfied by reading files — it
requires actually running verification commands. Nothing here is
destructive; it only reads, compiles or lints. Use the tools available
(Bash/Ruby/Node) rather than reasoning from memory about whether
something "should" work.

1. Real compilation, not just reading
   - Compile the full Sass entry point (main.scss + all partials) with
     an actual Sass compiler and confirm zero errors. Reading SCSS and
     mentally tracing the cascade is not equivalent to compiling it.
   - Run every JS file under assets/js/ (app.js + all of
     assets/js/modules/*.js) through a real syntax checker
     (e.g. `node --check`). A file can look correct on read-through and
     still have a syntax error.

2. Cross-module conflicts
   - List every `window.addEventListener(...)` / `document.addEventListener(...)`
     across all JS modules, grouped by event type. More than one
     listener for the same global event (scroll, resize, load, etc.)
     is not automatically wrong, but each one must be checked for
     whether it's fighting another module over the same class/state —
     this is exactly how the header.js/menu.js scroll-listener bug
     shipped undetected for a long time.
   - List every MutationObserver/IntersectionObserver and confirm each
     one has a single, non-overlapping purpose.
   - For any class or CSS custom property toggled by JS (e.g.
     `dark-header`, `scrolled`, `active`, `is-hidden`), confirm only one
     module owns writing to it. If two modules write to the same class,
     that's a finding regardless of whether it happens to render
     correctly today.

3. Dead code and leftovers
   - grep for `console.log`, `debugger`, `TODO`, `FIXME`, `XXX` across
     all JS, and flag anything found.
   - Flag unused function declarations (defined but never called) and
     variables left over after a partial refactor.

4. Regression sweep (re-run even if these were clean in a prior round)
   - Every image path referenced from front matter (image, cover_image,
     journey_image, featured_image, photo, gallery `path:` entries)
     resolves to a real file on disk.
   - Every `id="..."` in every layout/include is unique within the
     files that render it — including includes called in a loop
     (post-card.html, case-card markup, etc.), where a hardcoded ID
     becomes a duplicate-ID bug the moment the loop runs more than once.
   - Every meta_title (~50-60 chars) and meta_description (~150-160
     chars) across every page/case/post is still in range, and no two
     pages share identical text.
   - robots.txt and the favicon/apple-touch-icon links in default.html
     point to files that actually exist.

---

REPORT FORMAT

Present findings in this order:
CRITICAL — breaks functionality, architecture or accessibility
IMPORTANT — duplication, wrong pattern, missing optimization  
MINOR — small inconsistencies, style issues

For each finding include:
- File name and line reference if possible
- What the problem is
- What the correct pattern should be

Do not suggest any fixes yet. Wait for my approval.
