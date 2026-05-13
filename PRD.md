# PRD — The Frontier Case (for Babson)

> A multi-page marketing website making the case to Babson President Steve Spinelli (and donors funding student entrepreneurship) that Babson should invest in frontier AI tools — especially Anthropic — for student entrepreneurs.

Source brief: [`original prompt.md`](original%20prompt.md). This document fleshes that brief out into an executable PRD.

---

## 1. Goal

A polished, persuasive, Babson-branded static site that an entrepreneurship-trained college president can skim in 5 minutes and walk away thinking:

> *Three frontier model companies. The cost is small. The risk of standing still is not. We should move.*

## 2. Audience

- **Primary:** Steve Spinelli, President of Babson College.
- **Secondary:** Donors who fund student entrepreneurship programs (Build Fund, G1000).

## 3. Non-goals

- Not a SaaS application — no auth, no telemetry, no email capture.
- Not a comprehensive AI tool comparison — the focus is partnership with the three frontier labs (Anthropic as the lede).
- No heavy animations or framework dependencies.

## 4. Core message (from the brief, verbatim)

> The three frontier model companies that matter are Google, Anthropic, and OpenAI. These tools can take Babson entrepreneurship to the next level. The cost is affordable, the value is high, and the risk of doing nothing is real.

## 5. Tone

- Persuasive, credible, no hype words.
- Every numeric claim that needs real data → `[PLACEHOLDER: description]`. No invented stats.
- Short paragraphs. Sentences that earn their place. Audience is a busy CEO with a strong BS detector.

## 6. Information architecture

Seven pages, every one reachable from a persistent top nav.

| Route | Title | Purpose | Charts |
|---|---|---|---|
| `/` | Home | Hero + thesis + market-landscape viz | 2 |
| `/costs/` | Costs | Three partnership tiers + use-case grid + comparison table | 1 + table |
| `/frontier-models/` | Frontier Models | Three labs (Google, Anthropic, OpenAI); Copilot/Perplexity as wrappers; DeepSeek excluded | 1 diagram |
| `/failure-to-act/` | Failure to Act | Three concrete risks of standing still | 1 |
| `/benchmarks/` | Benchmarks | Peer-school student-facing AI investment leaderboard | 1 leaderboard |
| `/students-elsewhere/` | Students Elsewhere | Card grid of articles + short case studies (9 cards) | 0 |
| `/student-stories/` | Student Stories | Babson vignettes — Build Fund + G1000 framing | 0 |

## 7. Visual system

### Palette (CSS variables in [`assets/css/site.css`](assets/css/site.css))

```css
--c-green:  #006747;   /* Babson Green — primary brand */
--c-ink:    #14191F;   /* near-black body text */
--c-bone:   #FAF7F2;   /* warm off-white background */
--c-amber:  #C9A227;   /* muted gold accent for callouts/CTAs */
```

The Failure-to-Act page uses an amber-tinted gradient header to signal urgency without resorting to red.

### Typography

System UI stack (`-apple-system, ...`). No webfont download; fast and accessible by default.

### Components

- **Sticky top nav** with hamburger collapse below 820px.
- **Hero band** on the home page (full-width green), subdued page header on subpages.
- **Cards** in 1–3 column responsive grids.
- **Tables** with green header and zebra stripe.
- **Risk blocks** (amber left border, numbered).
- **Pull-quote** (amber left border, italic).
- **Layer diagram** for the frontier-vs-wrappers visualization.
- **Chart figures** (`<figure class="chart">`) with takeaway caption underneath every chart.
- **Footer** with last-updated stamp.

## 8. Chart inventory

All data values are placeholders pending real numbers. See [`assets/js/charts.js`](assets/js/charts.js).

| # | Page | Type | id | What it shows |
|---|---|---|---|---|
| 1 | Home | Doughnut | `chart-home-share` | Share of entrepreneurs using each frontier model |
| 2 | Home | Horizontal bar | `chart-home-landscape` | Where Gemini sits on a composite capability index |
| 3 | Costs | Grouped bar | `chart-costs` | Cost per tier × use case |
| 4 | Frontier Models | Static HTML diagram | n/a | Three foundation labs as base; wrappers above |
| 5 | Failure to Act | Line | `chart-failure-curve` | Peer adoption curve vs Babson, 2023→2027 |
| 6 | Benchmarks | Horizontal bar leaderboard | `chart-benchmarks` | Per-school student-facing AI spend |

Every chart has a one-sentence takeaway in its `<figcaption>`.

## 9. Tech & structure

- Static multi-page site, one HTML file per route in its own folder.
- Vanilla HTML/CSS/JS — no framework, no npm, no build step.
- Chart.js loaded via CDN (`chart.js@4.4.1`).
- Inter-page links and asset paths are **relative**, so the site works at any URL prefix.

## 10. Content rules

- Persuasive but credible — no hype words.
- Every numeric claim that needs real data gets a `[PLACEHOLDER: ...]` tag. No invented statistics.
- Placeholder tags are surfaced visually with a yellow highlight so they can't ship unnoticed.

## 11. Deliverables

- Runnable static site in this repo, no install required beyond a static file server.
- README ([`README.md`](README.md)) with run instructions and a complete PLACEHOLDER checklist categorized by page.
- This PRD.
- Original brief preserved at [`original prompt.md`](original%20prompt.md).

## 12. Verification

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Manual checks:
- All 7 nav links navigate correctly from every page.
- Mobile viewport (375px): nav collapses to hamburger; charts resize; cards stack.
- All 5 data charts render without console errors; each has a takeaway caption.
- Every `[PLACEHOLDER:` tag rendered in the UI corresponds to an entry in the README checklist.
- Footer "Last updated" reads `2026-05-13`.
- Color contrast on green-banded sections passes WCAG AA for body text.
