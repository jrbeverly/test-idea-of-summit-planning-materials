# Non-Negotiables Checklist

Verified against `VISION.md` § "Non-Negotiables." Each item is assessed against the final Summit Guide POC as of 2026-06-13.

---

## 1. Feels like a guidebook, manual, or instruction booklet rather than a normal event website

**Status: Holds.**

The page metaphors (single-page, two-page-spread, map-view, directory-page, schedule-day) are drawn from print design, not web patterns. Page numbers, spread numbers, section navigation, and the ToC drawer reinforce the booklet metaphor. Content is sequenced as a journey arc, not a sitemap. The typography system uses two display faces and an annotation face — a print convention, not a web convention.

---

## 2. Visually distinctive

**Status: Holds.**

The colour palette is muted and paper-like, with stamp colours for emphasis. Custom illustrations (spot, icon, map, stamp, and page ornament categories) form a consistent visual vocabulary. The layout system is built on spread metaphors rather than responsive card grids. Typography, iconography, and spatial composition are specified in `visual-system-specification.md` and implemented consistently across all 45 pages.

---

## 3. Avoids generic corporate event design

**Status: Holds.**

No hero banners, no gradient CTAs, no countdown timers, no speaker headshot grids, no sponsor logos, no registration buttons, no "About" pages, no stock photography. The visual language rejects the default corporate event website vocabulary wholesale. The entry point opens with an illustration and a warm sentence — not a value proposition and a call to action.

---

## 4. Does not feel like a standard Tailwind template with summit content added afterward

**Status: Holds.**

The guide is built on Hugo with custom layouts, not a CSS framework template. The visual system specification defines every design token (typography, colour, spacing, page metaphors) as authored decisions, not framework defaults. The component vocabulary (callout, stamp, marginalia, traveller's note, dog-ear, spread divider, page-number flourish, key legend) is bespoke — none of these are standard UI components dropped into content. The HTML output carries no framework class names or utility-first patterns that would betray a template origin.

---

## 5. Makes the attendee journey feel designed

**Status: Holds.**

The nine-section arc follows the natural journey of an attendee: preparing → travelling → arriving → orienting → participating → connecting → departing. Each section landing opens with a purpose sentence and an illustration. The content voice is consistent and personal throughout — warm, direct, useful-first. Cross-references between sections (_"section 4 has you covered," "see section 8 for local tips"_) make the guide feel interconnected. The closing page completes the emotional arc with an authored goodbye that references the opening imagery (the green door).

---

## 6. Useful enough that someone could imagine relying on it before and during the summit

**Status: Holds.**

The guide answers the practical questions listed in `VISION.md`:

| Question | Answered in |
|---|---|
| Where am I going? | §2 Getting Here (address, area map, transit) |
| When should I arrive? | §2 Transit, Access and Arrival Times |
| What happens each day? | §5 The Schedule (three day views) |
| Where do I go once I'm there? | §3 Arriving (entry sequence, check-in), §4 Finding Your Way |
| What should I bring? | §1 What to Pack (categorised list) |
| What should I expect? | §1 What to Expect on Arrival Day, §7 How We Gather |
| Who will be there? | §6 People and Spaces |
| What is the rhythm of the event? | §7 Gathering Rhythms and Rituals |
| Where can I get help? | Support footer (every page), §6 Who to Talk to About What, §9 Support and Emergency Information |

The support footer on every page carries emergency contact, venue address, lost-and-found location, and a help sentence — findable in under three seconds.

---

## Summary

All six non-negotiables hold against the final guide. No known limitations that violate any non-negotiable.
