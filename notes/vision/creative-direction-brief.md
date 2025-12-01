# Creative Direction Brief: Summit Guide as an Instruction Booklet

This brief translates the [VISION.md](../../VISION.md) booklet sensibility into a concrete reference that design and implementation decisions can be evaluated against. Every section below is written so that a reviewer can point at a page, component, or layout and say "this satisfies the brief" or "this violates the brief."

## Reference Set

The following examples are chosen for a specific quality each brings. None is a template to copy; each is a signal of the creative space.

### Instruction Booklets & Game Manuals

| Reference                                                              | Quality to borrow                                                                                                                          | How it applies                                                                                                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _Tunic_ instruction booklet (in-game pages)                            | Pages feel like discovered artifacts — partial, layered, hand-annotated. The booklet is part of the journey, not a separate reference.     | The summit guide should feel like something worth opening before travel, not an afterthought PDF. Build in small discoveries: margin notes, hand-drawn arrows, "you'll find this when..." hints. |
| Classic NES/SNES game manuals (_The Legend of Zelda_, _Super Metroid_) | Compact, illustrated, sequenced. Every page teaches something. Maps with callout numbers. Enemy/item tables with small spot illustrations. | Agenda sessions as "things to discover." Floor plans as annotated maps with numbered callouts. Schedule as sequenced progression, not a grid.                                                    |
| _EarthBound_ player's guide (the one shipped with the game)            | Warm, conversational tone. Hand-drawn maps. Scratch-and-sniff spirit (playful, surprising). Feels like a friend made it for you.           | Voice should be authored and personal. Include small playful elements: "packing list" illustrations, "local tips," neighbourhood sketch notes.                                                   |

### Travel Guides & Field Manuals

| Reference                                               | Quality to borrow                                                                                                                      | How it applies                                                                                                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vintage _Michelin Guides_ / _Baedeker_ travel handbooks | Compact format, dense with useful information, understated elegance. Ribbon bookmark feeling. Town plans with walking routes.          | The guide should feel compact and information-dense. Use a "walking route" mental model for attendee movement through the office.                 |
| _Lonely Planet_ / _Rough Guide_ style                   | Practical advice mixed with cultural context. "Getting there," "When to go," "What to bring" sections. Hand-drawn maps. Local phrases. | Structure the guide around the attendee journey: before you arrive, getting there, entering, finding your way, the rhythm of each day, departing. |
| Military/exploration field notebooks                    | Grid paper, ruled notes, weather-resistant compactness. Information hierarchy through typography alone. Diagrams over paragraphs.      | Prefer visual explanation over walls of text. Use diagrammatic thinking: arrows, zones, paths, landmarks.                                         |

### Illustrated Guides & Companion Books

| Reference                                                    | Quality to borrow                                                                                                                | How it applies                                                                                                                                                       |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _The Wes Anderson Collection_ / art-of books                 | Carefully composed pages, consistent palette, typography as design element. Each spread is intentional.                          | Every page or view should feel composed, not templated. Layout varies by content type — a map spread looks different from a schedule spread.                         |
| Cookbook / recipe-book layout                                | Step-by-step with marginalia. Ingredients list as sidebar. Tips in the margins. Photography that shows process, not just result. | Sessions or activities presented as "steps." Key details in the margin (time, location, who). Icons for categories (talk, workshop, break, social).                  |
| _Keep Going_ by Austin Kleon / _Steal Like an Artist_ series | Small format, one idea per spread, hand-lettered elements, high-contrast pages with breathing room. Feels like a gift book.      | Each section of the guide should have breathing room. Not everything crammed into one scrolling page. Use spreads (or the digital equivalent) as the unit of design. |

## Do: Qualities the Guide Must Have

Every item in this list can be pointed at during review. A design or page either exhibits the quality or it doesn't.

