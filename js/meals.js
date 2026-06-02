import { DAYS, DAILY_TARGETS } from './data.js';
import { getEaten, toggleEaten, setActiveDay } from './state.js';

// Inline SVG paths (Lucide-style, 24×24 viewBox, 1.5px stroke)
const ICON_CHECK = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>`;
const ICON_CHEVRON = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="9 18 15 12 9 6"/></svg>`;
const ICON_CLOSE = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

let currentDay = 0;

export function initMeals(dayIndex) {
  currentDay = dayIndex;
  renderDaySelector();
  renderMacroSummary();
  renderMealCards();
  initRecipeSheet();
  renderWeekendNote();
}

export function switchDay(dayIndex) {
  currentDay = dayIndex;
  updateDaySelector();
  renderMacroSummary();
  renderMealCards();
}

// ── Day selector ──────────────────────────────────────────────────────────────

function renderDaySelector() {
  const container = document.getElementById('day-selector');
  container.innerHTML = DAYS.map((d, i) =>
    `<button class="day-pill${i === currentDay ? ' active' : ''}"
       data-day="${i}"
       aria-pressed="${i === currentDay}"
       aria-label="${d.day}">${d.short}</button>`
  ).join('');

  container.addEventListener('click', e => {
    const btn = e.target.closest('.day-pill');
    if (!btn) return;
    const idx = parseInt(btn.dataset.day, 10);
    if (idx === currentDay) return;
    switchDay(idx);
    setActiveDay(idx);
  });
}

