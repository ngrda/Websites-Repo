# Independence Square — Chronicles & Directory

🌐 **[Live Demo](https://independence-square-historic-information.onrender.com)**

A bilingual (English/Spanish) static website celebrating the history and present-day life of **Independence Square**, the historic heart of Independence, Missouri — founded in 1827 and once the outfitting terminal for America's westward expansion.

## Features

- **History** — the story of the Square, from its 1827 founding through the Civil War and Harry S. Truman's early political career.
- **Location** — geographic context within Jackson County.
- **Pioneer Trails** — overview of the historic trails that passed through the Square.
- **Wagon Routes** — organized tour options, launched via interactive modals.
- **Curated Pathways** — suggested self-guided routes around the Square.
- **Square Directory** — searchable/filterable directory of present-day businesses around the Square, with category filters and sorting by street.
- **Bilingual toggle (EN/ES)** — custom language switch buttons (🇺🇸 / 🇪🇸) that drive a Google Translate widget.
- Responsive design with a full-screen mobile navigation menu and scroll-reveal animations.

## Tech stack

- **HTML5** — single-page app with section-based routing (`showPage()` / `goToHomeSection()`)
- **CSS3** — custom styling, Google Fonts (Inter + Playfair Display)
- **Vanilla JavaScript** — no framework; handles navigation, search/filtering, modals, and language switching

## Project structure

```
.
├── index.html      # All page sections (history, location, trails, tours, routes, directory)
├── style.css       # Site-wide styling
├── app.js          # Navigation, search/filter logic, modals, language switching
└── README.md
└── images

```

## Getting started

The site is live at **https://independence-square-historic-information.onrender.com** — no local setup needed to view it.

## Notes

- The language switch relies on the Google Translate widget (`#google_translate_element`) being available; if you deploy this elsewhere, confirm the Google Translate script/API is still reachable.
- All content is static — the directory/tours data lives inside `app.js` (see `getBuildingsSortedByStreet`, `parseTourMeta`, `parseBulletChapters`), so updates to businesses or tours are made by editing that file directly.

## Author

**Nuria García Ruiz de Alarcón**
