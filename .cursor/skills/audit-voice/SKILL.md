---
name: audit-voice
description: Sweeps the repo for em-dashes, AI-tell vocabulary, and AI-tell phrasing patterns, then replaces each hit with the correct American English equivalent based on grammatical role. Use when the user asks to audit voice, sweep for em-dashes, check for AI-tells, "make this sound human", or remove AI-generated language patterns from files. Also use proactively after substantial drafting work before commit.
---

# Voice audit skill

This skill makes the voice of the site recognizably human. It enforces `writing-principles.mdc` mechanically: find every em-dash and AI-tell, replace with the right American English equivalent.

## Workflow

```
- [ ] Step 1: Scope the sweep
- [ ] Step 2: Em-dash sweep
- [ ] Step 3: AI-vocabulary sweep
- [ ] Step 4: AI-phrasing sweep
- [ ] Step 5: Apply replacements file by file
- [ ] Step 6: Verify clean and lint
```

### Step 1: Scope the sweep

By default, audit the public-facing surface:

- `content/articles/*.md`
- `app/**/*.tsx`
- `README.md`
- `PUBLISHING.md`

Optionally include `scripts/**/*.js` and `.cursor/rules/*.mdc`. The rule files may contain em-dashes inside backticked "do not write this" examples; those are deliberate and must be preserved (they illustrate the forbidden pattern). Identify them by surrounding backticks before replacing.

If the user specifies a narrower scope (a single file, a directory), respect it.

### Step 2: Em-dash sweep

The em-dash (`—`, U+2014) is the single largest AI-tell. Run:

```bash
rg -n '—' --glob '!.git' --glob '!node_modules' --glob '!.next'
```

Count hits by file and report the scope to the user before mass-editing. For each hit, choose the replacement that matches the grammatical role of the em-dash:

| Em-dash role | Example before | American-English replacement |
|---|---|---|
| Parenthetical aside (paired em-dashes) | `The methods — review formats, gate criteria — are the visible part.` | Parentheses: `The methods (review formats, gate criteria) are the visible part.` |
| Appositive | `Donella Meadows — the systems thinker — wrote...` | Commas: `Donella Meadows, the systems thinker, wrote...` |
| Amplifying clause at sentence end | `It is a structural property of the system — and one that rewards the right interventions.` | Comma: `It is a structural property of the system, and one that rewards the right interventions.` |
| Sharp break or pivot | `The interventions are useless — they are not useless.` | Sentence break: `The interventions are useless. They are not useless.` |
| List introduction | `An environment that is mostly predictable — orbital mechanics, thermal cycles, radiation.` | Colon: `An environment that is mostly predictable: orbital mechanics, thermal cycles, radiation.` |
| Title separator (in metadata or headers) | `Stephan Claxton — Systems Engineering for AI & Autonomy` | Colon: `Stephan Claxton: Systems Engineering for AI & Autonomy` |
| End-of-hook arrow + dash combos (`— →` or just `→`) | `Why this matters more than the language design →` | Drop the arrow, end with a period: `Why this matters more than the language design.` |

When in doubt, prefer a period and a new sentence. Short declarative sentences read more human than long ones.

**Do not blindly find-and-replace.** A blind `—` to `,` replacement produces broken sentences. Each em-dash requires a grammatical judgment.

**Preserve en-dashes.** The en-dash (`–`, U+2013) is the proper American English mark for numeric ranges (`5–15 minutes`, `6–12 articles`, `2026–2027`). Do not replace it. The grep above matches only the em-dash.

### Step 3: AI-vocabulary sweep

Run for each AI-tell word. Use `-i` for case-insensitive and `\b` for word boundaries:

```bash
rg -nwi '\b(delve|tapestry|vibrant|seamless|robust|crucial|navigate|leverage)\b' content/ app/
```

False-positive guidance:

- `leverage` and `leverage points` in essays explicitly engaging Meadows's framework are correct. The AI-tell is `leverage` as a verb meaning "use" (e.g., "we leverage the API"). The proper-noun form ("leverage points") is fine.
- `navigate` is an AI-tell when used to mean "explore" or "deal with" (e.g., "we navigate complexity"). It is fine when describing actual navigation (e.g., "the vehicle navigates the intersection").
- `robust` is on the list because it is rarely doing real work in the sentence. Replace with `reliable`, `durable`, `well-designed`, or remove.
- `crucial` is on the list for the same reason. Replace with `important`, `key`, `defining`, or remove.

For each hit, ask: does this word convey something the alternatives do not? If no, replace.

### Step 4: AI-phrasing sweep

Run:

```bash
rg -ni '\b(furthermore|moreover|notably|importantly|in essence|ultimately|that said|it.s worth noting)\b' content/ app/
rg -n "(isn't just|is not just|isn't merely|is not merely)" content/ app/
```

For the first grep: these connective-tissue words are AI rhythm. Almost always they can be deleted entirely with no loss of meaning. Try deletion first; rewrite only if the paragraph genuinely needs a transition.

For the second grep: the AI-tell is the rhetorical structure "It is not just X. It is Y." When found in that pattern, rewrite to be direct. If the construction is "is not just compliance theater, a habit of treating verification as a real activity..." (a list of qualities, not a rhetorical structure), it is fine and should stay.

### Step 5: Apply replacements file by file

For files with many hits, read the file fully, then write it fresh with all replacements. This is faster than dozens of individual edits and avoids the "old_string is not unique" failure.

For files with one to three hits, use targeted edits.

When replacing em-dashes that pair around an aside, replace the pair together so the parentheses (or commas) match.

Touch one file at a time. After each file, re-grep the file to confirm zero hits before moving on.

### Step 6: Verify clean and lint

After the sweep, run a final repo-wide grep for `—`. Acceptable remaining hits are only those inside backticked examples or code blocks in the editorial scaffolding (`.cursor/rules/writing-principles.mdc` and the skill files in `.cursor/skills/audit-voice/`, `.cursor/skills/new-article/`). Any em-dash outside backticks in any other file is a miss; go back and fix.

Run `ReadLints` on every touched file. The voice sweep should not introduce syntax errors, but if it touches `.tsx` files with em-dashes inside text nodes, the lint check confirms nothing broke.

Report scope to the user: files touched, hit counts before and after, any judgment calls that should be reviewed (e.g., "this paragraph was restructured because the em-dash was load-bearing").

## Voice notes worth catching while you're in the file

While doing an em-dash sweep, surface (do not silently rewrite) any of these patterns for user decision:

- A paragraph whose every sentence is the same length: candidate for sentence-length variation
- A bullet list that could be prose: bullets are a code-review style, not an essay style
- Multiple "It is" / "There is" sentence openings in close succession: passive rhythm
- An essay-ending paragraph that summarizes rather than reframes the thesis

These are voice issues, not punctuation issues. Mention them in the report. Do not fix without permission.

## Scope this skill should not creep into

This is an audit and replacement skill, not a substantive rewrite skill. If a sentence needs more than punctuation surgery (e.g., the entire paragraph is argument-vague), flag it and stop. The user is the one with the argument; you are the one with the grammar.
