# PRD — Babson · Frontier AI (v3)

> A short, forwardable brief making the positive case for Babson to formalize frontier-AI partnerships, grounded in real 2026 data.

Source brief: [`original prompt.md`](original%20prompt.md). Earlier versions preserved as `v1.0` / `v1-archive` and `v2.0` / `v2-archive` on this repo.

---

## 1. Goal

A short, polished, Babson-branded brief that:

1. President Spinelli can read in five minutes.
2. He can forward to donors, board members, or faculty without needing to add context.
3. Reads as a celebration of Babson's entrepreneurship leadership and momentum, not a critique.
4. Stands up to scrutiny — every load-bearing number, partner-school example, and frontier-model claim is drawn from real, recent sources.

> *"Babson built modern entrepreneurship education. Frontier AI is the next chapter — and Babson is already moving."*

## 2. Audience

- **Primary:** Steve Spinelli, President of Babson College.
- **Forward audience:** donors, board members, faculty leadership. The document must be safe — and useful — when read out of the original context.

## 3. Non-goals

- No comparison to peer institutions as critique. Peer examples appear, framed as *what mature partnerships look like*, not *where Babson lags*.
- No "failure to act" / risk-of-inaction framing.
- No deep dives into every frontier-model capability — model names and signature features only.
- No invented numbers. If a figure can't be sourced, it's reframed as a range or dropped.

## 4. Core message

The brief makes four moves:

1. **Celebrate Babson's track record.** Decades of leadership in entrepreneurship education, the Build Fund, the G1000, the Summer Venture Program.
2. **Show Babson is already moving.** The Babson + Founderz "AI in Action" initiative and the AI-THINK methodology are the literacy layer; frontier-lab partnerships are the natural complement.
3. **Name the moment concretely.** Three labs (Anthropic, Google, OpenAI), shipping real institutional tools in 2026, with each lab offering distinct strengths.
4. **Show the fit, the examples, and the cost.** Real SVP teams, real peer-school partnership shapes, real per-user pricing.

## 5. Tone

- Persuasive *because* credible.
- Positive throughout. No "behind," no "risk," no "missing."
- Quotable in isolation — every paragraph could be pulled out of context and still read well.
- Light inline source attribution where the reader benefits; full source pointers in `deep research.md` (local-only).

## 6. Information architecture (4 pages)

| Route | Title | Purpose |
|---|---|---|
| `/` | The moment | Hero + Babson legacy + Babson+Founderz momentum + the moment + why Babson is built for this |
| `/build/` | What students build | Four real 2026 SVP teams + Babson+Founderz literacy paragraph |
| `/peers/` | At peer institutions | Four named partnership shapes (Wharton, Northeastern, Stanford, CSU) + external co-funding context |
| `/partnership/` | Partnership | Real per-user pricing + three tiers + cost chart + external co-funding |

Persistent top nav across all four pages.

## 7. Visual system

Palette unchanged from v2, exposed as CSS variables in [`assets/css/site.css`](assets/css/site.css):

```css
--c-green:  #006747;   /* Babson Green */
--c-ink:    #14191F;
--c-bone:   #FAF7F2;
--c-amber:  #C9A227;
```

System UI typography. Sticky nav with hamburger below 820px. Hero band on home page, subdued page header on subpages. Cards, tables, vignettes, pull-quote primitives reused from v2.

## 8. Charts

Single chart only:

| Page | id | Type | What it shows |
|---|---|---|---|
| Partnership | `chart-costs` | Grouped bar | Indicative cost per tier × use case, derived from published per-user pricing |

(The v2 Home doughnut was dropped — defensible share data wasn't available at the precision needed.)

## 9. Tech & structure

- Static multi-page site, one HTML file per route in its own folder.
- Vanilla HTML/CSS/JS — no framework, no npm, no build step.
- Chart.js loaded via CDN.
- All inter-page and asset links are relative, so the site works at any URL prefix.

## 10. Content rules

- Persuasive but credible — no hype words.
- Numeric claims either pull from a source (priced at published rates; peer-school user counts from public announcements) or are explicitly framed as indicative.
- No invented statistics.
- Peer-school content frames variety as the point; the headline is "different shapes, same direction," not a leaderboard.

## 11. Deliverables

- Runnable static site in this repo, no install required.
- [README.md](README.md) with run instructions, structure, and a summary of what changed from v2.
- This PRD.
- Live URL: https://babsongenerator.github.io/babson-frontier-ai-case/
- Earlier versions preserved as `v1.0` / `v2.0` tags and `v1-archive` / `v2-archive` branches.

## 12. Verification

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Manual checks:
- 4 nav links navigate correctly from every page.
- Mobile viewport (375px): nav collapses; cost chart resizes; cards stack.
- Cost chart renders without console errors.
- No `[PLACEHOLDER:` tags remain anywhere in the rendered pages.
- Tone: read each page out loud. If any sentence sounds like a critique of Babson, rewrite it.
- Footer "Last updated" reads `2026-05-13`.
