import { getWater, addWater, setWaterGoal, resetWater } from './state.js';

// SVG ring: r=80, circumference = 2π×80
const CIRCUMFERENCE = 502.655;
let reminderInterval = null;

export function initWater() {
  const w = getWater();
  setRingInstant(w);
  updateGoalDisplay(w);
  bindEvents();
  checkNotificationSupport();
}

// ── Ring ──────────────────────────────────────────────────────────────────────

function setRingInstant(w) {
  const ring = document.getElementById('water-ring-fill');
  if (!ring) return;
  ring.style.transition = 'none';
  applyRingValues(w, ring);
  // Re-enable transition after paint
  requestAnimationFrame(() => requestAnimationFrame(() => {
    ring.style.transition = '';
  }));
}

function animateRing(w) {
  const ring = document.getElementById('water-ring-fill');
  if (ring) applyRingValues(w, ring);
}

function applyRingValues(w, ring) {
  const pct = Math.min(1, w.intake / w.goal);
  const offset = CIRCUMFERENCE * (1 - pct);
  ring.style.strokeDashoffset = offset;
  ring.style.stroke = pct >= 1 ? 'var(--success)' : 'var(--water)';

  const valueEl = document.getElementById('water-value');
  const goalEl  = document.getElementById('water-goal-text');
  if (valueEl) valueEl.textContent = w.intake;
  if (goalEl)  goalEl.textContent  = `/ ${w.goal} ml`;
}

function updateGoalDisplay(w) {
  const el = document.getElementById('goal-display');
  if (el) el.textContent = `${(w.goal / 1000).toLocaleString('en', { maximumFractionDigits: 1 })}L goal`;
}

// ── Events ────────────────────────────────────────────────────────────────────

function bindEvents() {
  document.querySelectorAll('.water-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ml = parseInt(btn.dataset.ml, 10);
      const w = addWater(ml);
      animateRing(w);
      updateGoalDisplay(w);
      // Brief scale pulse on goal met
      if (w.intake >= w.goal) {
        const svg = document.getElementById('water-ring-svg');
        svg?.classList.add('ring-complete');
        setTimeout(() => svg?.classList.remove('ring-complete'), 700);
      }
    });
  });

  document.getElementById('goal-decrease')?.addEventListener('click', () => {
    const w = setWaterGoal(getWater().goal - 250);
    animateRing(w);
    updateGoalDisplay(w);
  });

  document.getElementById('goal-increase')?.addEventListener('click', () => {
    const w = setWaterGoal(getWater().goal + 250);
    animateRing(w);
    updateGoalDisplay(w);
  });

  document.getElementById('water-reset')?.addEventListener('click', () => {
    const w = resetWater();
    animateRing(w);
  });

  document.getElementById('notify-btn')?.addEventListener('click', toggleReminder);
}

// ── Reminders ─────────────────────────────────────────────────────────────────

function checkNotificationSupport() {
  const caveat = document.getElementById('notification-caveat');
  const btn    = document.getElementById('notify-btn');
  if (!caveat || !btn) return;

  if (!('Notification' in window)) {
    caveat.textContent = 'Notifications are not supported in this browser.';
    caveat.hidden = false;
    btn.disabled = true;
    return;
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    caveat.textContent = 'iOS only delivers reminders while this app is open and the screen is on. Background alerts require a server.';
    caveat.hidden = false;
  }

  if (Notification.permission === 'denied') {
    caveat.textContent = 'Notification permission was denied. Enable it in Settings to use reminders.';
    caveat.hidden = false;
    btn.disabled = true;
  }
}

function toggleReminder() {
  const btn = document.getElementById('notify-btn');
  const caveat = document.getElementById('notification-caveat');

  if (reminderInterval) {
    clearInterval(reminderInterval);
    reminderInterval = null;
    if (btn) btn.textContent = 'Remind me every hour';
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      scheduleReminder();
      if (btn) btn.textContent = 'Reminders on — tap to stop';
    } else {
      if (caveat) {
        caveat.textContent = 'Notification permission denied. Enable it in Settings.';
        caveat.hidden = false;
      }
    }
  });
}

function scheduleReminder() {
  reminderInterval = setInterval(() => {
    const w = getWater();
    if (w.intake < w.goal) {
      new Notification('Drink water', {
        body: `${w.intake}ml of ${w.goal}ml today.`,
        silent: false,
      });
    }
  }, 60 * 60 * 1000); // 1 hour
}
