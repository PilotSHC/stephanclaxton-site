---
title: Requirements traceability is a survival skill, not a compliance checkbox
description: What aerospace gets right about traceability, what autonomous vehicle development is still figuring out, and why the answer changes depending on who is asking the question.
slug: requirements-traceability-survival-skill
publishAt: 2026-06-17T09:00:00-07:00
tags: [systems-engineering, mbse, requirements, autonomous-vehicles, aerospace]
linkedinHook: |
  Most engineers who have worked in regulated industries have a quiet contempt for requirements traceability. It is the discipline that auditors care about and engineers tolerate, the spreadsheet that gets updated the week before a milestone review and ignored the rest of the time.

  That contempt is partially earned. It is also expensive, in ways that only become visible when something goes wrong.

  Here is the version of traceability that is actually worth doing.
---

Most engineers who have worked in regulated industries have a quiet contempt for requirements traceability. It is the discipline that auditors care about and engineers tolerate, the spreadsheet that gets updated the week before a milestone review and ignored the rest of the time. The phrase "compliance artifact" is, in many engineering cultures, an insult.

That contempt is partially earned. A traceability matrix that exists only to satisfy DO-178C or ISO 26262 is not, in any meaningful sense, an engineering tool. It is paperwork. The engineers who maintain it under duress are correct to feel that their time would be better spent elsewhere.

But there is a version of traceability that is genuinely worth doing, and the difference between the two versions is not visible until something goes wrong.

## The question traceability actually answers

A useful definition: requirements traceability is the engineering team's ability to answer the question "what did we mean for this to do?" at the granularity of a single system behavior.

When a satellite enters safe mode unexpectedly, when an autonomous vehicle behaves strangely at a four-way stop, when a medical device gives a borderline reading, the engineers responding need to know: what was this system supposed to do in this situation, and what reasoning led us to that intent? If they have to reconstruct that reasoning from memory, from Slack archives, from old design review slides, the response takes weeks. If the trace exists, it takes hours.

This is not a hypothetical. The teams I have watched handle incidents well are the teams that can produce, within a day, the chain of reasoning that connects a system behavior back to the operational scenario it was designed for. The teams that handle incidents badly are the teams that argue for weeks about what the system was supposed to do, because nobody wrote it down in a form that survived a personnel change.

## What "real" traceability looks like

The version of traceability worth maintaining is not a spreadsheet. It is a set of links, ideally maintained in the same tooling as the code and the model, that connect:

Operational scenarios to the requirements they imply. Requirements to the design elements that satisfy them. Design elements to the verification activities that confirm satisfaction. Verification activities to their last run, with results.

The key property is that the links are checkable. If a requirement has no verification activity, the build fails. If a design element claims to satisfy a requirement but the requirement has been edited since the last verification run, the link is flagged as stale. If a new operational scenario is added without corresponding requirements, the system flags the gap.

None of this is exotic. It is the same kind of automated consistency checking that software engineering takes for granted. It is just rare enough in systems engineering to feel new.

## Why aerospace got this partially right

The aerospace and defense industries are not, despite their reputation, particularly good at engineering. What they are good at is institutional memory. The reason DO-178C requires traceability is not that the standard's authors believed paperwork makes software safe. It is that they had decades of evidence that organizations forget. The people who designed a system retire, leave, or get promoted, and the system has to keep running anyway.

Traceability, in the aerospace tradition, is institutional memory enforced by policy. It is sometimes maintained begrudgingly, but it is maintained.

The autonomous vehicle industry has not yet been around long enough to build the same institutional memory the hard way. Most AV companies are young enough that the original engineers who designed the architecture are still on the team. The traceability question feels less urgent because the answer is still in someone's head.

This will change, and the companies that build the discipline now will be in better shape when it does.

## The asymmetry of getting this wrong

The cost of maintaining traceability is paid continuously, in small increments. An engineer takes five extra minutes to link a new requirement to its source scenario. A design review includes a check that the trace is up to date. A code change triggers a verification re-run.

The cost of not maintaining traceability is paid all at once, when something goes wrong and an investigation begins. That cost can include weeks of engineering time reconstructing intent, regulatory exposure for systems in regulated industries, reputational damage in the time between incident and explanation, and, in serious cases, loss of operating authority while the investigation is open.

The asymmetry is what makes traceability a survival skill rather than a compliance exercise. The continuous cost is real but tolerable. The discontinuous cost can be existential.

There is a structural way to describe what is happening here. Traceability is a stock of institutional reasoning that gets drawn down by personnel turnover, system change, and the passage of time. Without continuous inflow (engineers writing things down in a form that survives them), the stock drains, and the team's ability to answer the question *what did we mean for this to do* degrades silently. Most days the depletion is invisible because nobody asks. The point at which it becomes visible is the day the answer is needed urgently, and by then it is too late to refill the stock. The continuous low-cost intervention works because it operates on the underlying structure that produces the team's capacity to respond. The discontinuous high-cost failure works because it tests that structure all at once. This is not a moral story about diligence. It is a structural property of the system, and like most structural properties of complex systems, it rewards interventions placed at the level where the structure actually lives.

## What I would tell a younger engineer

Maintain traceability the way you maintain unit tests. Not because someone is grading you on coverage. Because someday you will need to know what the system was supposed to do, and you will be glad that someone (possibly an earlier version of yourself) wrote it down in a form you can still read.

This is the kind of discipline that does not feel useful most days. It feels useful exactly once, on the worst day. That is enough.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
