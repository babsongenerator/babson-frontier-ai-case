# Babson · AI Providers — A Short Brief (v6)

A four-page, Babson-branded static brief making the case that bringing the three leading AI providers — **OpenAI**, **Anthropic**, and **Google** — to Babson is an easy, affordable, and common-sense move that benefits students, faculty, and staff, and reinforces Babson's position as the global leader in entrepreneurship education.

**v6 adds:** dramatic density pass on the CSS (much more content per screen) + a consolidated single-page **report** at `/report/` + a downloadable **PDF** of the report linked from every site page.

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

## What v6 changed from v5

- **Density.** `site.css` had a full density pass: hero / page-head / section padding cut ~50%, line-height tightened (1.55→1.45), max widths bumped (1080→1180px), cards/tables/vignettes packed tighter, references rendered in **two columns** on desktop. Result: roughly 40–60% more content per screen.
- **New `/report/` route.** A single-page, print-optimized consolidation of all four pages. Cover, TOC, four content sections, and a renumbered combined bibliography (22 unique references). Each provider gets its own page in print.
- **Downloadable PDF.** `babson-ai-providers.pdf` (198 KB) generated from `/report/` via WeasyPrint, committed to the repo, served by GitHub Pages, and linked from every page's nav with the amber **↓ PDF** button.
- **`@media print` block** in `site.css`: hides nav/footer/buttons, switches to Georgia serif, restores white background, prevents card/vignette splits across pages, appends external URLs after link text. The site itself can be printed cleanly from any page.

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
- **v6** (current `main`) — density pass + consolidated `/report/` + downloadable PDF.

`git checkout v5.0` (or any earlier tag) brings the previous shape back.
