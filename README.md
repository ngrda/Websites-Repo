# Websites Repo by Nuria García Ruiz de Alarcón

Personal repository featuring front-end web projects — static sites and small interactive web apps built with HTML, CSS, and JavaScript.

A curated collection of website builds and demos.

## 🌐 Live Demos

* **Independence Square — Chronicles & Directory** — [Live Demo](#)
* **Coffee Shop Project** — [Live Demo](#)

---

## 🛠️ Projects

* **independence-square/** ⭐ — Bilingual (EN/ES) site chronicling the history of Independence Square in Independence, Missouri, with an interactive business directory, tour listings, and pioneer-trail info. Built with vanilla HTML/CSS/JavaScript. — [Documentation](#) · [Live Demo](#)
* **coffee-shop/** ⭐ — Modern and responsive website design for a local coffee shop featuring an interactive menu, photo gallery, location details, and business hours. Built with vanilla HTML, CSS, and JavaScript. — [Documentation](#) · [Live Demo](#)

---

## 🚀 Usage

Each project folder contains its own README with setup and usage instructions. All projects in this repo are static sites — no build step required, just open `index.html` or serve the folder locally.

---

## 👤 Author
=======
# Big Horn Tire

🌐 **[Live Demo](https://big-horn-tire-website.onrender.com)**

A multi-page website for **Big Horn Tire**, a family-owned tire and auto repair company based in Gillette, Wyoming — serving Wyoming, North Dakota, and Montana since 1963. Includes a homepage with company story, brands, locations, and financing, plus dedicated service pages for Auto Repair, Tires, OTR & Mining, and Commercial & Fleet.

## Features

- **Hero** — company intro with a hero photo, quick stats strip (address, certifications, locations, 24/7 service), and calls to action to call or get financing.
- **Brands carousel** — logo grid of major tire brands carried in stock.
- **Repair categories** — four clickable cards (Auto Repair, Auto & Light Truck Tires, OTR & Mining, Commercial & Fleet) linking out to their own detail pages.
- **Service detail pages** (`repair-auto.html`, `repair-tires.html`, `repair-otr.html`, `repair-fleet.html`) — each with a page hero, an icon grid breaking down specific services offered, a call-to-action band, and a shared footer.
- **Our Story** — company history and stats (founded, locations, combined mining expertise).
- **Employment banner** — links out to the company's Paylocity job listings.
- **Dynamic locations & contact** — clicking a location card updates the local team roster, contact info, and embedded Google Map for that location, all driven by a single `LOCATIONS` data object in JavaScript.
- **Testimonials carousel** — auto-rotating customer review slider with dot navigation.
- **Community section** — logos of local organizations and events Big Horn Tire supports.
- **Mobile-friendly nav** — collapsible hamburger menu, closes automatically on link click.
- **Scroll reveal** — staggered fade/slide-in animations for cards and sections as they enter the viewport, with automatic fallback for `prefers-reduced-motion` or unsupported browsers.

## Tech stack

- **HTML5** — semantic multi-page layout (homepage + 4 service pages sharing header/footer markup)
- **CSS3** — custom properties, responsive layout (`styles.css`)
- **Vanilla JavaScript** — no framework; handles the mobile nav, testimonials carousel, dynamic location/team/contact/map rendering, and scroll-reveal animations (`script.js`)

## Project structure

```
.
├── index.html            # Homepage: hero, brands, repairs, story, locations, contact, financing, testimonials
├── repair-auto.html       # Auto Repair service detail page
├── repair-tires.html      # Auto & Light Truck Tires service detail page
├── repair-otr.html        # OTR & Mining service detail page
├── repair-fleet.html      # Commercial & Fleet service detail page
├── styles.css             # Site-wide styling
├── script.js               # Nav, testimonials carousel, location/team/contact logic, scroll reveal
├── images/
└── README.md
```

## Locations

Gillette, WY · Buffalo, WY · Mills, WY · Dickinson, ND · Columbus, MT

## Reliability notes

- **Location data** (address, phone, team) lives in a single `LOCATIONS` object in `script.js`, so adding or updating a location only requires editing one place.
- **Scroll animations** automatically disable for users with `prefers-reduced-motion` set, or fall back to showing content immediately if `IntersectionObserver` isn't supported.

## Getting started

The site is live at **https://big-horn-tire-website.onrender.com** — no local setup needed to view it. You can also open `index.html` directly in a browser, no build step required.

## Author
>>>>>>> ac80470 (Squashed 'Big-Horn-Tire-Website/' content from commit f1af908)

**Nuria García Ruiz de Alarcón**
