const NAV_PAGES = [
  { href: '/', label: 'Home' },
  { href: '/infrastructure/', label: 'Infrastructure' },
  { href: '/models/', label: 'Models' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/roadmap/', label: 'Roadmap' },
  { href: '/gdpr/', label: 'GDPR' },
];

const FOOTER_LINKS = {
  product: [
    { href: '/models/', label: 'Model Catalog' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/infrastructure/', label: 'Infrastructure' },
    { href: '/roadmap/', label: 'Roadmap' },
  ],
  company: [
    { href: '/gdpr/', label: 'GDPR &amp; Compliance' },
    { href: '/infrastructure/', label: 'About Nypples' },
    { href: '/roadmap/', label: 'Vision' },
    { href: '#', label: 'Careers' },
  ],
  resources: [
    { href: '#', label: 'API Docs' },
    { href: '#', label: 'Status Page' },
    { href: '#', label: 'Changelog' },
    { href: '#', label: 'Contact' },
  ],
};

const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

function renderDisclaimer() {
  const bar = document.createElement('div');
  bar.className = 'disclaimer-bar';
  bar.innerHTML = 'This is a fictional startup concept. Nypples Industries does not exist. No real services are offered.';
  return bar;
}

function renderHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  const inner = document.createElement('div');
  inner.className = 'header-inner';

  const logo = document.createElement('a');
  logo.href = '/';
  logo.className = 'logo';
  logo.innerHTML = '<img src="/images/logo.png" alt="Nypples Industries" class="logo-img" width="32" height="32">Nypples Industries';

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main navigation');

  const ul = document.createElement('ul');
  ul.className = 'nav-links';

  NAV_PAGES.forEach(page => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = page.href;
    a.textContent = page.label;
    const pagePath = page.href.replace(/\/$/, '') || '/';
    if (pagePath === currentPath) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.setAttribute('aria-label', 'Toggle menu');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.innerHTML = '&#9776;';
  menuBtn.addEventListener('click', () => {
    const isOpen = ul.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

  inner.appendChild(logo);
  inner.appendChild(nav);
  inner.appendChild(menuBtn);
  header.appendChild(inner);
  return header;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  const container = document.createElement('div');
  container.className = 'container';

  const grid = document.createElement('div');
  grid.className = 'footer-grid';

  // Brand column
  const brand = document.createElement('div');
  brand.className = 'footer-col footer-brand';
  brand.innerHTML = `
    <a href="/" class="logo">
      <img src="/images/logo.png" alt="Nypples Industries" class="logo-img" width="32" height="32">
      Nypples Industries
    </a>
    <p>Sovereign AI infrastructure for Europe. Self-hosted open-weight LLM inference on Huawei Ascend hardware.</p>
    <span class="footer-status">
      <span class="pulse-dot"></span> All systems operational
    </span>
  `;
  grid.appendChild(brand);

  // Link columns
  const columns = [
    { title: 'Product', key: 'product' },
    { title: 'Company', key: 'company' },
    { title: 'Resources', key: 'resources' },
  ];

  columns.forEach(col => {
    const colEl = document.createElement('div');
    colEl.className = 'footer-col';
    colEl.innerHTML = `<h4>${col.title}</h4><ul></ul>`;
    const ul = colEl.querySelector('ul');
    FOOTER_LINKS[col.key].forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.innerHTML = link.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
    grid.appendChild(colEl);
  });

  container.appendChild(grid);

  const bottom = document.createElement('div');
  bottom.className = 'footer-bottom';
  bottom.innerHTML = `
    <span>&copy; 2026 Nypples Industries &mdash; Fictional concept. No real services offered.</span>
    <span>Trento, Italy &middot; Powered by Huawei Ascend &middot; First European GPU Partner</span>
  `;

  container.appendChild(bottom);
  footer.appendChild(container);
  return footer;
}

function initNav() {
  const root = document.getElementById('app');
  if (!root) return;

  root.prepend(renderDisclaimer(), renderHeader());

  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.appendChild(renderFooter());
  }

  const header = document.querySelector('.site-header');
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}
