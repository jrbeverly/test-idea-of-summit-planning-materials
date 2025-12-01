# Visual System Specification: Summit Guide

The design system for the summit guide, specified as the implementation contract for Milestone 3. Every element carries a token name, a role, and an intended use. A reviewer can point at a built page and say "this matches" or "this drifts from the spec."

**Derived from:** [Creative Direction Brief](./creative-direction-brief.md), [Information Architecture](./information-architecture.md), [Content Inventory](./content-inventory.md)
**Consumed by:** Milestone 3 (implementation)

---

## 1. Typography System

### 1.1 Font Families

| Token                  | Role                                                     | Family                                   | Self-Hosting                               | Fallback Stack                      |
| ---------------------- | -------------------------------------------------------- | ---------------------------------------- | ------------------------------------------ | ----------------------------------- |
| `--sg-font-display`    | Section titles, spread headings, large display text      | **Newsreader** (optical size: `display`) | Yes, via `@font-face` from `assets/fonts/` | `Georgia, 'Times New Roman', serif` |
| `--sg-font-body`       | Body text, paragraphs, lists, directory entries          | **Newsreader** (optical size: `text`)    | Yes, via `@font-face` from `assets/fonts/` | `Georgia, 'Times New Roman', serif` |
| `--sg-font-annotation` | Marginalia, tips, handwritten notes, margin callouts     | **Caveat**                               | Yes, via `@font-face` from `assets/fonts/` | `'Comic Sans MS', cursive`          |
| `--sg-font-mono`       | Index entries, key references, page numbers, data labels | **Space Mono**                           | Yes, via `@font-face` from `assets/fonts/` | `'Courier New', Courier, monospace` |

**Why Newsreader:** It is a purpose-built serif for long-form reading with optical size variants (`display` for large headings, `text` for body). It feels editorial and bookish without being precious. The `display` cut has higher contrast and tighter spacing suited to large sizes; the `text` cut has lower contrast and looser spacing for readability at small sizes. Both map naturally to the booklet metaphor.

**Why Caveat:** Its casual handwriting quality reads as "someone wrote this in the margin" — satisfying the **annotated** quality from the creative brief. Use it only for marginalia, tips, and annotation-style notes. Never use it for body text, navigation labels, or the ToC.

**Why Space Mono:** A monospace with character. Used for the Index/Key, page numbers, and cross-references, it signals "reference system" without feeling like a code editor. The slight retro quality fits the booklet aesthetic.

**Self-hosting requirement:** All four families must be self-hosted as `woff2` files in `assets/fonts/`, loaded via `@font-face` in the compiled CSS. No Google Fonts CDN requests. This keeps the guide offline-capable and avoids third-party request latency.

### 1.2 Type Scale

A classic typographic scale using the major third ratio (1.25). All sizes are in `rem` with a `1rem = 18px` base for body text. Values are named, not raw sizes in implementation — the CSS custom properties carry the names; the raw values appear only in the token definition.

| Token                        | `rem` Value | `px` Equivalent (base 18) | Role                                                             |
| ---------------------------- | ----------- | ------------------------- | ---------------------------------------------------------------- |
| `--sg-font-size-display-xl`  | `4.209rem`  | ~76px                     | Section number on landing spreads                                |
| `--sg-font-size-display-lg`  | `3.367rem`  | ~61px                     | Section titles, major spread headings                            |
| `--sg-font-size-display-md`  | `2.694rem`  | ~48px                     | Subsection headings within spreads                               |
| `--sg-font-size-heading`     | `2.155rem`  | ~39px                     | Card/panel titles, schedule day headings                         |
| `--sg-font-size-heading-sm`  | `1.724rem`  | ~31px                     | Small panel headings, directory section heads                    |
| `--sg-font-size-body`        | `1rem`      | 18px                      | Primary reading text                                             |
| `--sg-font-size-body-sm`     | `0.8rem`    | ~14.4px                   | Directory entries, schedule session descriptions, secondary text |
| `--sg-font-size-callout`     | `1.25rem`   | ~22.5px                   | Pulled quotes, emphasized text blocks, highlight passages        |
| `--sg-font-size-marginalia`  | `0.75rem`   | ~13.5px                   | Margin notes, tips, printed annotations                          |
| `--sg-font-size-page-number` | `0.75rem`   | ~13.5px                   | Page numbers                                                     |
| `--sg-font-size-stamp`       | `0.875rem`  | ~15.75px                  | Stamped labels, badge text, marker text                          |
| `--sg-font-size-caption`     | `0.7rem`    | ~12.6px                   | Map callout labels, illustration captions, diagram notes         |
| `--sg-font-size-index`       | `0.8rem`    | ~14.4px                   | Index/Key entries                                                |

### 1.3 Line Heights

| Token                     | Value  | Role                                             |
| ------------------------- | ------ | ------------------------------------------------ |
| `--sg-leading-display`    | `1.1`  | Display text (headings need tight leading)       |
| `--sg-leading-heading`    | `1.2`  | Section and subsection headings                  |
| `--sg-leading-body`       | `1.6`  | Body text (comfortable reading)                  |
| `--sg-leading-compact`    | `1.35` | Directory entries, schedule items, index entries |
| `--sg-leading-marginalia` | `1.4`  | Margin notes                                     |

### 1.4 Font Weights

| Token                          | Value        | Usage                                                                                            |
| ------------------------------ | ------------ | ------------------------------------------------------------------------------------------------ |
| `--sg-font-weight-body`        | `400`        | Body text, directory entries, captions                                                           |
| `--sg-font-weight-body-italic` | `400 italic` | Emphasis within body, quotes, asides                                                             |
| `--sg-font-weight-heading`     | `500`        | Headings, subheadings (medium — not bold)                                                        |
| `--sg-font-weight-display`     | `400`        | Display text (relies on optical size, not weight, for presence)                                  |
| `--sg-font-weight-strong`      | `600`        | Strong emphasis within body text (used sparingly)                                                |
| `--sg-font-weight-annotation`  | `400`        | Annotation text (Caveat reads well at regular weight; bold would feel unnatural for handwriting) |
| `--sg-font-weight-mono`        | `400`        | Monospace text                                                                                   |
| `--sg-font-weight-mono-bold`   | `700`        | Monospace emphasis (Index section headers, key labels)                                           |

**Note on weight restraint:** The guide avoids heavy typographic weight. The booklet aesthetic comes from the typeface itself, the scale contrast, and the spatial composition — not from bold text. `font-weight: 700` appears only in the monospace stack for reference labels. Display headings use `400` (regular) at large optical sizes, which provides sufficient presence through contrast alone.

