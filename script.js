// Al recargar la página, empezar siempre arriba del todo
// (salvo que la URL apunte a un ancla concreto, p. ej. index.html#contact)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (!window.location.hash) {
  window.scrollTo(0, 0);
  window.addEventListener('load', () => window.scrollTo(0, 0));
}

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  // Alternar el menú desplegable (móvil)
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Carrusel de reseñas (Tripadvisor) ----------
  const testiSlider = document.getElementById('testiSlider');
  if (testiSlider) {
    const slides = testiSlider.querySelectorAll('.testi-slide');
    const dotsWrap = document.getElementById('testiDots');
    let current = 0;
    let testiTimer = null;

    // Crear los puntos de navegación
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Ver reseña ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(i);
        restartTimer();
      });
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('button');

    function goToSlide(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function nextSlide() {
      goToSlide((current + 1) % slides.length);
    }

    function restartTimer() {
      clearInterval(testiTimer);
      testiTimer = setInterval(nextSlide, 7000);
    }

    if (slides.length > 1) {
      restartTimer();
    }
  }

  // ---------- Ubicaciones: equipo, contacto y mapa dinámicos ----------
  const LOCATIONS = {
    gillette: {
      city: 'Gillette',
      address: '501 Westside Dr, Gillette, WY 82718',
      phoneTel: '3076829411',
      phoneDisplay: '(307) 682-9411',
      team: [
        { name: 'Craig Stevens', photo: 'images/a1.jpg' },
        { name: 'Josh Crump', photo: 'images/a2.jpg' },
        { name: 'Jennifer Williams', photo: 'images/a3.jpg' },
        { name: 'Wes Brown', photo: 'images/a4.jpg' }
      ]
    },
    buffalo: {
      city: 'Buffalo',
      address: '196 US-16, Buffalo, WY 82834',
      phoneTel: '3076848200',
      phoneDisplay: '(307) 684-8200',
      team: [
        { name: 'George Saffer', photo: 'images/a5.jpg' }
      ]
    },
    mills: {
      city: 'Mills',
      address: '58 Casper View Ct, Mills, WY 82604',
      phoneTel: '3072355710',
      phoneDisplay: '(307) 235-5710',
      team: [
        { name: 'Allyson Brust', photo: 'images/a6.jpg' }
      ]
    },
    dickinson: {
      city: 'Dickinson',
      address: '600 S Main Ave Ste 101, Dickinson, ND 58601',
      phoneTel: '7013541864',
      phoneDisplay: '(701) 354-1864',
      team: [
        { name: 'Chris Hornbarger', photo: 'images/a7.jpg' }
      ]
    },
    columbus: {
      city: 'Columbus',
      address: '310 N 9th St, Columbus, MT 59019',
      phoneTel: '4063225389',
      phoneDisplay: '(406) 322-5389',
      team: [
        { name: 'CJ Suzik', photo: 'images/a8.jpg' }
      ]
    }
  };

  const locCards = document.querySelectorAll('.loc-card[data-loc]');
  const teamHeading = document.getElementById('teamHeading');
  const teamGrid = document.getElementById('teamGrid');
  const contactHeading = document.getElementById('contactHeading');
  const contactAddress = document.getElementById('contactAddress');
  const contactPhone = document.getElementById('contactPhone');
  const contactMap = document.getElementById('contactMap');

  function renderTeam(team) {
    return team.map(member => {
      if (member.placeholder) {
        return `<div class="team-card">
          <div class="team-photo-wrap"><div class="team-photo placeholder">👤</div></div>
          <div class="team-name">${member.name}</div>
        </div>`;
      }
      return `<div class="team-card">
        <div class="team-photo-wrap"><img class="team-photo" src="${member.photo}" alt="${member.name}"></div>
        <div class="team-name">${member.name}</div>
      </div>`;
    }).join('');
  }

  function selectLocation(locId) {
    const loc = LOCATIONS[locId];
    if (!loc) return;

    // Resaltar la tarjeta activa
    locCards.forEach(card => {
      card.classList.toggle('current', card.dataset.loc === locId);
    });

    // Actualizar equipo
    if (teamHeading) teamHeading.textContent = `Our Local ${loc.city} Managers`;
    if (teamGrid) {
      teamGrid.innerHTML = renderTeam(loc.team);
      teamGrid.classList.toggle('single', loc.team.length === 1);
    }

    // Actualizar panel de contacto
    if (contactHeading) contactHeading.textContent = `Big Horn Tire — ${loc.city}`;
    if (contactAddress) {
      contactAddress.textContent = loc.address;
      contactAddress.href = `https://www.google.com/maps?q=${encodeURIComponent(loc.address)}`;
    }
    if (contactPhone) {
      contactPhone.textContent = loc.phoneDisplay;
      contactPhone.href = `tel:${loc.phoneTel}`;
    }

    // Actualizar mapa
    if (contactMap) {
      contactMap.src = `https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`;
    }
  }

  locCards.forEach(card => {
    card.addEventListener('click', () => selectLocation(card.dataset.loc));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectLocation(card.dataset.loc);
      }
    });
  });

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Stagger cards that share a grid so they cascade in rather than pop together
    revealEls.forEach(el => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal')) : [el];
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx * 70, 420) + 'ms';
    });

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('in-view'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));
    }
  }
});