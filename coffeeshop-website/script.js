/* ---------- Force page to open at the top (hero title) ---------- */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
window.addEventListener('load', () => window.scrollTo(0, 0));

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Safety net: hero text must never stay invisible ---------- */
  // These elements start at opacity:0 and rely on a CSS animation to reveal
  // them. If the animation is skipped for any reason (reduced-motion,
  // browser quirks, etc.) they'd otherwise stay invisible forever.
  setTimeout(() => {
    document.querySelectorAll('.eyebrow-tag, .hero h1, .hero-cta, .hero-meta, .preloader-mark').forEach(el => {
      el.style.opacity = '1';
    });
  }, 1800);

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    document.body.classList.add('preloading');
    setTimeout(() => {
      preloader.classList.add('hide');
      document.body.classList.remove('preloading');
      preloader.addEventListener('transitionend', () => preloader.remove(), { once: true });
    }, 2000);
  }

  /* ---------- Tabs ---------- */
  const tabButtons = document.querySelectorAll('.tabbar button');
  function activateTab(tabName) {
    const btn = document.querySelector('.tabbar button[data-tab="' + tabName + '"]');
    if (!btn) return;
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tabName).classList.add('active');
  }
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  /* ---------- Links that should jump to the menu and open a specific tab ---------- */
  document.querySelectorAll('[data-open-tab]').forEach(link => {
    link.addEventListener('click', () => activateTab(link.dataset.openTab));
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  // Show/hide the mobile menu when clicking the hamburger button
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  
  // Automatically close the mobile menu when clicking any link
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  /* ---------- Sticky nav shrink on scroll ---------- */
  const siteNav = document.querySelector('.site-nav');
  const scrollProgress = document.getElementById('scrollProgress');

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    
    // Shrink/darken the navbar after scrolling down more than 12px
    siteNav.classList.toggle('scrolled', y > 12);

    // Reading progress bar: width = % of the page already scrolled
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + '%';

    // Hero video parallax effect (scrolls slower than the page scroll)
    // Limited to 160px so the video doesn't detach too much from its container
    if (heroBg && !prefersReducedMotion) {
      const offset = Math.min(y * 0.25, 160);
      heroBg.style.transform = `translateY(${offset}px)`;
    }
  }

  const heroBg = document.getElementById('heroBg');
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Magnetic buttons ---------- */
  if (!prefersReducedMotion) {
    const magneticEls = document.querySelectorAll('.btn, .nav-order-btn, .btn-ghost-dark');
    magneticEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ---------- Merch carousel ---------- */
  const merchTrack = document.getElementById('merchTrack');
  if (merchTrack) {
    const slides = Array.from(merchTrack.querySelectorAll('.carousel-slide'));
    const total = slides.length;
    const dotsWrap = document.getElementById('merchDots');
    const prevBtn = document.getElementById('merchPrev');
    const nextBtn = document.getElementById('merchNext');
    let active = 0;

    // build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

    // Renders the carousel based on the active slide: the active slide remains
    // centered and at full size; adjacent slides shrink and fade out,
    // and slides that are 2+ positions away are completely hidden.
    function render() {
      slides.forEach((slide, i) => {
        const offset = i - active; // no wrap-around: shirt 1 never shows the CTA card to its left

        const absOffset = Math.abs(offset);
        const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.62;
        const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.55 : 0;
        const z = 5 - absOffset;
        const isActive = offset === 0;

        // These CSS variables are read by style.css to position each slide
        slide.style.setProperty('--offset', offset);
        slide.style.setProperty('--scale', scale);
        slide.style.setProperty('--opacity', opacity);
        slide.style.setProperty('--z', z);
        
        // Highly distant slides should not capture clicks/touches
        slide.style.setProperty('--pe', absOffset >= 2 ? 'none' : 'auto');
        slide.dataset.active = isActive;

        // Only the link of the active slide is accessible via keyboard navigation (Tab)
        const link = slide.querySelector('a');
        if (link) link.tabIndex = isActive ? 0 : -1;
      });
      dots.forEach((dot, i) => dot.classList.toggle('active', i === active));

      // Disable arrows at the boundaries (no wrap-around functionality)
      prevBtn.disabled = active === 0;
      nextBtn.disabled = active === total - 1;
    }

    // Changes the active slide, preventing it from going out of the [0, total-1] range
    function goTo(index) {
      active = Math.max(0, Math.min(total - 1, index));
      render();
    }

    prevBtn.addEventListener('click', () => goTo(active - 1));
    nextBtn.addEventListener('click', () => goTo(active + 1));

    // click a side slide to bring it to center
    slides.forEach((slide, i) => {
      slide.addEventListener('click', (e) => {
        if (slide.dataset.active !== 'true') {
          e.preventDefault();
          goTo(i);
        }
      });
    });

    // Swipe support (drag with finger/mouse) on the carousel
    let startX = 0, isDragging = false;
    const viewport = merchTrack.parentElement;
    viewport.addEventListener('pointerdown', (e) => {
      startX = e.clientX;
      isDragging = true;
    });
    viewport.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diff = e.clientX - startX;
      
      // 40px threshold to prevent confusing a real swipe with a simple click/tap
      if (Math.abs(diff) > 40) {
        diff < 0 ? goTo(active + 1) : goTo(active - 1);
      }
    });
    viewport.addEventListener('pointercancel', () => { isDragging = false; });

    render();
  }

  /* ---------- Spotlight cursor glow on cards ---------- */
  if (!prefersReducedMotion) {
    const spotlightEls = document.querySelectorAll('.spotlight');
    spotlightEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--x', x + '%');
        el.style.setProperty('--y', y + '%');
      });
    });
  }

});