### 1.5 Role-Based Typography Treatments

Every text role in the guide has a defined treatment: family, size, weight, leading, color, and any special behavior (case, letter-spacing, decoration).

| Role                                   | Family                 | Size                         | Weight                         | Leading                   | Color                       | Special                                                                                                                                                                                                        |
| -------------------------------------- | ---------------------- | ---------------------------- | ------------------------------ | ------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Section number** (e.g., "Section 4") | `--sg-font-display`    | `--sg-font-size-display-xl`  | `--sg-font-weight-display`     | `--sg-leading-display`    | `--sg-color-stamp`          | Uppercase, letter-spacing: `0.02em`. Rendered large but secondary — the number sets tone, not hierarchy.                                                                                                       |
| **Section title**                      | `--sg-font-display`    | `--sg-font-size-display-lg`  | `--sg-font-weight-display`     | `--sg-leading-display`    | `--sg-color-ink`            | Sentence case. Sits below the section number.                                                                                                                                                                  |
| **Spread title**                       | `--sg-font-display`    | `--sg-font-size-display-md`  | `--sg-font-weight-heading`     | `--sg-leading-heading`    | `--sg-color-ink`            | Sentence case. Used as the primary heading on a spread page.                                                                                                                                                   |
| **Spread subtitle**                    | `--sg-font-body`       | `--sg-font-size-body-sm`     | `--sg-font-weight-body`        | `--sg-leading-heading`    | `--sg-color-ink-muted`      | Italic. A short purpose sentence under the spread title.                                                                                                                                                       |
| **Body text**                          | `--sg-font-body`       | `--sg-font-size-body`        | `--sg-font-weight-body`        | `--sg-leading-body`       | `--sg-color-ink`            | Standard reading text. Paragraphs separated by `1em` margin (not indented).                                                                                                                                    |
| **Body small**                         | `--sg-font-body`       | `--sg-font-size-body-sm`     | `--sg-font-weight-body`        | `--sg-leading-compact`    | `--sg-color-ink`            | For directory entries, schedule session descriptions, compact lists.                                                                                                                                           |
| **Callout**                            | `--sg-font-body`       | `--sg-font-size-callout`     | `--sg-font-weight-body-italic` | `--sg-leading-body`       | `--sg-color-ink`            | Italic. Used for pulled quotes, emphasis blocks, highlight passages. Rendered in a distinct panel or with a left rule.                                                                                         |
| **Marginalia**                         | `--sg-font-annotation` | `--sg-font-size-marginalia`  | `--sg-font-weight-annotation`  | `--sg-leading-marginalia` | `--sg-color-annotation-ink` | The "handwritten margin note" treatment. Always paired with a visual annotation cue (a circle, an arrow, a bracket, or a line connecting it to the relevant content). Rendered in `--sg-color-annotation-ink`. |
| **Tip / aside**                        | `--sg-font-annotation` | `--sg-font-size-marginalia`  | `--sg-font-weight-annotation`  | `--sg-leading-marginalia` | `--sg-color-annotation-ink` | Same typography as marginalia but rendered in a distinct box or panel (a "sticky note" or "margin box") rather than literal margin position.                                                                   |
| **Page number**                        | `--sg-font-mono`       | `--sg-font-size-page-number` | `--sg-font-weight-mono`        | `1`                       | `--sg-color-ink-muted`      | Format: a bare number (no "p." prefix). Always in the same position on every page (see Navigation Patterns).                                                                                                   |
| **Stamp text**                         | `--sg-font-mono`       | `--sg-font-size-stamp`       | `--sg-font-weight-mono-bold`   | `1`                       | `--sg-color-stamp-ink`      | Uppercase, letter-spacing: `0.05em`. Rendered on a `--sg-color-stamp` background. Slightly rotated (`transform: rotate(-2deg)`). Used for category labels, status markers, "OFFICIAL GUIDE" marks.             |
| **Caption**                            | `--sg-font-body`       | `--sg-font-size-caption`     | `--sg-font-weight-body`        | `--sg-leading-compact`    | `--sg-color-ink-muted`      | Italic. Under illustrations, maps, and diagrams. One line maximum.                                                                                                                                             |
| **Index entry**                        | `--sg-font-mono`       | `--sg-font-size-index`       | `--sg-font-weight-mono`        | `--sg-leading-compact`    | `--sg-color-ink`            | Key names are `--sg-font-weight-mono-bold`; values and section refs are `--sg-font-weight-mono`.                                                                                                               |
| **Navigation label**                   | `--sg-font-body`       | `--sg-font-size-body-sm`     | `--sg-font-weight-body`        | `1`                       | `--sg-color-ink-muted`      | Prev/Next links, ToC entries, breadcrumb text.                                                                                                                                                                 |
| **Support / emergency**                | `--sg-font-body`       | `--sg-font-size-body-sm`     | `--sg-font-weight-body`        | `--sg-leading-compact`    | `--sg-color-ink`            | Small, calm, findable. Rendered in the persistent footer.                                                                                                                                                      |

---

## 2. Color & Material System

### 2.1 Palette

Semantic role names only — no color-name tokens (no `--sg-color-blue`, `--sg-color-red`). Every token describes what the color is used for, not what hue it is.

