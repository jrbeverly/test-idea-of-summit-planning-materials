# POC Summary: What Was Proven, What Was Not

A scope-of-demo summary so reviewers understand what the proof-of-concept demonstrates and where its boundaries lie.

---

## What Was Proven

### The core thesis holds

A summit guide can be a designed instruction booklet — a companion for the attendee journey — rather than a conventional event website. The POC demonstrates this across 45 pages covering the full journey arc from packing to departure.

### The visual system is implementable

The visual system specification (`visual-system-specification.md`) is not aspirational — it is implemented. Every design token, page metaphor, component, and layout type described in the spec has a working Hugo template. The system produces consistent, authored pages from structured front matter.

### The content model works at scale

The front-matter schema (journey step, page number, spread type, layout, marginalia, key places, people refs, icon refs, callouts) drives 45 pages across nine sections and five content types — without per-page layout overrides. A content author writes front matter; layouts do the rest.

### The component vocabulary is expressive

Eight shortcodes (callout, stamp, traveller's note, marginalia, spread divider, dog-ear, page-number flourish, key legend) plus three content types (section-landing, spread, schedule-day, map, directory) compose into distinct page experiences without feeling repetitive. The departure page demonstrates how multiple component types can work together on a single spread.

### The voice is consistent

Every page speaks in the same register — warm, personal, useful first — from the packing list to the closing note. The voice specification in the creative direction brief is applied, not just described.

### The journey arc reads as designed

The nine-section sequence reads as a single authored journey, not a collection of pages. Cross-references between sections, recurring imagery (the green door, the suitcase), and a closing that echoes the opening create narrative coherence.

### The site builds cleanly

`make build` produces the complete static site from a clean checkout.

---

## What Was Not Proven

### Real attendee feedback

The content is invented for the demo — it describes a fictional summit at a fictional address with fictional people. Real attendees have not used it. The voice, structure, and usefulness have not been validated against actual attendee needs or questions.

### Mobile and responsive behaviour

The POC targets a booklet page metaphor designed for desktop and tablet viewports. While the Hugo output is HTML and could be made responsive, the current layouts do not implement a mobile reading experience. The two-page-spread metaphor does not translate cleanly to phone screens. This is a known scope limitation — the demo is about proving the booklet direction, not the responsive web implementation.

### Accessibility compliance beyond the existing audit

An accessibility pass was completed (see `notes/accessibility-report.md`), but the POC has not been through a full accessibility audit against WCAG. The visual-system-specification was audited for colour contrast, heading hierarchy, and focus order. Interactive elements (ToC drawer, section navigation) have not been tested with assistive technology.

### Browser diversity

Screenshots and manual review were done in a single Chromium-based browser. Cross-browser rendering (Firefox, Safari) has not been verified. Font loading, SVG rendering, and CSS custom properties may vary.

### Print output

The guide is designed to _feel_ like a printed booklet, but it is rendered as HTML. There is no print stylesheet, no PDF generation pipeline, and no physical output. The "printed-feeling" is achieved through visual metaphor, not an actual print workflow.

### Content management tooling

Content is authored as Hugo Markdown files with front matter. There is no CMS, no WYSIWYG editor, and no content preview beyond the Hugo dev server. The front-matter schema is documented in `www/SummitGuide/README.md` but requires manual authoring.

### Localisation and internationalisation

The POC is English-only with a single locale. There is no i18n infrastructure, no translation pipeline, and no RTL layout support.

### Performance under load

The guide is a static Hugo site — performance is inherently good (zero server-side processing). But no performance budget has been set, no Lighthouse audit has been run, and no CDN configuration has been tested.

### Real event integration

The guide describes a summit but is not connected to any registration system, attendee database, schedule management tool, or real-time updates. Content is static. The demo proves the format; it does not prove how the format would stay current during a real event.

## Known Limitations

1. **No mobile layout.** The two-page-spread metaphor does not adapt to narrow viewports. This is the most significant gap between the POC and production readiness. A mobile reading experience would require a different layout strategy — likely single-column with sequential rather than facing-page composition.

2. **Content is invented, not sourced from real event data.** The POC proves the format works for demo content. Real content from a real summit might expose gaps in the content model (e.g., sessions that span multiple rooms, last-minute schedule changes).

3. **Illustrations are placeholders.** The SVG illustrations use the visual system's colour palette and style, but they are demo-quality — they would need refinement or replacement for a real event.

4. **No dark mode or theme switching.** The colour system is designed for a light, paper-like surface. There is no `prefers-color-scheme: dark` support.

---

## Verdict

The POC proves the direction. The guide rejects the default visual language of corporate event websites and establishes a coherent alternative. A reviewer can open the demo materials, follow the journey arc, and arrive at the two thoughts `VISION.md` calls out:

> "This feels like something I would want to open before I travel."
>
> "This makes the summit feel intentional before I even arrive."

The gaps between POC and production are understood and scoped: mobile layout, real content integration, accessibility audit completion, and print output. None of these gaps undermine the proof — they are the natural boundary between "prove the direction" and "ship the product."
