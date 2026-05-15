# Pre-Ship Review — 2026-05-15

Synthesis of three independent agent reviews of the brief before sending to President Spinelli. Three agents ran in parallel against the live site at `babsongenerator.github.io/babson-frontier-ai-case/`:

1. **Link verification + authenticity** — every external URL HTTP-checked, primary sources sample-verified against the claims that cite them
2. **Story + factual review** — read end-to-end as the President's office would; checked register, claim consistency, narrative flow
3. **Technical rendering** — HTML/CSS/JS/accessibility/mobile-breakpoint check on the live site

Tag at time of review: `a2e8c2a` (v32.1, with the "Copilot isn't enough" deck just added to Why Now). The 7-item punch list below was generated *before* the deck was added.

---

## Technical agent — PASS (no blockers)

> *"Technically ready to ship."*

Four LOW-priority items, none ship-blocking:
- `snapshot.js` fetch of `data/peers.json` has no `.catch` — on fetch failure the "Loading the timeline…" placeholder stays forever
- `showCite()` silently returns when REFS loaded but `ref[n]` undefined — no modal, no message. Currently every `data-cite` in HTML resolves, so user-invisible
- `peers.html:34` placeholder has an inline style attribute (cosmetic)
- Unused `TERM_DEFS` entries (`vibe-coded`, `claude-for-education`) and unused refs.json entries (3, 5, 6, 8, 9, 10, 21–27) — dead data, not broken

All 5 HTML pages validated. Mobile breakpoints work at 540px/640px/720px. Live HTML matches local. JS / data files all serve 200. WCAG-AA contrast passes.

---

## 🚨 MUST-FIX (4 items, ship-blocking)

### 1. HBS "all three frontier providers" claim is over-stated