| Token                          | Hex Value | Swatch                         | Role                                                                                                                                                                                                 |
| ------------------------------ | --------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sg-color-paper`             | `#faf7f2` | Warm cream                     | Default page background. The "paper" the guide is printed on. Never pure white.                                                                                                                      |
| `--sg-color-paper-dark`        | `#f0ebe0` | Deeper cream                   | Alternate paper tone. Used for sidebars, inset panels, schedule-day backgrounds, the ToC/Index drawer. Distinguishes secondary surfaces without introducing a new color.                             |
| `--sg-color-ink`               | `#2c2416` | Warm near-black                | Primary text color. Dark enough for readability, warm enough to avoid the harshness of `#000`. All body text, headings, and primary content use this.                                                |
| `--sg-color-ink-muted`         | `#6b5e4a` | Warm gray-brown                | Secondary text, captions, page numbers, navigation labels. Muted without being cold.                                                                                                                 |
| `--sg-color-highlight`         | `#f3d94e` | Warm highlighter yellow        | Text highlight (like a physical highlighter pen). Used as a background behind short inline text spans. Never used as a block background.                                                             |
| `--sg-color-highlight-text`    | `#2c2416` | (same as ink)                  | Text color when rendered on a `--sg-color-highlight` background. The text does not change color; the highlight sits behind it.                                                                       |
| `--sg-color-stamp`             | `#c73e3a` | Muted red (rubber stamp)       | Stamp backgrounds, section-number color, category markers. The "official mark" color — like a rubber stamp or wax seal. Used sparingly: section numbers, stamp labels, and key marker elements only. |
| `--sg-color-stamp-ink`         | `#faf7f2` | (same as paper)                | Text color when rendered on `--sg-color-stamp` background. Reverses out to paper color.                                                                                                              |
| `--sg-color-rule`              | `#d4c9b5` | Warm light brown               | Horizontal rules, section dividers, panel borders, map grid lines. Present but not loud.                                                                                                             |
| `--sg-color-rule-light`        | `#e5ddd0` | Very warm light beige          | Lighter rules — subtle dividers within content, schedule timeline ticks, directory entry separators.                                                                                                 |
| `--sg-color-surface`           | `#ffffff` | White (the only white)         | Cards, panels, and elevated surfaces that sit on `--sg-color-paper`. The briefest suggestion of depth. Used for the ToC/Index overlay, callout panels, and tip boxes.                                |
| `--sg-color-surface-ink`       | `#2c2416` | (same as ink)                  | Text on `--sg-color-surface` backgrounds. Same as body ink.                                                                                                                                          |
| `--sg-color-annotation-ink`    | `#4a6b8a` | Muted blue-gray                | Text color for marginalia, tips, and handwritten annotations. Cool enough to read as "written in a different pen" — distinct from the warm body text. Like a blue pen on cream paper.                |
| `--sg-color-link`              | `#8b4513` | Warm brown                     | Link text. Not corporate blue. The brown feels like a cross-reference note in a printed book.                                                                                                        |
| `--sg-color-link-visited`      | `#6b5e4a` | (same as ink-muted)            | Visited links fade to muted — they've been read, the mark remains.                                                                                                                                   |
| `--sg-color-map-line`          | `#5c4e3d` | Dark warm brown                | Map and diagram line work. Darker than `--sg-color-rule` so it reads as drawn content, not decoration.                                                                                               |
| `--sg-color-map-fill`          | `#e8e0d5` | Warm light fill                | Selective fill for map regions, building outlines, room shapes. Lighter than `--sg-color-paper-dark`.                                                                                                |
| `--sg-color-illustration-line` | `#3d3226` | Dark warm brown (illustration) | Spot illustration line work. Slightly darker and warmer than `--sg-color-map-line` for contrast against paper.                                                                                       |
| `--sg-color-illustration-fill` | `#f0ebe0` | (same as paper-dark)           | Selective fill for illustrations. Keeps illustrations grounded in the paper palette.                                                                                                                 |

### 2.2 Palette Constraints

- **No pure white** except `--sg-color-surface` (and only for elevated panels that need to separate from paper).
- **No pure black** anywhere. `--sg-color-ink` is the darkest color in the system.
- **No blues** except `--sg-color-annotation-ink` (and only because it reads as pen ink, not interface blue).
- **No greens, purples, or oranges** unless introduced through illustration content (and even then, desaturated to feel like printed spot color, not screen color).
- **Stamp red** is the only saturated color. It is used at most 3–5 times per section. If it appears more often, it loses its "marker" quality.

### 2.3 Material Tokens

The guide evokes print materials. These tokens define the visual texture and depth cues.

