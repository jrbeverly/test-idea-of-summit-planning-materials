# Information Architecture: Summit Guide

The attendee journey arc in [VISION.md](../../VISION.md) is translated here into a concrete, navigable structure that the Hugo content model can express directly.

This document is the single source of truth for what sections exist, what content lives in each, what stays out, and how the sections relate to one another. The `content-model` and `content-inventory` documents derive their section and type definitions from this IA.

## Navigation Metaphor

**Indexed booklet with chapter progression.**

The guide is experienced as a bound booklet navigated primarily through forward/back progression through numbered sections. A persistent Table of Contents and Key/Legend provide non-linear entry points.

| Mechanism               | Role                                                                                                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Chapter progression** | Primary navigation. Each section follows the previous in the attendee's temporal arc (prepare → travel → arrive → orient → participate → depart). Forward/back controls between adjacent sections are always available. |
| **Table of Contents**   | Persistent overlay or drawer. Lists every section by number and title. Tapping a section navigates directly to it. Indicates current section with a marker.                                                             |
| **Index/Key**           | Persistent reference. Maps concepts, icons, and recurring symbols to their meanings. Maps named people, spaces, and sessions to the sections where they appear.                                                         |

The ToC and Key are cross-cutting elements (see below). The chapter progression is the spine; the ToC and Key are the tools that make the booklet browsable as well as linear.

## Journey Sections

The final ordered sequence for the POC. Each section has a stable slug for use in Hugo content paths and URL structure.

---

### 1. Before You Leave

**Slug:** `before-you-leave`

**Purpose:** Help the attendee prepare for travel — what to pack, what to know before departure, what to expect on arrival. Removes uncertainty before the journey begins.

**Rough page count:** 2–3 single-page-equivalent spreads.

**Content that lives here:**

- Packing list (illustrated, grouped by category: essentials, comfort, tech, optional)
- Dress code and tone expectations (plain-language, not policy-language)
- Weather and seasonal notes for the destination city
- Travel document checklist (ID, tickets, invites, any access codes)
- A short "what to expect on arrival day" preview that connects to section 3

**Content that does NOT live here:**

- Directions or transit information (→ section 2)
- Agenda or schedule (→ section 5)
- Office maps or floor plans (→ section 4)
- Detailed arrival instructions (→ section 3)

**Answers these VISION.md questions:**

- What should I bring?
- What should I expect? (preview)

---

### 2. Getting Here

**Slug:** `getting-here`

**Purpose:** Give the attendee everything they need to physically reach the summit location. Address, transit options, landmarks, and entry instructions.

**Rough page count:** 2–3 single-page-equivalent spreads.

**Content that lives here:**

- Office address, displayed prominently with a map illustration (not an embedded map widget)
- Transit options: nearest stations, bus stops, bike parking, rideshare notes
- Driving directions and parking availability (if applicable)
- Landmarks and visual cues for finding the entrance ("look for the green door")
- Building access notes: hours the building is open, which entrance to use, intercom codes
- Accessibility notes for arrival (step-free routes, elevator access)

**Content that does NOT live here:**

- Packing list or travel prep (→ section 1)
- Check-in flow after entering (→ section 3)
- Floor plans beyond entry level (→ section 4)

**Answers these VISION.md questions:**

- Where am I going?
- When should I arrive? (building hours, suggested arrival window)

---

### 3. Arriving

**Slug:** `arriving`

**Purpose:** Walk the attendee through the moment of arrival: entering, checking in, receiving credentials, and taking their first steps into the space.

**Rough page count:** 2 single-page-equivalent spreads.

**Content that lives here:**

- Entry sequence: what happens from door to desk (step-by-step, illustrated)
- Check-in process: what to have ready, what you'll receive
- Welcome notes: who greets you, what they'll tell you
- First-stop suggestions: coat room, coffee, restrooms, where to set down bags
- A "you've arrived" marker — a small moment of orientation before proceeding

**Content that does NOT live here:**

- Full maps or floor plans (→ section 4)
- Agenda or schedule information (→ section 5)
- Detailed building access instructions (→ section 2)

**Answers these VISION.md questions:**

- Where do I go once I'm there? (first moments)
- What should I expect? (arrival experience)

---

### 4. Finding Your Way

**Slug:** `finding-your-way`

**Purpose:** Orient the attendee within the space. Maps, floor plans, key locations, and wayfinding logic so they can navigate confidently.

