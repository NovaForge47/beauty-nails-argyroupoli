# Agent Notes

## Head tags in TanStack Start

Route `head()` `scripts` entries are flat objects: `{ async: true, src: "..." }` for a loader and `{ children: "..." }` for inline code. Wrapping them as `{ tag: "script", attrs: {...} }` renders a broken `<script>` with no `src`, so the analytics loader silently never loads.

## Third-party IDs with ambiguous characters

When a user dictates an ID that contains both `0`/`O` or `1`/`l`, confirm the exact spelling against an independent source before changing working code. The Google Analytics Measurement ID here reads as `G-BOXCYVPF1Y` on screen but is actually `G-B0XCYVPF1Y`.

## Verifying analytics actually collects

HTML containing the tag is not proof. Load the live site in a real browser and confirm a `POST` to `google-analytics.com/g/collect` carrying the expected `tid`, then publish and have the client check GA4 Realtime.

## Portable image hosting

Keep migrated salon images as ordinary files in `public/images` and reference them with root-relative `/images/` paths so image hosting remains portable.