| Token                    | Value / Description                                                                                           | Role                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sg-shadow-xs`         | `0 1px 2px rgba(44, 36, 22, 0.06)`                                                                            | Subtlest elevation. For panels that sit just above paper — tip boxes, callout cards.                                                           |
| `--sg-shadow-sm`         | `0 2px 8px rgba(44, 36, 22, 0.10)`                                                                            | ToC/Index drawer, elevated cards. Suggests the drawer is a physical overlay on the page.                                                       |
| `--sg-shadow-stamp`      | `0 0 0 1px rgba(199, 62, 58, 0.3), 0 1px 3px rgba(44, 36, 22, 0.12)`                                          | Stamp impression. A subtle inset + drop combo that makes stamped elements feel pressed into the paper.                                         |
| `--sg-shadow-spread`     | `0 4px 24px rgba(44, 36, 22, 0.12), 0 1px 4px rgba(44, 36, 22, 0.06)`                                         | Spread container shadow. The entire spread area casts a soft shadow on the viewport background, suggesting the open booklet sits on a surface. |
| `--sg-texture-paper`     | CSS `background-image` noise pattern (SVG or base64 PNG, 200×200px tile, ~2% opacity over `--sg-color-paper`) | Subtle paper grain. Must be near-invisible — felt, not seen. Applied to the page background.                                                   |
| `--sg-texture-ink-bleed` | Slight `text-shadow` or filter blur on stamp text (0.5px blur radius, opacity 0.3)                            | Gives stamped text a whisper of ink spread. Applied only to stamp text. Optional — if it looks like a rendering glitch, drop it.               |
| `--sg-radius-sm`         | `2px`                                                                                                         | Subtle corner rounding for small panels and tip boxes.                                                                                         |
| `--sg-radius-md`         | `4px`                                                                                                         | Corner rounding for the ToC/Index drawer, callout cards.                                                                                       |
| `--sg-radius-page`       | `1px`                                                                                                         | "Page" edge rounding. So subtle it may not be perceived consciously. A 0px page edge feels too digital.                                        |

### 2.4 Page & Viewport Surface

The guide is rendered as a booklet page sitting on a surface.

| Element                   | Treatment                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Viewport background**   | `--sg-color-paper-dark` — the "table" or "desk" the booklet rests on.                                                                                                           |
| **Page/spread container** | `--sg-color-paper` with `--sg-texture-paper`, `--sg-shadow-spread`, and `--sg-radius-page`. Max-width constrained to spread proportions (see Space & Rhythm).                   |
| **Spread gutter**         | A subtle center line or fold shadow at the midpoint of a spread, suggesting the binding. CSS: a thin vertical gradient or `box-shadow` inset at the center of two-page spreads. |

---

## 3. Space & Rhythm

### 3.1 Grid System

The guide is composed on a **column grid within each page**, not a full-viewport grid.

| Token                      | Value                     | Role                                                                                                  |
| -------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `--sg-page-width`          | `min(100% - 2rem, 42rem)` | Single page max width. ~756px at base font size — a comfortable book-page width.                      |
| `--sg-spread-width`        | `min(100% - 2rem, 84rem)` | Two-page spread max width. Double the page width.                                                     |
| `--sg-page-padding-inline` | `2rem`                    | Horizontal padding within a page (inside the paper).                                                  |
| `--sg-page-padding-block`  | `3rem`                    | Vertical padding within a page.                                                                       |
| `--sg-spread-gap`          | `3rem`                    | Gap between two facing pages in a spread. At smaller viewports, pages stack vertically with this gap. |

**Columns per page:** 6-column grid (for single-page layouts) or 12-column grid (for spread layouts, treated as two 6-column pages with a center gutter).

**Column gap:** `1.5rem`.

### 3.2 Spacing Scale

A limited spacing scale based on the body font size (`1rem = 18px`). Token names describe spatial role, not numeric value.

| Token                    | `rem` Value | Role                                                                                      |
| ------------------------ | ----------- | ----------------------------------------------------------------------------------------- |
| `--sg-space-xs`          | `0.5rem`    | Icon-to-label gap, inline spacing between small elements.                                 |
| `--sg-space-sm`          | `1rem`      | Paragraph spacing, list item gap, rule-to-content gap.                                    |
| `--sg-space-md`          | `1.5rem`    | Section-to-section gap within a spread, panel padding, callout margins.                   |
| `--sg-space-lg`          | `2.5rem`    | Major content block separation, spread-to-spread gap, before/after a map or diagram.      |
| `--sg-space-xl`          | `4rem`      | Section landing top padding, spread-level breathing room.                                 |
| `--sg-space-section-gap` | `5rem`      | Vertical gap between sections (between the end of one section and the start of the next). |

### 3.3 Spread Composition Rules

A spread is the primary design unit. These rules govern how content is placed on a spread.

1. **Two-page spread is the default.** Content is composed across two facing pages. The left page and right page form a single visual unit.
2. **Gutter awareness.** No critical content crosses the center fold/gutter. Line art, maps, and diagrams may span both pages, but text blocks and callout numbers stay on one side.
3. **Full-bleed spreads** (content runs edge to edge within the paper) are reserved for section landings, large illustrations, and maps. They use `--sg-page-padding-inline: 0` and rely on the illustration or background color to carry the visual weight.
4. **Two-column spreads** split each page into two columns (left page: 2 cols, right page: 2 cols). Used for packing lists, directory entries, people lists — content that benefits from side-by-side comparison or compact presentation.
5. **Single-page compositions** are used when the content is naturally shorter (section landings, the "How We Gather" section). A single page still carries page numbers and sits within the spread container — it is simply the only visible page at that position.
6. **Every spread or single page has exactly one primary visual entry point.** The reader's eye should land on one thing first (the section number, the illustration, the map). If two elements compete, one must be demoted.

### 3.4 Responsive Behavior

| Breakpoint                               | Behavior                                                                                                                                                                                                                                                                                       |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Above 60rem (1080px)**                 | Full two-page spread layout. Left and right pages visible simultaneously. Spread container is centered in the viewport on `--sg-color-paper-dark`.                                                                                                                                             |
| **Between 40rem and 60rem (720–1080px)** | Single-page view. Pages stack vertically within the spread container. The "spread" becomes a sequence of single pages. Prev/Next navigation provides the progression that side-by-side pages would otherwise give.                                                                             |
| **Below 40rem (720px)**                  | Single column with reduced page padding (`--sg-page-padding-inline` drops to `1rem`). The grid remains but collapses to a simpler flow. The guide still feels like pages, not a responsive website — each page is a distinct visual unit separated by rules or shadows, not continuous scroll. |

**Scroll model:** The guide scrolls vertically through pages/spreads within a section. At section boundaries, a clear section divider marks the transition (see Navigation Patterns). Continuous scroll without visual page breaks is a violation — the reader must always perceive discrete pages.

---

## 4. Illustration Vocabulary

### 4.1 Style Direction

| Property           | Specification                                                                                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Line weight**    | Thin to medium. ~1.5–2.5px at display scale, consistent within a single illustration. Line weight carries meaning: heavier lines for foreground/emphasis, lighter lines for background/detail.                                                                                                      |
| **Line character** | Slightly irregular — hand-drawn, not geometric. Lines may taper slightly at ends. Corners may overshoot slightly. The goal is "drawn by a skilled illustrator," not "rendered by a plotter."                                                                                                        |
| **Fill behavior**  | Selective and restrained. Most illustrations are line-only. When fill is used, it is flat (no gradients), uses only the illustration palette colors (`--sg-color-illustration-fill`, `--sg-color-map-fill`), and covers 10–30% of the illustration area.                                            |
| **Texture**        | Optional subtle hatching or stippling for depth — used only on maps and larger illustrations. Spot illustrations are clean line art.                                                                                                                                                                |
| **Color**          | Line work uses `--sg-color-illustration-line` or `--sg-color-map-line`. Fill uses `--sg-color-illustration-fill` or `--sg-color-map-fill`. Stamp red (`--sg-color-stamp`) may appear as a selective accent in illustrations — a red dot on a map, a red stamp mark — at most once per illustration. |
| **Dimensionality** | Flat or very shallow depth. No 3D rendering, no realistic shading, no gradients. Depth is conveyed through line weight variation, hatching, and layering (foreground/midground/background via line density).                                                                                        |
| **Proportions**    | Slightly stylized. People and characters are compact, ~4–5 heads tall. Buildings and rooms are slightly compressed. Maps are not to architectural scale — they are spatial narratives, not blueprints.                                                                                              |

### 4.2 Illustration Categories

| Category                      | Description                                                                                                                                                                                                                                                              | Examples (from Content Inventory)                                                                                                                                                               | Size Constraint                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Spot illustration**         | Small, single-subject line drawings. Decorative but information-carrying — they set tone and signal section theme.                                                                                                                                                       | Open suitcase (1.0), street sign (2.0), building entrance (3.0), compass (4.0), day arc timeline (5.0), group of figures (6.0), circle of people (7.0), streetlamp (8.0), closed notebook (9.0) | 80–200px in the largest dimension. Never dominates the page.                           |
| **Iconographic illustration** | Symbolic icons for the icon system. Consistent style, line-based, 24×24px or 32×32px bounding box at display size.                                                                                                                                                       | Restroom, quiet zone, coffee, talk (session type), workshop (session type), break, meal, social, Wi-Fi, emergency exit, accessibility                                                           | 24–48px bounding box. Always rendered at integer multiples of the base 24px grid.      |
| **Cartographic illustration** | Maps: floor plans and neighbourhood maps. Annotated with numbered callouts. Line-based with selective fill for rooms/regions. Callout numbers rendered as circled digits connected to map features by thin leader lines.                                                 | Annotated floor plan (4.1), neighbourhood sketch map (8.1), area map (2.1)                                                                                                                      | Full page width (within `--sg-page-width`). May span a full spread for the floor plan. |
| **Character illustration**    | Small, stylized character-like figures. Not portraits — more like the simplified figures in a field guide or instruction booklet. Each character gets a distinctive visual marker (a color, a prop, a silhouette shape) that matches their session entries in section 5. | 8–10 character figures for "People You'll Meet" (6.1)                                                                                                                                           | 40–64px tall. Rendered inline or in a small group composition.                         |
| **Diagram illustration**      | Step sequences, timeline arcs, wayfinding diagrams. Line-based, often with numbered steps or time markers. Uses arrows, brackets, and leader lines heavily.                                                                                                              | Entry sequence steps (3.1), day arc timeline (5.1–5.3), wayfinding cues (4.3)                                                                                                                   | Varies — inline diagrams are max 50% page width; full-spread diagrams fill the page.   |

### 4.3 Production Approach

**Mixed pipeline, curated output.** The spec does not mandate a single production tool. The requirement is that the output is visually consistent — a reader should not be able to tell which illustrations came from which source.

| Source                                              | Appropriate For                                                               | Constraint                                                                                                                                                                                                |
| --------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hand-drawn (pen/ink on paper, scanned)**          | Spot illustrations, character illustrations, diagram illustrations            | Scan at 2× display resolution, clean up in vector editor, output as SVG.                                                                                                                                  |
| **AI-assisted (prompt → refine → vectorize)**       | Spot illustrations, generating multiple icon variants, texture/hatching fills | AI output is a starting point, not the final asset. All AI-generated illustrations must be refined by hand (line weight adjustment, simplification, palette conformance). Raw AI output is not shippable. |
| **Vector-drawn (Figma, Illustrator, InkScape)**     | Icons, cartographic illustrations, diagrams                                   | Primary production tool for maps and icons. Keep stroke properties consistent with the line weight spec.                                                                                                  |
| **Curated (modified existing open-license assets)** | Supplementary spot illustrations, texture patterns                            | Must match the line weight, fill, and color spec. Attribution handled per license terms.                                                                                                                  |

**Output format:** All illustrations ship as **inline SVG** (not `<img>` references, not icon fonts). SVGs must have their stroke and fill colors set to `currentColor` or CSS custom property references so they respond to `--sg-color-illustration-line`, `--sg-color-illustration-fill`, and `--sg-color-map-line`.

**Asset organization:**

```text
assets/
  illustrations/
    spot/          # Spot illustrations (one .svg per illustration)
    icons/         # Icon set (one .svg per icon)
    maps/          # Cartographic illustrations
    characters/    # Character illustrations
    diagrams/      # Diagram illustrations
