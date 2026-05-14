# Babson AI Brief — Content Source

This file is the editable copy across the site. Make line-item changes here; the HTML structure stays put, only the text changes. When you save and send back, I'll diff and re-apply each edit to the correct file.

## Conventions

- `[word](#term:key)` = yellow-highlight term popover. The text in brackets is what shows on the page; the bit after `#term:` is the term-definition key (full definitions in section **6**). To edit which words are highlighted, just change which words are wrapped — to remove a highlight, replace `[agentic](#term:agentic)` with plain `agentic`.
- `[N]` next to a claim = numbered citation chip. The number maps to the references list in section **7**. Group cites as `[14][15]` for multiple.
- **Bold labels** indicate fields (Headline, Body, etc.) — don't edit the labels, only the text under them.
- `>` blockquoted paragraphs are body prose. Edit freely.
- Section anchors (e.g. `2.1`) match the order things appear in the file each scene/page belongs to.

---

# 1. Confidentiality gate — intro letter

**File:** `auth.js` — the first thing every reader sees, before the password is entered. Sits over every page in the site.

**Eyebrow (small mono):** `Confidential briefing · May 2026`

**Title:**
> Empowering Babson's Entrepreneurial Leaders by Providing the Best Tools

**Body — paragraph 1:**
> Steve — thank you for the time yesterday morning. The conversation prompted us to put together this short reference brief on the three companies (OpenAI, Anthropic, Google) whose AI products are now the working tools of students at our peer institutions. We offer it in the spirit of *entrepreneurial leadership* — translating a fast-moving technology question into a tractable decision that fits ELevates' technology-entrepreneurship pillar.

**Callout — eyebrow:** `What this is · ~10 minutes`

**Callout — body:**
> A short interactive walkthrough — four short paths covering the three providers, the cost at Babson scale, the peers who have already moved, and what Babson is already doing. Each path is two to four scenes; the sidebar tracks where you've been. Take any path in any order, stop when useful, or skip straight to the closing.

**Body — paragraph 2 (after the callout):**
> A practical note. Words shown with a **yellow highlight** open a short plain-language definition when you tap them — use as many or as few as helpful. The full memo-style brief is one click from the closing scene if you want to read longer; a PDF of the same is downloadable from there.

**Body — paragraph 3:**
> About the medium. This site was *vibe-coded* — built through natural-language conversation with Anthropic's Claude rather than written by hand in code. The underlying research drew on Google Gemini's Deep Research. In other words, **two of the three providers we describe were the tools that produced the description.** That a Babson faculty member with no engineering background can produce something like this in an afternoon is part of the point.

**Body — paragraph 4:**
> We look forward to continuing the conversation.

**Signoff:** `Erik Noyes · Kristi Girdarry · Jonathan Sims`

**Password label:** `Password to continue`
**Submit button:** `Continue →`
**Footer line:** `For President Spinelli · please do not forward without our note.`

**Error text (shown if wrong password):** `Not quite — try again.`

---

# 2. Walkthrough — `/index.html`

The interactive choose-your-own-adventure briefing at the root URL. Fourteen scenes across four paths plus an opener and a close.

**Top bar wordmark:** `Babson · AI briefing`

**Sidebar header label:** `Contents`
**Sidebar counter format:** `X of 4 paths`
**Sidebar section titles:** `Why this matters` / `Hub` / `The three providers` / `What it costs` / `Who's using them` / `What Babson is doing` / `Closing`
**Sidebar item labels:** `The shift` / `The floor has moved` / `Choose a path` / `Pick a path` / `OpenAI` / `Anthropic` / `Google` / `How they compare` / `List pricing` / `At Babson scale` / `Adoption timeline` / `Different shapes` / `Infrastructure` / `Student projects` / `Where this lands`

**Reset button:** `Start over`
**Reset confirm:** `Start the walkthrough over? Your visited scenes will be cleared.`

