# Babson · Frontier AI — A Short Brief

A three-page, Babson-branded static brief making the positive case for Babson to lead in AI-era entrepreneurship. Prepared for **President Spinelli** as a forwardable read; written so any section can be quoted in isolation without context.

Source brief: [`original prompt.md`](original%20prompt.md). Fleshed-out PRD: [`PRD.md`](PRD.md).

The earlier seven-page version is preserved as **`v1.0`** tag and **`v1-archive`** branch on this repo.

---

## Run it locally

No build step. Static HTML, CSS, and vanilla JS only. Chart.js loaded via CDN.

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
├── build/index.html                 # /build/           — What students build
├── partnership/index.html           # /partnership/     — Three partnership options
├── assets/
│   ├── css/site.css                 # palette + components
│   ├── js/charts.js                 # 2 Chart.js configs (placeholder data)
│   └── js/nav.js                    # mobile nav + active-link
├── PRD.md                           # fleshed-out PRD
├── original prompt.md               # source brief
└── README.md                        # this file
```

All inter-page and asset links are **relative**, so the site works at any URL prefix (domain root, GitHub Pages subpath, NAS subpath).

---

## Tone

- Celebration of Babson's entrepreneurship leadership. AI framed as the natural next chapter, not a remedy for any current shortcoming.
- Written to be skim-friendly and forwardable. Every section should be quotable in isolation.
- No "behind peers" language. No "risk of doing nothing" language.
- Every numeric claim that needs real data is tagged `[PLACEHOLDER: ...]` and rendered with a yellow highlight so it can't accidentally ship.

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

## Charts (2)

| Page | id | Type | What it shows |
|---|---|---|---|
| Home | `chart-home-share` | Doughnut | Founder tool use across the three frontier labs |
| Partnership | `chart-costs` | Grouped bar | Indicative cost per tier × use case |

Both pull color values from the CSS palette so brand changes propagate automatically.

---

## PLACEHOLDER checklist

Every yellow-highlighted `[PLACEHOLDER: ...]` tag in the UI needs a real value before this brief is shared externally. Grouped by page:

### Home — `/`
- [ ] `chart-home-share` data — verified distribution of frontier-model usage among founders.

### What Students Build — `/build/`
- [ ] **3 Babson vignettes** — for each: student name + class year, venture category, 3–4 sentence narrative, what they built, time to first ship, what the tool unlocked. Mix of Build Fund and G1000.
- [ ] **3 peer-school case studies** — for each: title, school, 2-sentence summary, source URL.

### Partnership — `/partnership/`
- [ ] Indicative dollar figures for Pilot, Department, Institution (tier cards).
- [ ] Annual cost row in the comparison table (3 cells).
- [ ] `chart-costs` data — verified figures from Anthropic / Google / OpenAI enterprise quotes for the three use-case rows × three tiers.

### Every page
- [ ] Update "Last updated" stamp in the footer when content materially changes.

---

## Editing tips

- **Palette change:** edit the four CSS vars at the top of [`assets/css/site.css`](assets/css/site.css). All pages and charts pick it up automatically.
- **Chart data:** edit the relevant block in [`assets/js/charts.js`](assets/js/charts.js).
- **Nav change:** find/replace across the three `index.html` files. The nav block is identical except for the asset-path depth (`assets/...` from home, `../assets/...` from subpages).
- **Add a page:** copy any subpage's `index.html` into a new folder, add a link to all three existing navs.

---

## History

- **v1.0** (`v1.0` tag, `v1-archive` branch) — original 7-page version with full peer benchmarks, failure-to-act risk page, and frontier-models deep-dive. Preserved for material reuse but superseded by this version.
- **v2** (current `main`) — three pages, positive framing, designed to be forwardable.

To see v1: `git checkout v1.0` or browse the `v1-archive` branch on GitHub.
