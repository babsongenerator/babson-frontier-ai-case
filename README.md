# Babson · Frontier AI — A Short Brief (v3)

A four-page, Babson-branded static brief making the positive case for Babson to formalize partnerships with the frontier AI labs (Anthropic, Google, OpenAI). Prepared for **President Spinelli** as a short, forwardable read; written so any section can be quoted in isolation without context.

Source brief: [`original prompt.md`](original%20prompt.md). PRD: [`PRD.md`](PRD.md).

Earlier iterations are preserved on this repo:
- **`v1.0`** tag / **`v1-archive`** branch — original 7-page version with full peer benchmarks and risk framing.
- **`v2.0`** tag / **`v2-archive`** branch — tight 3-page positive-tone brief built on placeholders.
- **`main`** (this) — v3: 4 pages, real data sourced from focused research, positive tone retained.

---

## Run it locally

No build step. Static HTML, CSS, and vanilla JS only. Chart.js loaded via CDN.

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
├── partnership/index.html           # /partnership/     — Partnership options
├── assets/
│   ├── css/site.css                 # palette + components
│   ├── js/charts.js                 # 1 Chart.js config (cost by tier)
│   └── js/nav.js                    # mobile nav + active-link
├── PRD.md                           # fleshed-out PRD
├── original prompt.md               # source brief
└── README.md                        # this file
```

All inter-page and asset links are **relative**, so the site works at any URL prefix (domain root, GitHub Pages subpath, NAS subpath).

---

## What v3 changed from v2

- **Tone preserved.** Still celebratory, opportunity-framed, no peer-comparison-as-critique language.
- **Real Babson stories.** Replaced placeholder vignettes with the 2026 Summer Venture Program teams — **Reespire**, **Finexus Tech**, **BobbyBrowser**, **Sketos**.
- **Babson + Founderz lead.** The "AI in Action" initiative and **AI-THINK methodology** are now the opening evidence that Babson is already moving — the lab partnerships are framed as the natural complement.
- **New /peers/ page.** Wharton (universal MBA ChatGPT Enterprise + AI for Business major), Northeastern (Anthropic campus-wide, ~50k users / 13 campuses), Stanford (AIMES $1M seed grants), and the CSU system (~470k students on ChatGPT Edu). Variety framed as range of legitimate shapes, not a leaderboard.
- **Real per-user pricing.** OpenAI ChatGPT Business at $20/user/month, Google AI Pro for Education at $15/user/month, Anthropic negotiated. Cost tiers derive from those figures rather than placeholders.
- **External co-funding.** Lilly Endowment $500M AI in Higher Education initiative and the U.S. DoE May 2026 AI-in-education priority are referenced on /partnership/ as real cost-offset paths.
- **Frontier model context.** Brief, named references to Anthropic Claude Opus 4.7, OpenAI GPT-5.5, and Google Gemini 3.1 Pro — and the institutional tools they ship (Claude Cowork, Workspace Agents, Workspace Intelligence).
- **Chart count: 2 → 1.** Dropped the Home doughnut (real share data isn't precise enough to be defensible). Kept the cost-by-tier bar on Partnership.

---

## Tone rules (unchanged)

- Positive throughout. No "behind peers," no "risk of doing nothing."
- Quotable in isolation. Every paragraph should read well if pulled out of context.
- Persuasive *because* credible. No hype words.
- Numbers attribute their source where useful, but inline citations are kept light to preserve readability.

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
- **Chart data:** edit the relevant block in [`assets/js/charts.js`](assets/js/charts.js).
- **Nav change:** find/replace across the four `index.html` files. The nav block is identical except for the asset-path depth (`assets/...` from home, `../assets/...` from subpages).
- **Add a page:** copy any subpage's `index.html` into a new folder, add a link to all four existing navs.

---

## Sources

Content draws on a focused research pass (kept locally as `deep research.md`, not committed) covering: 2026 frontier-model releases, peer-institution AI partnerships at Wharton / Northeastern / Stanford / CSU, OpenAI and Google published pricing, the Lilly Endowment AI in Higher Education initiative, the U.S. Department of Education's May 2026 AI priority, and the Babson + Founderz "AI in Action" public materials.

If a figure needs verification before this brief is shared widely, the relevant section in `deep research.md` should be the first stop.

---

## History

- **v1.0** — original 7-page version. Browse on the `v1-archive` branch.
- **v2.0** — 3-page positive-tone version with all data as placeholders. Browse on the `v2-archive` branch.
- **v3** (current `main`) — 4 pages, real data, positive tone retained.

To time-travel: `git checkout v1.0` or `git checkout v2.0`.
