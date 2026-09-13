---
title: A system model should produce engineering work
description: MBSE becomes an engineering workflow when a model change selects the work, checks, and evidence needed to keep the system coherent.
slug: system-model-should-produce-work
publishAt: 2026-09-16T09:00:00-07:00
tags: [systems-engineering, mbse, sysml, executable-models, verification]
linkedinHook: |
  Most system models are good at describing what already happened. An engineer makes a decision somewhere else, then updates the model so the record looks current again.

  That sequence keeps MBSE downstream of the work.

  A useful model should tell the team what the decision changes, which checks must run, and what evidence is now stale.
---

Most system models describe work. Very few produce it.

An architecture changes in a meeting. Someone records the decision in the model. A requirements owner updates a database. A software lead creates two tickets. A verification engineer notices, perhaps a week later, that three scenarios need to be rerun. The model documents the result after the engineering organization has already done the hard work of finding the consequences.

That sequence puts MBSE downstream of engineering. Making the notation more precise does not fix it. Neither does adding more diagrams.

The model becomes operational when a change to it can determine what the organization has to do next.

## Representation is where most models stop

Representing a system is useful. A good model lets an engineer see boundaries, interfaces, allocations, states, and requirements in one coherent structure. That is already better than scattering the same information across slides and spreadsheets.

But representation alone creates a familiar maintenance problem. The model depends on people to carry information out of it and into the places where work happens. Someone has to read the changed interface, remember which teams consume it, identify the affected tests, and tell those teams what changed. Every handoff is another chance for delay or omission.

Organizations usually respond by adding process. They create an impact-analysis template, a change board, or a checklist. These can help, but they leave the expensive part in human memory. The model knows that a sensor output feeds localization. It knows that localization supports planning. It may know which requirements constrain the timing of that path. Yet the change process still asks an engineer to reconstruct those relationships by hand.

The structure holds the answer. The workflow ignores it.

## Treat the model as a build graph

Software build systems do not ask a committee which files to recompile after every edit. They maintain a dependency graph. Change one source file, and the build system follows the graph to find what depends on it.

A system model can play the same role at engineering scale.

Consider a change to the maximum latency of an object-detection output. That value is connected to an interface, which is consumed by prediction and planning. It supports response-time requirements. It appears in simulation configurations and contributes to assumptions in degraded-behavior scenarios.

Those relationships are not background documentation. They are dependencies.

When the latency changes, the model should compute the affected set. It should identify the interface contracts that need review, mark the relevant verification evidence stale, select the scenarios that exercise the path, and notify the owners of the downstream elements. If the change violates a timing budget, the model should reject it before the pull request reaches a reviewer.

This does not require the model to contain every line of code or every test. It requires stable identities and machine-readable relationships between engineering artifacts. The system model supplies the graph. Other tools execute the work attached to its nodes and edges.

## Impact analysis is the workflow boundary

Impact analysis is often treated as a document written before a change board meets. In an executable workflow, it is a query.

The query begins with a proposed change and returns the engineering surface that could become inconsistent because of it. Some results can become automatic checks. Others require judgment. Both matter.

A changed range on a physical port may trigger a compatibility check against connected components. A new operating mode may require a human review of fallback behavior. A modified safety requirement may invalidate test results even if the implementation did not change. The model should distinguish these cases instead of flattening them into a list of “impacted items.”

That distinction changes review behavior. Reviewers no longer spend the first half of a meeting discovering what the author forgot to include. They start from a computed set of consequences, inspect the uncertain parts, and challenge the reasoning behind exclusions.

The review gets shorter because the information arrives earlier. More important, it gets better. Human attention moves from clerical search to engineering judgment.

## Derived artifacts should stay derived

Executable workflow does not mean every stakeholder has to work inside a modeling language.

Program managers still need release views. Safety engineers still need argument structures. Test teams need scenario selections and expected results. Suppliers may need interface control documents in a prescribed format. The model should produce those artifacts for the people who use them.

The direction of generation matters.

If an interface table is generated from the model, it can be refreshed whenever the source changes. If engineers edit the exported table as a second source of truth, the workflow splits and drift returns. The same applies to verification matrices, architecture diagrams, configuration reports, and review packages.

Views can be numerous. Authority cannot.

This is one reason “single source of truth” programs often disappoint. They focus on collecting everything in one tool. The useful property is not physical centralization. It is a clear direction of derivation. Engineers should be able to tell which artifact owns a decision, which artifacts are computed from it, and which checks keep links across tools honest.

## The systems engineer writes the rules of motion

This workflow changes the systems engineer’s output.

The old center of gravity was the finished model: a coherent description ready for review. The new center of gravity is the behavior around change. Which relationships must exist? What becomes invalid when an assumption changes? Which scenarios establish confidence in a claim? When should the pipeline stop?

These are systems questions. They are also executable rules.

A systems engineer might define that every externally visible behavior traces to at least one operational scenario. They might encode a rule that an interface timing change invalidates evidence for every requirement allocated across that interface. They might define which vehicle configurations a scenario must run against before a release claim can close.

The value is not in automating the engineer out of the process. It is in preserving the engineer’s reasoning between decisions. The rule runs on the next change, and the one after that, without relying on the same person to remember why it mattered.

## The model earns its place by producing consequences

MBSE has spent years trying to persuade engineering teams to keep models current. That is a weak position. An artifact that depends on goodwill will lose to the artifacts required to ship.

The answer is to make the model part of how shipping happens.

When the model selects work, drives checks, marks evidence stale, and produces the views used by the rest of the program, updating it is no longer an extra modeling activity. It is how an engineering change enters the system.

That is the real evolution from model-based systems engineering to an executable engineering workflow. The model still describes the system. Description is the beginning of its job, not the end.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
