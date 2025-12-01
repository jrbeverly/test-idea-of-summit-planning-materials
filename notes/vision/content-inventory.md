# Content Inventory: Summit Guide POC

This document lists every page, spread, and content fragment the proof-of-concept guide carries. It is the stable contract for Milestone 4 content authoring — authors should be able to write every piece from the entries here without hunting through the IA or brief for direction.

**Derived from:** [Information Architecture](./information-architecture.md)
**Paired with:** [Creative Direction Brief](./creative-direction-brief.md)

## Source Legend

Every entry carries a source classification:

| Label                     | Meaning                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **invented-for-demo**     | Fabricated for the POC. There is no real summit backing this content. Reviewers must treat it as a placeholder that would be replaced with ground truth for an actual event. |
| **derived-from-template** | Follows a reusable structural pattern (e.g., ToC format, Index layout, Support footer). The structure is stable; the content is invented.                                    |

There is no "real summit information" in this POC — the entire guide imagines a fictional summit at a fictional office. Every factual claim (address, schedule, people, floor plan) is invented.

---

## Cross-Cutting Elements

These are reachable from every section. They do not belong to any single section's content directory but are rendered by Hugo data files and partials.

| #   | Element                 | Content Type                              | Source                | Tone Note                                                                                                            | Data Files                                                                  |
| --- | ----------------------- | ----------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| X1  | **Table of Contents**   | Overlay/drawer (partial)                  | derived-from-template | Clean, warm, numbered. Current section marked. No corporate dropdown-menu styling.                                   | `data/toc.yaml`                                                             |
| X2  | **Index / Key**         | Overlay/drawer (partial, tabbed with ToC) | derived-from-template | Compact reference, not an appendix dump. Icons shown at a glance; people and spaces one line each with section refs. | `data/index_people.yaml`, `data/index_spaces.yaml`, `data/index_icons.yaml` |
| X3  | **Support & Emergency** | Persistent footer/inline expand           | derived-from-template | Factual, calm, findable in under 3 seconds. Not a legal disclaimer.                                                  | `data/support.yaml`                                                         |

---

## Journey Section Inventories

### 1. Before You Leave

**IA slug:** `before-you-leave`
**IA spread count:** 2–3

| #   | Page / Spread                     | Content Type                    | Source            | Tone Note                                                                                                                                                   | Illustrations & Maps                                                                                                                          |
| --- | --------------------------------- | ------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 | **Section Landing**               | `section-landing`               | invented-for-demo | Opens with a warm sentence about preparing for the journey. Sets the tone for the section without feeling like a checklist header.                          | Small spot illustration: an open suitcase or packed bag.                                                                                      |
| 1.1 | **What to Pack**                  | `spread` (layout: `two-column`) | invented-for-demo | Friendly but useful. Grouped into categories with short marginalia tips ("The office runs cold — trust us on the jacket"). Not a bureaucratic packing memo. | Illustrated packing items grouped by category (essentials, comfort, tech, optional). Each item is a small line drawing with a one-line label. |
| 1.2 | **What to Expect on Arrival Day** | `spread` (layout: `full-bleed`) | invented-for-demo | A short preview that connects to section 3. Warm, anticipatory — "Here's what the first moments will feel like." Not a schedule.                            | Illustration of the arrival moment: someone at the office entrance, bag in hand. Suggests atmosphere without being stock photography.         |

**IA coverage check:** Packing list ✓, Dress code & tone ✓ (in 1.1 marginalia), Weather notes ✓ (in 1.1 marginalia), Travel document checklist ✓ (in 1.1 callout), Arrival preview ✓ (1.2).

### 2. Getting Here

**IA slug:** `getting-here`
**IA spread count:** 2–3

| #   | Page / Spread                       | Content Type                    | Source            | Tone Note                                                                                                                                                                 | Illustrations & Maps                                                                                                                           |
| --- | ----------------------------------- | ------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0 | **Section Landing**                 | `section-landing`               | invented-for-demo | Grounded in place — mentions the city and neighbourhood by name. "You're heading to [fictional office name], in [fictional neighbourhood]."                               | Small spot illustration: a street sign or building silhouette.                                                                                 |
| 2.1 | **Office Location & Area Map**      | `map`                           | invented-for-demo | Annotated map, not an embedded Google Maps widget. "Look for the green door on the east side." Landmarks drawn, not pinned.                                               | Illustrated area map showing the office building, nearest transit stops, a landmark or two, and the surrounding few blocks. Numbered callouts. |
| 2.2 | **Transit, Access & Arrival Times** | `spread` (layout: `two-column`) | invented-for-demo | Practical but conversational. Transit options listed like recommendations, not a timetable. "If you're taking the train, get off at [Station] — it's a five-minute walk." | Small icons for each transit mode (train, bus, bike, car). Step-free route diagram for accessibility.                                          |

