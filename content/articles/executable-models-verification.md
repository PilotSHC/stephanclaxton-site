---
title: Executable models close the verification gap that descriptive models never could
description: A system model that can drive simulation is a different category of artifact than a system model that can only be reviewed.
slug: executable-models-verification
publishAt: 2026-07-15T09:00:00-07:00
tags: [mbse, sysml, simulation, verification, autonomous-vehicles]
linkedinHook: |
  For most of MBSE's history, the system model and the simulation lived in different tools, maintained by different people, and drifted apart in different ways.

  When the model is executable, that separation collapses. The model is the simulation source, and verification becomes a property of the model itself rather than a parallel artifact.

  Why this matters more than the language design →
---

For most of MBSE's history, the system model and the simulation lived in different worlds. The model was a descriptive artifact — boxes, arrows, requirements text, intended behavior described in prose. The simulation was a parallel implementation, built by a different team, that approximated the model's intent in code that could actually run.

The gap between the two was the source of most of MBSE's productivity problems. The model said one thing. The simulation did another. The implementation eventually did a third thing. The discipline of keeping these in sync was expensive and rarely successful, and it produced a generation of engineers who came to distrust models on principle.

The interesting development of the last few years is that this gap is closing. Modern systems modeling — SysML v2 in particular, but also tools like Modelica and the various scenario description languages — produce models that can be directly executed. The model is the simulation source. The behavior described in the model is the behavior that gets exercised when you run a scenario.

This sounds incremental. It is not.

## What changes when models execute

Three things change immediately, and a fourth thing changes over time.

The first immediate change is that verification becomes a property of the model rather than a parallel artifact. When you can run the model against a scenario library and check requirement satisfaction, you no longer need to maintain a separate verification matrix. The matrix is a derived output. It stays current because it is computed, not maintained.

The second immediate change is that ambiguity gets surfaced earlier. A descriptive model can be vague about what happens at the edges — what the system does when two requirements conflict, what counts as "nominal operation," how the system behaves under degraded input. An executable model cannot be vague about any of this. The engineer writing the model has to specify the behavior precisely enough that a computer can produce a deterministic result. The act of writing the model becomes the act of clarifying the design.

The third immediate change is that traceability becomes mechanical. When you run a scenario, the simulation knows which requirements were exercised, which were satisfied, and which were not. The trace from requirement to verification activity to result is produced by the same machinery that produces the simulation output. There is no separate document to maintain.

The fourth change, which only shows up over time, is that the model becomes a usable artifact for stakeholders outside the systems engineering team. Software engineers can run the scenarios that exercise their components. Safety teams can interrogate the model directly to ask questions like "what does the system do when this sensor fails during this maneuver?" The model stops being an artifact that systems engineers produce for systems engineers. It becomes a shared substrate.

## Where descriptive models still earn their keep

I do not want to overstate this. Descriptive modeling still does useful work that executable modeling cannot replace.

Early concept-of-operations work, when the team is reasoning about the system before its behavior is fully specified, benefits from the looseness of descriptive models. Trying to make a concept-of-operations model executable forces premature precision and tends to produce thrash.

Stakeholder communication often works better with descriptive artifacts. A program manager does not want to read SysML v2 to understand the system architecture. They want a one-page block diagram with the major components and their relationships. That diagram can be generated from the executable model, but it is the descriptive view that does the communication work.

Regulatory artifacts in some industries are still defined in terms of descriptive models. This will change, but slowly.

So executable models do not replace descriptive ones entirely. They take over the parts of MBSE where the cost of drift was highest — behavior, interfaces, verification — and leave the parts where descriptive modeling is genuinely better to descriptive modeling.

## The cultural shift

The harder thing to navigate is the cultural shift inside the systems engineering team itself. Engineers who built their careers on descriptive modeling, on the craft of producing clear architectural diagrams and well-written requirements documents, often experience the move to executable models as a deskilling.

This is partially true and partially a misreading. The craft of clear systems-level thinking is exactly as important as it ever was. What changes is the medium. The systems engineer who can write an executable model of a complex behavior is doing something that requires more discipline than producing a static diagram, not less. The work just looks more like programming and less like documentation.

The engineers who make this transition successfully tend to be the ones who treat the executable model as a new kind of writing — precise, declarative, designed to be read by humans as well as run by computers. The engineers who do not make the transition tend to treat it as an inferior version of the descriptive modeling they used to do. The first group ends up doing work that materially affects what their teams build. The second group ends up frustrated.

## Where this is heading

The trajectory is reasonably clear at this point. Within five years, descriptive-only models will look the way hand-maintained interface documents look today: not exactly obsolete, but distinctly old-school. The default for new systems will be executable, version-controlled, and integrated with the verification machinery from day one.

This is good for systems engineering as a discipline. It returns the practice to its original purpose — making sure complex systems actually do what they are supposed to do — and it does so in a medium that the rest of the engineering organization can actually use.

The descriptive era was a long detour. The executable era is the return.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin.*
