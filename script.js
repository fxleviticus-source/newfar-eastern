document.addEventListener('DOMContentLoaded', () => {
  // ---------- Welcome / loading animation (home page only) ----------
  const welcome = document.getElementById('welcome');
  if (welcome) {
    const alreadySeen = sessionStorage.getItem('nfe-welcome-seen');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function hideWelcome() {
      welcome.classList.add('hide');
      sessionStorage.setItem('nfe-welcome-seen', '1');
      document.body.style.overflow = '';
    }

    if (alreadySeen) {
      welcome.remove();
    } else {
      document.body.style.overflow = 'hidden';
      const duration = reduceMotion ? 600 : 2000;
      const timer = setTimeout(hideWelcome, duration);

      const skipBtn = document.getElementById('welcome-skip');
      if (skipBtn) {
        skipBtn.addEventListener('click', () => {
          clearTimeout(timer);
          hideWelcome();
        });
      }

      welcome.addEventListener('transitionend', () => {
        if (welcome.classList.contains('hide')) welcome.remove();
      });
    }
  }

  // ---------- Mobile nav toggle ----------
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.querySelectorAll('.main-nav a:not(.mobile-search-link)').forEach((a) => {
      a.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  // ---------- Scroll reveal ----------
  const groups = document.querySelectorAll('[data-reveal-group]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.reveal');
            items.forEach((item, i) => {
              item.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;
              item.classList.add('is-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    groups.forEach((g) => observer.observe(g));

    const loose = document.querySelectorAll('.reveal:not([data-reveal-group] .reveal)');
    const singleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            singleObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    loose.forEach((el) => {
      if (!el.closest('[data-reveal-group]')) singleObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Category rail arrows (desktop) ----------
  document.querySelectorAll('.category-rail-wrap').forEach((wrap) => {
    const rail = wrap.querySelector('.category-rail');
    const prev = wrap.querySelector('.rail-arrow.prev');
    const next = wrap.querySelector('.rail-arrow.next');
    if (!rail) return;
    const scrollAmount = () => rail.clientWidth * 0.7;
    if (prev) prev.addEventListener('click', () => rail.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => rail.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  });

  // ---------- Contact form (demo submit) ----------
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message sent';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 2600);
    });
  }

  // ---------- Reservation form (demo confirmation state) ----------
  const resForm = document.getElementById('reservation-form');
  const resCard = document.getElementById('reservation-form-card');
  const resConfirm = document.getElementById('reservation-confirm');
  if (resForm && resCard && resConfirm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      resCard.style.display = 'none';
      resConfirm.classList.add('show');
    });
    const again = document.getElementById('reservation-again');
    if (again) {
      again.addEventListener('click', () => {
        resConfirm.classList.remove('show');
        resCard.style.display = '';
        resForm.reset();
      });
    }
  }

  // ---------- Global search modal (shared across all pages) ----------
  const searchModal = document.getElementById('search-modal');
  if (searchModal && typeof MENU_INDEX !== 'undefined') {
    const openBtns = document.querySelectorAll('[data-open-search]');
    const closeBtn = document.getElementById('search-modal-close');
    const input = document.getElementById('global-search-input');
    const results = document.getElementById('global-search-results');
    const hint = document.getElementById('global-search-hint');

    function openModal() {
      searchModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input.focus(), 60);
    }
    function closeModal() {
      searchModal.classList.remove('show');
      document.body.style.overflow = '';
    }

    openBtns.forEach((btn) => btn.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
    searchModal.addEventListener('click', (e) => { if (e.target === searchModal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && searchModal.classList.contains('show')) closeModal(); });

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '';
        hint.style.display = 'block';
        return;
      }
      hint.style.display = 'none';
      const matches = MENU_INDEX.filter((item) => item.searchText.includes(q)).slice(0, 40);
      if (!matches.length) {
        results.innerHTML = '<div class="search-hint">Nothing found. Try searching for another dish.</div>';
        return;
      }
      results.innerHTML = matches
        .map((item) => {
          const priceStr = item.price.map((p) => (p.l ? `${p.l} ${p.v}` : p.v)).join(' / ');
          return `<a class="search-result-item" href="menu.html#${item.catId}">
            <span><span class="name">${item.name}</span><span class="cat">${item.catName}</span></span>
            <span class="price">${priceStr}</span>
          </a>`;
        })
        .join('');
    });
  }
});