**IA coverage check:** Office address + map ✓ (2.1), Transit options ✓ (2.2), Driving/parking ✓ (2.2), Landmarks for finding entrance ✓ (2.1), Building access notes ✓ (2.2), Accessibility for arrival ✓ (2.2).

### 3. Arriving

**IA slug:** `arriving`
**IA spread count:** 2

| #   | Page / Spread              | Content Type                    | Source            | Tone Note                                                                                                                                           | Illustrations & Maps                                                                                                                                                            |
| --- | -------------------------- | ------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0 | **Section Landing**        | `section-landing`               | invented-for-demo | "You've made it." A short, grounding opener that acknowledges the arrival. Marks a transition from travel to being here.                            | Illustration of the office entrance from the attendee's perspective.                                                                                                            |
| 3.1 | **Entry Sequence**         | `spread` (layout: `two-column`) | invented-for-demo | Step-by-step, illustrated. "Step 1: Push the green door. Step 2: You'll see the welcome desk ahead on your left." Imperative, friendly, clear.      | Numbered step illustrations showing the entry path: door → welcome desk → badge → first steps inside. Annotated with arrows.                                                    |
| 3.2 | **Check-in & First Steps** | `spread` (layout: `full-bleed`) | invented-for-demo | What happens at the welcome desk, what you receive, who you'll meet. Ends with a "you've arrived" marker — a small orienting beat before section 4. | Illustration of the welcome desk interaction. Small diagram of what you receive (badge, any printed materials). Icons for first-stop suggestions: coat room, coffee, restrooms. |

**IA coverage check:** Entry sequence illustrated ✓ (3.1), Check-in process ✓ (3.2), Welcome notes ✓ (3.2), First-stop suggestions ✓ (3.2), "You've arrived" marker ✓ (3.2).

### 4. Finding Your Way

**IA slug:** `finding-your-way`
**IA spread count:** 3–4

| #   | Page / Spread               | Content Type                    | Source                                        | Tone Note                                                                                                                                                                              | Illustrations & Maps                                                                                                                                                                                              |
| --- | --------------------------- | ------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.0 | **Section Landing**         | `section-landing`               | invented-for-demo                             | "Now that you're here, let's get you oriented." Sets up the section as a spatial reference the attendee can return to throughout the summit.                                           | Small spot illustration: a compass or directional cue.                                                                                                                                                            |
| 4.1 | **Annotated Floor Plan**    | `map`                           | invented-for-demo                             | Illustrated floor plan with numbered callouts. Not an architectural blueprint — drawn with character, labeled by hand-feel typography. Rooms have names, not just numbers.             | Full building floor plan illustration with 12–18 numbered callouts. Each callout points to a key location. Map uses the icon system defined in the Index/Key (restroom icon, quiet zone icon, coffee icon, etc.). |
| 4.2 | **Key Locations Directory** | `directory`                     | invented-for-demo (derived from 4.1 callouts) | One entry per map callout: number, name, one-sentence description, and when it's relevant/open. Compact, scannable.                                                                    | Each entry may pair with the callout-number icon from the map. No additional full illustrations — references the map.                                                                                             |
| 4.3 | **Wayfinding & Practicals** | `spread` (layout: `two-column`) | invented-for-demo                             | How rooms are labeled, how to read signage, where restrooms/quiet rooms/phone booths are. Wi-Fi network and access instructions. Emergency exits (light touch, factual, not alarming). | Small wayfinding-cue illustrations: example room sign, example directional arrow. Wi-Fi icon.                                                                                                                     |

**IA coverage check:** Annotated floor plan ✓ (4.1), Key locations directory ✓ (4.2), Wayfinding logic ✓ (4.3), Restrooms/quiet rooms/phone booths ✓ (4.2, 4.3), Wi-Fi info ✓ (4.3), Emergency exits ✓ (4.3).

### 5. The Schedule

**IA slug:** `schedule`
**IA spread count:** 4–6

The POC models a 3-day summit (Thursday–Saturday). Day count is invented-for-demo; structure is reusable across real summits.

