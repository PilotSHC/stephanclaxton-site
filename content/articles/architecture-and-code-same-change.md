---
title: Architecture and implementation belong in the same change set
description: Model and code drift because organizations move them through separate queues. One engineering change should carry both through review together.
slug: architecture-and-code-same-change
publishAt: 2026-09-30T09:00:00-07:00
tags: [systems-engineering, mbse, sysml, ci-cd, autonomy]
linkedinHook: |
  Model drift usually begins with a reasonable sentence: “We will update the architecture after the code lands.”

  The two changes enter different queues, move at different speeds, and get reviewed by different people. Soon the model describes the system the team meant to build.

  Architecture and implementation need to move as one engineering transaction.
---

Model drift rarely begins with neglect. It begins with sequencing.

A software change needs to land before a release cutoff. The model update can follow. An interface is adjusted in code while the responsible systems engineer is in another review. A requirement changes in one tool, then waits for someone to translate it into an implementation ticket somewhere else.

Each choice is locally reasonable. Together they create two systems: the one the model describes and the one the software executes.

Teams often try to close the gap with synchronization meetings or periodic reconciliation. The durable fix is structural. Architecture and implementation need to move through the organization as one change set.

## Separate queues create drift

Most engineering organizations divide work by artifact. Systems engineers own requirements and architecture. Software engineers own code. Verification engineers own tests and evidence. Each group has its own backlog, review conventions, and definition of done.

That division looks clean on an organization chart. It behaves badly when a decision crosses the boundaries.

Suppose a team changes how an autonomous vehicle responds to degraded localization. The architectural behavior changes. The planner implementation changes. Scenario expectations change. A safety claim may need new evidence.

In a document-centered workflow, those become separate work items. They may share a tracking number, but they do not share fate. One can close while the others remain open. A dashboard can report the software task complete even though the requirement still describes the old response.

The delay between those closures is where drift lives.

Asking people to “remember to update the model” treats drift as a diligence problem. It is a queue-design problem. If related artifacts can move independently, sooner or later they will.

## One decision should have one boundary

An engineering change needs a boundary wide enough to contain the decision.

For a software-only refactor, that boundary may include code and tests. For a system behavior change, it may include a requirement, a state transition, an interface contract, implementation code, scenario expectations, and the verification claims affected by the change.

The exact files can live in different repositories. They can even be maintained by different tools. What matters is that the workflow gives them one review identity and one acceptance decision.

This can take several forms. A monorepo can place model and code edits in the same pull request. A multi-repository program can use a change manifest that pins a set of commits and prevents partial integration. A toolchain can open linked changes and hold each merge until the complete set passes.

The mechanism is less important than the invariant: the organization cannot accept the implementation while deferring the engineering intent that makes the implementation correct.

That invariant turns traceability into control. A link between a requirement and a component is useful. A link that can prevent one side from changing alone is operational.

## The diff becomes the design review

Traditional design reviews show the new state. A slide presents the revised architecture, and reviewers compare it with what they remember from the last baseline.

A unified change set shows the transition.

The reviewer can see that a localization-health threshold changed, that the degraded state now enters under a different condition, that planning responds with a lower speed target, and that two scenarios have new expected outcomes. The question is no longer “Does this diagram look right?” It is “Do these edits express one coherent decision?”

That is a better review question because engineering risk lives in transitions. A complete snapshot can look internally consistent while hiding the assumptions that changed to produce it. The diff puts those assumptions in front of the people approving them.

It also changes who can participate. A software engineer does not need to become a full-time modeler to notice that the state-machine edit conflicts with an implementation branch. A systems engineer does not need to review every code detail to see that the behavior named in the requirement has no corresponding implementation change.

Shared review does not erase specialties. It gives each specialty the same object to argue about.

## Automation should enforce co-change carefully

Not every model edit requires a code edit. Not every code edit changes the architecture.

A blanket rule that model and code must always change together would create noise, then exceptions, then routine bypasses. The workflow needs to follow dependency semantics rather than file types.

If a developer changes an internal algorithm without changing its externally visible contract, the model may remain valid. The change set should say so, and automated checks should confirm that the relevant interfaces and behavior remain stable.

If an interface field changes, the model knows which contracts and consumers are implicated. If a requirement’s acceptance threshold moves, the evidence attached to the old threshold becomes stale. If a state transition changes, the scenario set should include paths through the affected state.

Some of these checks are deterministic. Others can only identify a review obligation. Both are useful. The goal is not to make architectural judgment automatic. It is to make skipping architectural judgment visible.

Good exceptions are explicit and inspectable. “No model change required” can be a valid conclusion when it names the boundary considered and the checks that support it. It should not be an empty checkbox clicked to make the pipeline green.

## Ownership follows the transaction

Atomic change sets expose an uncomfortable question: who owns a decision that spans teams?

Many organizations answer by routing it upward. A change board becomes the only place with enough authority to coordinate systems, software, and verification. That solves the ownership problem by adding a central queue, which often becomes the slowest queue in the program.

An executable workflow can distribute the decision without fragmenting it.

The model identifies affected owners from the relationships already encoded in the architecture. The change set requests review from those owners. Each approves the part that falls within their authority. The pipeline enforces the cross-cutting conditions that no individual reviewer can hold in memory.

This is coordination through the artifact, not coordination around it.

The difference matters at software cadence. A weekly architecture meeting cannot govern a system that changes dozens of times each day. The rules embedded in the change path can. The meeting remains useful for novel decisions and contested tradeoffs. Routine consistency should not wait for a calendar invitation.

## A current model is an outcome of the workflow

Programs often make model currency a performance target. They measure how many elements are updated or how recently a baseline was published. Those metrics can improve while the model remains detached from the decisions that shape the implementation.

A current model should be an outcome, not a separate objective.

If system-level changes cannot merge until architecture, implementation, and verification intent agree, then the model stays current because the workflow makes inconsistency unfinished work. No cleanup sprint is required. No quarterly reconciliation has to rediscover three months of design history.

This changes the role of MBSE. Modeling is no longer a parallel activity performed by a specialist group. The model is one surface of an engineering transaction that also touches code and evidence.

The hard part is not connecting tools. It is choosing a change boundary that matches the decision rather than the organization chart.

Once that boundary exists, drift loses the space it needs to grow.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
