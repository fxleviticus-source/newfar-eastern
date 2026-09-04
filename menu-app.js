document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('menu-content');
  const catNav = document.getElementById('category-nav');

  if (!content || typeof MENU === 'undefined') return;

  MENU.forEach((cat) => {
    const btn = document.createElement('button');
    btn.textContent = cat.name;
    btn.dataset.target = cat.id;
    btn.addEventListener('click', () => {
      setActivePill(cat.id);
      const el = document.getElementById('cat-' + cat.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    catNav.appendChild(btn);
  });

  function setActivePill(id) {
    catNav.querySelectorAll('button').forEach((b) => {
      b.classList.toggle('active', b.dataset.target === id);
    });
    const activeBtn = catNav.querySelector(`button[data-target="${id}"]`);
    if (activeBtn) {
      // Center the active pill inside the horizontal nav only — never touch
      // vertical page scroll (scrollIntoView here would fight the sticky
      // toolbar and yank the page back to the top while scrolling).
      const targetLeft =
        activeBtn.offsetLeft - catNav.clientWidth / 2 + activeBtn.clientWidth / 2;
      catNav.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  }

  function priceTagsHtml(price) {
    return price
      .map((p) => {
        const label = p.l ? `<span class="tag-label">${p.l}</span>` : '';
        return `<span class="price-tag">${label}${p.v}</span>`;
      })
      .join('');
  }

  MENU.forEach((cat) => {
    const section = document.createElement('section');
    section.className = 'menu-category';
    section.id = 'cat-' + cat.id;
    section.dataset.catId = cat.id;

    if (cat.photo) {
      const photoWrap = document.createElement('div');
      photoWrap.className = 'menu-category-photo';
      photoWrap.innerHTML = `<img src="${cat.photo}" alt="${cat.name}" loading="lazy">`;
      section.appendChild(photoWrap);
    }

    const head = document.createElement('div');
    head.className = 'menu-category-head';
    head.innerHTML = `<h2>${cat.name}</h2><span class="count">${cat.items.length} item${cat.items.length !== 1 ? 's' : ''}</span>`;
    section.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'menu-items-grid';

    cat.items.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'menu-item-card';
      card.innerHTML = `
        <div class="item-top"><h3>${item.name}</h3></div>
        ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
        <div class="price-tags">${priceTagsHtml(item.price)}</div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    content.appendChild(section);
  });

  const allSections = Array.from(content.querySelectorAll('.menu-category'));

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivePill(entry.target.dataset.catId);
        });
      },
      { rootMargin: '-190px 0px -70% 0px', threshold: 0 }
    );
    allSections.forEach((s) => navObserver.observe(s));
  }

  if (window.location.hash) {
    const id = window.location.hash.replace('#', '');
    const el = document.getElementById('cat-' + id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActivePill(id);
      }, 400);
    }
  }
});
