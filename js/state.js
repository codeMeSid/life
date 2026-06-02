// State management — localStorage-backed, no external deps

const KEYS = {
  eaten:     'lp_eaten',
  shopping:  'lp_shopping',
  water:     'lp_water',
  activeDay: 'lp_activeDay',
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// ── Eaten ─────────────────────────────────────────────────────────────────────
// { [mealId]: boolean }

export function getEaten() {
  return load(KEYS.eaten, {});
}

export function toggleEaten(mealId) {
  const eaten = getEaten();
  eaten[mealId] = !eaten[mealId];
  save(KEYS.eaten, eaten);
  return eaten[mealId];
}

export function clearEaten() {
  save(KEYS.eaten, {});
}

// ── Shopping ──────────────────────────────────────────────────────────────────
// { [itemKey]: boolean }

export function getShopping() {
  return load(KEYS.shopping, {});
}

export function toggleShopping(key) {
  const shopping = getShopping();
  shopping[key] = !shopping[key];
  save(KEYS.shopping, shopping);
  return shopping[key];
}

export function clearShopping() {
  save(KEYS.shopping, {});
}

// ── Water ─────────────────────────────────────────────────────────────────────
// Resets to 0 on a new calendar date

const WATER_DEFAULTS = { goal: 3000, intake: 0, date: '' };

export function getWater() {
  const w = load(KEYS.water, { ...WATER_DEFAULTS });
  const today = new Date().toISOString().slice(0, 10);
  if (w.date !== today) {
    w.intake = 0;
    w.date = today;
    save(KEYS.water, w);
  }
  return w;
}

export function addWater(ml) {
  const w = getWater();
  w.intake = Math.max(0, w.intake + ml);
  save(KEYS.water, w);
  return w;
}

export function setWaterGoal(goal) {
  const w = getWater();
  w.goal = Math.max(500, Math.min(8000, goal));
  save(KEYS.water, w);
  return w;
}

export function resetWater() {
  const w = getWater();
  w.intake = 0;
  save(KEYS.water, w);
  return w;
}

// ── Active day ────────────────────────────────────────────────────────────────

export function getActiveDay() {
  return load(KEYS.activeDay, null);
}

export function setActiveDay(idx) {
  save(KEYS.activeDay, idx);
}
