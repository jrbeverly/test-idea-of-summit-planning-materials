# Summit Guide

This directory is the Hugo site for the Summit Guide POC — a printed-feeling digital guide for an in-person summit, built on the magazine/booklet aesthetic described in [VISION.md](../../VISION.md).

## Direction

- Read [VISION.md](../../VISION.md) for the repository philosophy.
- Read [notes/vision/creative-direction-brief.md](../../notes/vision/creative-direction-brief.md) for the design brief.
- Read [notes/vision/information-architecture.md](../../notes/vision/information-architecture.md) for section structure and content types.
- Read [notes/vision/content-inventory.md](../../notes/vision/content-inventory.md) for the full page-by-page inventory.
- Read [notes/vision/visual-system-specification.md](../../notes/vision/visual-system-specification.md) for the implementation contract (typography, color, spacing, page metaphors).

## Structure

- `content/` — Sections, spreads, and pages.
- `layouts/` — Hugo templates implementing the visual system spec.
- `assets/` — Self-hosted fonts, CSS, illustrations, and static resources.
- `data/` — Structured data files (ToC, Index/Key, Support, design tokens).
- `static/` — Font files and other unprocessed static assets.

## Content Authoring Guide

This guide documents every front-matter field a content author needs to write a page. The schema expresses the attendee journey (sequence, page numbers, marginalia, illustration references, and position) as first-class metadata so layouts and components can render consistently.

### Content Directory Layout

```text
content/
├── _index.md                    # Guide entry point (redirects to Section 1)
├── before-you-leave/            # Journey step 1
│   ├── _index.md               # Section landing
│   └── *.md                    # Section pages
├── getting-here/                # Journey step 2
│   ├── _index.md
│   └── *.md
├── arriving/                    # Journey step 3
│   ├── _index.md
│   └── *.md
├── finding-your-way/            # Journey step 4
│   ├── _index.md
│   └── *.md
├── schedule/                    # Journey step 5
│   ├── _index.md
│   └── *.md
├── people-and-spaces/           # Journey step 6
│   ├── _index.md
│   └── *.md
├── how-we-gather/               # Journey step 7
│   ├── _index.md
│   └── *.md
├── nearby/                      # Journey step 8
│   ├── _index.md
│   └── *.md
└── before-you-go/               # Journey step 9
    ├── _index.md
    └── *.md
```

Each journey section is a Hugo section (a directory under `content/`). Section landings use `_index.md`. Individual pages within a section are `.md` files with their own front matter.

### Front-Matter Schema

Every content file carries front matter in YAML or TOML that layouts, the Table of Contents, and the Index/Key can consume.

#### Required Fields (Every Page)

