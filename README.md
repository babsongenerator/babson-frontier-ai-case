# Babson · AI Providers — A Short Brief (v7)

A four-page, Babson-branded static brief making the case that bringing the three leading AI providers — **OpenAI**, **Anthropic**, and **Google** — to Babson is an easy, affordable, and common-sense move that benefits students, faculty, and staff, and reinforces Babson's position as the global leader in entrepreneurship education.

**v7 adds:** a dynamic, horizontal-composition layout pass — split-grid sections, stat-strips, aside callouts, 4-up card grids, 2x2 vignette grids — designed to crush vertical height while making the brief feel more like a report and less like a stack of landing pages. The report at `/report/` and the downloadable PDF (introduced in v6) are unchanged.

Source brief: [`original prompt.md`](original%20prompt.md). PRD: [`PRD.md`](PRD.md).

---

## Live URL + PDF

**Web:** https://babsongenerator.github.io/babson-frontier-ai-case/

**PDF:** https://babsongenerator.github.io/babson-frontier-ai-case/babson-ai-providers.pdf — also available via the amber **↓ PDF** button in the nav on every page.

---

## Run it locally

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

---

## Structure

```
For Steve/
├── index.html                       # /                 — The moment
├── value/index.html                 # /value/           — Value for students, faculty, staff
├── build/index.html                 # /build/           — What students build
├── providers/index.html             # /providers/       — OpenAI · Anthropic · Google
├── report/index.html                # /report/          — Single-page consolidated print-optimized report
├── babson-ai-providers.pdf          # Downloadable PDF (generated from report/)
├── build-pdf.sh                     # Regenerate the PDF from report/index.html
├── assets/
│   ├── css/site.css                 # palette + density-tuned components + @media print
│   ├── js/charts.js                 # unused in v6
│   └── js/nav.js                    # mobile nav + active-link
├── PRD.md
├── original prompt.md
└── README.md
```

---

## Regenerating the PDF

