# PRD — Babson · Frontier AI (v2)

> A short, forwardable brief making the positive case for Babson to lead in AI-era entrepreneurship.

Source brief: [`original prompt.md`](original%20prompt.md). Earlier seven-page version preserved as the `v1.0` tag and `v1-archive` branch on this repo.

---

## 1. Goal

A short, polished, Babson-branded brief that:

1. President Spinelli can read in five minutes.
2. He can forward to donors, board members, or faculty without needing to add context.
3. Reads as a celebration of Babson's entrepreneurship leadership, not a critique of any current gap.

> *"Babson built modern entrepreneurship education. Frontier AI is the next chapter — and Babson is built to lead it."*

## 2. Audience

- **Primary:** Steve Spinelli, President of Babson College.
- **Forward audience:** donors, board members, faculty leadership. The document must be safe — and useful — when read out of the original context.

## 3. Non-goals (v2)

- No comparison to peer institutions.
- No "failure to act" / risk-of-inaction framing.
- No deep dives into individual frontier labs.
- No comprehensive AI-tool benchmarking.

## 4. Core message

The brief makes three moves:

1. **Celebrate Babson's track record.** Decades of leadership in entrepreneurship education, the Build Fund, the G1000.
2. **Name the moment.** Three frontier labs are defining the next decade of building. Founders are concentrating around them.
3. **Show the fit.** Babson's pedagogical model — action, applied, founder-first — is unusually well-suited to what these tools reward.

Followed by: examples of what students build with these tools, and three affordable partnership options.

## 5. Tone

- Persuasive *because* credible. No hype words.
- Positive throughout. No "behind," no "risk," no "missing."
- Quotable in isolation — every paragraph could be pulled out of context and still read well.
- Every numeric claim gets `[PLACEHOLDER: ...]` until a verified figure is available.

## 6. Information architecture (3 pages)

| Route | Title | Purpose |
|---|---|---|
| `/` | The moment | Hero + Babson legacy + the moment + why Babson is built for this |
| `/build/` | What students build | Babson vignettes + a few illustrative peer case studies |
| `/partnership/` | Partnership | Three tiers (Pilot / Department / Institution), cost chart, comparison table |

Persistent top nav across all three.

## 7. Visual system

Same palette as v1, exposed as CSS variables in [`assets/css/site.css`](assets/css/site.css):

```css
--c-green:  #006747;   /* Babson Green */
--c-ink:    #14191F;   /* near-black body text */
--c-bone:   #FAF7F2;   /* warm off-white background */
--c-amber:  #C9A227;   /* muted gold accent */
```

System UI typography. Sticky nav with hamburger below 820px. Hero band on home page, subdued page header on subpages. Cards, tables, vignettes, pull-quote, layer-diagram primitives kept from v1; everything else trimmed.

## 8. Charts

Two charts only:

| Page | id | Type | What it shows |
|---|---|---|---|
| Home | `chart-home-share` | Doughnut | Founder tool use across the three frontier labs |
| Partnership | `chart-costs` | Grouped bar | Cost per tier × use case |

Both with one-sentence takeaway captions.

## 9. Tech & structure

- Static multi-page site, one HTML file per route in its own folder.
- Vanilla HTML/CSS/JS — no framework, no npm, no build step.
- Chart.js loaded via CDN.
- All inter-page and asset links are relative, so the site works at any URL prefix.

## 10. Content rules

- Persuasive but credible — no hype words.
- Numeric claims tagged `[PLACEHOLDER: ...]`; rendered with a yellow highlight so they can't accidentally ship.
- No invented statistics.
- No comparison to peer institutions in body copy (a few peer case studies appear on `/build/`, framed as "what's possible" rather than "where we lag").

## 11. Deliverables

- Runnable static site in this repo, no install required beyond a static file server.
- [README.md](README.md) with run instructions and a complete PLACEHOLDER checklist by page.
- This PRD.
- v1 preserved as `v1.0` tag and `v1-archive` branch.

## 12. Verification

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Manual checks:
- 3 nav links navigate correctly from every page.
- Mobile viewport (375px): nav collapses; charts resize; cards stack.
- Both charts render without console errors.
- Every `[PLACEHOLDER:` tag in the UI appears in the README checklist.
- Footer "Last updated" reads `2026-05-13`.
- Tone: read each page out loud. If any sentence sounds like a critique of Babson, rewrite it.
