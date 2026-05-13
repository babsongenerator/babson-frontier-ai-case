# PRD — Babson · Frontier AI (v4)

> An informational four-page brief on the state of frontier AI in 2026, written for forwarding by President Spinelli — every claim footnoted to a verified source.

Source brief: [`original prompt.md`](original%20prompt.md). Earlier versions preserved as `v1.0` / `v2.0` / `v3.0` tags and corresponding `*-archive` branches.

---

## 1. Goal

A short, polished, Babson-branded brief that:

1. President Spinelli can read in five minutes.
2. He can forward to donors, board members, or faculty without needing to add context.
3. Reads as a celebration of Babson's entrepreneurship leadership and momentum, not a critique.
4. Reports the state of frontier AI in 2026 **without prescribing a Babson response.** It is informational, not a proposal.
5. Stands up to scrutiny — every load-bearing fact is footnoted to a verified source URL the reader can click through.

> *"Babson built modern entrepreneurship education. Frontier AI is the next chapter — and Babson is already moving."*

## 2. Audience

- **Primary:** Steve Spinelli, President of Babson College.
- **Forward audience:** donors, board members, faculty leadership. Must be safe to forward without context.

## 3. Non-goals

- No proposal. No pilot. No "next step." No "should." The brief reports; it does not prescribe.
- No comparison to peer institutions as critique. Peer examples are framed as *what mature partnerships look like*, not *where Babson lags*.
- No invented numbers. If a figure can't be sourced and verified, it's rephrased generically or dropped.
- No deep dive into every frontier-model capability — model names and signature features only.

## 4. Core message

The brief makes four informational moves:

1. **Babson's track record.** 32 consecutive years #1 in MBA entrepreneurship; SVP, F.W. Olin Graduate School.
2. **Babson is already moving.** "AI in Action" with Founderz launched in February 2026, introducing the AI-THINK methodology. President Spinelli has spoken publicly about thoughtful, responsible AI adoption.
3. **The 2026 frontier-AI landscape.** Three labs (Anthropic, Google, OpenAI); current flagship models (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro); the institutional tools each lab ships.
4. **What it actually costs.** Per-user pricing from OpenAI ($20 ChatGPT Business), Anthropic (negotiated for education), Google (via reseller for education tier).

## 5. Tone

- Persuasive *because* credible.
- Informational, not aspirational. The brief implies but does not recommend.
- Every fact has a footnote. The reader can verify.
- Quotable in isolation.

## 6. Information architecture (4 pages)

| Route | Title | Purpose |
|---|---|---|
| `/` | The moment | Babson legacy + Babson+Founderz + 2026 frontier-AI landscape + why the fit is good |
| `/build/` | What students build | Babson+Founderz literacy + four 2025 SVP teams paired with relevant frontier capabilities |
| `/peers/` | At peer institutions | Four named partnership shapes (Wharton, Northeastern, Stanford, CSU) |
| `/costs/` | What it costs | Published per-user pricing from each lab; no tier proposal |

Persistent top nav across all four pages.

## 7. Citation system

- **Inline:** superscript references (¹²³…) appearing next to each load-bearing fact, linking to a per-page anchor.
- **At the bottom of each page:** a `<section class="refs-section">` with `<ol class="refs">` of APA 7th-edition formatted citations. Each `<li>` has `id="ref-N"` matching the inline `href="#ref-N"`.
- **Highlight on click:** CSS `:target` highlights the referenced entry in amber when a reader clicks an inline number.
- **Verified URLs.** Every URL was checked. The 5 URLs that returned 403 (OpenAI domains + CSU) are bot-blocked but load normally in browsers — flagged in the README.

## 8. Visual system

Palette unchanged. New CSS for `sup.ref`, `ol.refs`, `.refs-section` to support the citation system. System UI typography, sticky nav with hamburger below 820px, hero band on home, subdued page header on subpages.

## 9. Charts

None in v4. (The v3 cost chart was tied to the tier proposal that was removed.)

## 10. Tech & structure

- Static multi-page site, one HTML file per route.
- Vanilla HTML/CSS/JS — no framework, no npm, no build step.
- No CDN scripts in v4 (Chart.js was only needed when the cost chart was present).
- All inter-page and asset links are relative.

## 11. Content rules

- Persuasive but credible — no hype words.
- Every numeric or named claim is sourced.
- No invented statistics.
- Peer-school content frames variety as the point; the headline is "different shapes, same direction," not a leaderboard.
- No proposal language anywhere. "Babson should…" / "the next step is…" / "we propose…" are all banned.

## 12. Deliverables

- Runnable static site in this repo, no install required.
- [README.md](README.md) with run instructions, structure, source list with verification notes.
- This PRD.
- Live URL: https://babsongenerator.github.io/babson-frontier-ai-case/
- Earlier versions preserved as `v1.0` / `v2.0` / `v3.0` tags and `*-archive` branches.

## 13. Verification

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Manual checks:
- 4 nav links navigate correctly from every page.
- Each page has a References section at the bottom; inline `<sup>` numbers anchor-jump to the right entry.
- Clicking a reference number highlights the target list item.
- Mobile viewport (375px): nav collapses; cards stack; references list reflows.
- Tone: read each page aloud. If any sentence sounds like "we propose," "the next step," or "Babson should," rewrite or remove it.
- URLs: every URL in the page References list either responds 200 or is documented in the README as bot-blocked.
- Footer "Last updated" reads `2026-05-13`.
