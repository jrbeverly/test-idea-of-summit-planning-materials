---
journey_step: 0
title: 'Component Demo'
type: 'spread'
weight: 0
page_number: 0
spread_number: 0
spread: 'single-page'
summary: 'A visual reference showing every booklet UI component. Intended for reviewer verification against the visual system spec.'
---

## Callouts

A callout is an italic emphasis block with a left rule, used for pulled quotes or highlighted passages.

{{< callout text="A great summit feels like someone thought about the details before you arrived — not like a conference that happens to be in a nice room." attribution="— §4 Finding Your Way" >}}

## Stamps

A stamp marks content with special status. Use it sparingly — at most once per section.

{{< stamp text="IMPORTANT" shape="rectangle" >}}

{{< stamp text="LOCAL TIP" shape="circle" >}}

## Traveller's Notes

A traveller's note is a personal aside rendered in the annotation font, in a surface-coloured box with a subtle shadow — like a sticky note tucked into the booklet.

{{< travellers-note heading="LOCAL TIP" text="The almond croissant at the bakery on the corner is the move. Go before 10am." >}}

{{< travellers-note text="No heading — just a quiet observation tucked into the margin, handwritten in tone." >}}

## Marginalia

A marginalia note is rendered in Caveat, the annotation font, at `--sg-font-size-marginalia` in `--sg-color-annotation-ink`. The existing front-matter marginalia list renders through the `marginalia` partial; this shortcode lets authors drop a single note inline.

{{< marginalia text="The office runs cold — trust us on the jacket." position="right-margin" >}}

## Spread Dividers

A section divider is a centered horizontal rule at 25% page width with an optional section mark.

{{< spread-divider label="§4" >}}

A divider without a label renders as a plain rule:

{{< spread-divider >}}

## Dog-Ears

A dog-ear panel has a folded corner effect — like a page that has been turned down. The inner content is whatever you wrap in the shortcode.

{{< dog-ear position="right" >}}

A dog-eared panel can contain **any Markdown content** — paragraphs, lists, even other components.

- This looks like a page corner has been folded down
- The shadow gives it depth on the paper surface
- Use `position="left"` for the other corner

{{< /dog-ear >}}

{{< dog-ear position="left" >}}

Left-side dog-ear: the fold is in the upper-left instead of upper-right.

{{< /dog-ear >}}

## Page-Number Flourish

A flourished page number adds decorative rules on each side of the number — a small touch that makes the page feel designed.

{{< page-number-flourish number="42" >}}

## Key / Legend Box

A key (or legend) pairs symbols with their meanings in a compact, scannable grid. Below is a legend for wayfinding icons, resolved from `data/index_icons.yaml`:

{{< key-legend heading="Wayfinding Icons" icons="restroom,coffee,wifi,accessibility,first-aid,info,pin" >}}
