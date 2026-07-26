const STATUS_DATA = [
  {
    name: 'DeepSeek V4 Pro',
    tier: 'Premium',
    uptime: 99.91,
    degradedPercent: 0.09,
    status: 'operational',
    latency: '1.4s',
  },
  {
    name: 'DeepSeek V4 Flash',
    tier: 'Standard',
    uptime: 99.97,
    degradedPercent: 0.03,
    status: 'operational',
    latency: '380ms',
  },
  {
    name: 'GLM-5.2',
    tier: 'Premium',
    uptime: 99.85,
    degradedPercent: 0.15,
    status: 'operational',
    latency: '1.6s',
  },
  {
    name: 'Kimi K2.7 Code',
    tier: 'Premium',
    uptime: 99.94,
    degradedPercent: 0.06,
    status: 'operational',
    latency: '1.3s',
  },
  {
    name: 'Qwen3.7-Plus',
    tier: 'Standard',
    uptime: 99.99,
    degradedPercent: 0.01,
    status: 'operational',
    latency: '210ms',
  },
  {
    name: 'Nemotron 3 Ultra',
    tier: 'Standard',
    uptime: 99.93,
    degradedPercent: 0.07,
    status: 'operational',
    latency: '290ms',
  },
  {
    name: 'Gemma 4 31B',
    tier: 'Standard',
    uptime: 100,
    degradedPercent: 0,
    status: 'operational',
    latency: '180ms',
  },
  {
    name: 'BGE-M3',
    tier: 'Embedding',
    uptime: 100,
    degradedPercent: 0,
    status: 'operational',
    latency: '45ms',
  },
  {
    name: 'Stella-400M',
    tier: 'Embedding',
    uptime: 99.98,
    degradedPercent: 0.02,
    status: 'operational',
    latency: '32ms',
  },
  {
    name: 'GTE-Qwen2-7B',
    tier: 'Embedding',
    uptime: 99.96,
    degradedPercent: 0.04,
    status: 'operational',
    latency: '55ms',
  },
];

function buildStatusGrid() {
  const grid = document.getElementById('status-grid');
  if (!grid) return;

  const overall = STATUS_DATA.every(m => m.status === 'operational') ? 'all-up' :
    STATUS_DATA.some(m => m.status === 'down') ? 'down' : 'degraded';

  const allUp = STATUS_DATA.every(m => m.status === 'operational');

  grid.innerHTML = STATUS_DATA.map(model => {
    const statusClass = model.status;
    const statusLabel = model.status === 'operational' ? 'Operational' : model.status === 'degraded' ? 'Degraded' : 'Down';
    const downPercent = (100 - model.uptime).toFixed(2);

    return `
      <div class="status-row">
        <span class="status-row-name">${model.name}</span>
        <span class="status-row-badge ${statusClass}">${statusLabel}</span>
        <div class="status-bar-wrap">
          <div class="status-bar">
            <div class="status-bar-segment uptime" style="width: ${model.uptime}%"></div>
            ${model.degradedPercent > 0
              ? `<div class="status-bar-segment degraded" style="width: ${model.degradedPercent}%"></div>`
              : ''}
            ${downPercent > 0 && model.status !== 'operational'
              ? `<div class="status-bar-segment down" style="width: ${downPercent}%"></div>`
              : ''}
          </div>
          <div class="status-bar-label">
            <span>30-day uptime</span>
            <span>${model.uptime.toFixed(2)}%</span>
          </div>
        </div>
        <span class="status-row-latency">${model.latency}</span>
      </div>
    `;
  }).join('');
}

function updateStatusBanner() {
  const banner = document.getElementById('status-banner');
  const dot = document.getElementById('status-banner-dot');
  const text = document.getElementById('status-banner-text');
  const time = document.getElementById('status-banner-time');
  if (!banner || !dot || !text || !time) return;

  const allUp = STATUS_DATA.every(m => m.status === 'operational');

  dot.className = 'status-banner-dot ' + (allUp ? 'all-up' : 'degraded');
  text.textContent = allUp ? 'All systems operational.' : 'Partial degradation detected.';
  time.textContent = 'Updated: ' + new Date().toLocaleString('en-GB', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', second: '2-digit', day: '2-digit', month: 'short', year: 'numeric' });
}

function initStatus() {
  buildStatusGrid();
  updateStatusBanner();

  setInterval(() => {
    updateStatusBanner();
  }, 30000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStatus);
} else {
  initStatus();
}
