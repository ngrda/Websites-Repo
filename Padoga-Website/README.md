# Pagoda Restaurant

🌐 **[Live Demo](https://pagoda-website.onrender.com)**

A two-page website for **Pagoda Restaurant**, a Chinese-American kitchen on Santa Claus Lane in North Pole, Alaska — home page, full menu, reviews, photo feed, and location/hours, with DoorDash ordering built in.

## Features

- **Hero** — full-bleed background image with the brand mark and a link to the full menu.
- **About & Food** — two-column reveal-on-scroll sections introducing the restaurant and its cooking style, each paired with a photo.
- **Highlights ticker** — a scrolling marquee of awards and callouts (e.g. Readers' Choice win, delivery info) that loops seamlessly and pauses on hover — but only on real pointer devices, so it never gets stuck "paused" on touch.
- **Menu** — hand-picked "House Selections" on the home page, plus a full categorized menu (`menu.html`) with a sticky category jump bar.
- **Reviews carousel** — cross-fades through Tripadvisor reviews with prev/next controls and a link to the full review page.
- **Photo feed strip** — an Instagram-style scrolling photo carousel with a heart-hover overlay, running faster on mobile than on desktop.
- **Visit section** — embedded Google Map, address, hours table, phone/email, and a DoorDash ordering link.
- **Scroll effects** — scroll-reveal animations on section entry, all automatically disabled for users with `prefers-reduced-motion` set (the ticker is the one exception — it keeps running so highlights are still communicated).
- **Mobile-friendly nav** — collapsible hamburger menu with an off-canvas panel.

## Tech stack

- **HTML5** — two-page semantic layout (`index.html`, `menu.html`)
- **CSS3** — custom properties/design tokens, ~5 responsive breakpoints, `prefers-reduced-motion` support
- **Vanilla JavaScript** — no framework, no build step; a single `DATA` object drives every piece of content (hours, contact info, reviews, ticker highlights, and the entire menu) and renders it into both pages on load

## Project structure

```
.
├── index.html       # Hero, about/food, ticker, menu callout, reviews, feed, visit/location, footer
├── menu.html        # Full menu page with sticky category jump bar
├── styles.css       # Site-wide styling
├── script.js        # DATA object (all content) + render logic, nav, scroll effects, reviews/ticker/feed behavior
├── images/
│   ├── big.png      # Hero background
│   ├── small.png
│   ├── c1.png … c4.png
└── README.md
```

> **Note:** All restaurant content — hours, contact details, reviews, ticker highlights, and the full menu — lives in the `DATA` object at the top of `script.js`. There's no CMS or backend; edit that object and both pages re-render themselves from it on load.

## Reliability notes

- **Single source of content** — hours, menu items, reviews, and ticker highlights are defined once in `DATA` and rendered into the DOM, so `index.html`'s menu callout and `menu.html`'s full menu never drift out of sync as long as prices are kept consistent where a dish appears in both places.
- **Ticker & photo carousel motion** are pure CSS `animation` marquees. Hover-to-pause is scoped to `@media (hover: hover) and (pointer: fine)` so it only applies with a real mouse, and `prefers-reduced-motion: reduce` disables decorative motion (reveal-on-scroll, button pulse, image zoom) without silencing the ticker.

## Getting started

The site is live at **https://pagoda-website.onrender.com** — no local setup needed to view it.

## Author

**Nuria García**