| #   | Page / Spread              | Content Type      | Source            | Tone Note                                                                                                                                                                                                        | Illustrations & Maps                                                                                                                                                   |
| --- | -------------------------- | ----------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0 | **Section Landing**        | `section-landing` | invented-for-demo | "Here's how the next three days will unfold." Sets up the schedule as a sequenced experience, not a grid to survive. A short rhythm note: mornings are together, afternoons diverge, evenings are for gathering. | Small spot illustration: a day arc — morning → midday → evening as a visual timeline.                                                                                  |
| 5.1 | **Day 1: Arrive & Orient** | `schedule-day`    | invented-for-demo | The first day arc: lighter, focused on arrival, orientation, and settling in. Afternoon sessions, evening welcome gathering.                                                                                     | Session icons (talk, workshop, break, meal, social). Day arc timeline illustration across the top of the spread. Location refs point to section 4 map callout numbers. |
| 5.2 | **Day 2: Dig In**          | `schedule-day`    | invented-for-demo | The core day: morning sessions, working lunch, afternoon deep-dive, evening social. Denser but still sequenced, not gridded.                                                                                     | Same icon and timeline system as 5.1. Location refs point to section 4 map callouts.                                                                                   |
| 5.3 | **Day 3: Close & Depart**  | `schedule-day`    | invented-for-demo | The closing day: morning wrap-up, final sessions, departure window. Lighter density. Ends with a note that connects to section 9.                                                                                | Same icon and timeline system. A small "departure window" marker on the timeline.                                                                                      |

**IA coverage check:** Day-by-day overview ✓ (5.1–5.3), Each session as distinct entry with time/title/location/facilitator/description ✓ (5.1–5.3), Breaks and meals in flow ✓ (5.1–5.3), Transitions between sessions ✓ (5.1–5.3), Evening/social events ✓ (5.1, 5.2).

### 6. People & Spaces

**IA slug:** `people-and-spaces`
**IA spread count:** 2–3

| #   | Page / Spread                    | Content Type                    | Source            | Tone Note                                                                                                                                                                                         | Illustrations & Maps                                                                                                                                                                                                            |
| --- | -------------------------------- | ------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.0 | **Section Landing**              | `section-landing`               | invented-for-demo | "The people who make this summit happen, and the spaces they've prepared for you." Narrative framing — not a directory heading.                                                                   | Small spot illustration: a group of small character-like figures (not headshots).                                                                                                                                               |
| 6.1 | **People You'll Meet**           | `spread` (layout: `two-column`) | invented-for-demo | Introduces 8–10 key people in the guide's narrative voice. One to two lines each: who they are, how you'll encounter them, what they're here to do. No bios. No headshots. No titles-as-identity. | Small character-like spot illustrations (not photographs, not corporate headshots). Each person gets a small visual marker — a colour, a small icon, a distinguishing detail — that matches their session entries in section 5. |
| 6.2 | **The Spaces & Their Character** | `spread` (layout: `two-column`) | invented-for-demo | 6–8 named spaces, each with a short paragraph about its character and unwritten rules. "The Workshop Room: collaborative, tables that move, write on the walls." References section 4 map.        | Small space-character illustrations: the workshop room setup, the quiet lounge, the kitchen gathering area. Each shows the space in use, not empty.                                                                             |

**IA coverage check:** Key people in narrative context ✓ (6.1), Space purposes and character ✓ (6.2), Support contacts ✓ (6.1, listed among "People You'll Meet").

### 7. How We Gather

**IA slug:** `how-we-gather`
**IA spread count:** 1–2

| #   | Page / Spread                   | Content Type                    | Source            | Tone Note                                                                                                                                                                                                                                                                                                                       | Illustrations & Maps                                                                                                                                                                              |
| --- | ------------------------------- | ------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.0 | **Section Landing**             | `section-landing`               | invented-for-demo | "A few things to know about how we'll spend our time together." Warm, setting expectations without being prescriptive.                                                                                                                                                                                                          | Small spot illustration: a circle of people in conversation.                                                                                                                                      |
| 7.1 | **Gathering Rhythms & Rituals** | `spread` (layout: `full-bleed`) | invented-for-demo | Covers meeting etiquette (questions during or after, how facilitation works), social norms (breaks, meals, quiet hours), participation expectations (optional vs. expected), rituals (morning kickoff, end-of-day reflection), and sharing norms (notes, photos). Integrated into narrative flow, not separate policy sections. | Illustrated moments: a session in progress showing hand-raise convention, a break gathering, a morning kickoff circle, an end-of-day reflection. Icons from the Index/Key appear here in context. |