**Nav-pill labels:** `Back` / `Hub` / `Next` (or `Back to hub` on a path's last scene, `Choose a path` on w3)

---

## 2.1 Scene w1 — Why this matters · 1 of 3

**Kicker:** `Why this matters · 1 of 3`

**Pulse timeline:**
- 2022: `Chatbots arrived.`
- 2024: `Students experimenting.`
- 2026: `Working tools.` *(current/highlighted)*

**Headline:**
> AI isn't what it was eighteen months ago.

**Body:**
> The AI available in 2026 does something fundamentally different from the chatbots that arrived in 2022. The current versions of ChatGPT, Claude, and Gemini can read a hundred academic papers in one pass, build a working web application from a sentence of description, and string multi-step tasks together across a student's email, calendar, and software without being asked twice. The technology has moved from *answering questions* to *completing work*. The institutional question is what to do about it.

---

## 2.2 Scene w2 — Why this matters · 2 of 3

**Kicker:** `Why this matters · 2 of 3`

**Stakes panel — 2024 line:** `Solo founder: idea → pitch deck → small team → first prototype, ~1 quarter`
**Stakes panel — 2026 line:** `Solo founder + AI accounts: idea → working prototype → first customers, **weeks, not quarters**`

**Headline:**
> For a school that teaches building, the floor has moved.

**Body:**
> Babson's reputation rests on producing graduates who actually start companies. Starting a company in 2026 is meaningfully different from starting one in 2024 — not because every venture is now an AI venture, but because the floor of what is possible *solo* has moved. One Babson student with three accounts can now produce in a week what used to take a small team a quarter. The institutional question is whether to put those three accounts into every student's hands — and how.

---

## 2.3 Scene w3 — Why this matters · 3 of 3

**Kicker:** `Why this matters · 3 of 3`

**Legend rows (icon · text):**
- `→` Stops are arranged in short paths — pick what you want to know next.
- `···` Underlined words open plain-language definitions.
- `⟲` You can return to the hub from any scene, or jump to the full briefing.
- `◊` The walkthrough remembers which paths you've covered.

**Headline:**
> Choose your own path.

**Body:**
> The next stop is a hub. From there, pick what you want to know first: who the three providers are and what each does best; what it costs at Babson scale; which peer institutions have already deployed which; or what Babson is already doing on the ground. Each path is two or three short scenes. You can take them in any order, in any combination, and stop whenever you're ready for the closing question.

---

## 2.4 Hub scene

**Kicker:** `Where do you want to go next?`

**Headline:**
> Pick a path. You'll come back here.

**Hub card 1 (Path A — Providers):**
- Tag: `Path 1 · 4 stops`
- Title: `The three providers`
- Body: `What each company makes, what each is best at — and how they sit next to Microsoft Copilot in capability.`

**Hub card 2 (Path B — Cost):**
- Tag: `Path 2 · 2 stops`
- Title: `What it costs`
- Body: `Per-user list pricing, the Babson-scale annual envelope, and the largest publicly-disclosed peer-institution deal.`

**Hub card 3 (Path C — Peers):**
- Tag: `Path 3 · 2 stops`
- Title: `Who's already using them`
- Body: `Wharton, Oxford, Northeastern, LSE, Rice, the CSU system — and what each peer institution chose.`

**Hub card 4 (Path D — Babson):**
- Tag: `Path 4 · 2 stops`
- Title: `What Babson is doing`
- Body: `The Generator, the Weissman Foundry, the AI Innovators Bootcamp — and four current student projects.`

**Skip-ahead link:** `Or skip ahead to the closing →`

**Progress text (when 1–3 paths visited):** `X of 4 paths visited`
**Progress text (when all 4 visited):** `All four paths visited — the closing scene awaits when you're ready.`
**Finish link text (when all 4 visited):** `Continue to the closing →`

---

## 2.5 Scene a1 — Providers · 1 of 4 (OpenAI)

**Kicker:** `Providers · 1 of 4`

**Provider card:** `OpenAI` · `GPT-5.5 · April 2026` [1]

**Headline:**
> OpenAI is the action company.

**Body — paragraph 1:**
> OpenAI's strength is [agentic](#term:agentic) work — getting the AI to *do* things, not just describe how to do them. The April 2026 launch of [Workspace Agents](#term:workspace-agents) lets students run multi-step workflows directly inside enterprise tools like Salesforce, Slack, and HubSpot. A founder can have the AI follow up on leads, post status updates to a team channel, or schedule customer interviews without writing a line of code for any of it.

**Body — paragraph 2:**
> The institutional offerings are [ChatGPT Edu](#term:chatgpt-edu) and ChatGPT Business; the underlying model family is GPT-5.5. OpenAI partners run from **Wharton** [11] (universal MBA access since 2024) through **Oxford** [12] (campus-wide ChatGPT Edu since September 2025) to the **California State University system** [14][15] (the largest publicly-disclosed deal at any peer).

---

## 2.6 Scene a2 — Providers · 2 of 4 (Anthropic)

**Kicker:** `Providers · 2 of 4`

**Provider card:** `Anthropic` · `Claude Opus 4.7 · April 2026` [4]

**Headline:**
> Anthropic is the reasoning company.

**Body — paragraph 1:**
> Anthropic's Claude is widely treated as the careful, literal one — best where precision and pedagogy matter more than speed. The flagship is **Claude Opus 4.7**. For higher education specifically, [Claude for Education](#term:claude-for-education) ships a feature called [Learning Mode](#term:learning-mode) that guides students through reasoning steps rather than handing them the answer outright — closer to how a good faculty member teaches.

**Body — paragraph 2:**
> Anthropic's institutional partners include **Northeastern** [16] (campus-wide across 13 global campuses, April 2025), **London School of Economics** [17] (free Enterprise Claude for every LSE student and educator, May 2025), and **Champlain College** [18] (a small private peer with two years of free Claude Pro, March 2025). The Champlain deal is the closest peer-shape to a Babson deployment.

---

## 2.7 Scene a3 — Providers · 3 of 4 (Google)

**Kicker:** `Providers · 3 of 4`

**Provider card:** `Google` · `Gemini 3.1 Pro · Feb 2026` [7]

**Headline:**
> Google is the senses company.

**Body — paragraph 1:**
> Google's flagship is **Gemini 3.1 Pro**, currently the only major AI model that handles video alongside text, image, and audio in a single conversation — the practical meaning of [multimodal](#term:multimodal). Pair that with a one-million-token context window and a single student can analyze hundreds of pages, a long video, and a spreadsheet at the same time.

**Body — paragraph 2:**
> Where OpenAI and Anthropic ship dedicated chat products, Google's institutional strategy is integration. [Workspace Intelligence](#term:workspace-intelligence) (launched April 2026) weaves Gemini directly into Gmail, Docs, Sheets, and Slides — the surface most students already use. Google's published higher-ed footprint reaches **more than 1,000 institutions and 10 million U.S. college students** [10]; named deployments include **Rice** [19] and the **University of Houston** [20].

---

## 2.8 Scene a4 — Providers · 4 of 4 (How they compare)

**Kicker:** `Providers · 4 of 4`

**Headline:**
> Where the three sit next to Microsoft Copilot.

**Body — paragraph 1:**
> Copilot is the AI surface Babson already runs — an excellent productivity layer threaded through Microsoft 365. The table above is not a verdict on Copilot; it's a map of what the foundation-model providers offer that wrapper products like Copilot inherit from them. Each cell links to its source. Click any "source" link to verify the underlying fact.

**Body — paragraph 2:**
> Read the rows the way a CIO would: where Copilot has a checkmark, the capability typically comes from OpenAI or another underlying lab; where it doesn't, the gap is usually about *product surface*, not whether Microsoft could build it. Both kinds of partnership — foundation provider *and* productivity layer — are likely the right answer for an entrepreneurship campus.

**Toggle button (collapsed state):** `Show all 10 rows (5 more: context window, open API, partnerships, pricing, open weights)`
**Toggle button (expanded state):** `Show topline only (5 core capabilities)`

*(The 10-row capability table content lives in section **5**, since it's rendered from JSON.)*

---

## 2.9 Scene b1 — Cost · 1 of 2 (List pricing)

**Kicker:** `Cost · 1 of 2`

**Price table:**

| Provider | List rate | × ~5,000 users × 12 months |
|---|---|---|
| OpenAI · ChatGPT Business [3] | $20 / user / month | **~$1.2M / year** |
| Google · AI Pro for Education [9] | $15 / user / month | **~$0.9M / year** |
| Anthropic · Claude for Education [6] | Negotiated | **Comparable order** |

**Headline:**
> List pricing, applied to Babson's scale.

**Body:**
> Per-user list pricing is now well inside what institutions spend on routine software. For Babson's roughly 5,000 active students, faculty, and staff, each provider works out to about $0.9 to $1.2 million per year at list, before education-tier or volume discounts. Education-tier discounts and volume pricing typically reduce these figures further.

---

## 2.10 Scene b2 — Cost · 2 of 2 (At Babson scale + calculator)

**Kicker:** `Cost · 2 of 2`

**Big-number block:**
- Big number: `$0.9–1.2M`
- Caption: `per provider, per year, at Babson scale`
- Italic anchor line: `≈ one endowed faculty chair — recurring, reaching the whole campus`

**Calculator block:**
- Eyebrow: `Try the math`
- Title: `Annual envelope at list pricing`
- User slider label: `Active campus users` (default 5,000; range 1,000–7,500)
- Tier group label: `Provider scope`
- Tier buttons: `One provider` / `Two providers` (default) / `All three`
- Result detail format: `≈ {users} × ${rate}/user/month × 12.`
- Anchor — annual under $1.4M: `About one endowed faculty chair's annual payout.`
- Anchor — annual $1.4M–$2.4M: `About two endowed chairs' annual payout.`
- Anchor — annual over $2.4M: `About three to four endowed chairs' annual payout.`
- Note under result: `Education-tier discounts and volume pricing typically reduce these figures by 30 to 60 percent. For reference, Cal State's negotiated deal worked out to roughly $1.88 per user per month — far below list. Negotiated outcomes vary by institution.`

**Headline:**
> Roughly one endowed chair, per year, per provider.

**Body:**
> The mental anchor that fits Babson's accounting is the endowed faculty chair — a familiar budget category. At the lower end of the envelope, the annual cost is comparable to a single chair's payout, but recurring and reaching the full active campus rather than one faculty line. **The scale floor**: California State University's deal with OpenAI was **$17 million over 18 months** [15] for more than 500,000 users [14] — the largest publicly-disclosed peer-institution AI commitment. Single-school deals at Wharton, Oxford, Northeastern, and others have not been disclosed in dollars.

---

## 2.11 Scene c1 — Peers · 1 of 2 (Adoption timeline)

**Kicker:** `Peers · 1 of 2`

**Timeline:** *(interactive — renders from `data/peers.json`; 13 verified peer institutions across OpenAI, Anthropic, Google from January 2024 through April 2026)*

**Headline:**
> Where each provider has landed.

**Body:**
> Each provider has built a public reference list at the top of higher education. **OpenAI** spans Arizona State, Wharton, UCLA, Duke, the CSU system, Oxford, and Vanderbilt. **Anthropic** covers Champlain, Northeastern, LSE, and Harvard's Faculty of Arts and Sciences. **Google** reaches Rice, the University of Houston, and a thousand more institutions covering ten million U.S. college students [10]. None of these deployments is a pilot; all are committed campus-wide or system-wide arrangements. Click any dot below for the source announcement.

---

## 2.12 Scene c2 — Peers · 2 of 2 (Different shapes, same direction)

**Kicker:** `Peers · 2 of 2`

**Pattern lines (each on its own row):**
- `Universal MBA seats` *(Wharton)*
- `Single-lab campus-wide deal` *(Northeastern, LSE, Champlain)*
- `Curriculum-funding initiative` *(Stanford AIMES)*
- `System-wide ChatGPT Edu` *(California State University)*
- `Campus-wide Gemini for Education` *(Rice, Houston)*

**Headline:**
> Different shapes, same direction.

**Body:**
> The peer field has not converged on a single template. Different schools made different shapes: a universal MBA-license at Wharton; a single-provider campus-wide deal at Northeastern; a curriculum-funding grant program at Stanford; a system-wide deployment at CSU. The shared signal is direction, not form: each of the elite peers Babson watches picked at least one of the three providers and made an institutional commitment. **Babson currently has none formally in place.**

---

## 2.13 Scene d1 — Babson · 1 of 2 (Infrastructure)

**Kicker:** `Babson · 1 of 2`

**Babson tiles (tag · name):**
- `Lab` · [The Generator](#term:generator) [26]
- `Space` · [Weissman Foundry](#term:weissman-foundry)
- `Program` · [AI Innovators Bootcamp](#term:ai-innovators-bootcamp) [24]
- `Event` · `Generator Build-a-thon` [23]
- `Partnership` · `Babson × Microsoft SMB pilot` [27]

**Headline:**
> Babson's AI infrastructure already exists.

**Body — paragraph 1:**
> None of this lands on empty ground. **The Generator**, founded by Erik Noyes (a co-author of this brief), is Babson's interdisciplinary AI lab. It runs hands-on programs through the **Weissman Foundry** — including the **AI Innovators Bootcamp** (faculty and students paired with small-business owners to build AI prototypes), the annual **Generator Build-a-thon** (~500 students from Boston-area universities each spring), and an ongoing collaboration with Microsoft on small-business AI agents.

**Body — paragraph 2:**
> What's missing is the upstream provider relationship. The infrastructure is here; the formal model-layer commitments are not yet.

---

## 2.14 Scene d2 — Babson · 2 of 2 (Active student projects)

**Kicker:** `Babson · 2 of 2`

**Project tiles (name · meta · line):**

**Crafting Tomorrow** [21]
- Meta: `Cole Collins '26 · AI Club leadership`
- Line: `High-school AI literacy through entrepreneurship.`

**ping! and brain** [22]
- Meta: `Vaness Gardner '26 · Weissman Foundry`
- Line: `Generator Build-a-thon 2026 demo.`

**GemCopy** [24]
- Meta: `AI Innovators Bootcamp × Amipi INC`
- Line: `AI tool turning gem certificates into product copy.`

**Face Off** [25]
- Meta: `Built on Base44 (AI no-code)`
- Line: `Peer-to-peer social-wagering app.`

**Headline:**
> Four projects, all live, all student-built.

**Body:**
> Behind the infrastructure are real student projects already shipping with AI tools. Each project below is publicly accessible; each has a verifiable Babson connection. They are the everyday output of the lab the brief describes — and the closest evidence of what direct provider access at Babson would unlock at scale.

---

## 2.15 Close scene — Where this lands

**Kicker:** `Where this lands`

**Final stamp:** `Fall 2026`

**Final list (each line a bullet):**
- `Three companies.`
- `Per-user pricing inside institutional software budgets.`
- `Peers have already moved.`
- `Babson programs are already building.`

**Headline:**
> The question is whether to give Babson students direct access.

**Body:**
> The full briefing addresses the procurement detail, including how this complements the Microsoft Copilot work Babson already runs. The walkthrough ends here; the briefing picks up where you choose. Either way, the decision belongs to fall 2026.

**Primary CTA:** `Read the full briefing →` (links to `/brief.html`)
**Secondary CTA:** `Download the PDF`

---

# 3. Snapshot — `/snapshot/`

The 3-page lite version for a different audience. Same gate, same term/cite popovers as the walkthrough; no sidebar; no calculator. Reachable at `/snapshot/`.

**Top-bar wordmark:** `Babson · AI snapshot · May 2026`
**Tab labels:** `1 Why now` / `2 What it costs` / `3 Who's moved`
**Footer line:** `Confidential briefing · Erik Noyes · Kristi Girdarry · Jonathan Sims · From the authors · Read the full briefing` *(on page 3, last link is `Walk through it scene by scene`)*

---

## 3.1 Hello dialog — "A note from the authors"

**File:** snapshot pages — auto-opens on first visit, re-openable from the footer link.

**Eyebrow:** `A note from the authors`

**Body — paragraph 1:**
> Steve — thank you for the time yesterday morning. This is the short version: three pages on three companies, what they would cost Babson at scale, and the elite peers who have already moved.

**Body — paragraph 2:**
> It pairs with a longer interactive walkthrough at the home page and a memo-style full briefing at the full brief. Use whichever fits your time.

**Body — paragraph 3:**
> Words in [yellow highlight](#term:vibe-coded) open a short plain-language definition. Each of the three pages takes about ninety seconds to read.

**Body — paragraph 4:**
> This site was *vibe-coded* with Anthropic's Claude on top of Google Gemini's Deep Research — two of the three providers we describe.

**Signoff:** `Erik Noyes · Kristi Girdarry · Jonathan Sims`

**Dismiss button:** `Read the snapshot →`

---

## 3.2 Snapshot Page 1 — `/snapshot/index.html` (Why now)

**Kicker:** `1 of 3 · The moment`

**Headline:**
> Three companies make frontier AI. The moment for Babson is now.

**Body — paragraph 1:**
> The AI available in 2026 does something fundamentally different from the chatbots that arrived in 2022. The current versions of ChatGPT, Claude, and Gemini can read a hundred academic papers in one pass, build a working web application from a sentence of description, and string [agentic](#term:agentic) multi-step tasks together across a student's email, calendar, and software. AI has moved from *answering questions* to *completing work*.

**Body — paragraph 2:**
> For a school whose reputation rests on producing graduates who actually start companies, the floor of what a solo founder can do has moved. One Babson student with the right AI accounts can now produce in a week what used to take a small team a quarter.

**Subhead:** `The three companies`

**Body — paragraph 3:**
> Three companies build the [foundation models](#term:foundation-model) that everything else runs on:

**Three-row block:**

**OpenAI**
> The action company — GPT-5.5 and [Workspace Agents](#term:workspace-agents) for end-to-end task completion [1][2].

**Anthropic**
> The reasoning company — Claude Opus 4.7 and [Learning Mode](#term:learning-mode) for pedagogically careful guidance [4].

**Google**
> The senses company — Gemini 3.1 Pro, the only major model with [multimodal](#term:multimodal) video understanding in a single pass [7].

**Body — paragraph 4 (below the three-row):**
> Everything else — Microsoft Copilot, Perplexity, Cursor — is built on top of these three. Copilot is excellent productivity software; it runs primarily on OpenAI's foundation models under the hood. Partnering at the foundation-model layer is *complementary* to Copilot, not a replacement.

**Subhead:** `The peer signal`

**Body — paragraph 5:**
> In the last eighteen months, twelve elite institutions have committed to one of these three providers: Wharton, Oxford, UCLA, the California State University system, Arizona State, Duke, and Vanderbilt at OpenAI [11][12]; Northeastern, London School of Economics, Champlain, and Harvard's Faculty of Arts and Sciences at Anthropic [16]; Rice and the University of Houston at Google [19][20]. None of these is a pilot. All are committed campus-wide or system-wide arrangements.

**Body — paragraph 6:**
> Babson has the infrastructure already — [The Generator](#term:generator), the Weissman Foundry, the AI Innovators Bootcamp. What's missing is the upstream provider relationship.

**Page nav:** `← The walkthrough` · `1 of 3` · `What it costs →`

---

## 3.3 Snapshot Page 2 — `/snapshot/cost.html` (What it costs)

**Kicker:** `2 of 3 · The cost`

**Headline:**
> For Babson, about one endowed chair's annual payout. Per provider.

**Body — paragraph 1:**
> Per-user list pricing has fallen well inside what institutions spend on routine software. For Babson's roughly 5,000 active students, faculty, and staff, each provider works out to about $0.9 to $1.2 million per year at list, before education-tier or volume discounts.

**Price table:** *(same as walkthrough scene b1 — see section 2.9)*

**Big-number block:**
- Number: `$0.9–1.2M`
- Caption: `per provider, per year, at Babson scale — comparable to one endowed faculty chair's annual payout, but recurring and reaching the whole active campus rather than one faculty line.`

**Subhead:** `The scale floor`

**Body — paragraph 2:**
> California State University's deal with OpenAI was **$17 million over 18 months** [15] for more than 500,000 users [14] — the largest publicly-disclosed peer-institution AI commitment to date. Single-school deals at Wharton, Oxford, Northeastern, and others have not been disclosed in dollars. Education-tier discounts and volume pricing typically reduce list figures by 30 to 60 percent.

**Callout — eyebrow:** `On Microsoft Copilot`
**Callout — body:**
> Microsoft Copilot, which most institutions already run as part of Microsoft 365, is excellent productivity software. It is primarily built on OpenAI's foundation models. Partnering at the foundation-model layer with the three providers is *complementary* to a Copilot deployment, not a replacement — it puts the underlying model capabilities, education-specific features, and developer access into students' hands directly.

**Page nav:** `← Why now` · `2 of 3` · `Who's moved →`

---

## 3.4 Snapshot Page 3 — `/snapshot/peers.html` (Who's moved)

**Kicker:** `3 of 3 · The peer signal`

**Headline:**
> Twelve elite peers have moved. Babson hasn't.

**Body — paragraph 1:**
> Each of the three providers has built a public reference list at the top of higher education. None of these deployments is a pilot; all are committed campus-wide or system-wide arrangements. Click any dot below for the source announcement — or scroll down for the same in list form.

**Timeline:** *(interactive — renders from `data/peers.json`)*

**Timeline caption:** `Thirteen verified peer-institution AI partnerships, January 2024 through April 2026. Each provider has built its own list; Babson is on none.`

**Subhead:** `Different shapes, same direction`

**Body — paragraph 2:**
> The shape varies. Wharton bought universal MBA seats [11]. The California State University system signed the largest publicly-disclosed deal [14][15]. Northeastern made a campus-wide commitment to Anthropic with [Learning Mode](#term:learning-mode) at the center [16]. Rice rolled out [multimodal](#term:multimodal) Gemini for Education across the whole campus [19]. Champlain — the closest small-private peer to Babson — took a two-year free Claude Pro arrangement [18].

**Body — paragraph 3:**
> The shape is a choice; the direction is not. Babson has every advantage to make whatever choice fits — [The Generator](#term:generator), the Weissman Foundry, the AI Innovators Bootcamp, and faculty already running the small-business AI pilot with Microsoft are all in place. What's missing is the upstream relationship.

**Page nav:** `← What it costs` · `3 of 3` · `Read the full briefing →`

---

# 4. Full briefing — `/brief.html`

The long-form memo. Ancillary to the walkthrough; reachable from the close scene's primary CTA.

**Topbar:**
- Back link: `Other design directions →`
- Right meta: `Babson · Briefing Memorandum · May 2026`

**Masthead:**
- Eyebrow: `Office of the President · Briefing Memorandum`
- Title: `Empowering Babson's Entrepreneurial Leaders by Providing the Best Tools`
- Subtitle: `A reference brief on OpenAI, Anthropic, and Google — their products, institutional pricing, and peer-institution deployments.`
- Meta table:
  - Prepared for: `President Stephen Spinelli, Jr.`
  - Subject: `AI provider landscape, higher-ed market`
  - Classification: `Internal / Donor-shareable`
  - Date: `May 2026`
  - Document: `Brief + Appendix A + PDF summary`

**Section nav labels:** `1 Landscape · 2 Cost · 3 Peers · 4 Babson · 5 Observations · Appendix A → · References`
**Section nav actions:** `Walk through →` · `From the authors` · `Aa` (display settings)

---

## 4.1 Hello dialog (brief)

**Eyebrow:** `A note from the authors`

**Paragraph 1:**
> Steve — thank you for the time yesterday morning. The conversation prompted us to put together this short reference brief on the three companies (OpenAI, Anthropic, Google) whose AI products are now the working tools of students at our peer institutions. We offer it in the spirit of *entrepreneurial leadership* — translating a fast-moving technology question into a tractable decision that fits [ELevates](#term:elevates)' technology-entrepreneurship pillar.

**Paragraph 2:**
> **A couple of practical notes before you start.** Some terms on the page may be unfamiliar — [vibe-coded](#term:vibe-coded), [agentic](#term:agentic), [foundation model](#term:foundation-model). Anything with a yellow highlight opens a short, plain-language definition when you tap it. Use as many or as few as helpful. There's also an **Aa** button in the navigation bar if the type feels small.

**Paragraph 3:**
> About the brief itself. This site was vibe-coded — built through natural-language conversation with Anthropic's Claude rather than written by hand in code. The underlying research drew on Google Gemini's Deep Research. In other words, **two of the three providers we describe were the tools that produced the description.** We chose a website over a printed memo because the medium is part of the message: a Babson faculty member with no engineering background can produce something like this in an afternoon. That is what these tools have made possible.

**Paragraph 4:**
> The site is the long version; the accompanying PDF is the printed summary. We look forward to continuing the conversation.

**Signoff:** `Erik Noyes · Kristi Girdarry · Jonathan Sims`

**Secondary action:** `Or walk through it scene by scene`
**Primary action:** `Open the briefing →`

---

## 4.2 Executive summary

**Eyebrow:** `Executive Summary`

**Bullet 1:**
> **Wharton, Oxford, Northeastern, and Rice have already moved.** Each runs an institution-grade deployment of one of the three providers. CSU's $17M over 18 months for 500,000+ users [15] shows what scale looks like at the floor.

**Bullet 2:**
> **The annual envelope is comparable to a single endowed faculty chair — recurring.** List per-user pricing is $15–20 per month [2]; for Babson-scale (~5,000 active users), each provider works out to roughly $0.9–1.2M per year before education-tier or volume discounts.

**Bullet 3:**
> **Three companies lead AI in 2026:** OpenAI, Anthropic, and Google. Each ships an institution-grade education product with [SSO](#term:sso), [data isolation](#term:data-isolation), and direct sales/procurement channels.

**Bullet 4:**
> **Microsoft Copilot complements rather than replaces this layer.** Copilot is the institutional Microsoft 365 surface where staff already work; the three providers discussed here are the upstream [foundation models](#term:foundation-model) students reach when their projects outgrow that surface (see appendix).

---

## 4.3 §1 Landscape

**Section title:** `1.0 Landscape`

### 1.1 Three providers, three distinct strengths

**Lede:**
> The market has consolidated around three vendors with materially different product orientations. Each is investing directly in higher-education go-to-market.

**Providers table:**

| Provider | Flagship model (2026) | Distinct strength | Higher-ed product |
|---|---|---|---|
| OpenAI | GPT-5.5 *(April 2026)* [1] | [Agentic](#term:agentic) execution. [Workspace Agents](#term:workspace-agents) (launched April 2026) run multi-step workflows inside Salesforce, Slack, and HubSpot. [2] | [ChatGPT Edu](#term:chatgpt-edu) [3] |
| Anthropic | Claude Opus 4.7 *(April 2026)* [4] | Careful reasoning and pedagogy. [Claude for Education](#term:claude-for-education) ships *[Learning Mode](#term:learning-mode)*, which guides student reasoning rather than producing answers outright. [5] | [Claude for Education](#term:claude-for-education) [6] |
| Google | Gemini 3.1 Pro *(Feb 2026)* [7] | [Multimodality](#term:multimodal) and Workspace integration. The only major AI model that handles video alongside text, image, and audio in a single pass. [Workspace Intelligence](#term:workspace-intelligence) launched April 2026. [8] | Google for Education [9] |

### 1.2 Positioning — cost versus institutional adoption

**Lede:**
> A simple two-axis view clarifies the differences. Cost (per-user list price) is broadly comparable across the three; *institutional adoption* is where the providers separate.

**Figure 1 caption:** `Figure 1. Provider positioning by per-user list price and disclosed higher-education footprint. Anthropic does not publish list pricing for education; its institutional deals are negotiated.`

**Quadrant labels:**
- Google: `$15/user/mo · 1,000+ institutions [10]`
- OpenAI: `$20/user/mo · flagship deals (CSU, Oxford, Wharton)`
- Anthropic: `Negotiated · early/selective campus-wide deals`

---

## 4.4 §2 Cost at institutional scale

**Section title:** `2.0 Cost at institutional scale`

**Lede:**
> All three providers price per-seat at the low end of enterprise software. The largest disclosed peer deal — California State University with OpenAI — sets a useful ceiling.

**Cost table:**

| Provider | Per user / month (list) | Largest disclosed peer deal | Notes |
|---|---|---|---|
| OpenAI | $20 *(ChatGPT Business, committed)* | **$17M over 18 months at CSU** for 500,000+ users [15] | $1.9M initial 40,000-user phase, then $15M systemwide expansion. [14] |
| Anthropic | Negotiated *(Learning Mode included)* | Northeastern, LSE, Champlain — undisclosed totals [16][17][18] | Multi-year, campus-wide deals at peer institutions; pricing not publicly disclosed. |
| Google | $15 *(AI Pro for Education via reseller)* | 1,000+ institutions / 10M+ U.S. college students [10] | Single-school contract totals undisclosed; bundled into existing Workspace agreements. |

**Callout — tag:** `Babson-scale estimate`

**Callout — body:**
> At a population of approximately **5,000 active users**, list pricing yields a working envelope of **$0.9M–$1.2M per year** per provider, *before* education-tier or volume discounts. Peer-institution deals consistently land below list.
>
> *At the lower end, the annual envelope is roughly comparable to a single endowed-chair payout — recurring rather than one-time, and reaching the full active campus rather than one faculty line.*

---

## 4.5 §3 Peer-institution adoption

**Section title:** `3.0 Peer-institution adoption`

**Lede:**
> Each provider has built a public reference list of higher-education customers. The pattern across all three: campus-wide rollouts, multi-year commitments, and reference deployments at top-tier schools.

### 3.1 OpenAI
- **Wharton (Univ. of Pennsylvania)** — universal MBA access since 2024. [11]
- **University of Oxford** — first UK university to offer ChatGPT Edu to all staff and students (Sept 2025); five-year partnership. [12]
- **UCLA** — first California university with ChatGPT Enterprise (Sept 2024). [13]
- **California State University** — 460,000+ students on ChatGPT Edu (Feb 2025); $17M deal. [14][15]

### 3.2 Anthropic
- **Northeastern University** — campus-wide across 13 global campuses (April 2025). [16]
- **London School of Economics** — campus-wide; launch partner for Claude for Education (May 2025). [17]
- **Champlain College** — small-private peer; two years of free Claude Pro for all students (March 2025). [18]

### 3.3 Google
- **Rice University** — campus-wide Gemini + NotebookLM (Sept 2025). [19]
- **University of Houston** — systemwide rollout with data sovereignty (March 2026). [20]
- **System-wide footprint** — 1,000+ institutions, 10M+ U.S. college students. [10]

---

## 4.6 §4 Babson is already building with these tools

**Section title:** `4.0 Babson is already building with these tools`

**Lede:**
> Adoption at peers is not the only signal. Babson students and Babson programs are already building real things with these providers — through **[The Generator](#term:generator)**, Babson's interdisciplinary AI lab founded by Erik Noyes (a co-author of this brief), and the **[Weissman Foundry](#term:weissman-foundry)**. Four current examples are linked below.

### 4.1 Active examples (table)

| Project | Babson connection | What it is | Open |
|---|---|---|---|
| **Crafting Tomorrow** | Co-founded by Cole Collins (Babson undergrad; Outreach & Events Leader, Babson AI Club) [21] | A student-founded initiative teaching high-school students AI literacy through project-based entrepreneurship. | `crafting-tomorrow.org` + `Details` button |
| **ping! and brain** | Vaness Reece Gardner '26, inaugural AI Specialist at the Weissman Foundry [22]; Generator Build-a-thon 2026, theme "AI x Body & Mind." [23] | Student-built demo from Babson's April 2026 Build-a-thon. The buildathon's sponsor stack included OpenAI, Anthropic, Cursor, Lovable, ElevenLabs, and others. | `YouTube` + `Details` button |
| **GemCopy** | Output of Babson's AI Innovators Bootcamp [24] — a Generator program pairing Babson faculty and students with small-business owners to build AI prototypes. | An AI tool that turns GIA / HRD / AGS gemological certificates into SEO-optimized product descriptions for the diamond company Amipi INC. | `demo` + `Details` button |
| **Face Off** | Built on Base44, an AI no-code app-builder platform Babson students use through Generator programs. [25] | A peer-to-peer social-wagering app for tracking rivalries and head-to-head challenges — built end-to-end by describing it in natural language to Base44, no traditional coding. | `Face Off` + `Details` button |

### 4.2 The underlying infrastructure

> **[The Generator](#term:generator)** is Babson's interdisciplinary AI lab, designed to put advanced AI tools into the hands of students, faculty, and small-business partners through programs at the **[Weissman Foundry](#term:weissman-foundry)** [26]. Current programs include the [AI Innovators Bootcamp](#term:ai-innovators-bootcamp), the annual Generator Build-a-thon, and ongoing collaborations including a Microsoft-sponsored small-business AI-agent pilot. [27]
>
> The brief's primary argument — that direct relationships with OpenAI, Anthropic, and Google are the strategic layer — reinforces, rather than replaces, this existing on-the-ground work. The four projects above are what the conversation is about.

---

## 4.7 Example detail modals (4 of them, opened from §4.1 "Details" buttons)

### Crafting Tomorrow
**Eyebrow:** `Babson example · 4.1`
**Title:** `Crafting Tomorrow`

**Body:**
> A student-founded initiative teaching high-school students AI literacy through project-based entrepreneurship. The site is the student-facing surface for a curriculum that introduces frontier-AI tools as part of how high schoolers think about building things.

**Definition rows:**
- Co-founder: `Cole Collins (Babson undergrad, Finance & Tech Entrepreneurship; Outreach & Events Leader, Babson AI Club)`
- Format: `Student-founded nonprofit / venture — not a class project`
- AI tools taught: `Frontier AI broadly; the curriculum is provider-agnostic and teaches students to use whichever provider fits the task`
- Source: `Babson AI Club leadership listing + LinkedIn (Cole Collins)`

**CTA:** `Visit project →`

### ping! and brain
**Eyebrow:** `Babson example · 4.1`
**Title:** `ping! and brain`

**Body:**
> A Babson student team's demo from the Generator Build-a-thon 2026 (theme: *AI x Body & Mind*). The video walks through the team's working prototype.

**Definition rows:**
- Student lead: `Vaness Reece Gardner '26, inaugural AI Specialist at the Weissman Foundry`
- Event: `Babson Generator Build-a-thon 2026 — April 11, 2026; ~500 students from Boston-area universities`
- Sponsor tool stack: `OpenAI, Anthropic, Cursor, Lovable, ElevenLabs, Tripo AI, GitHub Education, HubSpot`
- Source: `Babson Thought & Action profile of Vaness Gardner; babsonbuildathon.com`

**CTA:** `Watch demo →`

### GemCopy
**Eyebrow:** `Babson example · 4.1`
**Title:** `GemCopy`

**Body:**
> An AI tool that converts gemological certificates (GIA / HRD / AGS) into SEO-optimized product descriptions for the diamond company Amipi INC. Produced through Babson's AI Innovators Bootcamp — a Generator program that pairs Babson faculty and students with small-business owners to build working AI prototypes.

**Definition rows:**
- Format: `AI Innovators Bootcamp project (Babson Generator program)`
- SMB partner: `Amipi INC, a 30-year family-owned diamond company based in New York`
- Deployment: `Live demo hosted on Vercel`
- Source: `The Generator AI Innovators Bootcamp public listing`

**CTA:** `Open demo →`

### Face Off
**Eyebrow:** `Babson example · 4.1`
**Title:** `Face Off`

**Body:**
> A peer-to-peer social-wagering app for tracking rivalries and head-to-head challenges. Built end-to-end by describing the app in natural language to Base44 — no traditional coding. The platform itself is the AI builder.

**Definition rows:**
- Build platform: `Base44 (Wix-owned), an AI no-code app builder with a published higher-education partnerships program`
- Format: `Student-built app; produced through Generator-aligned programs`
- Notable: `App explicitly does not hold user funds — the wagering layer is peer-to-peer reputation, not money`
- Source: `Base44 higher-ed partnerships page`

**CTA:** `Open app →`

---

## 4.8 §5 Observations

**Section title:** `5.0 Observations`

**Observation 1 — heading:** `The market has converged.`
**Body:**
> Three vendors — OpenAI, Anthropic, and Google — account for essentially all foundation-model deployments in higher education. Each maintains a distinct technical strength, but the products are now competitive across the same evaluation criteria: reasoning quality, classroom-appropriate behavior, data handling, and administrative tooling.

**Observation 2 — heading:** `Pricing is below the threshold of strategic risk.`
**Body:**
> Per-user list pricing of $15–$20 per month is materially lower than incumbent enterprise software categories (LMS, SIS, ERP). The CSU benchmark — $17M for 500,000+ users over 18 months — implies roughly $2.27 per user per month at scale, before discounts. [15]

**Observation 3 — heading:** `Peers are not waiting.`
**Body:**
> Wharton, Oxford, UCLA, CSU, Northeastern, LSE, Rice, and Houston have each made institutional commitments. Champlain — a small private peer to Babson — signed a two-year campus-wide deal with Anthropic in March 2025. [18]

**Observation 4 — heading:** `The selection question is real but tractable.`
**Body:**
> The three products differ enough that a "best fit" exercise — weighing agentic capability, pedagogical guardrails, and multimodal range against existing Workspace or Microsoft 365 infrastructure — is a tractable, time-boxed decision. It is not a multi-year planning exercise.

---

## 4.9 References footer note

**Above the numbered list:** `Sources cited above, formatted in APA 7th edition. All URLs verified May 2026.`

*(The numbered reference list itself is in section **7**.)*

---

## 4.10 Colophon

> Babson College · Office of the President  ·  Briefing Memorandum · May 2026  ·  Prepared for internal and donor circulation

---

## 4.11 Display settings modal

**Eyebrow:** `Display settings`
**Body:**
> Pick a comfortable reading size. Your choice is remembered on this device.

**Options:** `Comfortable` / `Larger` / `Largest`

**Hint:**
> If the brief still feels small or large, your browser zoom (⌘+ / ⌘−) layers on top.

---

# 5. Capability table — `data/capabilities.json`

Renders inside walkthrough scene a4 (see 2.8). 10 rows × 4 providers. First 5 are "topline" (shown by default); last 5 are "detail" (hidden until reader clicks the toggle).

**Closing note (renders below the table):**
> Microsoft Copilot is excellent productivity software with deep enterprise integration. Its primary commercial product runs on OpenAI's foundation models — the same provider in column one — with Microsoft's in-house MAI models beginning to appear on select Copilot surfaces in 2025–2026. Where Copilot has a checkmark, the underlying capability is most often inherited from OpenAI (reasoning, image understanding, custom GPTs-equivalent) rather than developed by Microsoft. Where it does not, the capability either is not yet exposed through Copilot's product surface, or is delivered with a lag relative to the foundation provider.

## 5.1 Topline rows (shown by default)

### Row 1: `Builds its own foundation model`
- OpenAI: `✓` — *GPT family (GPT-4o, GPT-5, GPT-5.5) trained in-house.*
- Anthropic: `✓` — *Claude family (Opus, Sonnet, Haiku) trained in-house.*
- Google: `✓` — *Gemini family (2.5 Pro, 3 Pro, Flash) trained by Google DeepMind.*
- Microsoft Copilot: `Partial` — *Microsoft 365 Copilot primarily runs on OpenAI's GPT models. Microsoft has begun shipping in-house MAI models (MAI-1-Preview, MAI-Voice-1) for select Copilot surfaces starting in 2025.*

### Row 2: `Dedicated reasoning / "thinking" mode`
- OpenAI: `✓` — *o-series reasoning models (o1, o3, o4-mini) plus thinking modes in GPT-5 family.*
- Anthropic: `✓` — *Extended / adaptive thinking on Claude Opus 4.x and Sonnet 4.x with low/medium/high/max effort levels.*
- Google: `✓` — *Gemini 2.5 Deep Think (GA August 2025) explores multiple reasoning paths in parallel.*
- Microsoft Copilot: `✓ (via OpenAI)` — *Copilot's "Think Deeper" feature uses OpenAI's o1 reasoning model directly. Microsoft's own MAI-series models have not yet announced an equivalent reasoning mode.*

### Row 3: `Multimodal: image + video understanding`
- OpenAI: `Image ✓ / Video partial` — *GPT-4o/5 handle image input natively; Sora 2 generates video but native video understanding in the chat product is more limited than Gemini's.*
- Anthropic: `Image only` — *Claude has strong image/document vision but no native video understanding or generation as of 2026.*
- Google: `✓ (native)` — *Gemini 2.5/3 Pro processes audio + video frames natively, including direct YouTube URL ingestion up to ~1 hour. Veo 3.1 for generation.*
- Microsoft Copilot: `Image ✓ / Video limited` — *Inherits GPT-4o image understanding through OpenAI. Native video understanding is not a primary Copilot surface.*

### Row 4: `Custom-build platform for end users`
- OpenAI: `✓` — *Custom GPTs and the GPT Store let any ChatGPT user build and share assistants.*
- Anthropic: `✓` — *Projects in Claude.ai bundle files, system prompts, and shared context per workspace.*
- Google: `✓` — *Gems in Gemini let users create custom personas / role-prompts within the consumer product.*
- Microsoft Copilot: `✓` — *Copilot Studio is a low-code platform for building custom agents with 1,400+ connectors and MCP support.*

### Row 5: `Dedicated education tier`
- OpenAI: `✓` — *ChatGPT Edu launched May 2024 as an enterprise-grade higher-ed SKU.*
- Anthropic: `✓` — *Claude for Education launched April 2025 with campus-wide licensing and a Learning mode for students.*
- Google: `✓` — *Gemini for Education with FERPA-compliant access for faculty, staff, and students.*
- Microsoft Copilot: `✓` — *M365 Copilot Chat free for A1/A3/A5 license holders; paid M365 Copilot for Education at $18/user/month from December 2025 (vs. $30 enterprise).*

## 5.2 Detail rows (hidden until "Show all" toggle)

### Row 6: `Maximum context window`
- OpenAI: `400K–1M tokens` — *GPT-5 base 400K; GPT-5.4 and GPT-5.5 expose ~1M-token context via API.*
- Anthropic: `200K (1M beta)` — *Standard 200K across Claude 4.x; Sonnet 4 / 4.6 offers a 1M-token public beta on the Anthropic API.*
- Google: `1M (2M on 1.5 Pro)` — *Gemini 2.5 Pro ships at 1M tokens; legacy Gemini 1.5 Pro supports up to 2M tokens.*
- Microsoft Copilot: `~128K` — *M365 Copilot is powered primarily by GPT-4o, with a 128K input / 16K output context window. Microsoft Graph retrieval extends what Copilot can reference in practice by injecting relevant snippets at query time.*

### Row 7: `Open API for student / developer builds`
- OpenAI: `✓` — *OpenAI Platform API with public pricing for all model families.*
- Anthropic: `✓` — *Anthropic API with public pricing across Haiku, Sonnet, Opus.*
- Google: `✓` — *Gemini Developer API via AI Studio plus Vertex AI for enterprise.*
- Microsoft Copilot: `Indirect` — *No direct "Copilot model" API. Developers extend Copilot via Microsoft Graph connectors and Copilot Studio, or call the underlying OpenAI models through Azure OpenAI Service.*

### Row 8: `Published higher-ed partnerships (notable R1s / large systems)`
- OpenAI: `Many` — *Cal State system (23 campuses, ~500K students), Arizona State, Oxford, UT Austin, Columbia, Wharton, UCLA, and others.*
- Anthropic: `Several` — *Northeastern University, London School of Economics, Champlain College named at launch; Internet2 + Instructure (Canvas) partnerships.*
- Google: `Several` — *Rice University and University of Houston named for campus-wide Gemini for Education deployments.*
- Microsoft Copilot: `Many (via M365)` — *Auburn University, Florida State University, and others publicly cited. Most higher-ed adoption rides on existing Microsoft 365 licensing rather than standalone Copilot deals.*

### Row 9: `Price trajectory at constant quality (2023–2026)`
- OpenAI: `Sharply down` — *GPT-3.5 Turbo halved in 2023; GPT-4o ~50% cheaper than GPT-4 Turbo; GPT-4o-mini and GPT-5-nano roughly 10–100x cheaper than GPT-4 launch pricing for comparable quality tiers.*
- Anthropic: `Down` — *Opus 4.6/4.7 priced at $5/$25 per 1M tokens — 3x cheaper than Opus 4 / 4.1 at $15/$75, with capability gains. Sonnet held at $3/$15 across four generations.*
- Google: `Sharply down` — *Gemini 1.5 Flash cut 71–78% in August 2024; Gemini 1.5 Pro cut 52–64% in October 2024. Flash-Lite now $0.075/1M input.*
- Microsoft Copilot: `Held + new Edu tier` — *M365 Copilot Enterprise has held at $30/user/month since its 2023 launch. A new Education SKU at $18/user/month was introduced December 2025. Per-seat pricing has moved less than the underlying foundation-model price declines.*

### Row 10: `Open-weights model release`
- OpenAI: `✓` — *gpt-oss-120b and gpt-oss-20b released August 2025 under Apache 2.0 — OpenAI's first open-weight models since GPT-2.*
- Anthropic: `—` — *Anthropic has not released open-weight models as of 2026.*
- Google: `✓` — *Gemma family of open-weight models, available on Hugging Face and via the Gemini API ecosystem.*
- Microsoft Copilot: `✓ (Microsoft)` — *Microsoft's Phi family (Phi-4, Phi-4-reasoning, Phi-4-mini-reasoning) are open-weight small language models. Not branded as Copilot, but produced by the same parent company.*

---

# 6. Term definitions (yellow-highlight popovers)

These are the plain-language explainers that open when a reader taps a yellow-highlighted word.

**File locations:**
- `walkthrough.js` (used on the main walkthrough at `/`)
- `snapshot/snapshot.js` (used on the snapshot pages at `/snapshot/`)
- `/style.css` styling and the modal markup live inline on each page

The keys are the slug used after `#term:` in this file. Edit the body text freely; keys should stay stable.

---

### `agentic`
**Title:** `Agentic`
**Body:**
> AI that takes a sequence of actions on its own — clicking, typing, filling out forms, completing multi-step tasks — rather than just answering a single question.
>
> Think of it as a digital assistant that *does* the work rather than *describes* how to do it. The 2026 versions of ChatGPT, Claude, and Gemini all ship some form of this.

### `foundation-model`
**Title:** `Foundation model`
**Body:**
> The base AI model trained by a company like OpenAI, Anthropic, or Google — what GPT, Claude, and Gemini are. Foundation models are very expensive to train but relatively inexpensive to use once trained.
>
> Products like Microsoft Copilot, Cursor, and Perplexity are built *on top of* these foundation models. The brief argues that partnering at the foundation-model layer is the strategic move, since the products above shift constantly while the foundation layer is where the real capabilities sit.

### `multimodal`
**Title:** `Multimodal`
**Body:**
> AI that handles text, images, audio, and video together in one conversation — not just text in, text out. The model can read a video, look at a spreadsheet, and listen to an audio recording all in the same exchange.
>
> In 2026, Google's Gemini is the only major AI model handling video natively in a single pass.

### `workspace-agents`
**Title:** `Workspace Agents (OpenAI)`
**Body:**
> OpenAI's product that runs multi-step workflows inside enterprise tools — Salesforce, Slack, HubSpot, and similar. Launched April 2026 alongside GPT-5.5.
>
> A student running a venture can use Workspace Agents to follow up on leads, post updates to a team channel, or schedule meetings as background actions, without writing code for each piece.

### `learning-mode`
**Title:** `Learning Mode (Anthropic)`
**Body:**
> A feature inside Claude for Education. Instead of giving the student an answer directly, Claude asks guiding questions and helps the student reason their way to the answer.
>
> The pedagogical bet: it's closer to how a good faculty member teaches than to how a chatbot typically responds. Northeastern's campus-wide deployment foregrounds it.

### `workspace-intelligence`
**Title:** `Workspace Intelligence (Google)`
**Body:**
> Google's product launched April 2026 that puts the Gemini AI model directly into Gmail, Docs, Sheets, Slides, and the rest of Google Workspace.
>
> Functionally analogous to how Microsoft Copilot puts AI inside Word, Excel, Outlook, and Teams. If Babson runs on Google Workspace, this is the surface Gemini reaches most natively.

### `chatgpt-edu`
**Title:** `ChatGPT Edu`
**Body:**
> OpenAI's education-tier ChatGPT product. Includes single sign-on, data-isolation guarantees (no training on student prompts), and institutional admin controls.
>
> Distinct from consumer ChatGPT (which individuals use) and ChatGPT Business (the commercial tier). The education tier is what Wharton, Oxford, UCLA, and the California State University system deploy.

### `claude-for-education`
**Title:** `Claude for Education`
**Body:**
> Anthropic's education-tier product. Includes Learning Mode (the pedagogically-designed feature that guides student reasoning), single sign-on, data isolation, and institutional admin controls.
>
> Northeastern, LSE, and Champlain have campus-wide deployments. Pricing is negotiated, not list.

### `generator`
**Title:** `The Generator (Babson)`
**Body:**
> Babson's interdisciplinary AI lab, founded by Erik Noyes (a co-author of this brief). The Generator runs hands-on programs through the Weissman Foundry to put advanced AI tools in students', faculty', and small-business partners' hands.
>
> Current programs include the AI Innovators Bootcamp, the annual Build-a-thon, and the Babson–Microsoft small-business AI-agent pilot.

### `weissman-foundry`
**Title:** `Weissman Foundry`
**Body:**
> Babson's collaborative makerspace and creative venture lab — the physical home for The Generator's programs. Students, faculty, and external partners build prototypes there.

### `ai-innovators-bootcamp`
**Title:** `AI Innovators Bootcamp`
**Body:**
> A Generator program that pairs Babson faculty and students with small-business owners to build working AI prototypes for the business. Compressed into a single day; outcome-focused. The GemCopy example in the full briefing is one output.

### `vibe-coded`
**Title:** `Vibe-coded`
**Body:**
> Built through natural-language conversation with an AI (Anthropic's Claude, in this case), rather than written by hand in code. The author describes what they want; the AI writes the implementation.
>
> A faculty member with no engineering background can produce a working interactive site in an afternoon. That is part of what these tools have made possible.

### `how-this-walks`
**Title:** `How this walkthrough works`
**Body:**
> Three short "why" scenes set the context, then a hub lets you choose what to dive into next: the providers, the cost, the peers, or what Babson is already doing.
>
> Words with a yellow highlight open a plain-language definition. Press *H* at any time to jump back to the hub.

### `elevates` *(brief only)*
**Title:** `ELevates`
**Body:** *(currently used in the brief's hello dialog; not yet defined in TERM_DEFS — let me know if you want copy here or if the term should be unwrapped)*

### `sso` *(brief only)*
**Title:** `Single Sign-On (SSO)`
**Body:** *(used in brief executive summary bullet 3 — definition lives in brief.html's term modal data; let me know if you want to edit)*

### `data-isolation` *(brief only)*
**Title:** `Data isolation`
**Body:** *(used in brief executive summary bullet 3 — definition lives in brief.html's term modal data; let me know if you want to edit)*

---

# 7. References — `data/refs.json`

Numbered citations (1–27). The number maps to the `[N]` chips throughout the site. Each entry has a source, title, date, URL, and (where one was extractable) a quoted excerpt that appears in the popover.

| # | Source | Title | Date | URL |
|---|---|---|---|---|
| 1 | OpenAI | *Introducing GPT-5.5* | 2026-04-23 | openai.com/index/introducing-gpt-5-5/ |
| 2 | OpenAI | *Introducing Workspace Agents in ChatGPT* | 2026-04-22 | openai.com/index/introducing-workspace-agents-in-chatgpt/ |
| 3 | OpenAI | *ChatGPT for education* | n/a | openai.com/chatgpt/education/ |
| 4 | Anthropic | *Introducing Claude Opus 4.7* | 2026-04-16 | anthropic.com/news/claude-opus-4-7 |
| 5 | Anthropic | *Introducing Claude for Education* | 2025-04-02 | anthropic.com/news/introducing-claude-for-education |
| 6 | Anthropic | *Claude for education* | n/a | claude.com/solutions/education |
| 7 | Google | *Gemini 3.1 Pro* | 2026-02-19 | blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ |
| 8 | Google Workspace | *Introducing Workspace Intelligence* | 2026-04-22 | workspace.google.com/blog/product-announcements/introducing-workspace-intelligence |
| 9 | Google | *Google for Education* | n/a | edu.google.com |
| 10 | Google | *Gemini for Education: higher education* | 2025 | blog.google/products-and-platforms/products/education/gemini-higher-education-benefits/ |
| 11 | The Wharton School | *Strategic investment in AI research and teaching* | 2024-05-29 | news.wharton.upenn.edu |
| 12 | Univ. of Oxford | *First UK university to offer ChatGPT Edu* | 2025-09-19 | ox.ac.uk |
| 13 | UCLA | *ChatGPT Enterprise on campus* | 2024-09-20 | newsroom.ucla.edu |
| 14 | California State University | *AI-Empowered University System initiative* | 2025-02-04 | calstate.edu |
| 15 | LAist (Mardirosian) | *Inside Cal State's $17 million bet on ChatGPT* | 2026-05-01 | laist.com |
| 16 | Northeastern Univ. | *Northeastern and Anthropic partnership* | 2025-04-02 | news.northeastern.edu |
| 17 | London School of Economics | *Anthropic's Claude for Education* | 2025-05 | info.lse.ac.uk |
| 18 | Champlain College | *Anthropic collaboration in higher ed* | 2025-03-25 | champlain.edu |
| 19 | Rice University | *Google's generative AI to enhance learning* | 2025-09-16 | news.rice.edu |
| 20 | University of Houston | *Gemini for Education systemwide* | 2026-03-17 | uh.edu |
| 21 | Crafting Tomorrow | *AI education for high school students* | n/a | crafting-tomorrow.org |
| 22 | Babson College | *How Babson students use AI* (Vaness Gardner profile) | n/a | entrepreneurship.babson.edu/babson-students-ai |
| 23 | Generator Build-a-thon | *AI x Body & Mind (2026)* | 2026 | babsonbuildathon.com |
| 24 | The Generator | *AI Innovators Bootcamp* | n/a | babson.edu/thegenerator/community/ai-innovators-bootcamp |
| 25 | Base44 | *Base44 for higher education* | n/a | base44.com/highered |
| 26 | The Generator | *The Generator at Babson* | n/a | babson.edu/thegenerator |
| 27 | Babson College | *Babson and Microsoft team up* | n/a | entrepreneurship.babson.edu/babson-and-microsoft |

**To edit a quoted excerpt for any reference:** indicate the ref number and the new quote text, and I'll update `data/refs.json` accordingly.

---

# How to send edits back

You can either:
1. **Paste the whole edited content.md back to me** — I'll diff against this version and apply each change to the right file.
2. **Send a list of edits inline** — "In §2.5 body paragraph 2, change 'agentic work' to 'real-world action'" — and I'll apply directly.

Either is fine. The first is more thorough (catches everything you touched); the second is faster for a short edit pass.