```

---

## 5. Icon System

### 5.1 Icon Tokens

Every icon in the guide has a token name. New icons are added to this list; no icon appears in the guide without a corresponding spec entry.

| Token                 | Visual Description                                             | Meaning                                | Appears In                                |
| --------------------- | -------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- |
| `icon-restroom`       | Simplified figure silhouette, gender-neutral                   | Restroom location                      | Map (4.1), Key (X2)                       |
| `icon-quiet-zone`     | Ear with a "quiet" line or a small "shh" indicator             | Quiet room or quiet zone               | Map (4.1), Key (X2)                       |
| `icon-coffee`         | Small cup with steam lines                                     | Coffee / beverage station              | Map (4.1), Key (X2), Nearby (8.2)         |
| `icon-talk`           | Speech bubble with a single line inside                        | Talk / presentation session type       | Schedule (5.1–5.3), Key (X2)              |
| `icon-workshop`       | Two overlapping shapes or hands interacting                    | Workshop / interactive session type    | Schedule (5.1–5.3), Key (X2)              |
| `icon-break`          | A small clock with an open segment or a cup                    | Break period                           | Schedule (5.1–5.3), Key (X2)              |
| `icon-meal`           | Fork and knife simplified, or a plate with steam               | Meal period                            | Schedule (5.1–5.3), Key (X2)              |
| `icon-social`         | Two or three simplified figures together                       | Social event / gathering               | Schedule (5.1–5.2), Key (X2)              |
| `icon-wifi`           | Three concentric arcs                                          | Wi-Fi available                        | Wayfinding (4.3), Key (X2)                |
| `icon-emergency-exit` | Simplified door with an arrow pointing out                     | Emergency exit                         | Map (4.1), Key (X2), Support footer (X3)  |
| `icon-accessibility`  | Standard accessibility symbol (simplified to match icon style) | Step-free / accessible route           | Transit spread (2.2), Map (4.1), Key (X2) |
| `icon-stairs`         | Simplified staircase (ascending steps)                         | Stair location                         | Map (4.1), Transit spread (2.2)           |
| `icon-elevator`       | Simplified elevator doors with up/down arrows                  | Elevator location                      | Map (4.1), Transit spread (2.2)           |
| `icon-bike`           | Simplified bicycle (two circles and a frame)                   | Bike parking                           | Transit spread (2.2), Key (X2)            |
| `icon-parking`        | "P" in a rounded square or simple car silhouette               | Car parking                            | Transit spread (2.2)                      |
| `icon-info`           | "i" in a circle (line art, not filled)                         | General information point              | Support footer (X3), wayfinding (4.3)     |
| `icon-first-aid`      | Simplified cross or kit shape                                  | First aid / medical                    | Map (4.1), Support footer (X3), Key (X2)  |
| `icon-phone`          | Simplified handset or rectangle with rounded corners           | Phone / contact point                  | Support footer (X3)                       |
| `icon-pin`            | A map pin or marker shape                                      | "You are here" marker, location marker | Maps (2.1, 4.1, 8.1)                      |

### 5.2 Icon Style Spec

| Property          | Value                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Grid**          | 24×24px base grid, with 1px stroke alignment                                                                                  |
| **Stroke width**  | 1.5px (thin) for detail, 2px (medium) for primary shapes                                                                      |
| **Stroke color**  | `currentColor` — set by context to `--sg-color-ink` or `--sg-color-ink-muted`                                                 |
| **Fill**          | None by default. Selective fill (`--sg-color-illustration-fill`) for area distinction.                                        |
| **Corner radius** | 1px on outer corners, 0.5px on inner corners                                                                                  |
| **Visual weight** | All icons should feel equally dense. An icon with 5 strokes should have those strokes be thinner than an icon with 2 strokes. |
| **Padding**       | 2px internal padding within the 24×24px bounding box (actual drawing area: 20×20px)                                           |

### 5.3 Icon Key Rendering

The Index/Key (cross-cutting element X2) renders the icon key as a grid:

```text
[icon]  [meaning — one line]
```

Each icon appears at 32×32px (rendered at 1.333× base size for legibility in the key), followed by its meaning text in `--sg-font-size-body-sm`. Icons are ordered alphabetically by meaning within category groups: **Wayfinding**, **Session Types**, **Amenities**, **Transport**.

---

## 6. Page Metaphors

The guide uses distinct page types (metaphors) rather than a single template with content swapped in. Each metaphor has a defined composition and set of constraints.

### 6.1 Metaphor Catalog

#### Section Landing

| Property        | Specification                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | Opens a journey section. Establishes tone and signals the transition from the previous section.                                                                                                                                                                     |
| **Composition** | Full-bleed within the paper. Section number (large, `--sg-color-stamp`) at top or top-left. Section title below. One short purpose sentence in `--sg-font-size-body-sm` italic. A spot illustration in the lower portion or side — not centered, slightly off-axis. |
| **Page count**  | Always a single page (not a spread). The section landing is the opening page; the next spread is the first content spread of the section.                                                                                                                           |
| **Page number** | Present (odd-numbered — section landings always start on the right/page 2 of a spread).                                                                                                                                                                             |
| **Navigation**  | Prev/Next present. "You are here" marker in ToC updated.                                                                                                                                                                                                            |

#### Spread: Full-Bleed

| Property        | Specification                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Purpose**     | An immersive composition where content spans both pages without column structure. Used for narrative moments, large illustrations, and atmospheric content.                                            |
| **Composition** | Content fills both pages. A background illustration or texture may span the full spread. Text blocks are positioned intentionally on one side or the other — not centered and not spanning the gutter. |
| **Used in**     | "What to Expect on Arrival Day" (1.2), "Check-in & First Steps" (3.2), "Gathering Rhythms & Rituals" (7.1), "Departure & What Follows" (9.1)                                                           |
| **Page number** | Both pages numbered (e.g., 14 and 15).                                                                                                                                                                 |

#### Spread: Two-Column

| Property        | Specification                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | Information-dense content that benefits from side-by-side organization. Each page is split into two columns; the left and right pages each carry their own two-column grid.              |
| **Composition** | 2 columns per page (4 columns across the spread). Columns are independent — content does not flow from left-page columns into right-page columns. The center gutter is respected.        |
| **Used in**     | "What to Pack" (1.1), "Transit, Access & Arrival Times" (2.2), "Entry Sequence" (3.1), "Wayfinding & Practicals" (4.3), "People You'll Meet" (6.1), "The Spaces & Their Character" (6.2) |
| **Page number** | Both pages numbered.                                                                                                                                                                     |

#### Map View

| Property        | Specification                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | An illustrated map with numbered callouts. The map is the primary content; the callout directory may be on the same spread or on an adjacent page.                                                                                                                                                                                                                                  |
| **Composition** | Full-spread (or full single page) illustration. Numbered callout markers (circled digits, `--sg-color-stamp` circle with `--sg-color-stamp-ink` number) on the map. Thin leader lines connect markers to features. A legend panel in the corner explains map symbols. Callout directory is either overlaid on the map (in a semi-transparent panel) or on a separate adjacent page. |
| **Used in**     | "Office Location & Area Map" (2.1), "Annotated Floor Plan" (4.1), "Neighbourhood Sketch Map" (8.1)                                                                                                                                                                                                                                                                                  |
| **Numbering**   | Callout numbers use `--sg-font-mono` at `--sg-font-size-body-sm`. Marker circles are 24px diameter, centered on the number.                                                                                                                                                                                                                                                         |

#### Directory Page

| Property        | Specification                                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | A keyed list of entries, each cross-referencing a map callout number. Compact, scannable, reference-oriented.                                                                                                                      |
| **Composition** | Single page or spread. Each entry: `[callout number] [name] — [one-line description]`. Callout number rendered as a small circled digit matching the map marker style. Two-column layout when the directory is long (20+ entries). |
| **Used in**     | "Key Locations Directory" (4.2), "Local Tips & Directory" (8.2)                                                                                                                                                                    |
| **Page number** | Present on each page.                                                                                                                                                                                                              |

#### Schedule Day

| Property        | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | Present a single summit day as a sequenced timeline, not a grid. The reader follows the day's arc from top to bottom.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Composition** | A vertical timeline spine runs down the left or center of the page. Each session/activity is a timeline entry: time marker on the spine, title and description to the right (or alternating left/right). Session type icons (`icon-talk`, `icon-workshop`, etc.) appear at each timeline point. A day arc illustration (morning → midday → evening) runs across the top as a visual overview. Location refs point to section 4 map callout numbers. Breaks and meals are entries on the timeline, not gaps — they have the same visual weight as sessions but are marked with break/meal icons. |
| **Used in**     | "Day 1: Arrive & Orient" (5.1), "Day 2: Dig In" (5.2), "Day 3: Close & Depart" (5.3)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Page count**  | One spread per day (may extend to a second spread for dense days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Constraint**  | No HTML `<table>` elements. No time-slot × room-column grid. The timeline is a visual sequence, not a tabular schedule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Stamped Page

| Property                | Specification                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**             | A page or section of a page that carries a "stamp" — a visual marker that this content has a special status (official, important, "don't miss").                                                                                                                    |
| **Composition**         | A stamp element (colored rectangle or circle with `--sg-color-stamp` background, rotated -2° to -5°) sits in the margin or corner. Stamp text in `--sg-font-mono`, uppercase, `--sg-color-stamp-ink`. Content beside/around the stamp is standard body composition. |
| **Used in**             | Any spread where content deserves special marking. Used at most once per section. The stamp is a spice, not a staple — if every page is stamped, no page is.                                                                                                        |
| **Stamp text examples** | "IMPORTANT", "DON'T MISS", "OFFICIAL", "NOTE", "LOCAL TIP"                                                                                                                                                                                                          |

### 6.2 Metaphor Selection Guide

| Content type (from IA)          | Default metaphor          | May also use       |
| ------------------------------- | ------------------------- | ------------------ |
| `section-landing`               | Section Landing           | —                  |
| `spread` (layout: `full-bleed`) | Spread: Full-Bleed        | Stamped Page       |
| `spread` (layout: `two-column`) | Spread: Two-Column        | Stamped Page       |
| `map`                           | Map View + Directory Page | —                  |
| `directory`                     | Directory Page            | Spread: Two-Column |
| `schedule-day`                  | Schedule Day              | —                  |

---

## 7. Navigation Patterns

### 7.1 Page Numbering

| Property       | Specification                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Format**     | Bare number (no "p." or "page" prefix). Rendered in `--sg-font-mono` at `--sg-font-size-page-number`, color `--sg-color-ink-muted`.                                            |
| **Position**   | Bottom outer corner of each page. On left-hand pages: bottom left. On right-hand pages: bottom right. On single-page views (mobile): bottom center.                            |
| **Sequence**   | Continuous from page 1 (the guide cover or first section landing) through the last page. Page numbers are sequential across the entire guide, not per-section.                 |
| **Cover page** | Page 1 is the guide's opening page (the first section landing of "Before You Leave"). The guide does not have a separate "cover" page in the POC — section 1.0 IS the opening. |
| **ToC/Index**  | The ToC and Index are overlays, not pages. They do not have page numbers.                                                                                                      |

### 7.2 Journey Breadcrumb

| Property        | Specification                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | Persistently shows the reader where they are in the journey arc. Satisfies the **sequenced** quality.                                                                                                                                                                                                                                 |
| **Position**    | Fixed to the top of the viewport, outside the page container. Visible on all pages.                                                                                                                                                                                                                                                   |
| **Composition** | A thin horizontal bar with 9 segments (one per journey section). Each segment is a tiny dot or dash. The current section's segment is filled (`--sg-color-stamp`); visited sections are filled with `--sg-color-ink-muted`; future sections are outlined (`--sg-color-rule`). Hovering a segment shows the section name as a tooltip. |
| **Label**       | Below or beside the bar: "Section 4 of 9" in `--sg-font-size-caption`, color `--sg-color-ink-muted`.                                                                                                                                                                                                                                  |
| **Behavior**    | Clicking/tapping a segment navigates to that section's landing page. This is the only persistent navigation element.                                                                                                                                                                                                                  |

### 7.3 Table of Contents (Cross-Cutting Element X1)

| Property            | Specification                                                                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Trigger**         | A persistent button in the top-right corner of the viewport. Icon: three horizontal lines with varying widths (a "contents" icon, not a hamburger menu — the lines suggest a list or stacked pages). Color: `--sg-color-ink-muted`. |
| **Drawer**          | Opens as an overlay from the right edge. Width: `min(24rem, 85vw)`. Background: `--sg-color-surface` with `--sg-shadow-sm`. The overlay slides in with a 200ms ease-out transition.                                                 |
| **Backdrop**        | A semi-transparent overlay (`rgba(44, 36, 22, 0.3)`) covers the page behind the drawer. Tapping the backdrop closes the drawer.                                                                                                     |
| **Content**         | Ordered list of all 9 sections by number and title. Each entry: `[section number]. [section title]` in `--sg-font-body` at `--sg-font-size-body`, color `--sg-color-ink`.                                                           |
| **Current section** | Marked with a `--sg-color-stamp` left-border (3px) and `--sg-color-paper-dark` background on the entry. The section number is rendered in `--sg-color-stamp` (instead of `--sg-color-ink`).                                         |
| **Navigation**      | Tapping a section entry closes the drawer and navigates to that section's landing page.                                                                                                                                             |
| **Close**           | An "×" button in the top-right corner of the drawer. Tapping the backdrop also closes.                                                                                                                                              |

### 7.4 Index / Key (Cross-Cutting Element X2)

| Property           | Specification                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Position**       | Tabbed within the same drawer as the ToC. Two tabs at the top of the drawer: "Contents" (the ToC view) and "Key" (the Index/Key view).                                                                            |
| **Key content**    | Three sections: **Icons** (icon grid — icon + meaning), **People** (alphabetical list — name + one-line description + section refs), **Spaces** (alphabetical list — name + one-line description + section refs). |
| **Icons section**  | A grid: 32px icon on the left, meaning text on the right, grouped by category with a small category label in `--sg-font-size-caption` above each group.                                                           |
| **People section** | Each entry: name in `--sg-font-mono` bold, en-dash, one-line description in `--sg-font-body-sm`, section ref numbers in `--sg-font-mono` (e.g., "§4, §6").                                                        |
| **Spaces section** | Each entry: name in `--sg-font-mono` bold, en-dash, one-line description in `--sg-font-body-sm`, map callout number in a circled digit, section refs.                                                             |
| **Behavior**       | Same drawer, same backdrop, same close behavior as ToC. Switching tabs does not close the drawer.                                                                                                                 |

### 7.5 Prev / Next Navigation

| Property           | Specification                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Purpose**        | Chapter progression — the primary navigation mechanism. Satisfies the **sequenced** quality.                                                                                   |
| **Position**       | Bottom of each section, after the last spread/page of the section. Centered within the page width.                                                                             |
| **Composition**    | Two arrow buttons with labels. Previous (left): `← Section 3: Arriving`. Next (right): `Section 5: The Schedule →`. Both in `--sg-font-body-sm`, color `--sg-color-ink-muted`. |
| **At boundaries**  | Section 1 has no Previous. Section 9 has no Next. In these cases, only one arrow is shown (centered alone).                                                                    |
| **Interaction**    | Hover: arrow and label shift to `--sg-color-ink`. Click/tap: navigates to the adjacent section's landing page.                                                                 |
| **Within-section** | Prev/Next navigates between SECTIONS, not between individual spreads within a section. Within-section navigation is vertical scroll.                                           |

### 7.6 "You Are Here" Markers

The guide maintains the reader's orientation through multiple markers working together.

| Marker                         | Location                       | Behavior                                                                                                                                                                                                                                           |
| ------------------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Journey breadcrumb segment** | Top of viewport (persistent)   | Current section's segment is `--sg-color-stamp`. Always visible.                                                                                                                                                                                   |
| **ToC entry highlight**        | Inside the ToC drawer          | Current section has `--sg-color-stamp` left-border and `--sg-color-paper-dark` background.                                                                                                                                                         |
| **Map "you are here" pin**     | On floor plan maps (section 4) | A `--sg-color-stamp` pin icon with a "You are here" label in `--sg-font-size-caption`. Positioned at the main entrance or the welcome desk — the attendee's default starting point. The pin is an illustration element, not a geo-location marker. |
| **Section progress**           | Journey breadcrumb label       | "Section 4 of 9" text. Reassures the reader they are in a specific place in the sequence.                                                                                                                                                          |

### 7.7 Section Transitions

| Property            | Specification                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visual break**    | A section divider separates the last page of one section from the first page of the next. The divider is a horizontal rule (`--sg-color-rule`, 1px) spanning 25% of the page width, centered, with `--sg-space-section-gap` of vertical space above and below. On the rule: a small centered section number in `--sg-font-mono` at `--sg-font-size-caption`, color `--sg-color-ink-muted` (e.g., "§4"). |
| **Scroll position** | When navigating via Prev/Next, the viewport scrolls to the top of the new section's landing page (smooth scroll, 300ms).                                                                                                                                                                                                                                                                                |

---

## 8. Implementation Token Map

### 8.1 CSS Custom Properties

All design tokens from this specification are exposed as CSS custom properties on `:root` (or on a `.sg-guide` wrapper). The naming convention is `--sg-{category}-{role}`.

**Categories:** `color`, `font`, `font-size`, `leading`, `font-weight`, `space`, `shadow`, `texture`, `radius`, `page`, `spread`.

Every token defined in sections 1–7 above maps to a CSS custom property with the same name. The Hugo CSS pipeline (via `assets/css/`) consumes these properties.

### 8.2 Hugo Data Files

Design tokens that are referenced in Hugo templates (not just CSS) are stored as Hugo data files for template access:

```text
data/
  design/
    typography.yaml   # Font families, scale values (mirrors CSS custom properties)
    colors.yaml        # Palette values (for inline SVG color references)
    icons.yaml         # Icon token list with meanings and categories
