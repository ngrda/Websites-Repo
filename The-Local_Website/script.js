// ==========================================================================
// SIEMPRE ARRIBA AL REFRESCAR
// ==========================================================================
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// ==========================================================================
// THE LOCAL — COMPLETE MENU DATA & FIXED LOCAL IMAGES
// ==========================================================================

const localData = {
  aboutText: "At The Local, there's something for everyone. From hearty classics to fresh, flavorful bowls and handhelds, our menu is built for all tastes. And yes - we've got delicious vegetarian options that never feel like an afterthought.",
  footnote: "Follow our Facebook page for feature menu and updates.",
  
  // Imágnenes fijas locales para Cocktails (b1.png) y Food (b2.png)
  fixedImages: {
    cocktails: "images/b2.png",
    food: "images/b1.png"
  },

  categories: {
    cocktails: [
      { name: "French 75", detail: "Beefeater Gin, Fresh Lemon Juice, Simple Syrup, Prosecco", price: "" },
      { name: "Godfather", detail: "Scotch, Amaretto", price: "" },
      { name: "Old Fashion", detail: "Muddled Sugar Cubes, Bourbon, Bitters", price: "" },
      { name: "Monkey Gland", detail: "Beefeater Gin, Orange Juice, Grenadine, Absinthe", price: "" },
      { name: "Scofflaw", detail: "Overproof Rye, Dry Vermouth, Lemon Juice, Orange Bitters", price: "" },
      { name: "Manhattan", detail: "Rye Whiskey, Carpano Antica, Bitters", price: "" },
      { name: "Ward 8", detail: "Overproof Rye, Lemon Juice, Orange Juice, Grenadine", price: "" },
      { name: "Sidecar", detail: "Cognac, Cointreau, Lemon Juice", price: "" },
      { name: "Boulevardier", detail: "Bourbon, Cointreau, Lemon Juice, Carpano Antica, Campari", price: "" },
      { name: "Negroni", detail: "Beefeater Gin, Carpano Antica, Campari", price: "" },
      { name: "Last Word", detail: "Beefeater Gin, Green Chartreuse, Luxardo Liqueur, Lime Juice", price: "" },
      { name: "The Todd Douglas", detail: "R.H. Dareinger, Simple Syrup, Cointreau, Lemon Juice", price: "" },
      { name: "Sazerac", detail: "Overproof Rye, Muddled Sugar, Bitters, Absinthe", price: "" },
      { name: "The Kevin", detail: "Double Jameson Orange & Diet Coke", price: "" },
      { name: "Double Standard", detail: "Overproof Bourbon, Dry Gin, Lime Juice, Lemon Juice, Grenadine, & Simple Syrup - Topped With Soda", price: "" }
    ],

    food: [
      { name: "Shrimp Cocktail", detail: "Chilled jumbo shrimp with cocktail sauce", price: "$10" },
      { name: "Gochujang Pork Belly", detail: "Crispy glazed pork belly", price: "$14" },
      { name: "Baked French Onion Soup", detail: "Rich beef broth, caramelized onions, melted cheese", price: "$7" },
      { name: "Caprese Salad", detail: "Mozzarella cheese, sliced tomatoes, chopped basil, olive oil & 18yr old balsamic", price: "$7" },
      { name: "Wedge Salad", detail: "Iceberg topped with bacon, cherry tomatoes, crumbled bleu cheese & dressing", price: "$8" },
      { name: "Burger of the Week", detail: "Homage to Harry's. Ask your server for details. Served with fries", price: "$18" },
      { name: "New York Strip Steak", detail: "Prepared to your liking, served with market vegetables & accompaniment", price: "$38" },
      { name: "Filet Mignon", detail: "Prepared to your liking, served with market vegetables & accompaniment", price: "$44" },
      { name: "Pan Seared Halibut", detail: "Served with lemon caper beurre blanc sauce, market vegetables", price: "$38" },
      { name: "Coffee Crusted Pork Tenderloin", detail: "Perched atop accompaniment, market vegetables, demi-glace drizzle", price: "$25" },
      { name: "Mediterranean Pasta", detail: "Penne, spinach, olives, tomatoes, feta & grilled chicken (GF available)", price: "$24" },
      { name: "Mediterranean Salad", detail: "Spinach, olives, sundried tomatoes, feta, grilled chicken & parmesan", price: "$18" },
      { name: "Shrimp Scampi Pasta", detail: "Tail-on shrimp, olive oil, garlic & white wine on black ink linguine", price: "$33" },
      { name: "Spicy Bolognese Pasta", detail: "Beef & pork ragu, stewed tomatoes, garlic, red pepper & shallots in penne", price: "$24" },
      { name: "Vegetarian Entree", detail: "Chef's seasonal vegetarian creation", price: "$22" },
      { name: "Chocolate Chip Brownie with Vainilla Ice Cream", detail: "Topped with vanilla ice cream (Gluten-Free)", price: "$7" },
      { name: "Bananas Foster", detail: "Classic warm caramelized banana dessert", price: "$7" },
      { name: "Vanilla Crepe Cake", detail: "Delicate layered crepes (Gluten-Free)", price: "$8" },
      { name: "S'more Balls", detail: "Crispy marshmallow & chocolate bite-sized treats", price: "$7" }
    ],

    wine: [
      { name: "Lindeman's Moscato", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Lindeman's Chardonnay", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Lindeman's Pinot Grigio", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Ruffino Prosecco", detail: "Sparkling — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Kim Crawford Sauvignon Blanc", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Kim Crawford Pinot Grigio", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Baci Dolci Pink", detail: "Rosé — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Angeline Chardonnay", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "J. Lohr Riesling", detail: "Blanc Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Lindeman's Merlot", detail: "Rouge Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Angeline Pinot Noir", detail: "Rouge Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Plungerhead Zinfandel", detail: "Rouge Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Franciscan Estate Cabernet", detail: "Rouge Varietal — Offered by Glass or Bottle", price: "Glass / Btl" },
      { name: "Stonecap Riesling", detail: "Blanc Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Whitehaven Sauvignon Blanc", detail: "Blanc Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Silverado Chardonnay", detail: "Blanc Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "St. Suprey Sauvignon Blanc", detail: "Blanc Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Ferrari-Carano Fumé Blanc", detail: "Blanc Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Franco Serra Barbera D'Alba", detail: "Rouge Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Keenan Cabernet", detail: "Rouge Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Kokomo Cuvée", detail: "Rouge Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Prisoner Red Blend", detail: "Rouge Varietal — Iconic Blend", price: "Bottle Only" },
      { name: "Prisoner Cabernet", detail: "Rouge Varietal — Premium Reserve", price: "Bottle Only" },
      { name: "Decoy Red Blend", detail: "Rouge Varietal — Reserve Selection", price: "Bottle Only" },
      { name: "Austin Cabernet", detail: "Rouge Varietal — Paso Robles", price: "Bottle Only" },
      { name: "Caymus", detail: "Rouge Varietal — Napa Valley", price: "Bottle Only" },
      { name: "Rivetti Famiglia Barolo", detail: "Rouge Varietal — Italian Red", price: "Bottle Only" },
      { name: "Quilt Cabernet Sauvignon", detail: "Rouge Varietal — Napa Valley", price: "Bottle Only" },
      { name: "Franco Serra Barbaresco", detail: "Rouge Varietal — Italian Red", price: "Bottle Only" },
      { name: "Franco Serra Barolo", detail: "Rouge Varietal — Italian Red", price: "Bottle Only" },
      { name: "Keenan Zinfandel", detail: "Rouge Varietal — Reserve Selection", price: "Bottle Only" }
    ],

    beer: [
      { name: "Krostrain Fairy Nectar", detail: "Draft Beer on Tap", price: "Tap" },
      { name: "B Nectar Zombie Killer", detail: "Cider / Mead on Tap", price: "Tap" },
      { name: "Lupulin Tropical Fun Pants", detail: "Fruited Ale on Tap", price: "Tap" },
      { name: "Looks Daisy Gazer IPA", detail: "Craft India Pale Ale", price: "Tap" },
      { name: "Fair State Pin Seeker Pilsner", detail: "Crisp German-style Pilsner", price: "Tap" },
      { name: "Drekker Smol Pog Sour", detail: "Fruited Sour Ale", price: "Tap" },
      { name: "Michelob Ultra", detail: "American Light Lager", price: "Tap" },
      { name: "Eponymous Boiz to the Yard Peach Sour", detail: "Peach Fruited Sour", price: "Tap" },
      { name: "Coors Light", detail: "Classic American Lager", price: "Tap" },
      { name: "Samuel Smith Chocolate Stout", detail: "Rich English Dark Stout", price: "Tap" },
      { name: "Surly Furious IPA", detail: "Bold Minnesota IPA", price: "Tap" },
      { name: "Eponymous Krampus Raspberry Sour", detail: "Tart Raspberry Sour", price: "Tap" },
      { name: "Lupulin Fashion Mullet IPA", detail: "Hoppy Craft IPA", price: "Tap" },
      { name: "Crispin Mimosa Cider", detail: "Refreshing Apple Cider", price: "Tap" },
      { name: "Sawyer Blood Orange Blonde", detail: "Citrus Blonde Ale", price: "Tap" },
      { name: "Lost Cabin Bruce Banner IPA", detail: "South Dakota Local IPA", price: "Tap" },
      { name: "Miller Lite", detail: "Pilsner Light Lager", price: "Tap" },
      { name: "Drekker Ectogasm IPA", detail: "Hazy IPA", price: "Tap" },
      { name: "Fair State Big Doinks DDH IPA", detail: "Double Dry Hopped IPA", price: "Tap" },
      { name: "Surly Winterized Lager", detail: "Seasonal Dark Lager", price: "Tap" },
      { name: "Central Waters Bourbon Stout", detail: "Barrel-Aged Imperial Stout", price: "Tap" },
      { name: "Twisted Tea", detail: "Hard Iced Tea", price: "Tap" },
      { name: "Boulevard Wheat Ale", detail: "Unfiltered Wheat Beer", price: "Tap" },
      { name: "Fernson's Lion's Paw Lager", detail: "South Dakota Craft Lager", price: "Tap" },
      { name: "Big Sky Moose Drool", detail: "Brown Ale", price: "Tap" },
      { name: "Left Hand Milk Stout", detail: "Creamy Stout on Nitrogen", price: "Tap" },
      { name: "Drekker Mango Lime Fruited Sour", detail: "Tropical Sour Ale", price: "Tap" },
      { name: "Busch Light", detail: "Crisp Light Lager", price: "Tap" },
      { name: "Voodoo Ranger IPA", detail: "American Craft IPA", price: "Tap" },
      { name: "Kona Big Wave", detail: "Golden Ale", price: "Tap" }
    ]
  }
};

// ==========================================================================
// SCROLL REVEAL — anima secciones/elementos al entrar en el viewport
// ==========================================================================
function initScrollReveal(root = document) {
  if (!('IntersectionObserver' in window)) {
    root.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  root.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    // Evita re-observar elementos ya animados (útil si se llama tras un re-render)
    if (!el.classList.contains('reveal-visible')) {
      observer.observe(el);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const aboutBody = document.getElementById('about-body-text');
  const aboutFootnote = document.getElementById('about-footnote');
  
  if (aboutBody) aboutBody.innerText = localData.aboutText;
  if (aboutFootnote) aboutFootnote.innerText = localData.footnote;

  const tabButtons = document.querySelectorAll('.tab-btn');
  const fullRow = document.getElementById('menu-full-row');
  const halfRow = document.getElementById('menu-half-row');
  const previewImgContainer = document.querySelector('.menu-preview-img');
  const previewImg = document.getElementById('menu-dynamic-img');
  const gridContainer = document.querySelector('.menu-content-grid');

  function renderMenuCategory(categoryKey) {
    if (!fullRow || !halfRow) return;
    
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === categoryKey);
    });

    fullRow.innerHTML = '';
    halfRow.innerHTML = '';

    const items = localData.categories[categoryKey] || [];
    const hasImage = !!localData.fixedImages[categoryKey];

    if (hasImage) {
      if (previewImgContainer) previewImgContainer.style.display = 'block';
      if (previewImg) previewImg.src = localData.fixedImages[categoryKey];
      if (gridContainer) gridContainer.classList.remove('full-width-mode');

      const splitIndex = Math.max(2, Math.ceil(items.length * 0.55));
      const topItems = items.slice(0, splitIndex);
      const bottomItems = items.slice(splitIndex);

      topItems.forEach(item => fullRow.appendChild(createRowItem(item)));
      bottomItems.forEach(item => halfRow.appendChild(createRowItem(item)));

    } else {
      if (previewImgContainer) previewImgContainer.style.display = 'none';
      if (gridContainer) gridContainer.classList.add('full-width-mode');

      items.forEach(item => halfRow.appendChild(createRowItem(item)));
    }

    animateMenuItemsIn();
  }

  function animateMenuItemsIn() {
    const rows = [...fullRow.querySelectorAll('.menu-list-item'), ...halfRow.querySelectorAll('.menu-list-item')];
    rows.forEach((row, i) => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(16px)';
      row.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      row.style.transitionDelay = `${Math.min(i, 12) * 0.04}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          row.style.opacity = '1';
          row.style.transform = 'translateY(0)';
        });
      });
    });
  }

  function createRowItem(item) {
    const row = document.createElement('div');
    row.className = 'menu-list-item';
    
    const priceTag = item.price ? `<span class="item-price" style="font-weight:600; color:var(--accent-gold); margin-left:12px;">${item.price}</span>` : '';
    
    row.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:2px;">
        <span class="item-name">${item.name}</span>
        <span class="item-desc" style="font-size:0.8rem; color:var(--text-muted);">${item.detail}</span>
      </div>
      <span class="item-dots"></span>
      ${priceTag}
    `;
    return row;
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const category = e.currentTarget.getAttribute('data-category');
      renderMenuCategory(category);
    });
  });

  const dishCards = document.querySelectorAll('.dish-card');
  dishCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      if (category) {
        renderMenuCategory(category);
        const menuSection = document.getElementById('menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  renderMenuCategory('cocktails');

  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.onsubmit = (e) => {
      e.preventDefault();
      alert('Thank you for choosing The Local! Your reservation request has been received.');
    };
  }
});
