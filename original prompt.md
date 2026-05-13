Build a multi-page marketing website that makes the case for Babson College to
invest in frontier AI tools (especially Anthropic) for student entrepreneurs.

## Audience
- Steve Spinelli, President of Babson College
- Secondary: donors who fund student entrepreneurs

## Core message
The three frontier model companies that matter are Google, Anthropic, and OpenAI.
These tools can take Babson entrepreneurship to the next level. The cost is
affordable, the value is high, and the risk of doing nothing is real.

## Tech & structure
- Static multi-page site (one HTML page per route)
- Persistent top navigation across every page
- Mobile-responsive, accessible, fast (no heavy frameworks unless you need them;
  vanilla HTML/CSS/JS or a lightweight static stack is fine)
- Babson-branded look and feel; use a 4-color palette (pick a palette that pairs
  Babson green with three supporting colors; expose the palette as CSS variables)
- Use placeholder copy and data where real data is missing, and clearly mark
  every placeholder with [PLACEHOLDER] so I can swap it in

## Pages (one route each, all reachable from the top nav)

1. Home — / 
   - Hero with Babson branding and one-line thesis
   - Summary paragraph of the opportunity
   - Charts/graphics showing the popularity of frontier models among
     entrepreneurs; include a visual that maps where Gemini sits in the landscape
   - Clear CTA to the Costs page

2. Costs — /costs
   - Pricing breakdown for different partnership options
   - Cost per use case (student API access, classroom seats, research, etc.)
   - Comparison table that frames affordability and value

3. Frontier Models — /frontier-models
   - Deep dive on the three real players: Google, Anthropic, OpenAI
   - Explicitly exclude DeepSeek
   - Visually frame Copilot and Perplexity as wrappers on top of these models,
     not foundational models themselves
   - Reinforce the "three companies, end of list" message with strong hierarchy

4. Failure to Act — /failure-to-act
   - Risk page. What happens if Babson does not move now.
   - Urgency framing with concrete consequences (peers pulling ahead, students
     graduating without these skills, donor expectations shifting)

5. Benchmarks — /benchmarks
   - Visual comparison of AI investments at peer schools
   - Emphasize student-facing investments specifically
   - Include a leaderboard or bar chart

6. Students Elsewhere — /students-elsewhere
   - Curated articles and short case studies on student entrepreneurship at
     other schools using AI
   - Card layout, scannable

7. Student Stories — /student-stories
   - Concrete examples of students who built something they could not have built
     without these tools
   - Emphasize speed and why the tools were critical
   - Reference the Babson Build Fund (~500 students) and G1000 builds
   - Donor-facing note: the number of Babson grads starting companies today is
     small; the goal is to grow it

## Design requirements
- 4-color palette exposed as CSS variables; consistent across pages
- Top nav links: Home, Costs, Frontier Models, Failure to Act, Benchmarks,
  Students Elsewhere, Student Stories
- Footer with Babson branding and a "last updated" stamp
- Use real chart components (Chart.js or Recharts is fine) for the data viz, not
  static images
- Every chart should have a one-sentence takeaway caption below it

## Content rules
- Persuasive but credible tone; no hype words
- Every claim that needs a number gets a [PLACEHOLDER: description of needed
  data] tag so I can fill it in
- Do not invent statistics

## Deliverable
- A complete, runnable project in this repo
- README with how to run it locally and a list of every [PLACEHOLDER] still
  needing real data