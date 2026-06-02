import { initMeals, switchDay } from './meals.js';
import { initShopping } from './shopping.js';
import { initWater } from './water.js';
import { getActiveDay, setActiveDay } from './state.js';
import { getTodayIndex } from './data.js';

let activeTab = 'meals';

// ── Tab routing ───────────────────────────────────────────────────────────────

function goTab(tab) {
  if (tab === activeTab) return;

  document.getElementById(`tab-${activeTab}`)?.setAttribute('hidden', '');
  document.getElementById(`tab-${tab}`)?.removeAttribute('hidden');

  // Reset scroll to top on every tab switch
  const content = document.querySelector('.tab-content');
  if (content) content.scrollTop = 0;

  document.querySelector(`[data-tab="${activeTab}"]`)?.classList.remove('active');
  document.querySelector(`[data-tab="${activeTab}"]`)?.setAttribute('aria-selected', 'false');
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');
  document.querySelector(`[data-tab="${tab}"]`)?.setAttribute('aria-selected', 'true');

  const titles = { meals: 'Meals', shopping: 'Shopping', water: 'Water' };
  const titleEl = document.getElementById('app-title');
  if (titleEl) titleEl.textContent = titles[tab] ?? tab;

  activeTab = tab;
}

// ── Visibility change: re-resolve today ───────────────────────────────────────

function handleVisibilityChange() {
  if (document.visibilityState !== 'visible') return;

  const todayIdx = getTodayIndex();
  const savedDay = getActiveDay();

  // Only auto-jump to today if the user hasn't manually selected a different day
  // and the active tab is meals (don't disrupt shopping/water workflows)
  if (savedDay === null || savedDay === todayIdx) {
    switchDay(todayIdx);
    setActiveDay(todayIdx);
  }
}

// ── Service worker ────────────────────────────────────────────────────────────

function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  registerSW();

  const todayIdx = getTodayIndex();
  const savedDay = getActiveDay() ?? todayIdx;

  initMeals(savedDay);
  initShopping();
  initWater();

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => goTab(btn.dataset.tab));
  });

  document.addEventListener('visibilitychange', handleVisibilityChange);
}

document.addEventListener('DOMContentLoaded', init);
