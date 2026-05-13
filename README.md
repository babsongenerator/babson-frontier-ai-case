# The Frontier Case — For Babson

A static, multi-page marketing website making the case to **Babson President Steve Spinelli** (and secondarily, donors funding student entrepreneurship) that Babson should invest in frontier AI tools — especially **Anthropic** — for student entrepreneurs.

Built from `original prompt.md`. Full PRD in [`PRD.md`](PRD.md).

---

## Run it locally

No build step. Static HTML, CSS, and vanilla JS only. Chart.js is loaded via CDN.

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Tested with Python 3.9+. Any static-file server works (`npx serve`, `caddy file-server`, etc.).

---

## Project structure

```
For Steve/
├── index.html                       # /
├── costs/index.html                 # /costs/
├── frontier-models/index.html       # /frontier-models/
├── failure-to-act/index.html        # /failure-to-act/
├── benchmarks/index.html            # /benchmarks/
├── students-elsewhere/index.html    # /students-elsewhere/
├── student-stories/index.html       # /student-stories/
├── assets/
│   ├── css/site.css                 # palette as CSS vars + all components
│   ├── js/charts.js                 # all Chart.js configs (data is placeholder)
│   └── js/nav.js                    # mobile hamburger + active-link highlight
├── PRD.md                           # fleshed-out PRD
├── original prompt.md               # original brief
└── README.md                        # this file
```

Every inter-page link is **relative** so the site works at any URL prefix (domain root, GitHub Pages subpath, NAS subpath) without changes.

The nav and footer are duplicated across all seven HTML files. If you change one, find/replace across the seven pages. For a site this small, that's faster than introducing a build step.

---

## Palette

The four-color palette lives in [`assets/css/site.css`](assets/css/site.css) as CSS variables:

```css
--c-green:  #006747;   /* Babson Green — primary */
--c-ink:    #14191F;   /* near-black body text */
--c-bone:   #FAF7F2;   /* warm off-white background */
--c-amber:  #C9A227;   /* muted gold accent */
```

Adjust there once; every page picks up the change.

---

## PLACEHOLDER checklist

Every claim that needs a number or a name is marked `[PLACEHOLDER: ...]` inline in the HTML and highlighted in the UI. Replace each one with real data before sharing externally.

### Home — `/`
- [ ] Doughnut chart values: share of entrepreneurs using each frontier model — see `chart-home-share` in [`assets/js/charts.js`](assets/js/charts.js).
- [ ] Horizontal bar chart values: composite frontier capability index — see `chart-home-landscape` in [`assets/js/charts.js`](assets/js/charts.js). Replace with averaged benchmark scores from LMArena / MMLU-Pro / GPQA or similar defensible source.

### Costs — `/costs/`
- [ ] Indicative dollar figures for Pilot, Department, and Institution tiers (3 instances in the tier cards).
- [ ] Annual cost row in the comparison table (3 cells).
- [ ] All three datasets in the grouped bar chart (`chart-costs` in [`assets/js/charts.js`](assets/js/charts.js)) — requires real quotes from Anthropic, Google, and OpenAI enterprise sales.

### Frontier Models — `/frontier-models/`
- [ ] Most recent Gemini model version + one defensible strength.
- [ ] Most recent Claude model version + one defensible strength.
- [ ] Most recent GPT model version + one defensible strength.

### Failure to Act — `/failure-to-act/`
- [ ] Two datasets in the line chart (`chart-failure-curve` in [`assets/js/charts.js`](assets/js/charts.js)) — peer-school AI adoption % vs Babson, 2023 → 2027 projected.
- [ ] 1–2 named peer institutions with AI partnerships and the language they're using in recruiting materials (Risk 1).
- [ ] Data point on % of recent hiring leaders who expect AI fluency from new grads (Risk 2) — Wharton AI Lab or WEF Jobs report are good sources.
- [ ] Anecdote / paraphrased quote from a major donor signaling AI-program expectations (Risk 3).

### Benchmarks — `/benchmarks/`
- [ ] Per-school student-facing AI investment figures for all 7 schools in the leaderboard (`chart-benchmarks` in [`assets/js/charts.js`](assets/js/charts.js)). Verify each before publishing.
- [ ] Three peer-school profile cards: name, 2–3 sentence summary, reported spend.

### Students Elsewhere — `/students-elsewhere/`
- [ ] 9 cards: title, school, 2-sentence description, source URL. Mix of MIT, Stanford, Wharton, Berkeley, CMU, Northeastern, etc.

### Student Stories — `/student-stories/`
- [ ] 5 vignettes of Babson students (Build Fund + G1000 mix). Each needs: name, class year, venture category, narrative, what they built, time to prototype, tool that mattered, why critical.

### Footer (every page)
- [ ] Update "Last updated" stamp when you next refresh the content.

---

## Editing tips

- **One-off content tweak:** edit the page's HTML directly.
- **Palette change:** edit the four CSS vars at the top of [`assets/css/site.css`](assets/css/site.css).
- **Chart data update:** edit the relevant block in [`assets/js/charts.js`](assets/js/charts.js). Each chart's config is clearly labeled.
- **Nav change:** find/replace across the seven `index.html` files. The nav block is identical in every file except for asset-path depth (`assets/...` on the home page, `../assets/...` on subpages).
- **Add a page:** copy any subpage's `index.html` into a new folder, swap the nav active state by relying on `data-route`, add a new link to all seven existing navs.

---

## Tone rules

- Persuasive but credible. No hype words.
- Every numeric claim that doesn't have a source is a `[PLACEHOLDER]`. Do not replace a placeholder with an invented figure.
- Short paragraphs. Sentences that earn their place.

---

## License

Internal proposal material; not licensed for external distribution.
