# Summit Guide — Accessibility Report

Date: 2026-06-13
Branch: `act-or-s/17-accessibility-pass`
Scope: WCAG 2.1 AA for the SummitGuide Hugo static site (`www/SummitGuide/`)

## Summary

An accessibility pass was performed on the SummitGuide booklet-style digital guide. The site makes heavy use of SVG illustrations, spread-based layouts, a custom design-token palette, and a ToC/key drawer pattern. The pass addressed color contrast, focus states, keyboard navigation, alt text, screen-reader sequencing, and reduced-motion handling.

## What was checked

### 1. Color Contrast (WCAG 2.1 AA)

All CSS custom property colour combinations in actual use were audited programmatically.

| Combination                           | Ratio   | Threshold | Result |
| ------------------------------------- | ------- | --------- | ------ |
| ink / paper                           | 14.33:1 | 4.5:1     | Pass   |
| ink / paper-dark                      | 12.88:1 | 4.5:1     | Pass   |
| ink / surface                         | 15.32:1 | 4.5:1     | Pass   |
| ink-muted / paper                     | 5.91:1  | 4.5:1     | Pass   |
| ink-muted / paper-dark                | 5.31:1  | 4.5:1     | Pass   |
| ink-muted / surface                   | 6.32:1  | 4.5:1     | Pass   |
| stamp / paper                         | 4.70:1  | 4.5:1     | Pass   |
| stamp-ink / stamp                     | 4.70:1  | 4.5:1     | Pass   |
| link / paper                          | 6.64:1  | 4.5:1     | Pass   |
| link / paper-dark                     | 5.97:1  | 4.5:1     | Pass   |
| link / surface                        | 7.10:1  | 4.5:1     | Pass   |
| link-visited / paper                  | 5.91:1  | 4.5:1     | Pass   |
| annotation-ink / surface              | 5.58:1  | 4.5:1     | Pass   |
| annotation-ink / paper                | 5.22:1  | 4.5:1     | Pass   |
| map-line / map-fill                   | 6.15:1  | 4.5:1     | Pass   |
| illustration-line / illustration-fill | 10.50:1 | 4.5:1     | Pass   |
| highlight-text / highlight            | 10.83:1 | 4.5:1     | Pass   |
| surface-ink / surface                 | 15.32:1 | 4.5:1     | Pass   |

**Result:** All in-use combinations pass WCAG 2.1 AA (≥4.5:1 for normal text, ≥3:1 for large text). No palette changes were required.

### 2. Focus States

Visible `:focus-visible` indicators were added for all interactive elements using the on-brand stamp-red colour (`--sg-color-stamp`) as a 2px outline with 2px offset:

- **All links** — shared `:focus-visible` rule on `.sg-guide`
- **Skip link** — dedicated focus-visible with 1px offset
- **ToC trigger button** — inherits shared ring
- **ToC drawer close button** — inherits shared ring, plus hover state
- **ToC drawer tabs** — focus-visible with inset outline
- **Breadcrumb links** — focus-visible with border-radius for the circular dots
- **Section nav prev/next** — focus-visible with border-radius
- **Day nav prev/next** — focus-visible with border-radius
- **Schedule location links** — focus-visible with border-radius
- **ToC list links** — focus-visible with inset outline

### 3. Keyboard Navigation

The ToC drawer required JavaScript for proper keyboard behaviour. Added `assets/js/toc-drawer.js`:

- **Open/close** via trigger button (click, Enter, Space)
- **Close** via Escape key
- **Close** via dedicated close button inside the drawer
- **Tab switching** between Contents and Key panels (click, Enter, Space)
- **Focus trap** — Tab/Shift+Tab cycle within the drawer when open
- **Focus restore** — trigger button receives focus when drawer closes

All navigation links (breadcrumb, section nav, day nav, ToC list, schedule locations) are native `<a>` elements and keyboard-reachable by default.

### 4. Alt Text for Illustrations

Updated `layouts/partials/illustration.html`:

- SVGs now receive `aria-hidden="true"` by default (decorative illustrations)
- A new `ariaHidden` parameter allows opting out for meaningful illustrations
- Wrapping elements continue to provide accessible names via `role="img"` and `aria-label` where appropriate

### 5. Screen-Reader Sequencing

Fixes applied:

- **Right-page `aria-labelledby`** — changed to `aria-label` in two-page, two-column, and full-bleed spreads (the referenced IDs did not exist in the right-page DOM, creating orphaned `aria-labelledby` references)
- **Map callout markers** — added screen-reader-only text (`.sr-only`) for callout numbers so screen readers announce "1. Welcome Desk" instead of just "Welcome Desk"
- **Map key entries** — same sr-only number prefix treatment
- **Null callout_number handling** — map key and schedule location footers now gracefully skip markers when a space has no callout number
- **Marginalia** — already well-structured as `<aside>` elements after body content
- **Callouts** — already using `role="complementary"` for semantic grouping
- **`.sr-only` utility class** — added to site.css for future screen-reader-only content

### 6. Reduced Motion

Added `@media (prefers-reduced-motion: reduce)` block to site.css that:

- Sets `animation-duration` and `transition-duration` to `0.01ms` on all elements
- Sets `animation-iteration-count` to `1`
- Disables smooth scrolling

### 7. Button Types

All `<button>` elements in `baseof.html` now have explicit `type="button"` to prevent accidental form submission behaviour.

## What was not changed

- **Table of Contents "Key" panel** — the Key/Index tab panel content is a placeholder (marked with `<!-- Index/Key cross-reference rendered in Milestone 3 -->`). It contains no content and was left as-is.
- **Illustration SVG `<title>` elements** — the source SVG files lack embedded `<title>` elements. The wrapping `role="img"` + `aria-label` pattern on container divs provides accessible names. Adding `<title>` elements to each SVG is deferred to the next illustration asset refresh.
- **Spread-header illustration labels** — the wrapper `aria-label="Section illustration"` is generic; it could be made more descriptive (e.g., "Illustration for [Section Title]") but was not changed to avoid template scope creep.
- **No automated screen-reader testing was performed** — this report reflects an expert review of the DOM structure and ARIA annotations. A real screen-reader pass with VoiceOver/NVDA is recommended as a follow-up.

## Known Limitations

1. The ToC drawer JS has no transition animation (intentional — the booklet aesthetic doesn't call for sliding panels). If animation is added later, it must be gated on `prefers-reduced-motion`.
2. The right-page in two-page spreads is a content slot without a default heading. If content is populated via shortcodes, those shortcodes should supply their own headings and update the `aria-label` on the `<article>`.
3. Map SVGs (`maps/*.svg`) are inlined as-is from `assets/`. Their internal `<text>` elements use `font-family` declarations that should reference `--sg-font-mono` where possible.
4. The site has no `<h1>` inside `<main>` on section landing pages rendered via `list.html` fallback (the `_default/list.html` template uses a hardcoded `id="sg-section-title"` without scoping, which could produce duplicate IDs across multiple sections).

## Validation

- `make build` — passes (SummitGuide: 45 pages)
- No build warnings or errors