The PDF in the repo (`babson-ai-providers.pdf`) is generated from `report/index.html` via [WeasyPrint](https://weasyprint.org/). Whenever you change the report content, regenerate:

```bash
./build-pdf.sh
# or directly:
weasyprint report/index.html babson-ai-providers.pdf
```

Install WeasyPrint once with `brew install weasyprint` (macOS).

**Note:** the four web pages and the report HTML are currently maintained separately. Edits to the web pages do NOT auto-sync into the report. After substantive content changes, edit `report/index.html` to match, then regenerate the PDF.

---

## What v7 changed from v6

- **Dynamic layout pass.** Every page now uses horizontal composition primitives instead of stacking sections vertically.
  - **`.split`** (with `.split-even`, `.split-aside`, `.split-right` modifiers) for two-column body sections.
  - **`.stat-strip`** + **`.stat`** — a horizontal row of large metrics in every page's hero / page-head (e.g., "32 yrs #1," "1,000+ peer institutions," "$15–20/user/month").
  - **`.aside`** / **`.aside.aside-green`** for boxed callouts inside `.split` layouts.
  - **`.cards.cards-4`** — denser 4-up card grid, used for the 6×3 benefit grid on the Value page.
  - **`.vignettes-2`** — 2×2 vignette grid, used on Build (4 SVP teams) and on each Providers section (3–4 peer schools).
- **Page-by-page changes:**
  - **`/`** (Home) — split hero (text + stat-strip), split body sections with Founderz aside, 3-up provider summary cards, 3-up Easy/Affordable/Common-sense cards.
  - **`/value/`** — split page-head with stat-strip, three group sections each using `.split.split-aside` (sticky-ish group label on the left, 6 benefit cards in 3-col grid on the right), synthesis section with green aside callout.
  - **`/build/`** — split page-head with stat-strip, Founderz `.aside.aside-green` callout, four SVP vignettes in a 2x2 grid.
  - **`/providers/`** — split page-head with stat-strip, each provider section uses `.split.split-aside` (cost table on left, peer vignettes in 2x2 on right), synthesis section with green aside.
- **Print CSS extended.** New rules flatten the split-grid / stat-strip / aside primitives back to single-column on print so the browser-printed version still works (the canonical print artifact remains `/report/` → `babson-ai-providers.pdf`).
- **Result:** roughly 40–50% less vertical scroll, denser visual rhythm, more dynamic feel.

## What v6 added (still in place)

- Density pass on `site.css` (line-height 1.45, smaller hero padding, 2-column refs above 720px, etc.).
- Single-page `/report/` consolidation of all four pages.
- Downloadable PDF (`babson-ai-providers.pdf`) generated via WeasyPrint, linked from every page's nav.
- `@media print` block for cleanly printing the web pages.

---

## Tone (unchanged from v5)

- The brief argues a clear case via choice of evidence and framing — not via "you should…" copy.
- No "frontier" / "labs" terminology. "The three leading AI providers" / "the three providers" / "AI."
- No "Babson should," no "pilot," no tier structure. Where peer history includes a literal pilot, the word is rephrased.
- Every load-bearing fact is footnoted to a verified source URL.

---

## Sources (23 unique URLs)

All verified as of 2026-05-13. URLs marked **bot-blocked** return 403 to scripts (Cloudflare bot challenge) but load normally in standard browsers.

### Babson
- Babson MBA #1 for 32 years — https://entrepreneurship.babson.edu/babson-mba-top-usnwr/ — ✓
- Babson 2025 SVP teams — https://entrepreneurship.babson.edu/2025-summer-venture-program-teams/ — ✓
- Babson + Founderz "AI in Action" — https://entrepreneurship.babson.edu/babson-founderz-ai/ — ✓

### OpenAI
- ChatGPT pricing — https://openai.com/business/chatgpt-pricing/ — bot-blocked, real
- April 2026 price reduction — https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-edu-and-business-plans — bot-blocked, real
- GPT-5.5 release — https://openai.com/index/introducing-gpt-5-5/ — bot-blocked, real
- Workspace Agents launch — https://openai.com/index/introducing-workspace-agents-in-chatgpt/ — bot-blocked, real
- Wharton strategic AI investment — https://news.wharton.upenn.edu/press-releases/2024/05/the-wharton-school-makes-strategic-investment-in-artificial-intelligence-research-and-teaching/ — ✓
- Wharton MBA AI for Business major — https://poetsandquants.com/2025/04/06/wharton-launches-new-ai-for-business-mba-major-undergrad-concentration/ — ✓
- Oxford ChatGPT Edu — https://www.ox.ac.uk/news/2025-09-19-oxford-becomes-first-uk-university-offer-chatgpt-edu-all-staff-and-students — bot-blocked, real
- UCLA ChatGPT Enterprise — https://newsroom.ucla.edu/releases/ucla-to-introduce-chatgpt-enterprise-on-campus — ✓
- CSU ChatGPT Edu initiative — https://www.calstate.edu/csu-system/news/Pages/CSU-AI-Powered-Initiative.aspx — bot-blocked, real

### Anthropic
- Claude Opus 4.7 release — https://www.anthropic.com/news/claude-opus-4-7 — ✓
- Claude for Education / Learning Mode — https://www.anthropic.com/news/introducing-claude-for-education — ✓
- Northeastern + Anthropic — https://news.northeastern.edu/2025/04/02/anthropic-ai-partnership/ — ✓
- LSE Claude for Education — https://info.lse.ac.uk/staff/divisions/Eden-Centre/Artificial-Intelligence-Education-and-Assessment/Anthropics-Claude-for-Education — ✓
- Champlain + Anthropic — https://www.champlain.edu/blog/news/champlain-collaborates-with-anthropic-ai-higher-ed/ — ✓

### Google
- Gemini 3.1 Pro release — https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ — ✓
- Workspace Intelligence launch — https://workspace.google.com/blog/product-announcements/introducing-workspace-intelligence — ✓
- Google AI Pro for Education — https://workspaceupdates.googleblog.com/2025/09/google-ai-pro-for-education.html — ✓
- Rice Gemini for Education — https://news.rice.edu/news/2025/rice-adopts-googles-generative-ai-solution-enhance-student-learning-and-faculty-support — bot-blocked, real
- University of Houston Gemini — https://www.uh.edu/news-events/stories/2026/march/03172026-google-ai-partnership.php — ✓
- Google's 1,000+ institutions roundup — https://blog.google/products-and-platforms/products/education/gemini-higher-education-benefits/ — ✓

---

## Palette

Edit once in [`assets/css/site.css`](assets/css/site.css):

```css
--c-green:  #006747;
--c-ink:    #14191F;
--c-bone:   #FAF7F2;
--c-amber:  #C9A227;
```

---

## History

- **v1.0** — original 7-page version (`v1-archive` branch).
- **v2.0** — 3-page positive-tone version (`v2-archive` branch).
- **v3.0** — 4 pages, real data, tier proposal (`v3-archive` branch).
- **v4.0** — 4 pages, no proposal language, full bibliographies (`v4-archive` branch).
- **v5.0** — terminology shift, `/value/` page, `/providers/` page (`v5-archive` branch).
- **v6.0** — density pass + consolidated `/report/` + downloadable PDF (`v6-archive` branch).
- **v7** (current `main`) — dynamic horizontal layout pass: split grids, stat-strips, asides, 4-up card grids, 2x2 vignettes.

`git checkout v6.0` (or any earlier tag) brings the previous shape back.