The pull-quote on `peers.html` and the HBS row showing ✓ in the Google column rest on ref [37] — but [37] is the **September 2023 Harvard Gazette piece describing the AI Sandbox with PaLM 2 Bison** (Gemini's *predecessor*). Using a 2023 sandbox prototype to back a 2026 HBS-Google commitment is the weakest factual link in the brief. Both the story agent and the link agent flagged it.

**Where it lives:** `peers.html` lines 80, 82 (chart caption + pull-quote)

**Proposed fix — soften both the chart annotation and the pull-quote:**

- Chart: leave HBS in all three columns, but add a small "via Sandbox" subtext under the Google ✓ for the HBS row
- Pull-quote (`peers.html:82`): rewrite from
  > *"Harvard Business School is the only school here that has committed to all three frontier providers. Babson could be the second — and the first entrepreneurship-first school to do so."*

  to
  > *"Harvard Business School is the one school here with direct commitments to both Anthropic and OpenAI, plus multi-model access through Harvard's AI Sandbox. The mixed-vendor pattern is closer to what Babson students are already doing on their own."*

This drops "all three frontier providers" and "Babson could be the second" — the story agent also flagged both as procurement-mode tone in an informational-mode brief.

---

### 2. Tuck inconsistency between chart and timeline

`peers.html` chart lists Tuck under both **OpenAI** AND **Anthropic** (the Tuck article says "thanks to Dartmouth — Anthropic"). But `peers.json` has Tuck only under OpenAI — so the timeline dot shows Tuck once, in green only. A reader looking at both sees the mismatch.

**Where it lives:** `peers.html` lines 48 (OpenAI col) + 62 (Anthropic col); `peers.json` lines 34-41 (Tuck entry, single provider)

**Proposed fix:** Add a second `peers.json` entry for Tuck/Anthropic dated `2026-01-01` (matching the Tuck article's "as of January 2026" framing). Timeline will then show a second amber dot for Tuck.

```json
{
  "school": "Tuck School of Business, Dartmouth (Anthropic via Dartmouth)",
  "shortName": "Tuck",
  "provider": "Anthropic",
  "date": "2026-01-01",
  "dealType": "Anthropic access via Dartmouth campus license",
  "studentsServed": 600,
  "url": "https://tuck.dartmouth.edu/news/articles/ai-at-dartmouth-tuck-how-the-school-is-preparing-leaders-for-the-age-of-artificial-intelligence",
  "refN": 34
}
```

---

### 3. UC Davis / UCLA citation mismatch on cost page

`cost.html:33` says *"roughly 40% off retail (UC Davis)"* but cites ref [13], which is **UCLA**, not UC Davis. UC Davis is the school that publicly disclosed the 40% discount (verified at `iet.ucdavis.edu`). This is a real factual error a careful reader could catch.

**Where it lives:** `cost.html:33` (the ESA framing paragraph)

**Proposed fix:** Add a UC Davis ref as #38 in refs.json and update the citation:

```json
"38": {
  "n": 38,
  "source": "UC Davis IET News",
  "title": "New ChatGPT Edu agreement offers expanded features, lower cost, new terms",
  "date": null,
  "url": "https://iet.ucdavis.edu/technews/new-chatgpt-edu-agreement-offers-expanded-features-lower-cost-new-terms",
  "quote": "UC Davis's ChatGPT Edu agreement was disclosed as $144/user/year, approximately 40% below retail pricing."
}
```

Then change the citation on `cost.html:33` from `data-cite="13"` to `data-cite="38"`.

---

### 4. Ref [31] quote overstates the Crimson source

The refs.json quote on Harvard FAS says access begins *"beginning in the fall"* — but the Crimson article explicitly notes the FAS source declined to confirm a timeline. The quote claims more than the source supports.

**Where it lives:** `data/refs.json` ref #31

**Proposed fix — drop "beginning in the fall" from the quote:**

Before:
> *"Harvard's Faculty of Arts and Sciences will transition from ChatGPT Edu to Anthropic's Claude **beginning in the fall**, with access granted on a course-by-course basis."*

After:
> *"Harvard's Faculty of Arts and Sciences will transition from ChatGPT Edu to Anthropic's Claude, with access granted on a course-by-course basis."*

---

## ⚠️ STRONGLY RECOMMEND (3 items)

### 5. Columbia framing on the chart

`peers.html:65` shows "Columbia (CBS)" implying a B-school-specific deal. But the source is a university-wide CUIT rollout that includes CBS, not a CBS-only deal.

**Proposed fix:** Change "Columbia (CBS)" to "Columbia (incl. CBS)".

---

### 6. "Fifteen" count vs 16 institutions in the chart

The chart shows Harvard FAS and HBS as separate rows; the timeline (which reads `peers.json`) has only Harvard FAS. The "fifteen peer institutions" framing is technically defensible (`peers.json` has 15) but the chart shows 16 unique school names if you count both Harvard FAS and HBS.

**Proposed fix:** Add a one-sentence note to the chart caption — *"HBS is shown separately above; its multi-tool approach isn't a single-provider commitment, so it isn't on the timeline."* — to explain the count.

---

### 7. why.html capability claim lacks inline citations

The "build a working web app, read hundreds of papers, string agentic tasks together" sentence on `why.html:31` is load-bearing but has no citation on the sentence itself. Refs [1] [2] [4] [7] appear only below in the snap-three rows.

**Proposed fix:** Add four cites at sentence-end so the capability claim is anchored to primary sources right where it's made.

---

## ✏️ POLISH (defer or skip)

These don't block ship but are cheap to fix:

- `index.html:54` — *"The arguments, framing, and **recommendations** are ours"*. The word "recommendations" is inconsistent with the informational-mode reframe ("not a formal proposal"). Change to *"framing and analysis"*.
- `why.html:64` *"Our students are already choosing among these tools"* duplicates `cost.html:81`. Rewrite the why.html version to *"Students on US campuses are already choosing among these tools"* to remove the echo.
- ASU/UCLA started on ChatGPT *Enterprise*, brief uses *Edu* throughout. Two different historical products. Minor imprecision; could footnote once or accept.
- `snapshot.js`: add a `.catch` on the peers.json fetch with a graceful fallback message
- Remove unused TERM_DEFS (`vibe-coded`, `claude-for-education`) and unused refs.json entries (3, 5, 6, 8, 9, 10, 21–27) — dead data
- `peers.html:34` placeholder uses inline style; move to CSS for consistency

---

## Items already addressed since this review

- ✅ **Deck/subtitle added to `What's changed.`** on Why Now page: *"Top business schools realize Copilot isn't enough."* (commit `a2e8c2a`, v32.1)

> **Note for later:** This subtitle is a stronger Microsoft framing than the rest of the brief uses. Elsewhere the brief says *"Microsoft 365 with Copilot is the productivity baseline"* (gentle/complementary). The new subtitle says *"Copilot isn't enough"* (direct/displacing). May want to harmonize one direction or the other once the rest of the punch list is applied.

---

## Recommended sequencing if/when we ship

1. Apply items 1–4 (must-fix, ~10 minutes)
2. Apply items 5–7 (strongly recommend, ~5 minutes)
3. Skip polish items unless time permits
4. Tag previous version as archive (e.g., `v32-pre-final-edits`)
5. Push as v33 / final pre-ship
6. Smoke-test the live site one more time
7. Send the cover email
