const NAV_PAGES = [
  { href: 'index.html', label: 'Home' },
  { href: 'infrastructure.html', label: 'Infrastructure' },
  { href: 'models.html', label: 'Models' },
  { href: 'pricing.html', label: 'Pricing' },
  { href: 'roadmap.html', label: 'Roadmap' },
  { href: 'gdpr.html', label: 'GDPR' },
];

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

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
  logo.href = 'index.html';
  logo.className = 'logo';
  logo.innerHTML = '<img src="images/logo.png" alt="Nypples Industries" class="logo-img" width="32" height="32">Nypples Industries';

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main navigation');

  const ul = document.createElement('ul');
  ul.className = 'nav-links';

  NAV_PAGES.forEach(page => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = page.href;
    a.textContent = page.label;
    if (page.href === currentPage) {
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

  const links = document.createElement('ul');
  links.className = 'footer-links';
  NAV_PAGES.forEach(page => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = page.href;
    a.textContent = page.label;
    li.appendChild(a);
    links.appendChild(li);
  });

  const copy = document.createElement('p');
  copy.innerHTML = '&copy; 2026 Nypples Industries &mdash; This is a fictional project. No real services are offered.<br>Powered by Huawei Ascend &mdash; First European GPU Partner.';

  container.appendChild(links);
  container.appendChild(copy);
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
