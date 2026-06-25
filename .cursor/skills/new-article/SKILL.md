---
name: new-article
description: Drafts, schedules, and integrates a new essay for stephanclaxton.com. Use when the user asks to write a new essay, draft an article, start a new piece, queue an essay, or expand the writing on a given topic. Produces a markdown file in content/articles/, picks a publishAt slot consistent with existing cadence, updates the homepage writing list, and reports back for review before commit.
---

# New article workflow

This skill operationalizes the full pipeline for adding a new essay to the site: drafting it under the editorial rules, picking a schedule slot, integrating it into the homepage, and preparing it for the scheduled-publish cron.

## Prerequisites: load the rules

Before writing a single sentence, read these two rule files. They are the editorial constitution and the mechanical constitution:

1. `.cursor/rules/writing-principles.mdc`: voice, citation discipline, AI-tell avoidance
2. `.cursor/rules/article-conventions.mdc`: frontmatter shape, body structure, publish cadence

If either rule is missing or has changed, defer to whatever exists in the repo.

## Workflow

```
- [ ] Step 1: Understand the topic and the thesis
- [ ] Step 2: Survey existing essays for tone and overlap
- [ ] Step 3: Find the next free publishAt slot
- [ ] Step 4: Draft the frontmatter
- [ ] Step 5: Draft the body
- [ ] Step 6: Self-audit against writing-principles
- [ ] Step 7: Wire it into homepage and writing index
- [ ] Step 8: Present for user review before committing
```

### Step 1: Understand the topic and the thesis

The site does not publish topic essays. It publishes thesis essays. Before drafting, the user (or you, by inference) must be able to state in one sentence:

> "The argument of this piece is that ____."

If the topic is "MBSE in startups," the thesis is something like "the methods that work at Lockheed do not survive contact with a weekly release schedule, and the methods that do survive are the ones worth keeping anyway."

If you cannot reduce the topic to a thesis, ask the user. Do not start drafting.

### Step 2: Survey existing essays

Read at least two existing essays in `content/articles/` to absorb the voice. The voice is not abstract; it lives in the cadence, sentence length variation, and how arguments are framed. Recommended priors:

- `satellites-to-autonomy.md` for the standard observational essay shape
- `reading-meadows-from-autonomy.md` for the flagship essay shape (longer, more theoretical, names Meadows)
- `requirements-traceability-survival-skill.md` for the argumentative shape (sets up an asymmetry and resolves it)

Also check existing tags and slugs to avoid overlap or near-duplicates.

### Step 3: Find the next free publishAt slot

Read the frontmatter of every file in `content/articles/` and list the existing `publishAt` values in chronological order. The standard cadence is one essay every two weeks at 09:00 Pacific.

Find the next free Tuesday or Wednesday roughly two weeks after the latest scheduled essay. For Pacific time:
- `-07:00` during DST (mid-March to early November)
- `-08:00` outside DST

Example: if the latest scheduled essay is `2026-08-12T09:00:00-07:00`, the next slot is `2026-08-26T09:00:00-07:00`.

If the piece is a flagship (engaging Meadows or another named intellectual lineage explicitly), it may slot at any free date. Flagship pieces should not stack closer than four weeks apart.

### Step 4: Draft the frontmatter

Use the shape from `article-conventions.mdc`. Order matters. Reproduce here for reference:

```yaml
---
title: Sentence-case thesis, no trailing period, no em-dashes
description: One sentence under 200 chars that works as the meta description and the dek.
slug: kebab-case-matching-filename
publishAt: 2026-MM-DDT09:00:00-07:00
tags: [primary-tag, secondary-tag, ...]
linkedinHook: |
  First paragraph (two to four sentences). Organic. No em-dashes.

  Optional second paragraph for context.

  Closing line that previews the actual argument. No trailing arrow.
---
```

For the `linkedinHook`: write as if you are posting to LinkedIn, not as if you are advertising a blog post. The hook should make the reader want to read the essay because the argument is interesting, not because the post sells the click. Three short paragraphs is typical.

### Step 5: Draft the body

Structural guidance:

- Open with one or two short paragraphs stating the thesis. No throat-clearing. No "in this essay I will..." Start with the observation that motivates the argument.
- Four to seven H2 sections. Each H2 advances the argument; none is filler.
- Vary sentence length aggressively. Real writing has 4-word sentences next to 30-word sentences. AI-generated text drifts toward a uniform 18-word average. Make this obvious.
- Use concrete examples grounded in autonomy, MBSE, aerospace, or AI engineering. Generic examples are an AI-tell.
- Close with a paragraph or two that reframes the thesis in light of what the body argued. Not a summary. A reframing.
- End body with horizontal rule (`---`) and the standard italicized bio block (see `article-conventions.mdc`).

Length target: 1,000 to 2,000 words. Up to 2,500 for flagship pieces. Below 800 words, the piece is probably a section of something else, not a standalone essay.

### Step 6: Self-audit against writing-principles

Before declaring the draft done, sweep the file for:

- Em-dashes (`—` / U+2014): zero tolerance
- AI-tell vocabulary: `delve`, `tapestry`, `vibrant`, `seamless`, `robust`, `crucial`, `navigate` (as verb), `leverage` (as verb), `it's worth noting`, `moreover`, `furthermore`, `additionally`, `that said`
- "It's not just X, it's Y" construction
- Tricolons on every paragraph
- Hedging stacks (`in many ways`, `to some extent`, `arguably`)
- Metronomic sentence rhythm

Use the audit-voice skill if you want the procedural sweep with replacements. Or grep directly:

```bash
rg -n '—' content/articles/<slug>.md
rg -nwi '(delve|tapestry|vibrant|seamless|robust|crucial)' content/articles/<slug>.md
```

If the essay names Donella Meadows in the body, verify it is the flagship slot or the About page. Per `writing-principles.mdc`, Meadows is cited by name only in those two places.

### Step 7: Wire it into homepage and writing index (optional at draft time)

The scheduler generates `app/writing/<slug>/page.tsx` at publish time and rebuilds the homepage, `/writing` index, and sitemap from `content/published.json`. You can still add an entry early for local preview:

In `app/page.tsx` under the Writing section, add a new `<li>` at the top:

```tsx
<li>
  <time dateTime="2026-MM">Month 2026</time>
  <div>
    <Link href="/writing/<slug>">
      The article title here
    </Link>
    <p className="dek">
      The description from the frontmatter, optionally trimmed.
    </p>
  </div>
</li>
```

In `app/writing/page.tsx`, add the same entry. Keep entries reverse-chronological (newest first).

If the homepage already lists more than three or four essays, drop the oldest from the homepage but keep it in the writing index. The homepage is a teaser; the writing index is the archive.

### Step 8: Present for user review before committing

Do not commit until the user has reviewed the draft. Present:

1. The filename and slug
2. The `publishAt` slot you chose, with one-sentence justification
3. The thesis in one sentence
4. The full draft for reading

Wait for explicit approval (or edits) before staging and committing. The commit message should follow the repo's existing convention.

## When to break from this skill

- If the user wants a non-essay piece (a list, a note, a one-paragraph riff), do not force it into the essay shape. Ask whether it belongs on the site at all.
- If the user wants to publish immediately, set `publishAt` to a near-future timestamp and inform them they can manually trigger the workflow.
- If the user is editing an existing essay (not drafting a new one), this is not the right skill. Use `audit-voice` for voice work or edit directly.
