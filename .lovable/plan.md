Update the service cards in `src/routes/index.tsx` (SERVICES section) so each card has a light peanut background instead of the current cream/beige.

- Replace the card's `bg-card` with a light peanut tint built from the existing peanut token: `bg-rose-gold-light/30` (light peanut).
- Update the hover state from `hover:bg-blush/40` to `hover:bg-rose-gold-light/50` so hover stays in the peanut family, slightly deeper.
- Leave text, icons, borders, spacing, and every other section unchanged.

No design tokens are added or changed — only the two utility classes on the service card element.