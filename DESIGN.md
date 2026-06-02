# Design

> Seed/starter visual system for a calm, clinical, light-default health PWA. Pre-implementation: re-run `/impeccable document` once real CSS tokens exist to capture the built system.

## Theme

**Light default**, optional dark via `prefers-color-scheme`. Personality: quiet, exact, dependable — Apple Health / Oura register. Color strategy: **Restrained** (pure-white surface + one functional green accent; a calm water-blue as a domain accent for the water tracker only). Mood phrase: *"a clinic at midnight — clean white light, one living green readout, nothing shouting."*

## Color (OKLCH)

### Light (default)
| Role | OKLCH | Use |
|---|---|---|
| `--bg` | `oklch(1 0 0)` | App background (pure white, no hidden warmth) |
| `--surface` | `oklch(0.985 0.004 150)` | Cards, panels, sheets (faint green-tinted neutral) |
| `--surface-2` | `oklch(0.965 0.005 150)` | Tab bar, toolbars, inset rows |
| `--ink` | `oklch(0.22 0.02 150)` | Primary text / data values |
| `--muted` | `oklch(0.45 0.02 150)` | Secondary text (≥4.5:1 on white) |
| `--border` | `oklch(0.91 0.005 150)` | Hairlines, dividers, control borders |
| `--primary` | `oklch(0.46 0.11 145)` | Primary actions, calorie/protein progress, selected day |
| `--primary-ink` | `oklch(0.99 0.01 145)` | Text/icon on primary fills |
| `--primary-soft` | `oklch(0.94 0.03 145)` | Primary tint backgrounds (eaten rows, active pill) |
| `--water` | `oklch(0.62 0.10 230)` | Water ring + water-domain accents only |
| `--water-soft` | `oklch(0.95 0.03 230)` | Water progress track / tint |
| `--success` | `oklch(0.55 0.12 150)` | Goal met, confirmations |
| `--warning` | `oklch(0.72 0.13 75)` | Approaching/over target |
| `--danger` | `oklch(0.55 0.17 27)` | Destructive (clear all, reset) |

### Macro categories (data viz, calm categorical)
| Token | OKLCH | Macro |
|---|---|---|
| `--macro-cal` | `oklch(0.46 0.11 145)` | Calories (primary green) |
| `--macro-protein` | `oklch(0.55 0.12 25)` | Protein (clay red) |
| `--macro-carbs` | `oklch(0.70 0.12 75)` | Carbs (amber) |
| `--macro-fat` | `oklch(0.62 0.10 230)` | Fat (blue) |

### Dark (optional, `prefers-color-scheme: dark`)
| Role | OKLCH |
|---|---|
| `--bg` | `oklch(0.17 0.01 150)` |
| `--surface` | `oklch(0.21 0.012 150)` |
| `--surface-2` | `oklch(0.25 0.014 150)` |
| `--ink` | `oklch(0.96 0.01 150)` |
| `--muted` | `oklch(0.72 0.015 150)` |
| `--border` | `oklch(0.30 0.012 150)` |
| `--primary` | `oklch(0.68 0.13 145)` |
| `--water` | `oklch(0.70 0.11 230)` |

Contrast: verify every body/muted pairing ≥4.5:1 and large/UI ≥3:1 in both themes during build. State is never color-only (pair with icon/label/position).

## Typography

- **One family**: `Inter` (variable) with `system-ui` fallback. No display/body pairing (product register). Optional `ui-monospace` for tabular numbers only.
- **Tabular numerals** (`font-variant-numeric: tabular-nums`) on all values, counters, macro/water readouts so digits don't jitter as they change.
- **Fixed rem scale** (not fluid/clamp), ratio ~1.2:
  | Token | Size / weight | Use |
  |---|---|---|
  | `text-display` | 2.0rem / 700 | Big counters (water ml, day total) |
  | `text-h1` | 1.5rem / 650 | Screen title |
  | `text-h2` | 1.25rem / 600 | Section / day label |
  | `text-body` | 1.0rem / 450 | Body, meal names |
  | `text-label` | 0.875rem / 500 | Labels, times, macro captions |
  | `text-meta` | 0.75rem / 500 | Units, hints (still ≥4.5:1) |
- `text-wrap: balance` on titles; uppercase only for ≤4-word labels/badges, never sentences.

## Spacing & layout

- 4px base scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48.
- Mobile-first; content max-width ~480px centered on larger screens (it's a phone app). Test 375px first.
- Safe-area insets respected (`env(safe-area-inset-*)`), especially bottom tab bar.
- Layout: flexbox for rows/stacks, grid only for 2D (e.g. macro summary). Vary vertical rhythm; avoid uniform card-soup.
- Radius: `--r-sm 8px`, `--r-md 12px`, `--r-lg 16px`, `--r-full 999px` (pills, ring caps).
- Shadows: minimal, one soft elevation for sheets/active tab; clinical, not glossy.

## Components

App shell = top title bar + content + **sticky bottom tab bar** (Meals · Shopping · Water), ≥44px targets, active state in `--primary` with icon+label (not color alone).

Every interactive control ships: default / hover / focus-visible / active / disabled / (selected | checked) / loading where relevant.

- **MealCard** — slot, time, name, macro row; tap toggles eaten (check + `--primary-soft` tint + str/dim), tap body opens recipe sheet.
- **ProgressRing** — SVG ring for water (`--water`), center tabular value `1500 / 3000 ml`.
- **MacroBar** — horizontal stacked/segmented bars per macro vs target, category colors above.
- **Day selector** — segmented pills Mon–Fri, current day pre-selected.
- **Checkbox row** — shopping items; checked dims + sinks to bottom.
- **Sheet** — native `<dialog>`/popover for recipe detail and settings (no clipped absolute dropdowns; modal used sparingly).
- **Empty states** teach (e.g. "No meals logged yet — tap a meal to mark it eaten"), not "nothing here".

## Motion

- 150–250ms, ease-out (quart/expo). Conveys state only: progress fills, tab switch, sheet in/out, check toggle. No page-load choreography, no bounce/elastic.
- Restrained goal-met cue (ring completes + subtle color settle), not confetti.
- Every animation has a `prefers-reduced-motion: reduce` path (instant or crossfade); progress values render at final state without animation.

## Z-index scale (semantic)

`dropdown 10 → sticky/tabbar 20 → backdrop 30 → sheet/modal 40 → toast 50 → tooltip 60`. No arbitrary 999/9999.

## Icons

Single consistent line-icon set (e.g. Lucide), 1.5–2px stroke, matched sizing. No mixed icon styles.
