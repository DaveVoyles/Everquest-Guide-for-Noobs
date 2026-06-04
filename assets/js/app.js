/* app.js — EverQuest Guide for Noobs — SPA navigation & rendering
   Hash-based routing: #getting-started.md, #macros.md, etc.
   Markdown rendered client-side with marked.js (v4).          */

(function () {
  'use strict';

  // ── Navigation Data ─────────────────────────────────────────
  const NAV = [
    {
      icon: '📖', title: 'Getting Started',
      pages: [
        { file: 'README.md',          label: 'Overview & Contents',   icon: '🏠' },
        { file: 'getting-started.md', label: 'Getting Started',       icon: '🚀' },
        { file: 'classes-and-races.md', label: 'Classes & Races',     icon: '⚔️' },
        { file: 'server-types.md',    label: 'Server Types',          icon: '🖥️' },
      ],
    },
    {
      icon: '⚔️', title: 'Combat & Skills',
      pages: [
        { file: 'combat-basics.md',    label: 'Combat Basics',        icon: '🗡️' },
        { file: 'skills-and-spells.md', label: 'Skills & Spells',     icon: '📚' },
        { file: 'hotkeys-and-looting.md', label: 'Hotkeys & Looting', icon: '⌨️' },
        { file: 'macros.md',           label: 'Macros',               icon: '🔧' },
        { file: 'aggro.md',            label: 'Aggro & Threat',       icon: '😡' },
        { file: 'pets.md',             label: 'Pets',                 icon: '🐾' },
      ],
    },
    {
      icon: '🌍', title: 'World & Exploration',
      pages: [
        { file: 'leveling-guide.md',    label: 'Leveling Guide',      icon: '📈' },
        { file: 'travel-and-zones.md',  label: 'Travel & Zones',      icon: '🗺️' },
        { file: 'maps.md',              label: 'Maps & Navigation',   icon: '🧭' },
        { file: 'quests.md',            label: 'Quests & Epics',      icon: '📜' },
        { file: 'faction.md',           label: 'Faction',             icon: '🤝' },
      ],
    },
    {
      icon: '🛡️', title: 'Character Growth',
      pages: [
        { file: 'gear-and-stats.md',        label: 'Gear & Stats',         icon: '🛡️' },
        { file: 'buffs.md',                 label: 'Buffs',                icon: '✨' },
        { file: 'alternate-advancement.md', label: 'Alternate Advancement', icon: '🌟' },
        { file: 'tradeskills.md',           label: 'Tradeskills',          icon: '🔨' },
      ],
    },
    {
      icon: '👥', title: 'Social & Economy',
      pages: [
        { file: 'grouping-and-lfg.md', label: 'Grouping & LFG',   icon: '👥' },
        { file: 'guilds.md',           label: 'Guilds',            icon: '🏰' },
        { file: 'economy.md',          label: 'Economy & Trading', icon: '💰' },
      ],
    },
    {
      icon: '🖥️', title: 'Interface & UI',
      pages: [
        { file: 'ui-scaling.md',          label: 'UI Scaling',        icon: '📏' },
        { file: 'chat-windows.md',        label: 'Chat Windows',      icon: '💬' },
        { file: 'looting.md',             label: 'Looting System',    icon: '🎁' },
        { file: 'death-and-corpse-runs.md', label: 'Death & Corpse Runs', icon: '💀' },
      ],
    },
  ];

  // ── DOM refs ────────────────────────────────────────────────
  const sidebar    = document.getElementById('sidebar');
  const navMenu    = document.getElementById('nav-menu');
  const pageContent = document.getElementById('page-content');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const bcPage     = document.getElementById('bc-page');
  const bcSep      = document.getElementById('bc-sep');
  const menuBtn    = document.getElementById('menu-btn');
  const overlay    = document.getElementById('overlay');
  const backToTop  = document.getElementById('back-to-top');
  const contentArea = document.getElementById('content-area');

  // ── Build Navigation ─────────────────────────────────────────
  NAV.forEach((section) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'nav-section';

    const cat = document.createElement('div');
    cat.className = 'nav-category';
    cat.innerHTML = `<span>${section.icon}</span><span>${section.title}</span><span class="cat-arrow">▾</span>`;
    cat.addEventListener('click', () => {
      wrapper.classList.toggle('collapsed');
    });

    const pages = document.createElement('div');
    pages.className = 'nav-pages';

    section.pages.forEach((page) => {
      const item = document.createElement('div');
      item.className = 'nav-item';
      item.dataset.file = page.file;
      item.dataset.label = page.label;
      item.innerHTML = `<span class="nav-item-icon">${page.icon}</span><span>${page.label}</span>`;
      item.addEventListener('click', () => navigateTo(page.file));
      pages.appendChild(item);
    });

    wrapper.appendChild(cat);
    wrapper.appendChild(pages);
    navMenu.appendChild(wrapper);
  });

  // ── marked.js configuration ──────────────────────────────────
  const renderer = new marked.Renderer();

  // Intercept internal .md links → hash navigation
  renderer.link = function (href, title, text) {
    if (href && href.endsWith('.md') && !href.startsWith('http')) {
      return `<a href="#${href}" data-page="${href}" title="${title || ''}">${text}</a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title || ''}">${text}</a>`;
  };

  marked.use({ renderer, gfm: true, breaks: false });

  // ── Routing ──────────────────────────────────────────────────
  function getHashFile() {
    const h = window.location.hash.slice(1);
    return h || 'README.md';
  }

  function navigateTo(file) {
    window.location.hash = file;
    closeSidebar();
  }

  window.addEventListener('hashchange', () => loadPage(getHashFile()));

  // ── Load & Render Page ───────────────────────────────────────
  async function loadPage(file) {
    // Highlight active nav item
    document.querySelectorAll('.nav-item').forEach((el) => {
      el.classList.toggle('active', el.dataset.file === file);
    });

    // Update breadcrumb
    const activeItem = document.querySelector(`.nav-item[data-file="${file}"]`);
    const label = activeItem ? activeItem.dataset.label : file;
    bcPage.textContent = label;
    bcSep.style.display = activeItem ? '' : 'none';

    // Fade out
    pageContent.classList.add('fading');
    await sleep(220);

    pageContent.innerHTML = '<div id="loading"><div class="spinner"></div><p>Summoning knowledge…</p></div>';
    pageContent.classList.remove('fading');

    try {
      const res = await fetch(`./${file}?v=${Date.now()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const md   = await res.text();
      const html = marked.parse(md);

      pageContent.classList.add('fading');
      await sleep(120);

      pageContent.innerHTML = html;
      pageContent.classList.remove('fading');

      // Wire up internal links rendered by marked
      pageContent.querySelectorAll('[data-page]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo(el.dataset.page);
        });
      });

      contentArea.scrollTo({ top: 0, behavior: 'instant' });

    } catch (err) {
      pageContent.classList.remove('fading');
      pageContent.innerHTML = `
        <h1>⚠️ Page Not Found</h1>
        <p>Could not load <code>${file}</code>.</p>
        <p style="color:var(--text-muted);font-size:0.9rem;">${err.message}</p>
        <p><a href="#README.md">← Return to Overview</a></p>`;
    }
  }

  // ── Search ───────────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    searchClear.hidden = !q;

    document.querySelectorAll('.nav-item').forEach((el) => {
      const match = !q || el.dataset.label.toLowerCase().includes(q) || el.dataset.file.toLowerCase().includes(q);
      el.classList.toggle('hidden', !match);
    });

    // Expand all sections when searching
    document.querySelectorAll('.nav-section').forEach((s) => {
      s.classList.toggle('collapsed', false);
    });
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.hidden = true;
    document.querySelectorAll('.nav-item').forEach((el) => el.classList.remove('hidden'));
  });

  // ── Mobile sidebar ───────────────────────────────────────────
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  // ── Back to Top ──────────────────────────────────────────────
  contentArea.addEventListener('scroll', () => {
    backToTop.hidden = contentArea.scrollTop < 400;
  });

  backToTop.addEventListener('click', () => {
    contentArea.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Utility ──────────────────────────────────────────────────
  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  // ── Boot ─────────────────────────────────────────────────────
  loadPage(getHashFile());

})();
