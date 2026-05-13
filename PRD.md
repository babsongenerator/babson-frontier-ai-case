# PRD — Babson · AI Providers (v6)

> A four-page brief + consolidated report + downloadable PDF arguing — through evidence — that bringing OpenAI, Anthropic, and Google to Babson is an easy, affordable, common-sense move that benefits every campus group and reinforces Babson's position as the global leader in entrepreneurship education.

Source brief: [`original prompt.md`](original%20prompt.md). Earlier versions preserved as `v1.0` … `v5.0` tags and `*-archive` branches.

---

## 1. Goal

A short, polished, Babson-branded brief that:

1. President Spinelli can read in five minutes on the web.
2. He can download as a PDF and forward to donors, board members, or faculty.
3. Argues the case via evidence and framing, not via "you should…" copy.
4. Centers Babson's entrepreneurship leadership as the why.
5. Stands up to scrutiny — every load-bearing fact is footnoted to a verified source URL.
6. **(v6)** Fits substantially more content per screen than earlier versions — feels like a report, not a marketing landing page.

> *"Babson built modern entrepreneurship education. Institutional AI access is the next chapter — and Babson is already moving."*

## 2. Audience

- **Primary:** Steve Spinelli, President of Babson College.
- **Forward audience:** donors, board members, faculty leadership.

## 3. The case (subtext)

Bringing OpenAI, Anthropic, and Google to Babson is **easy** (integrates with existing infrastructure), **affordable** (per-user pricing now in normal software-budget range), and **common-sense** (benefits every campus group; matches what peers have already done). Subtext woven through, never preached.

## 4. Terminology

"Frontier models" / "frontier labs" / "frontier AI" / "labs" are not used. The brief refers to OpenAI, Anthropic, and Google as **"the three leading AI providers"** (or "the three providers" / "providers" in shorter form). Site brand: **`Babson · AI Providers`**.

## 5. Tone

- Persuasive *because* credible. Argument via evidence selection, not exhortation.
- No "Babson should…", no "next step," no "pilot," no tier structure.
- Every fact footnoted.
- Quotable in isolation.

## 6. Information architecture

| Route | Title | Purpose |
|---|---|---|
| `/` | The moment | Babson legacy + "AI in Action" + the three providers + easy / affordable / common-sense framing |
| `/value/` | Value for everyone | Six benefit cards for each of students, faculty, staff — each tied to a documented provider capability |
| `/build/` | What students build | Four 2025 SVP teams paired with the provider whose capabilities map to their work |
| `/providers/` | The three providers | OpenAI · Anthropic · Google — for each: published cost AND peer-institution adoption |
| `/report/` | Consolidated report | Single-page print-optimized consolidation of the four pages; cover, TOC, body, bibliography |

Every page nav also surfaces an amber **↓ PDF** button linking to `/babson-ai-providers.pdf`.

## 7. Citation system

- Inline `<sup class="ref">` numbered references on every load-bearing fact, linking to per-page bibliography anchors.
- Per-page bibliography in `<ol class="refs">` with APA 7th-edition citations.
- Two-column references layout on screens ≥720px (v6 density pass).
- `:target` highlight in amber when the reader clicks a reference number.
- 23 unique source URLs across the web brief; consolidated to 22 in the report (deduplication; one source appeared only on multiple pages, not the same source twice).

## 8. Visual system

Palette unchanged. v6 brought a **density pass**:

- Hero / page-head padding cut by half
- Line-height 1.55 → 1.45
- Max widths 1080 → 1180 px (prose 720 → 760)
- Card minmax 260 → 230; padding 1.25 → 0.9rem
- Table cell padding 0.85/1rem → 0.55/0.8rem
- References font 0.92 → 0.85rem, two-column above 720px
- All class names preserved; HTML unchanged except for nav-PDF link insertion

A full `@media print` block produces good output when any web page is printed, but the consolidated report at `/report/` is the canonical "print" artifact.

## 9. PDF report

- Source: `report/index.html` — a single-file consolidation of the four web pages.
- Generator: WeasyPrint (`brew install weasyprint`), invoked by `build-pdf.sh`.
- Output: `babson-ai-providers.pdf` (~198 KB), committed to the repo, served from GitHub Pages.
- Link from every page: amber **↓ PDF** button in the nav.
- Regeneration is manual after content changes (`./build-pdf.sh`); the report HTML is currently maintained alongside the four web pages rather than auto-generated.

## 10. Tech & structure

- Static multi-page site, one HTML file per route.
- Vanilla HTML/CSS/JS — no framework, no npm, no build step (other than the optional `build-pdf.sh` for PDF regeneration).
- All inter-page and asset links are relative.

## 11. Content rules

- "Frontier" / "labs" terminology is forbidden.
- "Babson should…" / "next step" / "pilot" framing is forbidden in body copy.
- Every numeric or named claim is sourced.
- No invented statistics.
- Peer-school examples framed as "what mature deployments look like," not as criticism of Babson.

## 12. Deliverables

- Runnable static site in this repo, no install required.
- Downloadable PDF: `babson-ai-providers.pdf`.
- Consolidated print-optimized HTML: `report/index.html`.
- [README.md](README.md) with structure, regen instructions, master URL list.
- This PRD.
- Live URL: https://babsongenerator.github.io/babson-frontier-ai-case/
- Live PDF: https://babsongenerator.github.io/babson-frontier-ai-case/babson-ai-providers.pdf
- Earlier versions preserved as `v1.0` … `v5.0` tags + `*-archive` branches.

## 13. Verification

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
# open http://localhost:8000/report/
# open http://localhost:8000/babson-ai-providers.pdf
```

Manual checks:
- 4 nav links + ↓ PDF button on every web page.
- `/report/` renders as a print-styled document (cover + TOC + body + bibliography).
- `babson-ai-providers.pdf` opens in a browser and looks clean (no broken layout, correct pagination).
- `grep -i frontier index.html value build providers report` returns nothing.
- `grep -i ' labs\?\b' …` returns nothing (other than "GENETICFIT Labs" venture name).
- `grep -i 'babson should\|next step\|pilot' …` returns nothing in body copy.
- Footer "Last updated" reads `2026-05-13`.
- All cited URLs respond 200 (or are documented as bot-blocked in the README).