**Rough page count:** 3–4 single-page-equivalent spreads.

**Content that lives here:**

- Annotated floor plan(s) — illustrated, not architectural. Numbered callouts for key locations.
- Key locations directory: each numbered callout gets a short description (what happens here, when it's open/relevant)
- Wayfinding logic: how rooms are named/labeled, how to read signage, any numbering conventions
- Restrooms, quiet rooms, phone-booth areas, coat storage
- Wi-Fi network name and any access instructions
- Emergency exits and assembly points (light touch, factual)

**Content that does NOT live here:**

- Session locations by time (→ section 5, but references the map here)
- Descriptions of people or teams (→ section 6)

**Answers these VISION.md questions:**

- Where do I go once I'm there? (full spatial orientation)
- Where can I get help? (physical wayfinding, Wi-Fi)

---

### 5. The Schedule

**Slug:** `schedule`

**Purpose:** Present the summit's day-by-day agenda as a sequenced experience rather than a grid. What happens, when, where, and what to expect from each segment.

**Rough page count:** 4–6 single-page-equivalent spreads (depends on number of days and sessions in POC).

**Content that lives here:**

- Day-by-day overview: one spread per day, with the day's arc visible at a glance
- Each session/activity as a distinct entry: title, time window, location (cross-referencing section 4), facilitator or host, short description of what to expect
- Breaks and meals shown as part of the flow, not as gaps between sessions
- Transitions between sessions: how much time to move, where to go next
- Evening/social events (if any) integrated into the day flow, not separated out

**Content that does NOT live here:**

- Detailed session content or materials (too deep for the POC guide; the schedule names and describes, it doesn't teach)
- Speaker biographies (→ section 6 for "who you'll meet"; bios beyond one line are out of scope for POC)

**Answers these VISION.md questions:**

- What happens each day?
- What is the rhythm of the event?
- When should I arrive? (day-by-day start times)

---

### 6. People & Spaces

**Slug:** `people-and-spaces`

**Purpose:** Introduce the people who make the summit happen and the spaces that give it shape. Present people as part of the guide's narrative rather than as a directory.

**Rough page count:** 2–3 single-page-equivalent spreads.

**Content that lives here:**

- Key people introduced in context: hosts, session facilitators, support contacts — one or two lines each, integrated into the narrative of "who you'll encounter and why"
- Space purposes: what each named space is for, its character (quiet/collaborative, formal/casual), any unwritten rules
- Support contacts: who to find if you need help, have a question, or encounter an issue

**Content that does NOT live here:**

- Full speaker biographies (out of scope for POC)
- Organizational charts or reporting structures
- Maps or floor plans (→ section 4; this section references them)

**Answers these VISION.md questions:**

- Who will be there?
- Where can I get help?

---

### 7. How We Gather

**Slug:** `how-we-gather`

**Purpose:** Communicate the unwritten rules, rituals, and expectations that shape the summit experience. Help attendees understand the culture so they can participate fully.

**Rough page count:** 1–2 single-page-equivalent spreads.

**Content that lives here:**

- Meeting etiquette: how sessions work, whether questions are during or after, how discussions are facilitated
- Social norms: how breaks work, whether meals are structured or freeform, whether there's a quiet-hours expectation
- Participation expectations: what's optional vs. expected, how to opt out gracefully
- Rituals or traditions that repeat across the event (morning kickoff, end-of-day reflection, group photo)
- Note-taking, photography, and sharing norms

**Content that does NOT live here:**

- The schedule itself (→ section 5)
- Code of conduct as a legal/policy document (out of scope for POC; tone and expectations here serve the same purpose in a warmer voice)

**Answers these VISION.md questions:**

- What should I expect? (cultural and social expectations)
- What is the rhythm of the event? (rituals and recurring patterns)

---

### 8. Nearby

**Slug:** `nearby`

**Purpose:** Ground the summit in its neighbourhood. Help attendees find food, coffee, parks, and useful services — and give them reasons to step outside.

**Rough page count:** 1–2 single-page-equivalent spreads.

**Content that lives here:**

- Annotated neighbourhood sketch map: a few blocks around the office with key spots marked
- Coffee, lunch, and dinner suggestions (a short curated list, not a Yelp dump)
- Parks, walking routes, places to take a call or clear your head
- Pharmacies, ATMs, convenience stores
- A "local tip" or two — something only someone who knows the area would mention

**Content that does NOT live here:**

- Office floor plans (→ section 4)
- Full city guide (out of scope — this is neighbourhood-scale only)

**Answers these VISION.md questions:**

- Where can I get help? (practical neighbourhood resources)
- What should I expect? (context beyond the office walls)

---

### 9. Before You Go

**Slug:** `before-you-go`

**Purpose:** Close the journey. Departure logistics, post-summit follow-up, and a sense of conclusion that matches the guide's authored tone.

**Rough page count:** 1–2 single-page-equivalent spreads.

**Content that lives here:**

- Departure logistics: when the space closes, what to take with you, lost-and-found
- Post-summit follow-up: how materials will be shared, where to find recordings or notes, any ongoing communication channels
- A brief closing note — warm, personal, consistent with the guide's voice

**Content that does NOT live here:**

- Full post-summit action plans or project trackers (out of scope for POC)
- Feedback forms or NPS surveys (out of scope; if included, present as a margin note, not a form)

**Answers these VISION.md questions:**

- What should I expect? (after the summit)

---

## Section Summary

| #   | Section          | Slug                | Spreads | Primary questions answered           |
| --- | ---------------- | ------------------- | ------- | ------------------------------------ |
| 1   | Before You Leave | `before-you-leave`  | 2–3     | What to bring, what to expect        |
| 2   | Getting Here     | `getting-here`      | 2–3     | Where am I going, when to arrive     |
| 3   | Arriving         | `arriving`          | 2       | Where to go, what to expect          |
| 4   | Finding Your Way | `finding-your-way`  | 3–4     | Where to go, where to get help       |
| 5   | The Schedule     | `schedule`          | 4–6     | What happens each day, rhythm        |
| 6   | People & Spaces  | `people-and-spaces` | 2–3     | Who will be there, where to get help |
| 7   | How We Gather    | `how-we-gather`     | 1–2     | What to expect, rhythm, rituals      |
| 8   | Nearby           | `nearby`            | 1–2     | Where to get help, context           |
| 9   | Before You Go    | `before-you-go`     | 1–2     | What to expect after                 |

**Total estimated spreads:** 18–27 single-page-equivalent spreads.

## Spread as the Unit of Design

A "spread" is two facing pages in a printed booklet. In the web implementation, a spread is a single viewport-height or near-viewport-height composition — the digital equivalent of opening the booklet to a specific place.

Not every page must be a spread. A section may have a single-page opener followed by a spread, or a sequence of spreads. The important constraint is that each spread is **intentional and composed**, not a template with content swapped in.

## Cross-Cutting Elements

These elements are reachable from every section and do not belong to any single section.

### Table of Contents

- **Access:** Persistent button/icon in a fixed position (e.g., top corner or bottom edge).
- **Content:** Ordered list of all 9 sections by number and title. Current section marked. Tapping navigates directly to that section.
- **Behavior:** Opens as an overlay or drawer. Does not replace the current page.

### Index / Key

- **Access:** Same persistent access point as ToC (tabbed or toggled within the same overlay).
- **Content:**
  - **Icon key:** Every recurring symbol in the guide and its meaning (restroom, quiet zone, coffee, session type markers, etc.).
  - **People index:** Every named person in the guide, one line, with section references.
  - **Space index:** Every named space in the guide, one line, with section references.
- **Behavior:** Opens as an overlay or drawer. Scrollable if the index grows.

### Support & Emergency

- **Access:** Persistent subtle link (e.g., small footer text or info icon).
- **Content:** Emergency contact number, venue address, lost-and-found location, and a short "if you need help right now" sentence.
- **Behavior:** Inline expand or small overlay. Must be findable in under 3 seconds.

## Hugo Content Model Mapping

The IA is designed so that `content-model` can derive Hugo section and type definitions directly. Each journey section maps to a Hugo section (a directory under `content/`). Within each section, individual pages may use one of several content types.

### Sections → Hugo Sections

```text
content/
├── before-you-leave/     # _index.md (section landing)
├── getting-here/         # _index.md (section landing)
├── arriving/             # _index.md (section landing)
├── finding-your-way/     # _index.md (section landing)
├── schedule/             # _index.md (section landing)
├── people-and-spaces/    # _index.md (section landing)
├── how-we-gather/        # _index.md (section landing)
├── nearby/               # _index.md (section landing)
└── before-you-go/        # _index.md (section landing)
```

### Content Types

Each section is composed of one or more content types. The `content-model` should define these as Hugo archetypes or type-specific layouts.

| Content Type      | Used In                                              | Structure                                                                                                                                                      |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spread`          | All sections                                         | A composed two-page layout. The primary content unit. Front matter: `section`, `spread_number`, `title`, `layout` (full-bleed, two-column, map, schedule-day). |
| `section-landing` | Every `_index.md`                                    | Section title, a short purpose sentence, and the first spread. Acts as the section opener.                                                                     |
| `schedule-day`    | Section 5 (`schedule`)                               | One per summit day. Contains an ordered list of session/activity entries, each with time, title, location ref, facilitator ref, and short description.         |
| `map`             | Section 4 (`finding-your-way`), Section 8 (`nearby`) | An illustrated map with numbered callouts. The callouts reference entries in the section's directory.                                                          |
| `directory`       | Section 4, Section 8                                 | A list of callout entries keyed to map numbers. Each entry: number, name, short description.                                                                   |

### Front Matter Conventions

Every content file carries front matter that the layouts, ToC, and Index/Key can consume.

```yaml
# Required on every page
section: 'before-you-leave' # parent section slug
title: 'What to Pack' # page title (used in ToC and page heading)
weight: 1 # ordering within section
type: 'spread' # Hugo type for layout selection
spread_number: 1 # global spread number across entire guide (for Index refs)

# Optional, depending on type
layout: 'two-column' # spread layout variant
callouts: # for map-type spreads
  - number: 1
    name: 'Main Entrance'
    description: 'East side, look for the green door.'
people_refs: ['ada-chen'] # cross-reference keys for the Index
space_refs: ['main-hall'] # cross-reference keys for the Index
icon_refs: ['quiet-zone'] # cross-reference keys for the Icon Key
```

### Cross-Cutting Data Files

The ToC, Index/Key, and Support/Emergency elements are Hugo data files (under `data/`) so they can be rendered independently of any section page.

```text
data/
├── toc.yaml           # ordered section list with slugs and titles
├── index_people.yaml  # people entries: name, description, section_refs
├── index_spaces.yaml  # space entries: name, description, section_refs
├── index_icons.yaml   # icon key: symbol_name, visual_description, meaning
└── support.yaml       # emergency contact, address, lost-and-found
```

## Question Coverage Map

Every practical attendee question from `VISION.md` is answered by at least one section.

| Question                         | Primary Section(s)                                                                         | How                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Where am I going?                | 2 (Getting Here)                                                                           | Address, map illustration, landmarks, transit                           |
| When should I arrive?            | 1 (Before You Leave), 2 (Getting Here), 5 (The Schedule)                                   | Suggested arrival window, building hours, day-by-day start times        |
| What happens each day?           | 5 (The Schedule)                                                                           | Day-by-day spreads with sequenced sessions, breaks, meals               |
| Where do I go once I'm there?    | 3 (Arriving), 4 (Finding Your Way)                                                         | Entry sequence, annotated floor plans, wayfinding logic                 |
| What should I bring?             | 1 (Before You Leave)                                                                       | Illustrated packing list grouped by category                            |
| What should I expect?            | 1 (Before You Leave), 3 (Arriving), 7 (How We Gather), 9 (Before You Go)                   | Preview, arrival experience, cultural norms, post-summit                |
| Who will be there?               | 6 (People & Spaces)                                                                        | Key people introduced in narrative context                              |
| What is the rhythm of the event? | 5 (The Schedule), 7 (How We Gather)                                                        | Day flow, session cadence, rituals and recurring patterns               |
| Where can I get help?            | 4 (Finding Your Way), 6 (People & Spaces), 8 (Nearby), Cross-cutting (Support & Emergency) | Wi-Fi info, support contacts, neighbourhood resources, emergency footer |

## POC Scope Boundaries

What this IA intentionally leaves out of the proof of concept:

- **User accounts or personalization.** The guide is the same for every attendee.
- **Real-time updates.** No live schedule changes, no push notifications. The guide is published once and is correct at time of publication.
- **Interactive maps.** Maps are illustrated, static, and annotated — not pannable/zoomable widgets.
- **Search.** The ToC and Index/Key provide structured navigation; full-text search is out of scope.
- **Speaker bios beyond one line.** People are introduced narratively, not as a directory.
- **Registration or ticketing flows.** The guide is a companion, not a transaction surface.
- **Multiple summit editions.** The POC models one summit. Reusability across editions is a future concern.
