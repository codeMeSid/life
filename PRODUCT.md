# Product

## Register

product

## Users

A single user (the owner): a 28-year-old managing fat loss (95kg → 78kg) with GERD, gastritis, and B12 deficiency. Sedentary, awake ~11:00 AM to ~2:00 AM, so a large share of use is late-night, often one-handed on a phone. Context of use: quick daily check-ins from the home screen, several times a day, between meals and before sleep. Not a multi-user product; no accounts, no social features.

## Product Purpose

A personal, installable PWA that turns a fixed 5-day GERD-friendly meal plan into a daily companion. It does three jobs and nothing else:

1. **Meal tracking** — show the day's plan (auto-selected to the current weekday), mark meals eaten, see calories/protein progress against a 1,600 cal / 148g target.
2. **Shopping list** — an auto-derived, checkable grocery list built from the plan's ingredients.
3. **Water tracking** — log intake toward an editable 3L goal, with reminders.

Success = the user opens it without thinking, logs in seconds, and trusts the numbers. The tool should disappear into the routine. It runs fully offline (static GitHub Pages, localStorage), so reliability and instant load matter more than features.

## Brand Personality

Calm, precise, trustworthy. Three words: **quiet, exact, dependable.** Voice is plain and factual, like a good health dashboard (Apple Health, Oura): it states numbers and progress without hype, cheerleading, or jargon. Confidence comes from clarity, not decoration. Feedback on progress is satisfying but understated; no confetti, no mascots, no exclamation marks.

## Anti-references

- **Not gamified or cutesy.** No badges, streak mascots, confetti spam, childish illustration, or manipulative gamification.
- **Not corporate fitness clutter.** Not MyFitnessPal / generic clinical-SaaS: no ad density, no busy multi-widget dashboards, no generic stock blue, no upsell surfaces.
- **Not generic-AI aesthetic.** No purple gradients, decorative glassmorphism, identical icon-heading-text card grids, or tiny tracked-uppercase eyebrows above every section.

## Design Principles

1. **The tool disappears into the task.** Earned familiarity over novelty; standard affordances for standard actions. Logging a meal or a glass of water is one tap.
2. **Numbers you can trust at a glance.** Data legibility first: high contrast, honest progress, no decorative charts that obscure the value.
3. **Built for the thumb at 1 AM.** Mobile-first, one-handed reach, large tap targets, low-glare late-night legibility.
4. **Honest about limits.** Where a platform can't deliver (e.g. closed-app reminders on iOS without a server), the UI says so plainly instead of pretending.
5. **Quiet feedback, no theater.** Motion and color convey state and progress, never perform. Celebrate a hit goal with restraint.

## Accessibility & Inclusion

- Target **WCAG 2.1 AA**: body text ≥4.5:1, large text ≥3:1, including placeholder and muted text.
- All interactive controls ≥44×44px tap targets with visible focus states.
- Full `prefers-reduced-motion` support (progress fills and transitions degrade to instant/crossfade).
- Do not encode state by color alone (water goal, eaten, bought also use icon/label/position).
- Respects `prefers-color-scheme` for the optional dark theme; light is the default.
