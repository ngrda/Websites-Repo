# Linden Street Coffeehouse & Cafe

🌐 **[Live Demo](https://coffeeshop-web.onrender.com)**

A single-page website for **Linden Street Coffeehouse & Cafe** in Lamoni, Iowa — menu, seasonal specials, merch shop, and location/hours, with online ordering built in.

## Features

- **Hero** — full-bleed background video (with a static poster fallback) and quick links to order online or jump to the menu.
- **Seasonal banner** — highlights current seasonal drinks/food and links straight to the Seasonal tab in the menu.
- **Tabbed menu** — Breakfast & Drinks, Coffee, Milkshakes/Smoothies/Frappe, Lunch, and Seasonal, each in its own panel.
- **Merch carousel** — coffee-themed tees pulled from Printify, with drag/swipe support, dot navigation, and a "See All Merch" card linking to the full shop.
- **Visit section** — embedded Google Map, address, hours, and delivery info.
- **Scroll effects** — scroll-reveal animations, a scroll progress bar, and subtle magnetic/spotlight hover effects on buttons — all disabled automatically for users with `prefers-reduced-motion` set.
- **Mobile-friendly nav** — collapsible hamburger menu.

## Tech stack

- **HTML5** — semantic single-page layout, SVG icon sprite (`<symbol>`/`<use>`) for social icons
- **CSS3** — custom properties, ~14 responsive breakpoints, `prefers-reduced-motion` support
- **Vanilla JavaScript** — no framework; handles the preloader, tab switching, mobile nav, scroll effects, and the merch carousel

## Project structure

```
.
├── index.html            # All sections: hero, menu tabs, merch, visit/location, footer
├── style.css             # Site-wide styling
├── script.js             # Preloader, tabs, nav, scroll effects, merch carousel
├── images/
└── README.md
```


## Reliability notes

- **Merch images** are hotlinked from Printify's mockup API. If a product is updated or a URL expires, the image gracefully falls back to a placeholder card (instead of a broken-image icon) — see the `.img-fallback` styles in `style.css` and the `onerror` handlers in `index.html`.
- **Hero video** is skipped entirely on slow connections or when the browser reports Data Saver mode is on (via the Network Information API), showing only the poster image in that case.

## Getting started

The site is live at **https://coffeeshop-web.onrender.com** — no local setup needed to view it.

## Author

**Nuria García Ruiz de Alarcón**
