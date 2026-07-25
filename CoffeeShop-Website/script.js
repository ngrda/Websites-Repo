if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Safety fallback para el Hero ---------- */
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

  /* ---------- Control de Tabs del Menú ---------- */
  const tabButtons = document.querySelectorAll('.tabbar button');
  const panels = document.querySelectorAll('.menu-panel');

  function activateTab(tabName) {
    const targetBtn = document.querySelector(`.tabbar button[data-tab="${tabName}"]`);
    if (!targetBtn) return;

    tabButtons.forEach(b => b.classList.toggle('active', b === targetBtn));
    panels.forEach(p => p.classList.toggle('active', p.id === `panel-${tabName}`));
  }

  document.querySelectorAll('.tabbar, [data-open-tab]').forEach(container => {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-tab], [data-open-tab]');
      if (!btn) return;
      const tabName = btn.dataset.tab || btn.dataset.openTab;
      if (tabName) {
        activateTab(tabName);
        // Si el clic viene del banner de temporada, hacemos scroll hacia la sección del menú
        if (btn.hasAttribute('data-open-tab')) {
          const menuHeader = document.getElementById('menu');
          if (menuHeader) {
            menuHeader.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  /* ---------- Mobile Nav Toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }

  /* ---------- Navbar & Parallax en Scroll ---------- */
  const siteNav = document.querySelector('.site-nav');
  const scrollProgress = document.getElementById('scrollProgress');
  const heroBg = document.getElementById('heroBg');

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    siteNav.classList.toggle('scrolled', y > 12);

    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = (docHeight > 0 ? (y / docHeight) * 100 : 0) + '%';
    }

    if (heroBg && !prefersReducedMotion) {
      heroBg.style.transform = `translateY(${Math.min(y * 0.25, 160)}px)`;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll Reveal ---------- */
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

  /* ---------- Efectos magnéticos y Spotlight ---------- */
  if (!prefersReducedMotion) {
    document.querySelectorAll('.btn, .nav-order-btn, .btn-ghost-dark').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.18}px, ${(e.clientY - rect.top - rect.height / 2) * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => el.style.transform = '');
    });

    document.querySelectorAll('.spotlight').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
        el.style.setProperty('--y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
      });
    });
  }

  /* ---------- Merch Carousel ---------- */
  const merchTrack = document.getElementById('merchTrack');
  if (merchTrack) {
    const slides = Array.from(merchTrack.querySelectorAll('.carousel-slide'));
    const dotsWrap = document.getElementById('merchDots');
    const prevBtn = document.getElementById('merchPrev');
    const nextBtn = document.getElementById('merchNext');
    let active = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      slides.forEach((slide, i) => {
        const offset = i - active;
        const absOffset = Math.abs(offset);

        slide.style.setProperty('--offset', offset);
        slide.style.setProperty('--scale', absOffset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.62);
        slide.style.setProperty('--opacity', absOffset === 0 ? 1 : absOffset === 1 ? 0.55 : 0);
        slide.style.setProperty('--z', 5 - absOffset);
        slide.style.setProperty('--pe', absOffset >= 2 ? 'none' : 'auto');
        slide.dataset.active = offset === 0;

        const link = slide.querySelector('a');
        if (link) link.tabIndex = offset === 0 ? 0 : -1;
      });

      dots.forEach((dot, i) => dot.classList.toggle('active', i === active));
      if (prevBtn) prevBtn.disabled = active === 0;
      if (nextBtn) nextBtn.disabled = active === slides.length - 1;
    }

    function goTo(index) {
      active = Math.max(0, Math.min(slides.length - 1, index));
      render();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(active - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(active + 1));

    slides.forEach((slide, i) => {
      slide.addEventListener('click', (e) => {
        if (slide.dataset.active !== 'true') {
          e.preventDefault();
          goTo(i);
        }
      });
    });

    let startX = 0, isDragging = false;
    const viewport = merchTrack.parentElement;
    if (viewport) {
      viewport.addEventListener('pointerdown', (e) => { startX = e.clientX; isDragging = true; });
      viewport.addEventListener('pointerup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 40) goTo(active + (diff < 0 ? 1 : -1));
      });
      viewport.addEventListener('pointercancel', () => { isDragging = false; });
    }

    render();
  }
});