- **Tactile.** The guide feels physical even on a screen: paper textures, deckled edges, fold marks, binding suggestions, shadows that suggest depth. Nothing feels flat or purely digital.
- **Illustrated.** Spot illustrations, icons, diagrams, and maps carry information weight — not just decoration. A map replaces a paragraph of directions. An icon system replaces repeated labels.
- **Layered.** Multiple reading depths on the same surface. A headline for the scanner, a body for the reader, a margin note for the curious. Nothing is single-depth.
- **Sequenced.** Page numbers, section progress, "you are here" markers. The reader always knows where they are in the arc of the guide. Arrival → orientation → participation → departure.
- **Annotated.** Hand-drawn arrows, circled details, underlined phrases, margin scribbles. The guide looks like someone has already used it to mark what matters.
- **Warm.** Inviting color palette (no corporate blues, no stark whites). Friendly but not childish. Feels personal, not institutional.
- **Slightly mysterious.** Small details that reward looking closer. An unlabeled icon that becomes clear later. A footnote that leads somewhere. The guide invites exploration, not just consumption.
- **Compact.** Information-dense but not overwhelming. Prefer one well-designed page over three scattered ones. The guide earns its space.
- **Authored.** One voice throughout. The reader can tell a person wrote this, not a committee. Personality shows through in word choice, asides, and marginalia.

## Don't: Patterns the Guide Must Avoid

Every item in this list draws from the VISION.md non-negotiables. A page or component that uses any of these violates the brief.

- **Generic cards.** No `<v-card>` grids with thumbnail + title + subtitle. If information is presented in card form, the card must be transformed into booklet language: a plate, a panel, a spread, a callout box.
- **Countdown widgets.** No ticking timers. No "X days until summit" digital displays. Anticipation should come from the content, not a stopwatch.
- **Speaker tiles.** No rows of headshot + name + bio. If people are listed, present them as part of the guide's narrative: someone you'll meet, someone showing you around, someone whose session you'll want to find.
- **Agenda-block grids.** No HTML-table schedule with time-slots and room columns. Schedule information must be sequenced, mapped, or diagrammed — never gridded.
- **Tailwind-template smell.** No default spacing scales, no generic sans-serif stacks, no blue-link-on-white-card patterns. The guide must look intentionally designed, not like summit content poured into a starter template.
- **PDF-schedule layout.** No A4/letter page proportions with dense text columns. No "print this page" mentality. The guide is a web-native experience that evokes print, not a print document hosted on the web.
- **Corporate event design.** No abstract-geometric hero sections. No "sponsors" logo bars. No registration CTAs styled as primary buttons. No lanyard-icon badges. No stock photography of people shaking hands.
- **Institutional voice.** No passive constructions ("attendees are requested to..."). No HR-memo tone ("we are pleased to announce..."). No marketing superlatives ("world-class," "best-in-class," "cutting-edge").

## Voice and Tone

The guide speaks in a single, consistent voice — as if a thoughtful, slightly playful host wrote a personal note to each attendee.

**What the voice is:**

- **Warm and personal.** Use "you" and "we." Write like you're telling a friend what to expect. "When you arrive, you'll find the entrance on the east side — look for the green door."
- **Useful first.** Every sentence should help someone navigate, understand, or anticipate. Charm is seasoning, not the main dish. Practical details lead; personality follows.
- **Short and direct.** Prefer short sentences. Break instructions into steps. Use imperative mood for actions: "Bring a jacket. The office runs cold."
- **Occasionally charming.** A quiet joke, a small aside, a playful margin note is welcome — but never at the expense of clarity. If removing the joke makes the information harder to find, keep the joke. If removing the joke makes the information easier to find, cut it.
- **Grounded in place.** The guide knows the office, the neighbourhood, the city. It mentions real things: the café on the corner, the park across the street, the staircase that's faster than the elevator.

**What the voice is not:**

- **Not corporate.** No "leverage," "synergy," "deep dive," "thought leadership." No exclamation marks on factual statements.
- **Not marketing.** No superlatives. The summit is good enough to stand on its own description. If the guide has to tell you the summit is amazing, the guide has already failed.
- **Not bureaucratic.** No passive voice. No "please be advised." No "we kindly request." Just say the thing.
- **Not a Slack message.** No emoji as punctuation. No casual-abbreviated tone. The guide is warm but crafted, not dashed-off.

## Using This Brief

- **During design:** Before starting a page or component, read the "Do" list and pick two to three qualities to emphasize. Read the "Don't" list and confirm the approach avoids every item.
- **During review:** Point at specific bullets. "This spread satisfies annotated and layered because the margin callouts create a second reading path." "This violates compact because the same information is spread across four pages with filler."
- **During implementation:** The "Don't" list is the harder gate. It's easy to accidentally fall into card patterns or grid layouts. When a component looks like a standard web pattern, check whether it appears in the "Don't" list before proceeding.
