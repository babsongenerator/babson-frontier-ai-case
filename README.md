# Babson · Frontier AI — A Short Brief (v4)

A four-page, Babson-branded static brief on the state of frontier AI in 2026 — written as an **informational** read for President Spinelli (and onward forwarding to donors and board), not a proposal. Every load-bearing claim is footnoted to a verified source URL.

Source brief: [`original prompt.md`](original%20prompt.md). PRD: [`PRD.md`](PRD.md).

Earlier iterations preserved on this repo:
- **`v1.0`** / **`v1-archive`** — original 7-page version with risk framing.
- **`v2.0`** / **`v2-archive`** — 3-page positive-tone brief with placeholders.
- **`v3.0`** / **`v3-archive`** — 4 pages with real data and partnership-tier proposal language.
- **`main`** (this) — v4: same 4 pages, proposal/pilot language removed, every fact footnoted to a verified source.

---

## Run it locally

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Live (public) at **https://babsongenerator.github.io/babson-frontier-ai-case/** — GitHub Pages rebuilds on each push to `main`.

---

## Structure

```
For Steve/
├── index.html                       # /                 — The moment
├── build/index.html                 # /build/           — What students build
├── peers/index.html                 # /peers/           — At peer institutions
├── costs/index.html                 # /costs/           — What it costs
├── assets/
│   ├── css/site.css                 # palette + components + references styling
│   ├── js/charts.js                 # unused in v4 (kept for future use)
│   └── js/nav.js                    # mobile nav + active-link
├── PRD.md                           # fleshed-out PRD
├── original prompt.md               # source brief
└── README.md                        # this file
```

All inter-page and asset links are **relative**, so the site works at any URL prefix.

---

## What v4 changed from v3

- **All proposal / pilot language removed.** The brief is now purely informational. No Pilot / Department / Institution tier proposal. No "next step." No "scope a Pilot with faculty." No "easy to say yes to."
- **`/partnership/` renamed to `/costs/`.** The page now just reports the published per-user pricing from each lab in May 2026 — no tier proposal, no co-funding section, no recommendation. Just: here's what the tools cost.
- **Every claim is footnoted.** Inline superscript references (¹²³…) on each load-bearing fact, with a per-page **References** section at the bottom containing APA-formatted citations to verified source URLs.
- **Unverifiable claims removed or corrected.** "Babson Build Fund" and "G1000" don't appear under those names on babson.edu — removed. The 2026 SVP cohort isn't public yet — swapped for the **2025 SVP cohort** (Liaizon, Pipelign Software, GENETICFIT Labs, Chimera Craft) with real student names and a verifiable Babson source.
- **Softened or dropped claims that didn't verify.** Northeastern's "50,000 users" wording softened to "all students, faculty, and staff across 13 global campuses" (the latter is on Northeastern's page; the headcount is from secondary coverage). Google AI Pro for Education's "$15/user/month" specificity removed (Google publishes the product but not a list per-user rate). Lilly Endowment co-funding section dropped (the program is Indiana-only — Babson is not eligible).

---

## Sources

All 18 cited URLs are listed below, with verification status as of 2026-05-13. Sources marked **bot-blocked** return HTTP 403 to automated fetchers but load normally in standard browsers (this is Cloudflare's bot challenge, not a broken link).

### Babson
- Babson MBA #1 in entrepreneurship for 32 years — https://entrepreneurship.babson.edu/babson-mba-top-usnwr/ — ✓
- Babson 2025 Summer Venture Program teams — https://entrepreneurship.babson.edu/2025-summer-venture-program-teams/ — ✓
- Babson + Founderz "AI in Action" announcement (also Spinelli quote source) — https://entrepreneurship.babson.edu/babson-founderz-ai/ — ✓

### Frontier labs
- Anthropic Claude Opus 4.7 release — https://www.anthropic.com/news/claude-opus-4-7 — ✓
- Anthropic Claude for Education / Learning Mode — https://www.anthropic.com/news/introducing-claude-for-education — ✓
- Anthropic Claude for Education product page — https://claude.com/solutions/education — ✓
- OpenAI GPT-5.5 release — https://openai.com/index/introducing-gpt-5-5/ — bot-blocked, real
- OpenAI Workspace Agents launch — https://openai.com/index/introducing-workspace-agents-in-chatgpt/ — bot-blocked, real
- OpenAI ChatGPT pricing — https://openai.com/business/chatgpt-pricing/ — bot-blocked, real
- OpenAI flexible pricing (April 2026 reduction) — https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-edu-and-business-plans — bot-blocked, real
- Google Gemini 3.1 Pro release — https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ — ✓
- Google Workspace Intelligence launch — https://workspace.google.com/blog/product-announcements/introducing-workspace-intelligence — ✓
- Google AI Pro for Education availability — https://workspaceupdates.googleblog.com/2025/09/google-ai-pro-for-education.html — ✓

### Peer institutions
- Wharton strategic AI investment (May 2024) — https://news.wharton.upenn.edu/press-releases/2024/05/the-wharton-school-makes-strategic-investment-in-artificial-intelligence-research-and-teaching/ — ✓
- Wharton MBA AI for Business major — https://poetsandquants.com/2025/04/06/wharton-launches-new-ai-for-business-mba-major-undergrad-concentration/ — ✓
- Northeastern + Anthropic campus-wide — https://news.northeastern.edu/2025/04/02/anthropic-ai-partnership/ — ✓
- Stanford AIMES — https://ctl.stanford.edu/aimes — ✓
- CSU ChatGPT Edu initiative — https://www.calstate.edu/csu-system/news/Pages/CSU-AI-Powered-Initiative.aspx — bot-blocked, real

**Bot-blocked sources:** programmatic HEAD requests return 403, but the pages load normally in Safari/Chrome. This is standard Cloudflare bot-detection behavior; the pages exist and are publicly accessible to human readers.

---

## Tone

- Informational, not a proposal. The brief lays out what is, not what Babson should do.
- Positive on Babson's track record. No "behind peers," no "risk of doing nothing."
- Every fact attributed. Reader can click through and verify.
- Quotable in isolation. Every paragraph holds up if pulled out of context.

---

## Palette

Edit once in [`assets/css/site.css`](assets/css/site.css):

```css
--c-green:  #006747;   /* Babson Green — primary */
--c-ink:    #14191F;   /* near-black body text */
--c-bone:   #FAF7F2;   /* warm off-white background */
--c-amber:  #C9A227;   /* muted gold accent */
```

---

## Editing tips

- **Palette change:** edit the four CSS vars at the top of [`assets/css/site.css`](assets/css/site.css).
- **Nav change:** find/replace across the four `index.html` files (asset paths differ by depth).
- **Add a citation:** add an `<li id="ref-N">…</li>` to the page's References list, then add `<sup class="ref"><a href="#ref-N">N</a></sup>` inline next to the relevant claim.
- **Add a page:** copy any subpage's `index.html` into a new folder; add a link to all four existing navs.

---

## History

- **v1.0** — original 7-page version (`v1-archive` branch).
- **v2.0** — 3-page positive-tone version with placeholders (`v2-archive` branch).
- **v3.0** — 4 pages, real data, with partnership-tier proposal framing (`v3-archive` branch).
- **v4** (current `main`) — same 4 pages; proposal language removed; every fact footnoted to a verified source.

`git checkout v3.0` brings the partnership-tier version back any time.
