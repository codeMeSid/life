import { getShoppingList, CATEGORIES } from './data.js';
import { getShopping, toggleShopping, clearShopping } from './state.js';

const ICON_CHECK = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>`;

const CAT_ORDER = ['protein', 'dairy', 'fresh', 'pantry'];

export function initShopping() {
  renderShopping();
}

export function renderShopping() {
  const container = document.getElementById('shopping-content');
  if (!container) return;

  const checked = getShopping();
  const groups = getShoppingList();

  let html = '';

  for (const catKey of CAT_ORDER) {
    const items = groups[catKey];
    if (!items || items.length === 0) continue;

    const catLabel = CATEGORIES[catKey] || catKey;
    const unchecked = items.filter(item => !checked[item.key]);
    const checkedItems = items.filter(item => !!checked[item.key]);
    const sorted = [...unchecked, ...checkedItems];

    html += `<section class="shopping-group">
      <h2 class="shopping-group-label">${catLabel}</h2>
      <ul class="shopping-list">
        ${sorted.map(item => {
          const isChecked = !!checked[item.key];
          return `<li class="shopping-item"
              data-key="${item.key}"
              data-checked="${isChecked}"
              role="checkbox"
              aria-checked="${isChecked}"
              tabindex="0">
            <span class="shopping-checkbox" aria-hidden="true">${isChecked ? ICON_CHECK : ''}</span>
            <span class="shopping-name">${item.name}</span>
            <span class="shopping-qty">${item.qty}</span>
          </li>`;
        }).join('')}
      </ul>
    </section>`;
  }

  html += `<div class="shopping-footer">
    <button class="clear-btn" id="clear-shopping" type="button">Clear all</button>
  </div>`;

  container.innerHTML = html;

  container.querySelectorAll('.shopping-item').forEach(item => {
    const handler = () => {
      toggleShopping(item.dataset.key);
      renderShopping();
    };
    item.addEventListener('click', handler);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
    });
  });

  document.getElementById('clear-shopping')?.addEventListener('click', () => {
    clearShopping();
    renderShopping();
  });
}
