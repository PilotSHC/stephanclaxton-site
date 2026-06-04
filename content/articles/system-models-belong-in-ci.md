---
title: Your system model belongs in CI, not your document repository
description: SysML v2 helps, but the harder shift is how systems engineers work when AI handles the typing and git owns the truth.
slug: system-models-belong-in-ci
publishAt: 2026-06-03T09:00:00-07:00
tags: [systems-engineering, autonomy, ai-systems, executable-models, mbse, ci-cd, sysml]
linkedinHook: |
  A lot of systems engineers now do serious work through AI UIs and never touch an IDE. The system model still has to live where the software lives.

  I walked a colleague through a GitHub pull request last month. Deep MBSE background. Did not recognize the screen. That is not a GitHub training problem.

  SysML v2 is good. The mindset shift is bigger, and it needs a real transition. Most people still live in UIs and docs.
---

AI has changed what a normal week looks like for many systems engineers. You spend hours in chat interfaces and agent panels. You steer a model, read a proposed change, accept or reject it. You may not write code yourself. The work still feels like engineering. The artifacts you touch increasingly look like software engineering artifacts.

I was reminded how uneven that transition is when I walked a colleague through a pull request on GitHub. A serious engineer, with years of model-based systems engineering behind them, comfortable with requirements, interfaces, and verification matrices. They understood the engineering on the slide. On GitHub they did not know where the model file lived, what a failing check meant, or which panel held the diff. They said, quietly, that they did not recognize the interface at all.

That was not a GitHub training problem. It was a structural mismatch. We trained a generation of systems engineers to think in document repositories, review slides, and desktop modeling tools. Autonomy and AI development run on version control, continuous integration, and interfaces that assume you already live there. SysML v2 matters because it finally lets the system model enter that world. It does not, by itself, move the engineer.

## Where systems engineers actually work now

The behavior has changed before the job title caught up. You interact with UIs all day. An agent proposes a requirements edit. A copilot drafts an interface change. You judge whether the change preserves the safety argument. You may never open an IDE. You are still doing systems engineering. You are doing it through surfaces that were built for people who treat text files in a repository as the source of truth.

That last clause is the part that breaks for many MBSE practitioners. The model was always "the truth," but the truth lived in a tool-specific database or a PDF export. Review meant a meeting. Synchronization meant a heroic integration effort once per quarter. The software team shipped daily. The system model caught up when someone had time.

AI accelerates the front half of that gap. You can produce model changes faster than ever. If the model still lives outside git, you have only sped up the drift.

## SysML v2 is good. It is not the whole shift.

SysML v2 is text. That is the technical unlock. You can diff it, branch it, review it in a pull request, reject a bad merge. You can hook it to CI the same way you hook code. The language is cleaner than v1. The serialization format is the bigger deal.

Treating v2 as a language upgrade misses the point. The point is to change where the model lives and what happens when someone edits it. A text model in a document repository is still a document. A text model on a branch, with checks that run when you push, is a participant in the engineering system.

Most teams I have seen stall at the language step. They install a v2 editor, export to git occasionally, and call it modernization. Six months later the canonical model is back in the desktop tool and the repository copy is stale. The structure reverted. The behavior followed.

## What the GitHub moment was really about

My colleague did not need a feature tour. They needed a different default picture of how engineering work is stored and reviewed.

In their picture, the system lives in a model you open. In the software picture, the system lives in files that move through review gates. Commits are the audit trail. A red CI check is a failed verification, not an IT error. The pull request is the design review room.

Once you see it that way, the GitHub UI is just one rendering of a pattern. GitLab looks different. So does the inside of a large company's monorepo browser. The pattern is stable: propose a change, show the diff, run automated checks, merge or reject.

Systems engineers who work alongside autonomy teams need that pattern in muscle memory, even if they never become application developers. Not because they will push application code. Because the system model has to ride the same rails as the code it describes. Otherwise the AI tools speed up local edits while the fleet ships something else.

## What CI for a system model looks like in practice

When the model is a first-class repository artifact, the checks are familiar.

A pull request can fail if a new requirement has no verification method. If an interface appears with a sender and no receiver. If an executable scenario no longer satisfies a safety requirement the program thought was closed. If a parameter change broke a constraint that was supposed to be invariant.

None of that is exotic tooling. It is the same contract software teams already enforce on code, applied to the model file instead of only the implementation.

The cultural work is harder than wiring the checks. Graphical views are fine as views. They cannot remain the only place the model is real. New hires need to read SysML the way software hires read TypeScript: not fluently on day one, but without treating the text as someone else's problem. Pull requests need to touch model and implementation together when the change crosses that boundary.

## This shift will take time

None of that happens on a single mandate. Most systems engineers still do their real work inside UIs and document repositories. The slide deck is how they align a review. The desktop model is where they think. The agent panel is where they draft. Those surfaces are not stupid habits. They are the workflow the organization built, rewarded, and staffed for.

Asking everyone to abandon that overnight, in favor of raw files in a repository, will fail the same way every "just put it in Confluence" initiative failed in the other direction. The goal is not to shame people for living in docs. The goal is to move the canonical system record, slowly and visibly, to a place the software organization already trusts.

A workable transition looks boring on purpose. Keep the familiar UI for authoring while git becomes the system of record. Export to the document repository on a schedule the program still expects, but stop treating that export as the truth. Pair a systems engineer with someone who already reads pull requests. Run one subsystem through model-in-CI first, not the whole vehicle at once. Let review meetings keep happening while a failing check on the model starts to mean the same thing as a failing check on the code.

That transition can take quarters, not sprints. The teams that rush it burn goodwill. The teams that never start stay on the wrong side of the gap my colleague felt on GitHub. Patience is not the same as complacency. You are changing where truth lives, and people need time to rebuild their mental map.

## AI makes the anchor more important, not less

There is a tempting story that AI removes the need for formal models. The opposite is closer to true for high-consequence systems. If engineers spend their day steering agents, the repository is what keeps the agents aligned with something durable. Without that anchor, you get fast, plausible, locally coherent edits that do not compose into a system argument.

The systems engineer's job shifts toward curating the structure the agents operate on: what is in scope, what is verified, what interfaces exist, what must not change without review. That is still systems thinking. It is systems thinking where the artifact has to survive contact with CI and a merge queue.

SysML v2 gives you a portable way to write that artifact. Putting it in CI gives you a way to enforce that the artifact still matches what the organization is willing to ship. Training engineers to read the repository gives you a way to keep human judgment in the loop when the UIs change again, as they will.

## The shift worth making

The industry has spent years arguing that systems engineering deserves a seat in early architecture work. The seat stays empty when the model is a quarterly PDF. It earns its place when the model is current enough to argue with in the same forum where code is argued with.

That is the shift behind the title of this piece. Not a tooling fad. A change in where the model lives, which changes what "keeping it updated" means, which changes whether systems engineers and software engineers are looking at the same object.

SysML v2 makes it possible. Git, pull requests, and CI make it stick. The hard part is the mindset, and mindsets change on a transition plan, not a rollout email. Many engineers will keep living in UIs and docs for a long time. The repository has to become the workshop anyway, even for people who never typed a line of application code themselves. Give them a bridge, not a cliff.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin.*
