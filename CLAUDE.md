# Portfolio — Alfredo Vásquez

Jekyll + GitHub Pages. Sitio bilingüe (EN/ES) desplegado en alfredovasquezalcala.com.
Sin entorno local de Jekyll — el build lo hace GitHub Pages directamente.

## Estructura
- `_layouts/` — default.html, index.html, cases.html, case.html
- `_cases/` — un .md por case en EN, y su versión .es.md en ES
- `_includes/` — header, footer, menu, breadcrumb, structured-data, language-switcher
- `_data/translations.yml` — cadenas de UI en EN y ES (bloques menu: y labels:)
- `es/` — páginas en español (index.md, cases.md)
- `assets/js/` — módulos ES6: app.js importa header, menu, filters, masonry, animations, analytics
- `css/` — un solo archivo de estilos (styles.css)

## Convenciones clave
- Front matter en YAML en cada .md — campos requeridos: lang, ref, permalink,
  meta_title, meta_description, headline, subheadline, excerpt, industry, client,
  context, problem, role, approach, impact (array)
- `ref:` conecta la versión EN con la ES para hreflang y language-switcher
- `translations.yml` tiene dos bloques raíz: en: y es:, cada uno con menu: y labels:
- Sin bundler, sin npm, sin frameworks — JS vanilla modular ES6, CSS vanilla

## Flujo de trabajo
- Editar archivos en VS Code
- Push a GitHub → GitHub Pages hace el build automáticamente
- Sin Jekyll local instalado