```

These are the source of truth for token values. The CSS custom properties are generated from or kept in sync with these data files.

### 8.3 Token Generation

During the Hugo build, token values from `data/design/` may be injected into CSS via Hugo templating in `assets/css/` (e.g., a `tokens.css` file that uses Hugo's `resources.ExecuteAsTemplate` to emit CSS custom properties from data). This ensures CSS and templates stay in sync.

---

## 9. Review Checklist

A reviewer evaluating Milestone 3 output against this spec should check:

### Typography

- [ ] All text uses one of the four defined font families (Newsreader Display, Newsreader Text, Caveat, Space Mono).
- [ ] No text uses a font outside the system.
- [ ] Type scale values match the defined tokens (no ad-hoc font sizes).
- [ ] Role-based typography treatments match the table in §1.5 (correct family, size, weight, color for each text role).
- [ ] All fonts are self-hosted (no Google Fonts requests in network tab).

### Color

- [ ] No pure white (`#ffffff`) except on `--sg-color-surface` elevated panels.
- [ ] No pure black (`#000000`) anywhere.
- [ ] No corporate blues.
- [ ] Stamp red (`#c73e3a`) appears sparingly (≤5 times per section).
- [ ] Palette tokens are used by semantic name, not by raw hex value, in stylesheets.

