# The Local

🌐 **[Live Demo](https://the-local-website.onrender.com)**

A single-page website for **The Local**, an upscale dining spot in downtown Watertown, South Dakota — signature dishes, a full curated menu, hours, and location, all in one page.

## Features

- **Hero** — full-bleed background image with a fading title and a link straight to the menu.
- **Signature Dishes** — an asymmetric, staggered-height showcase of standout cocktails and plates; clicking a dish jumps to its category in the menu below.
- **Curated menu** — tabbed sections for Cocktails, Wine, Beer (36 taps), and Food Menu, each rendered from a single `localData` object in `script.js`. Cocktails and Food tabs pair the list with a fixed photo; Wine and Beer expand to a full-width list since they have no paired image.
- **About & Philosophy** — a two-column section pairing a chef's quote with a short restaurant philosophy blurb.
- **Location** — address, contact info, hours table, and an embedded Google Map.
- **Scroll effects** — scroll-reveal animations on section entry and staggered card/menu-row reveals, automatically disabled for users with `prefers-reduced-motion` set.
- **Mobile-friendly nav** — icons and nav links collapse into a hamburger menu with an animated dropdown below 900px.

## Tech stack

- **HTML5** — single-page semantic layout
- **CSS3** — custom properties/design tokens, one main responsive breakpoint (900px), `prefers-reduced-motion` support
- **Vanilla JavaScript** — no framework, no build step; a single `localData` object holds the entire menu (cocktails, wine, beer, food) and the About text, and renders it into the page on load and on tab click

## Project structure

```
.
├── index.html       # Header/nav, hero, signature dishes, menu, about, location, footer
├── style.css        # Site-wide styling
├── script.js        # localData object (menu + about copy) + render logic, nav, scroll reveal
├── images/
│   ├── bg.png        # Hero background
│   ├── a1.png … a3.png   # Signature dish photos
│   ├── b1.png, b2.png    # Menu preview photos (food / cocktails)
└── README.md
```

> **Note:** All menu content — cocktails, wine, beer, and food, along with prices and descriptions — lives in the `localData` object at the top of `script.js`. There's no CMS or backend; edit that object and the menu re-renders itself from it.

## Reliability notes

- **Single source of content** — the entire menu and the About section text are defined once in `localData`, so there's no risk of the on-page copy drifting from the data behind it.
- **Scroll and reveal animations** are disabled site-wide for users with `prefers-reduced-motion: reduce` set, including the hero fade-ins and the staggered dish/menu-row reveals.

## Getting started

The site is live at **https://the-local-website.onrender.com** — no local setup needed to view it.

## Author

**Nuria García Ruiz de Alarcón**
