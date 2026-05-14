# Babson · AI Providers — Briefing Memorandum (v15)

A consulting-register briefing memorandum on the three leading AI providers in higher education — OpenAI, Anthropic, and Google. Prepared for **Babson President Steve Spinelli** and signed by **Erik Noyes**, **Kristi Gridharry**, and **Jonathan Sims**.

The site is the long version; the accompanying [PDF](babson-ai-providers.pdf) is the printed summary.

---

## Live

- **Primary brief:** https://babsongenerator.github.io/babson-frontier-ai-case/
- **Appendix A** (Microsoft Copilot · pricing detail · glossary): https://babsongenerator.github.io/babson-frontier-ai-case/details/
- **PDF summary:** https://babsongenerator.github.io/babson-frontier-ai-case/babson-ai-providers.pdf
- **Alternative design directions** (dashboard, magazine): https://babsongenerator.github.io/babson-frontier-ai-case/prototypes/
- **Archive** of earlier multi-page versions: https://babsongenerator.github.io/babson-frontier-ai-case/archive/

---

## Structure

```
For Steve/
├── index.html                       # /                — Primary brief (consulting register)
├── style.css                        # Brief stylesheet (IBM Plex; Babson green; numbered sections)
├── details/index.html               # /details/        — Appendix A: Microsoft Copilot · pricing detail · glossary
├── babson-ai-providers.pdf          # Printed summary
├── prototypes/                      # /prototypes/     — Three design-direction prototypes
│   ├── index.html                   # Comparison index (consulting marked as the selected direction)
│   ├── dashboard/                   # Alt direction: Stripe/Linear data-product
│   └── magazine/                    # Alt direction: FT/Atlantic editorial
├── archive/                         # /archive/        — Earlier multi-page versions (preserved)
│   ├── index.html                   # Old "The moment" home
│   ├── value/index.html             # Old Value page
│   ├── build/index.html             # Old What students build
│   ├── providers/index.html         # Old Three providers
│   ├── report/index.html            # Old consolidated report
│   └── assets/                      # Old shared CSS/JS
├── build-pdf.sh                     # Regenerate babson-ai-providers.pdf via WeasyPrint
├── Babson examples - highlight.md   # Source links for the Babson Section 4 (gitignored locally if you'd like)
├── original prompt.md               # Original source brief
└── README.md
```

---

## Document organization (primary brief)

1. **Masthead** — briefing memorandum header (prepared for · subject · classification · date · document)
2. **From the authors** — preface; thanks Spinelli for the meeting; explains the site is *vibe-coded* (built through conversation with Anthropic's Claude) with research drawn from Google Gemini's Deep Research — two of the three providers being described
3. **Executive Summary** — four bullets, cost first
4. **§ 1.0 Landscape** — the three providers' distinct strengths, with a comparison table
5. **§ 2.0 Cost at institutional scale** — list pricing, CSU $17M benchmark, Babson-scale envelope
6. **§ 3.0 Peer-institution adoption** — Wharton, Oxford, UCLA, CSU, Northeastern, LSE, Champlain, Rice, Houston, plus the 1,000+ aggregate
7. **§ 4.0 Babson is already building with these tools** — four current examples linked to public URLs; The Generator + Weissman Foundry + AI Innovators Bootcamp context
8. **§ 5.0 Observations** — four closing observations
9. **§ References** — 27 cited sources

**Appendix A** (`/details/`):

- A.1 On Microsoft Copilot — Microsoft's own docs name OpenAI's GPT-5 as the model behind Copilot; Microsoft + Anthropic + NVIDIA Nov 2025 partnership added Claude inside Copilot. Two named Copilot higher-ed deployments (USC, Manchester). Positioning: Copilot operates one layer above the foundation providers.
- A.2 Pricing in detail — full per-user list table; CSU $17M deal unpacked phase-by-phase; Babson-scale math; undisclosed deal totals catalogued.
- A.3 Glossary — GPT-5.5, Workspace Agents, Operator, Claude Opus 4.7, Learning Mode, Gemini 3.1 Pro, Workspace Intelligence, 1M-token context, ChatGPT Edu.
- § Appendix references (A1–A8) — additional Copilot-specific sources.

---

## Babson examples featured in § 4.0

| Project | Babson connection | URL |
|---|---|---|
| Crafting Tomorrow | Co-founded by Cole Collins (Babson undergrad; Babson AI Club leadership) | [crafting-tomorrow.org](https://www.crafting-tomorrow.org/) |
| "ping! and brain" (Build-a-thon demo) | Vaness Reece Gardner '26, AI Specialist at the Weissman Foundry; Generator Build-a-thon 2026 | [YouTube](https://youtu.be/twRzdwVQ2eM) |
| GemCopy (AI Innovators demo) | Output of Babson's AI Innovators Bootcamp pairing Babson faculty/students with the diamond company Amipi INC | [demo](https://aiinnovatorsprojectvideodemo.vercel.app/) |
| Face Off | Built on Base44, an AI no-code app-builder Babson students use through Generator programs | [Face Off](https://face-off-now.base44.app/) |

Plus references to **The Generator** (Babson's interdisciplinary AI lab, founded by **Erik Noyes**, who is one of this brief's three authors), the **Weissman Foundry**, the **AI Innovators Bootcamp** (1,000-SMB training goal), and the Babson–Microsoft small-business AI-agent pilot.

---

## Regenerating the PDF

```bash
./build-pdf.sh                                # uses /archive/report/index.html as the source (legacy)
# or, against a future canonical report:
# weasyprint <source>.html babson-ai-providers.pdf
```

The current PDF was generated from the v11 consolidated report; once the consulting brief is itself ready to drive the PDF, the script will be re-pointed.

---

## Authors

- **Erik Noyes** — Associate Professor; founding Faculty Director of The Generator and the Weissman Foundry
- **Kristi Gridharry** — co-signer
- **Jonathan Sims** — co-signer

---

## Version history

| Version | What it was |
|---|---|
| v1.0 | Original 7-page case site with risk framing |
| v2.0 | 3-page positive-tone brief with placeholders |
| v3.0 | 4 pages with real 2026 data |
| v4.0 | No proposal language; APA bibliographies |
| v5.0 | "Frontier"/"labs" → "leading AI providers"; new `/value/` and `/providers/` |
| v6.0 | Density pass + consolidated `/report/` + downloadable PDF |
| v7.0 | Dynamic horizontal layout |
| v8.0 | Dropped Founderz/AI-THINK, pulled back Babson self-celebration |
| v9.0 | Evidence-first lead, quieter titles, reference-document register |
| v10.0 | Institutional-scale cost framing (CSU $17M), direct links to each provider's higher-ed page |
| v11.0 | "Cost at a glance" block surfacing the dollar answer up front |
| v12.0 | Three design-direction prototypes (consulting, dashboard, magazine) |
| v13.0 | Consulting prototype + fine-print appendix + Copilot framing |
| v14.0 | "From the authors" preface added to consulting prototype |
| v15 (current) | **Consulting design promoted to canonical**; old site moved to `/archive/`; **Babson examples Section 4.0 added** featuring the four current examples and The Generator context |

Every prior version is preserved as a git tag (`v1.0` … `v14.0`) and a matching `vN-archive` branch. `git checkout v14.0` brings the prior shape back.