### Illustration

- [ ] All illustrations are inline SVG.
- [ ] Line weight, fill, and color conform to §4.1.
- [ ] No gradients, no 3D rendering, no stock photography.
- [ ] Icons match the 24×24px grid and stroke spec (§5.2).

### Page Metaphors

- [ ] Every page/spread uses a defined metaphor from §6.1 (no unclassified layouts).
- [ ] The schedule is a timeline, not an HTML table.
- [ ] Maps have numbered callouts with leader lines and directory cross-references.
- [ ] Section landings are single pages, not spreads.

### Navigation

- [ ] Page numbers appear on every page in the correct position.
- [ ] Journey breadcrumb is persistent and shows all 9 sections.
- [ ] ToC drawer opens from the right, lists all sections, highlights the current one.
- [ ] Index/Key is tabbed within the same drawer.
- [ ] Prev/Next arrows navigate between sections (not within).
- [ ] "You are here" markers are present and consistent across breadcrumb, ToC, and maps.

### Creative Brief Alignment

- [ ] No generic cards, countdown widgets, speaker tiles, or agenda-block grids (§Don't).
- [ ] Tactile, illustrated, layered, sequenced, annotated, warm, slightly mysterious, compact, authored (§Do).
- [ ] Voice is warm and personal, not corporate, not marketing, not bureaucratic (§Voice).

---

## 10. Appendix: Token Index

Every design token defined in this specification, listed alphabetically for quick reference.

### Color Tokens

`--sg-color-annotation-ink`, `--sg-color-highlight`, `--sg-color-highlight-text`, `--sg-color-illustration-fill`, `--sg-color-illustration-line`, `--sg-color-ink`, `--sg-color-ink-muted`, `--sg-color-link`, `--sg-color-link-visited`, `--sg-color-map-fill`, `--sg-color-map-line`, `--sg-color-paper`, `--sg-color-paper-dark`, `--sg-color-rule`, `--sg-color-rule-light`, `--sg-color-stamp`, `--sg-color-stamp-ink`, `--sg-color-surface`, `--sg-color-surface-ink`

### Typography Tokens

`--sg-font-display`, `--sg-font-body`, `--sg-font-annotation`, `--sg-font-mono`, `--sg-font-size-display-xl`, `--sg-font-size-display-lg`, `--sg-font-size-display-md`, `--sg-font-size-heading`, `--sg-font-size-heading-sm`, `--sg-font-size-body`, `--sg-font-size-body-sm`, `--sg-font-size-callout`, `--sg-font-size-marginalia`, `--sg-font-size-page-number`, `--sg-font-size-stamp`, `--sg-font-size-caption`, `--sg-font-size-index`, `--sg-leading-display`, `--sg-leading-heading`, `--sg-leading-body`, `--sg-leading-compact`, `--sg-leading-marginalia`, `--sg-font-weight-body`, `--sg-font-weight-body-italic`, `--sg-font-weight-heading`, `--sg-font-weight-display`, `--sg-font-weight-strong`, `--sg-font-weight-annotation`, `--sg-font-weight-mono`, `--sg-font-weight-mono-bold`

### Space & Layout Tokens

`--sg-page-width`, `--sg-spread-width`, `--sg-page-padding-inline`, `--sg-page-padding-block`, `--sg-spread-gap`, `--sg-space-xs`, `--sg-space-sm`, `--sg-space-md`, `--sg-space-lg`, `--sg-space-xl`, `--sg-space-section-gap`

### Material Tokens

`--sg-shadow-xs`, `--sg-shadow-sm`, `--sg-shadow-stamp`, `--sg-shadow-spread`, `--sg-texture-paper`, `--sg-texture-ink-bleed`, `--sg-radius-sm`, `--sg-radius-md`, `--sg-radius-page`

### Icon Tokens

`icon-restroom`, `icon-quiet-zone`, `icon-coffee`, `icon-talk`, `icon-workshop`, `icon-break`, `icon-meal`, `icon-social`, `icon-wifi`, `icon-emergency-exit`, `icon-accessibility`, `icon-stairs`, `icon-elevator`, `icon-bike`, `icon-parking`, `icon-info`, `icon-first-aid`, `icon-phone`, `icon-pin`
