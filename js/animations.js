function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-clip').forEach(el => observer.observe(el));
}

function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const contents = container.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const targetContent = container.querySelector(`.tab-content[data-tab="${target}"]`);
        if (targetContent) targetContent.classList.add('active');
      });
    });
  });
}

/* ============================================
   Donut chart — built from legend data
   ============================================ */

function initDonut() {
  const svg = document.getElementById('budget-donut');
  const legend = document.getElementById('budget-legend');
  if (!svg || !legend) return;

  const items = Array.from(legend.querySelectorAll('.donut-legend-item'));
  if (!items.length) return;

  const R = 80;
  const C = 2 * Math.PI * R;
  const GAP = 2;

  let cumulative = 0;
  const segments = [];

  items.forEach((item, i) => {
    const swatch = item.querySelector('.donut-legend-swatch');
    const pctText = item.querySelector('.donut-legend-pct');
    if (!swatch || !pctText) return;
    const pct = parseFloat(pctText.textContent) || 0;
    const color = getComputedStyle(swatch).backgroundColor;

    const segLen = Math.max(0, (pct / 100) * C - GAP);
    const startAngle = (cumulative / C) * 360;

    segments.push({ i, color, segLen, startAngle, pct, item });

    cumulative += (pct / 100) * C;
  });

  segments.forEach(seg => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '100');
    circle.setAttribute('cy', '100');
    circle.setAttribute('r', String(R));
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', seg.color);
    circle.setAttribute('transform', `rotate(${seg.startAngle} 100 100)`);
    circle.setAttribute('class', 'donut-segment');
    circle.style.setProperty('--len', String(seg.segLen));
    circle.style.setProperty('--i', String(seg.i));
    circle.dataset.segment = String(seg.i);
    svg.appendChild(circle);

    const activate = () => {
      svg.classList.add('has-hover');
      legend.querySelectorAll('.donut-legend-item').forEach(el => el.classList.toggle('is-active', el === seg.item));
      svg.querySelectorAll('.donut-segment').forEach(el => el.classList.toggle('is-active', el === circle));
    };
    const reset = () => {
      svg.classList.remove('has-hover');
      legend.querySelectorAll('.donut-legend-item').forEach(el => el.classList.remove('is-active'));
      svg.querySelectorAll('.donut-segment').forEach(el => el.classList.remove('is-active'));
    };

    circle.addEventListener('mouseenter', activate);
    circle.addEventListener('mouseleave', reset);
    seg.item.addEventListener('mouseenter', activate);
    seg.item.addEventListener('mouseleave', reset);
    seg.item.addEventListener('focusin', activate);
    seg.item.addEventListener('focusout', reset);
  });

  const drawObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          svg.classList.add('is-drawn');
          drawObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  drawObserver.observe(svg);
}

function init() {
  initRevealObserver();
  initTabs();
  initDonut();
  initPricingCalculator();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