**IA coverage check:** Meeting etiquette ✓, Social norms ✓, Participation expectations ✓, Rituals/traditions ✓, Note-taking/sharing norms ✓.

### 8. Nearby

**IA slug:** `nearby`
**IA spread count:** 1–2

| #   | Page / Spread                | Content Type      | Source                                        | Tone Note                                                                                                                                                                 | Illustrations & Maps                                                                                                                                                        |
| --- | ---------------------------- | ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.0 | **Section Landing**          | `section-landing` | invented-for-demo                             | "Step outside. The neighbourhood has a few things worth knowing about." Inviting, not prescriptive.                                                                       | Small spot illustration: a streetlamp or shopfront.                                                                                                                         |
| 8.1 | **Neighbourhood Sketch Map** | `map`             | invented-for-demo                             | A hand-drawn-feel map of 4–6 blocks around the office. 8–12 marked spots: coffee, lunch, dinner, park, pharmacy, ATM, a "local tip." Markers are illustrated, not pinned. | Illustrated neighbourhood map with numbered callouts and small building/shop sketches. A walking-route suggestion line from the office to a recommended lunch spot or park. |
| 8.2 | **Local Tips & Directory**   | `directory`       | invented-for-demo (derived from 8.1 callouts) | One entry per map callout. Short, personal — "Best coffee within a block. The almond croissant is the move." A "local tip" or two at the bottom.                          | Each entry keyed to the map callout number. Small spot icon per category (coffee cup, fork/knife, tree, cross).                                                             |

**IA coverage check:** Annotated neighbourhood sketch map ✓ (8.1), Curated food/coffee suggestions ✓ (8.2), Parks and walking routes ✓ (8.1, 8.2), Pharmacies/ATMs/convenience ✓ (8.2), Local tips ✓ (8.2).

### 9. Before You Go

**IA slug:** `before-you-go`
**IA spread count:** 1–2

| #   | Page / Spread                | Content Type                    | Source            | Tone Note                                                                                                                                                                                                                                               | Illustrations & Maps                                                                                                                                     |
| --- | ---------------------------- | ------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.0 | **Section Landing**          | `section-landing`               | invented-for-demo | A gentle opening that signals the journey is closing. Warm, not sad. "One last page before you head out."                                                                                                                                               | Small spot illustration: a closed notebook or packed bag by the door.                                                                                    |
| 9.1 | **Departure & What Follows** | `spread` (layout: `full-bleed`) | invented-for-demo | Departure logistics (when the space closes, what to take, lost-and-found), post-summit follow-up (how materials will be shared, where to find recordings), and a brief closing note — personal, authored, consistent with the guide's voice throughout. | Illustration of the office at end-of-day: lights dimming, someone heading out. A small "thank you" visual — not a stock photo, not a corporate sign-off. |

**IA coverage check:** Departure logistics ✓, Post-summit follow-up ✓, Closing note ✓.

## Content Excluded from POC

These content areas are intentionally absent. Each entry explains why, referencing either the IA's POC Scope Boundaries or the creative brief's constraints.