| Field          | Type    | Description                                                                                              |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `title`        | string  | Page title used in the ToC and as the page heading. Sentence case.                                       |
| `type`         | string  | Hugo content type. Determines which layout templates apply. See [Content Types](#content-types).         |
| `weight`       | integer | Ordering within the section. Landing pages use `0`. Content pages are `1, 2, 3, ...` in order.           |
| `journey_step` | integer | Ordinal position in the attendee journey arc (1–9). Matches the parent section.                          |
| `page_number`  | integer | Sequential booklet page number. Section landings have odd numbers; spread pages get consecutive numbers. |
| `spread`       | string  | Page metaphor — the visual form the page takes. See [Spread Values](#spread-values).                     |

#### Optional Fields

| Field           | Type            | Description                                                                                                                                |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `section`       | string          | Parent section slug. Required on content pages inside sections; omit on `_index.md` pages.                                                 |
| `spread_number` | integer         | Global spread number across the entire guide. A spread is the visual unit — a two-page spread gets one number.                             |
| `layout`        | string          | Layout variant within a content type. See [Layout Values](#layout-values).                                                                 |
| `summary`       | string          | One-sentence purpose sentence displayed in the ToC and under spread titles.                                                                |
| `illustrations` | list of strings | Asset paths relative to `assets/illustrations/`, e.g. `spot/suitcase`. Each references an SVG that the illustration partial inlines.       |
| `marginalia`    | list of objects | Short authored annotations. Each entry has `text` (string) and `position` (one of `left-margin`, `right-margin`, `callout-box`).           |
| `key_places`    | list of strings | Location slugs (from `data/index_spaces.yaml`) that the page references. Layouts can render these as links to the floor plan map.          |
| `people_refs`   | list of strings | Person slugs (from `data/index_people.yaml`) for Index/Key cross-referencing.                                                              |
| `space_refs`    | list of strings | Space slugs (from `data/index_spaces.yaml`) for Index/Key cross-referencing.                                                               |
| `icon_refs`     | list of strings | Icon token names (from `data/index_icons.yaml`) the page uses.                                                                             |
| `callouts`      | list of objects | Numbered map callouts. Each has `number` (integer), `name` (string), and `description` (string). Used on `map` and `directory` type pages. |

#### Content Types

Each value of `type` corresponds to a page metaphor from the visual system spec and determines which Hugo layout templates are used.

| `type`            | Description                                                                                                                                                  | Used For                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `section-landing` | Opens a journey section. Shows the section number (large, in stamp color), section title, a purpose sentence, and a spot illustration. Always a single page. | Every `_index.md` inside a section directory.                                    |
| `spread`          | A composed two-page layout. The primary content unit. Use `layout` to choose the variant.                                                                    | Most content pages (packing lists, narrative spreads, people lists, wayfinding). |
| `schedule-day`    | A single summit day presented as a vertical timeline with session entries. Not a table.                                                                      | Day pages inside `content/schedule/`.                                            |
| `map`             | An illustrated map with numbered callouts. The callouts reference entries in the section's directory.                                                        | Floor plans, area maps, neighbourhood sketch maps.                               |
| `directory`       | A keyed list of entries, each cross-referencing a map callout number. Compact and scannable.                                                                 | Key locations directory, local tips directory.                                   |

#### Spread Values

The `spread` field describes the page metaphor — its visual form and how it sits in the booklet.

| `spread`          | Description                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `single-page`     | A single page. Used for section landings. The page sits alone within the spread container.                                |
| `two-page-spread` | Two facing pages forming a single visual unit. The default for most content. Use `layout` to select the column structure. |
| `map-view`        | A full-spread (or full-page) illustrated map with callout markers and leader lines.                                       |
| `directory-page`  | A compact reference page keyed to map callout numbers.                                                                    |
| `schedule-day`    | A timeline-based day view. Used with `type: schedule-day`.                                                                |

#### Layout Values

The `layout` field is used with `type: spread` to select the column structure.

| `layout`     | Description                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `full-bleed` | Content fills both pages without column structure. Used for narrative moments, large illustrations, atmospheric spreads. |
| `two-column` | Each page is split into two columns. Used for information-dense content (packing lists, directories, people lists).      |

`layout` is omitted for `type: section-landing`, `schedule-day`, `map`, and `directory` — those types have their own composition rules.

### Writing a Page

Follow this process to author a page:

1. **Identify the section and position.** Which of the 9 journey sections does this page belong to? Where does it fall in the section's sequence?
2. **Choose the content type.** Is it a section landing (`section-landing`), a content spread (`spread`), a schedule day (`schedule-day`), a map (`map`), or a directory (`directory`)?
3. **Set the spread value.** Which page metaphor fits? Most content pages use `two-page-spread`. Maps use `map-view`.
4. **Assign page and spread numbers.** Page numbers are sequential across the entire guide. Spread numbers count visual units.
5. **Wire cross-references.** List illustration paths, margin notes, key places, people, spaces, and icons the page uses so the Index/Key and layout partials can render them.
6. **Write body content.** Body text goes below the front matter as standard Markdown.

#### Example: Section Landing

```yaml
---
journey_step: 1
title: 'Before You Leave'
type: 'section-landing'
weight: 0
page_number: 1
spread_number: 1
spread: 'single-page'
summary: 'What to pack, what to know, and what to expect before you head out the door.'
illustrations:
  - spot/suitcase
---
```

#### Example: Two-Column Spread

```yaml
---
journey_step: 1
section: 'before-you-leave'
title: 'What to Pack'
type: 'spread'
weight: 1
page_number: 2
spread_number: 2
spread: 'two-page-spread'
layout: 'two-column'
summary: 'An illustrated packing list grouped by category.'
illustrations:
  - spot/suitcase
marginalia:
  - text: 'The office runs cold — trust us on the jacket.'
    position: 'right-margin'
---
```

#### Example: Map View

```yaml
---
journey_step: 4
section: 'finding-your-way'
title: 'Annotated Floor Plan'
type: 'map'
weight: 1
page_number: 17
spread_number: 11
spread: 'map-view'
summary: 'Illustrated floor plan with numbered callouts for every key location.'
key_places:
  - main-entrance
  - welcome-desk
  - main-hall
icon_refs:
  - restroom
  - quiet-zone
  - coffee
callouts:
  - number: 1
    name: 'Main Entrance'
    description: 'Green door, east side.'
  - number: 2
    name: 'Welcome Desk'
    description: 'Check in and pick up your badge.'
---
```

### Data Files

Hugo data files under `data/` provide the cross-cutting content that layouts reference.

| File                          | Purpose                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| `data/toc.yaml`               | Ordered section list with slugs, titles, and spread counts. Drives the ToC drawer.              |
| `data/index_people.yaml`      | Every named person: slug, display name, one-line description, section refs.                     |
| `data/index_spaces.yaml`      | Every named space: slug, display name, one-line description, section refs, map callout number.  |
| `data/index_icons.yaml`       | Icon key: token, meaning, category, and where it appears in the guide.                          |
| `data/support.yaml`           | Emergency contact, venue address, lost-and-found, help sentence.                                |
| `data/design/typography.yaml` | Font families, type scale, line heights, and weights. Source of truth for CSS token generation. |
| `data/design/colors.yaml`     | Semantic color palette. Source of truth for CSS token generation and inline SVG references.     |
| `data/design/icons.yaml`      | Flat icon token list with meanings. Used by icon-rendering partials.                            |

### Shortcodes

Shortcodes let content authors drop booklet UI components into Markdown without writing HTML or Hugo partial syntax. Each shortcode wraps a Hugo partial and consumes design tokens from `data/design/` — no hex codes, no inline type sizes.

#### Callout

An italic emphasis block with a left rule, used for pulled quotes or highlighted passages. Visual system spec §1.5 "Callout."

```text
{{</* callout text="The text of the callout." attribution="— Optional attribution" */>}}
```

| Parameter     | Required | Description                                 |
| ------------- | -------- | ------------------------------------------- |
| `text`        | Yes      | Callout body text (Markdown OK).            |
| `attribution` | No       | Small mono attribution line below the text. |

#### Stamp

A rotated rubber-stamp marker for special-status content. Visual system spec §1.5, §6.1. Use at most once per section.

```text
{{</* stamp text="IMPORTANT" shape="rectangle" */>}}
```

| Parameter | Required | Description                                                        |
| --------- | -------- | ------------------------------------------------------------------ |
| `text`    | Yes      | Uppercase stamp text, e.g. "IMPORTANT", "DON'T MISS", "LOCAL TIP". |
| `shape`   | No       | `"rectangle"` (default) or `"circle"`.                             |

#### Traveller's Note

A personal aside in a sticky-note style box with annotation typography. Visual system spec §1.5 "Tip / aside."

```text
{{</* travellers-note heading="LOCAL TIP" text="The note content." */>}}
```

| Parameter | Required | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| `text`    | Yes      | Note body text (Markdown OK).                  |
| `heading` | No       | Mono heading above the note, e.g. "LOCAL TIP". |

#### Marginalia (inline)

Inserts a single margin note. The annotation font (Caveat), annotation-ink color, and small size. For a list of marginalia, use the `marginalia:` front-matter field instead.

```text
{{</* marginalia text="A handwritten note in the margin." position="right-margin" */>}}
```

| Parameter  | Required | Description                                                      |
| ---------- | -------- | ---------------------------------------------------------------- |
| `text`     | Yes      | The margin note text.                                            |
| `position` | No       | `"right-margin"` (default), `"left-margin"`, or `"callout-box"`. |

#### Spread Divider

A centered horizontal rule marking a section transition. Visual system spec §7.7.

```text
{{</* spread-divider label="§4" */>}}
```

| Parameter | Required | Description                                                     |
| --------- | -------- | --------------------------------------------------------------- |
| `label`   | No       | Text at the divider center, e.g. `"§4"`. Omit for a plain rule. |

#### Dog-Ear

A panel with a folded page-corner effect. Content goes between the opening and closing tags.

```text
{{</* dog-ear position="right" */>}}
Panel content — any Markdown.
{{</* /dog-ear */>}}
```

| Parameter  | Required | Description                                               |
| ---------- | -------- | --------------------------------------------------------- |
| `position` | No       | `"right"` (default) or `"left"`. Which corner folds down. |

#### Page-Number Flourish

A page number with decorative rule lines on each side — an ornamental alternative to the plain `page-number` partial.

```text
{{</* page-number-flourish number="42" */>}}
```

| Parameter | Required | Description                 |
| --------- | -------- | --------------------------- |
| `number`  | Yes      | The page number to display. |

#### Key / Legend

A compact reference box pairing icon tokens with their meanings. Icon tokens are resolved from `data/index_icons.yaml`.

```text
{{</* key-legend heading="Wayfinding Icons" icons="restroom,coffee,wifi,info" */>}}
```

| Parameter | Required | Description                                               |
| --------- | -------- | --------------------------------------------------------- |
| `heading` | No       | Mono heading above the legend grid.                       |
| `icons`   | Yes      | Comma-separated icon tokens from `data/index_icons.yaml`. |

#### Illustration (existing)

Inline an SVG illustration from `assets/illustrations/`.

```text
{{</* illustration "spot/suitcase" "illustration--sm" */>}}
```

See `data/illustrations.yaml` for available paths across spot, icon, map, stamp, and page categories.

### Tone and Voice

All authored content in the guide speaks in a single voice — warm, personal, useful first, grounded in place. Before writing, read the voice section of the [Creative Direction Brief](../../notes/vision/creative-direction-brief.md#voice-and-tone).

The short version:

- Use "you" and "we." Write like you are telling a friend what to expect.
- Make every sentence helpful. Charm is seasoning, not the main dish.
- Prefer short sentences. Use imperative mood for instructions.
- No corporate voice, no marketing superlatives, no passive constructions.

### Validation

Build the site locally to check your pages:

```sh
make build   # Build the site
make serve   # Start the Hugo development server with live reload
```
