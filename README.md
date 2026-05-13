# Babson · AI Providers — A Short Brief (v5)

A four-page, Babson-branded static brief making the case that bringing the three leading AI providers — **OpenAI**, **Anthropic**, and **Google** — to Babson is an easy, affordable, and common-sense move that benefits students, faculty, and staff, and reinforces Babson's position as the global leader in entrepreneurship education.

Source brief: [`original prompt.md`](original%20prompt.md). PRD: [`PRD.md`](PRD.md).

Earlier iterations preserved on this repo:
- **`v1.0`** / **`v1-archive`** — original 7-page version with risk framing.
- **`v2.0`** / **`v2-archive`** — 3-page positive-tone brief with placeholders.
- **`v3.0`** / **`v3-archive`** — 4 pages with real data + partnership-tier proposal.
- **`v4.0`** / **`v4-archive`** — 4 pages with APA bibliographies, proposal language removed.
- **`main`** (this) — v5: terminology change ("frontier" / "labs" → "providers"), new `/value/` page, `/peers/` + `/costs/` merged into `/providers/` with per-provider cost + peer adoption, every fact still footnoted.

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
├── value/index.html                 # /value/           — Value for students, faculty, staff
├── build/index.html                 # /build/           — What students build
├── providers/index.html             # /providers/       — OpenAI · Anthropic · Google (cost + peer adoption)
├── assets/
│   ├── css/site.css                 # palette + components + refs styling
│   ├── js/charts.js                 # unused in v5 (kept for future use)
│   └── js/nav.js                    # mobile nav + active-link
├── PRD.md
├── original prompt.md
└── README.md
```

All inter-page and asset links are **relative**, so the site works at any URL prefix.

---

## What v5 changed from v4

- **Terminology.** "Frontier AI" / "frontier labs" / "frontier models" replaced with "the three leading AI providers" / "the three providers" / "AI." Site brand: `Babson · Frontier AI` → `Babson · AI Providers`.
- **New page: `/value/`** — explicit case for what students, faculty, and staff each gain. 6 benefit cards per group, each tied to a documented capability from one of the three providers.
- **`/peers/` + `/costs/` merged into `/providers/`** — single page with three sections (one per provider), each showing **published cost** AND **how peer universities have already deployed it**.
- **Per-provider peer adoption deepened** with new verified sources:
  - **OpenAI**: Wharton, Oxford (5-year partnership), UCLA, CSU system.
  - **Anthropic**: Northeastern, LSE, Champlain (small-private peer match for Babson).
  - **Google**: Rice (private research peer), University of Houston (data-sovereignty rollout), Google's published 1,000+ institution / 10M+ student footprint.
- **Subtext woven throughout.** Bringing OpenAI, Anthropic, and Google to Babson is positioned as easy / affordable / common-sense and tied back to Babson's reputation in entrepreneurial leadership.

---

## Tone

- The brief now argues a clear case via the choice of evidence and framing, without becoming a proposal — there is no "Babson should…", no "the pilot," no "next steps," no tier structure.
- Positive on Babson's track record. Celebrates the Babson + Founderz initiative as the literacy layer already in place.
- Every load-bearing fact is footnoted to a verified source URL.
- The Value page makes the strongest argumentative push — it is the page meant to be quoted from in a forwarded email.

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
- Rice Gemini for Education — https://news.rice.edu/news/2025/rice-adopts-googles-generative-ai-solution-enhance-student-learning-and-faculty-support — ✓ (some scripts get 406 — Cloudflare; browsers load)
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
- **v5** (current `main`) — terminology shift, new `/value/` page, `/providers/` page with per-provider cost + peer adoption.

`git checkout v4.0` (or any earlier tag) brings the earlier shape back any time.