| Excluded Content                                      | Reason                                                                                                                          | Reference                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| User accounts, login, or personalization              | The POC guide is the same for every attendee. No accounts, no saved preferences, no "my schedule."                              | IA: POC Scope Boundaries                                          |
| Real-time schedule updates or push notifications      | The guide is published once and is correct at time of publication. No live data.                                                | IA: POC Scope Boundaries                                          |
| Interactive/pannable maps (Google Maps embed, Mapbox) | Maps are illustrated, static, and annotated — part of the booklet visual system, not a widget.                                  | IA: POC Scope Boundaries; Creative Brief: illustrated quality     |
| Full-text search                                      | The ToC and Index/Key provide structured navigation. Search is a different interaction model than a booklet.                    | IA: POC Scope Boundaries                                          |
| Speaker biographies beyond one line                   | People are introduced narratively (section 6), not as a directory with bios.                                                    | IA: POC Scope Boundaries                                          |
| Registration, ticketing, or RSVP flows                | The guide is a companion, not a transaction surface.                                                                            | IA: POC Scope Boundaries; Creative Brief: no registration CTAs    |
| Code of conduct as a legal/policy document            | Section 7 covers tone and expectations in a warmer voice. A formal policy document belongs in a different artifact.             | IA: Section 7 content boundaries                                  |
| Sponsor logos or sponsor sections                     | No "sponsors" logo bars. The guide is about the summit experience, not its funding.                                             | Creative Brief: Don't list                                        |
| Countdown timer or "X days until summit" widget       | Anticipation comes from the content, not a stopwatch.                                                                           | Creative Brief: Don't list                                        |
| Feedback forms or NPS surveys                         | Out of scope. If feedback collection is needed, present as a margin note with a gentle prompt, not an embedded form.            | IA: Section 9 content boundaries                                  |
| Organizational charts or reporting structures         | Out of scope. "Who will be there" means who you'll encounter, not who reports to whom.                                          | IA: Section 6 content boundaries                                  |
| Multiple summit editions or date pickers              | The POC models one summit. Reusability across editions is a future concern.                                                     | IA: POC Scope Boundaries                                          |
| Photo galleries or stock photography                  | The guide uses illustrations, not photographs. Photography of real people or events cannot be invented-for-demo with integrity. | Creative Brief: illustrated quality; invented-for-demo constraint |
| Embedded video or audio                               | The POC is a static Hugo site. Rich media adds complexity without advancing the booklet concept.                                | Implementation constraint                                         |

---

## Source Summary

| Source                    | Count                                                   | Notes                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **invented-for-demo**     | 30 pages/spreads + 12 data entries                      | All journey section content. The entire guide imagines a fictional 3-day summit at a fictional office. Every address, name, schedule entry, floor plan, and neighbourhood detail is fabricated. |
| **derived-from-template** | 6 entries (3 cross-cutting elements, 3 data structures) | The ToC, Index/Key, and Support/Emergency follow reusable structural patterns from the IA. Content within them (section titles, people names, icon meanings) is invented.                       |

**Total content pieces:** 30 pages/spreads + 3 cross-cutting partials + 5 Hugo data files = 38 authored items.

---

## IA Coverage Verification

Every section from the Information Architecture has at least one page in this inventory. Every page in this inventory maps to a section (or cross-cutting element) defined in the IA.

| IA Section          | Pages                       | Status                  |
| ------------------- | --------------------------- | ----------------------- |
| 1. Before You Leave | 1.0, 1.1, 1.2               | ✓ 3 pages (target: 2–3) |
| 2. Getting Here     | 2.0, 2.1, 2.2               | ✓ 3 pages (target: 2–3) |
| 3. Arriving         | 3.0, 3.1, 3.2               | ✓ 3 pages (target: 2)   |
| 4. Finding Your Way | 4.0, 4.1, 4.2, 4.3          | ✓ 4 pages (target: 3–4) |
| 5. The Schedule     | 5.0, 5.1, 5.2, 5.3          | ✓ 4 pages (target: 4–6) |
| 6. People & Spaces  | 6.0, 6.1, 6.2               | ✓ 3 pages (target: 2–3) |
| 7. How We Gather    | 7.0, 7.1                    | ✓ 2 pages (target: 1–2) |
| 8. Nearby           | 8.0, 8.1, 8.2               | ✓ 3 pages (target: 1–2) |
| 9. Before You Go    | 9.0, 9.1                    | ✓ 2 pages (target: 1–2) |
| Cross-cutting       | X1, X2, X3 (+ 5 data files) | ✓                       |

**Total pages/spreads:** 27 (within the IA's 18–27 estimated range).

---

## Data File Inventory

These Hugo data files support the cross-cutting elements and are authored alongside the content pages. All are source: **invented-for-demo** (content) with **derived-from-template** structure.

| File                     | Purpose                                                                                        | Populated From                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `data/toc.yaml`          | Ordered section list with slugs, titles, and spread counts                                     | IA Section Summary table                                   |
| `data/index_people.yaml` | Every named person: slug, display name, one-line description, section refs                     | 6.1 People You'll Meet + section 5 facilitators            |
| `data/index_spaces.yaml` | Every named space: slug, display name, one-line description, section refs, map callout number  | 4.2 Key Locations Directory + 6.2 Spaces & Their Character |
| `data/index_icons.yaml`  | Icon key: symbol slug, visual description for illustrators, meaning, where it appears          | All sections that use icons                                |
| `data/support.yaml`      | Emergency contact (invented), venue address (invented), lost-and-found location, help sentence | Cross-cutting Support & Emergency element                  |
