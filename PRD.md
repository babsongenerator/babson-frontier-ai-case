# PRD — Babson · AI Providers (v5)

> A four-page brief arguing — through evidence, not exhortation — that bringing OpenAI, Anthropic, and Google to Babson is an easy, affordable, common-sense move that benefits every campus group and reinforces Babson's position as the global leader in entrepreneurship education.

Source brief: [`original prompt.md`](original%20prompt.md). Earlier versions preserved as `v1.0` / `v2.0` / `v3.0` / `v4.0` tags and corresponding `*-archive` branches.

---

## 1. Goal

A short, polished, Babson-branded brief that:

1. President Spinelli can read in five minutes.
2. He can forward to donors, board members, or faculty without needing to add context.
3. Argues the case via evidence and framing, not via "you should…" copy.
4. Centers Babson's entrepreneurship leadership as the why — these tools fit Babson because of who Babson already is.
5. Stands up to scrutiny — every load-bearing fact is footnoted to a verified source URL.

> *"Babson built modern entrepreneurship education. Institutional AI access is the next chapter — and Babson is already moving."*

## 2. Audience

- **Primary:** Steve Spinelli, President of Babson College.
- **Forward audience:** donors, board members, faculty leadership.

## 3. The case (subtext)

Bringing OpenAI, Anthropic, and Google to Babson is:

- **Easy** — these tools integrate with the Workspace / Office / SSO infrastructure Babson already runs. Education-tier plans exist for exactly this kind of rollout.
- **Affordable** — per-user pricing has come down materially; the combined cost lands inside routine institutional software budgets.
- **Common-sense** — it benefits students, faculty, and staff in concrete documented ways, and it reinforces what Babson is already known for.

The brief does not say "Babson should." It shows that this is the move the most respected peers have already made.

## 4. Terminology

The terms "frontier models," "frontier labs," "frontier AI," and "labs" are not used in v5. The brief refers to OpenAI, Anthropic, and Google as **"the three leading AI providers"** (or "the three providers" / "providers" in shorter form). Site brand is **`Babson · AI Providers`**.

## 5. Tone

- Persuasive *because* credible. Argument via evidence selection, not exhortation.
- No "Babson should…", no "next step," no "pilot," no "tier" structure.
- Every fact footnoted; reader can verify.
- Quotable in isolation — every paragraph holds up if pulled out of context for a donor email.

## 6. Information architecture (4 pages)

| Route | Title | Purpose |
|---|---|---|
| `/` | The moment | Babson legacy + "AI in Action" + the three providers' distinct strengths + easy/affordable/common-sense framing |
| `/value/` | Value for everyone | Six benefit cards each for students, faculty, and staff — each tied to a documented capability from one of the three providers |
| `/build/` | What students build | Four 2025 SVP teams paired with the provider whose capabilities map to their kind of work |
| `/providers/` | The three providers | OpenAI · Anthropic · Google — for each: published cost AND peer-institution adoption with verified sources |

## 7. Citation system

- Inline `<sup class="ref"><a href="#ref-N">N</a></sup>` numbered references on each load-bearing fact.
- Per-page `<ol class="refs">` at the bottom with APA 7th-edition citations.
- `:target` highlight in amber when the reader clicks an inline number.
- 23 unique source URLs across the brief; verification status documented in the README.

## 8. Visual system

Same palette as v4 (Babson Green + ink + bone + amber). System UI typography. Sticky nav, hero band on home, subdued page header on subpages. Cards in 1–3 column responsive grids. Vignettes for institutional / team profiles. References styling with numbered counter.

## 9. Tech & structure

- Static multi-page site, one HTML file per route in its own folder.
- Vanilla HTML/CSS/JS — no framework, no npm, no build step.
- All inter-page and asset links are relative.
- No JS dependencies on subpages (Chart.js retired from v5 since no charts remain).

## 10. Content rules

- "Frontier" and "labs" terminology is forbidden; "the three providers" / "AI" are the replacements.
- "Babson should…" / "the next step" / "pilot" framing is forbidden in body copy. Where peer history includes a literal pilot, the word is rephrased (e.g., "initial year of access").
- Every numeric or named claim is sourced.
- No invented statistics.
- Peer-school examples framed as "what mature deployments look like at peers," not as criticism of Babson.

## 11. Deliverables

- Runnable static site in this repo, no install required.
- [README.md](README.md) with run instructions, structure, and a master URL/verification list.
- This PRD.
- Live URL: https://babsongenerator.github.io/babson-frontier-ai-case/
- Earlier versions preserved as `v1.0` / `v2.0` / `v3.0` / `v4.0` tags + `*-archive` branches.

## 12. Verification

```bash
cd "For Steve"
python3 -m http.server 8000
# open http://localhost:8000/
```

Manual checks:
- 4 nav links navigate correctly from every page.
- Each page has a References section; superscript numbers anchor-jump to the right entry and highlight it.
- Mobile viewport (375px): nav collapses; cards stack; references reflow.
- `grep -i frontier index.html value build providers` returns nothing.
- `grep -i ' labs\?\b' …` returns nothing (other than the venture name "GENETICFIT Labs").
- `grep -i pilot …` returns nothing in v5 body copy.
- Footer "Last updated" reads `2026-05-13`.
- All cited URLs respond 200 (or are documented as bot-blocked in the README).