function updateDaySelector() {
  document.querySelectorAll('.day-pill').forEach((btn, i) => {
    const active = i === currentDay;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function renderWeekendNote() {
  const el = document.getElementById('weekend-note');
  if (!el) return;
  const jsDay = new Date().getDay();
  const isWeekend = jsDay === 0 || jsDay === 6;
  el.hidden = !isWeekend;
}

// ── Macro summary ─────────────────────────────────────────────────────────────

export function renderMacroSummary() {
  const container = document.getElementById('macro-summary');
  if (!container) return;

  const eaten = getEaten();
  const day = DAYS[currentDay];
  const totals = { cal: 0, protein: 0, carbs: 0, fat: 0 };

  for (const meal of day.meals) {
    if (eaten[meal.id]) {
      totals.cal     += meal.cal;
      totals.protein += meal.protein;
      totals.carbs   += meal.carbs;
      totals.fat     += meal.fat;
    }
  }

  const items = [
    { label: 'Cal',  eaten: totals.cal,     target: DAILY_TARGETS.cal,     color: 'var(--macro-cal)',     unit: '' },
    { label: 'Pro',  eaten: totals.protein, target: DAILY_TARGETS.protein, color: 'var(--macro-protein)', unit: 'g' },
    { label: 'Carb', eaten: totals.carbs,   target: DAILY_TARGETS.carbs,   color: 'var(--macro-carbs)',   unit: 'g' },
    { label: 'Fat',  eaten: totals.fat,     target: DAILY_TARGETS.fat,     color: 'var(--macro-fat)',     unit: 'g' },
  ];

  container.innerHTML = items.map(item => {
    const pct = Math.min(100, Math.round((item.eaten / item.target) * 100));
    const over = item.eaten > item.target;
    return `<div class="macro-item">
      <div class="macro-track" role="progressbar"
           aria-valuenow="${item.eaten}" aria-valuemin="0" aria-valuemax="${item.target}"
           aria-label="${item.label} progress">
        <div class="macro-fill${over ? ' over' : ''}"
             style="width:${pct}%;background:${item.color}"></div>
      </div>
      <div class="macro-label">
        <span class="macro-name" style="color:${item.color}">${item.label}</span>
        <span class="macro-nums">${item.eaten}${item.unit}/${item.target}${item.unit}</span>
      </div>
    </div>`;
  }).join('');
}

// ── Meal cards ────────────────────────────────────────────────────────────────

function renderMealCards() {
  const container = document.getElementById('meal-cards');
  if (!container) return;

  const eaten = getEaten();
  const day = DAYS[currentDay];

  container.innerHTML = day.meals.map(meal => {
    const isEaten = !!eaten[meal.id];
    return `<article class="meal-card" data-meal-id="${meal.id}" data-eaten="${isEaten}">
      <div class="meal-card-header">
        <span class="meal-slot-label">${meal.slot.toUpperCase()}</span>
        <span class="meal-time">${meal.time}</span>
      </div>
      <div class="meal-card-body">
        <button class="meal-check"
          aria-label="${isEaten ? 'Unmark' : 'Mark'} ${meal.label} as eaten"
          aria-pressed="${isEaten}"
          data-meal-id="${meal.id}"
          type="button">
          ${ICON_CHECK}
        </button>
        <div class="meal-info"
             role="button"
             tabindex="0"
             aria-label="View recipe: ${meal.name}"
             data-meal-id="${meal.id}">
          <p class="meal-name">${meal.name}</p>
          <div class="meal-macros" aria-label="${meal.cal} calories, ${meal.protein}g protein, ${meal.carbs}g carbs, ${meal.fat}g fat">
            <span class="macro-cal-val">${meal.cal} cal</span>
            <span>${meal.protein}g P</span>
            <span>${meal.carbs}g C</span>
            <span>${meal.fat}g F</span>
          </div>
        </div>
        <span class="meal-arrow" aria-hidden="true">${ICON_CHEVRON}</span>
      </div>
    </article>`;
  }).join('');

  // Eaten toggle
  container.querySelectorAll('.meal-check').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const mealId = btn.dataset.mealId;
      const isEaten = toggleEaten(mealId);
      const card = container.querySelector(`.meal-card[data-meal-id="${mealId}"]`);
      card.dataset.eaten = isEaten;
      btn.setAttribute('aria-pressed', String(isEaten));
      const meal = day.meals.find(m => m.id === mealId);
      btn.setAttribute('aria-label', `${isEaten ? 'Unmark' : 'Mark'} ${meal?.label} as eaten`);
      renderMacroSummary();
    });
  });

  // Recipe sheet
  container.querySelectorAll('.meal-info').forEach(info => {
    const open = () => {
      const meal = day.meals.find(m => m.id === info.dataset.mealId);
      if (meal) openRecipeSheet(meal);
    };
    info.addEventListener('click', open);
    info.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

// ── Recipe sheet ──────────────────────────────────────────────────────────────

function initRecipeSheet() {
  const sheet = document.getElementById('recipe-sheet');
  if (!sheet) return;

  // Click on backdrop closes
  sheet.addEventListener('click', e => {
    if (e.target === sheet) sheet.close();
  });

  document.getElementById('recipe-close')?.addEventListener('click', () => sheet.close());

  // Drag handle hint on touch devices — swipe down to close
  let startY = 0;
  const inner = sheet.querySelector('.sheet-inner');
  inner?.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
  inner?.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientY - startY;
    if (delta > 80) sheet.close();
  }, { passive: true });
}

function openRecipeSheet(meal) {
  const sheet = document.getElementById('recipe-sheet');
  if (!sheet) return;

  document.getElementById('recipe-title').textContent = meal.name;
  document.getElementById('recipe-macros').textContent =
    `${meal.cal} cal · ${meal.protein}g protein · ${meal.carbs}g carbs · ${meal.fat}g fat`;

  document.getElementById('recipe-ingredients').innerHTML = meal.ingredients.map(ing =>
    `<li class="ingredient-item">
      <span class="ingredient-name">${ing.name}</span>
      <span class="ingredient-qty">${ing.qty}</span>
    </li>`
  ).join('');

  document.getElementById('recipe-instructions').innerHTML = meal.instructions.map((step, i) =>
    `<li class="instruction-item">
      <span class="step-num" aria-hidden="true">${i + 1}</span>
      <span class="instruction-text">${step}</span>
    </li>`
  ).join('');

  const tipEl = document.getElementById('recipe-tip');
  if (meal.tip) {
    tipEl.textContent = meal.tip;
    tipEl.hidden = false;
  } else {
    tipEl.hidden = true;
  }

  sheet.showModal();
  sheet.querySelector('.sheet-inner').scrollTop = 0;
}
