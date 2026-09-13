---
title: Verification evidence has to flow back into the system model
description: An executable workflow connects test results to the exact claims and configurations they support, turning the system model into a living evidence map.
slug: verification-evidence-flows-back
publishAt: 2026-10-14T09:00:00-07:00
tags: [systems-engineering, mbse, verification, autonomy, configuration-management]
linkedinHook: |
  Most models send information toward verification and receive almost nothing back.

  Requirements become test cases. Architecture selects scenarios. Results land in dashboards, reports, and data stores that the model never sees.

  Without a return path for evidence, MBSE remains an open-loop activity.
---

Most system models have an output path and no return path.

Requirements flow toward verification. Architecture informs test design. Behavioral models generate scenarios or expected results. Then the evidence lands somewhere else: a test dashboard, a simulation database, a certification report, or a folder full of logs.

The model continues to show what the system should do. It does not know what the engineering organization has established that the system actually does.

That is an open-loop workflow. MBSE becomes executable only when verification evidence flows back into the model and changes what the team is allowed to claim.

## A verification link is not evidence

Traceability tools are good at recording planned relationships. A requirement links to a test case. A function links to a verification method. A hazard links to a safety requirement.

Those links answer an important question: how does the team intend to establish this claim?

They do not answer whether the claim is supported now.

A test may have passed against an old software baseline. A simulation may cover one hardware variant but not another. A scenario may exercise nominal behavior while the requirement also applies under degraded sensing. A passing result can remain attached to a requirement after the assumptions behind both have changed.

The existence of a verification link says that a path to evidence was designed. Evidence needs more context. It needs the result, the configuration tested, the procedure or scenario used, the acceptance criterion applied, and the provenance needed to reproduce the run.

Without those details, “verified” is a label. Labels age quietly.

## Evidence belongs to a configuration

Engineering teams often discuss verification status as if it were an intrinsic property of a requirement. Requirement R-142 is verified. Interface IF-8 is validated. The planner is ready.

None of those statements is complete.

Evidence supports a claim about a particular system configuration under stated conditions. Change the software, hardware, parameter set, operational design domain, or acceptance threshold, and the support may no longer hold.

For an autonomous vehicle, a scenario result from one sensor suite cannot automatically establish the same behavior on a vehicle with different range or field of view. A braking response verified on dry pavement says little about the same response at the edge of the permitted friction envelope. A planner test run before a perception-interface change may still execute, but it no longer supports the original end-to-end claim.

The system model is where these dependencies meet. It identifies the configuration, allocates requirements to design elements, records assumptions, and connects behavior to operational scenarios. Verification evidence should attach to that structure at the configuration where it was produced.

Then a model change can do something useful: compute which claims lost support.

## Staleness is more informative than failure

Engineering workflows tend to divide results into pass and fail. Executable MBSE needs a third state: stale.

A failed result says the tested system did not meet an acceptance criterion. A stale result says the evidence no longer establishes the current claim. Those are different engineering conditions and should trigger different responses.

Suppose a latency budget changes from 150 milliseconds to 120. The previous test result showed 132. Nothing new failed. The old run completed successfully against the old criterion. Yet the requirement can no longer be marked satisfied.

Or suppose the implementation changes while the requirement remains fixed. A result from the previous commit may be irrelevant even if the code change was expected to improve performance. The claim needs fresh evidence because the subject of the claim changed.

Treating old evidence as stale preserves the historical record without confusing it with current confidence. The team can still see that the system satisfied an earlier baseline. It can also see exactly why that result no longer closes the present requirement.

This is where configuration-aware traceability earns its cost. It turns change into a targeted evidence problem instead of forcing the organization to choose between rerunning everything and trusting too much.

## The model should select the evidence to refresh

Once evidence is connected to model elements and configurations, verification planning becomes incremental.

A proposed change defines an affected portion of the system graph. The workflow follows relationships from the changed elements to claims, from claims to verification activities, and from those activities to the configurations that need new results. The output is a verification plan derived from the change.

That plan can combine several kinds of evidence. A constraint solver may check an interface invariant in seconds. A software-in-the-loop scenario may exercise a changed state transition. A hardware bench may be required for a timing claim that simulation cannot establish. A human reviewer may need to assess whether a safety argument still covers the revised behavior.

The model does not have to execute every activity itself. It has to know why each activity exists and what claim its result can support.

This keeps automation honest. Running a million simulation miles is not useful if the changed behavior appears in none of them. A smaller scenario set selected from explicit model dependencies may provide stronger evidence because the team can explain what it covered and why.

## Failed evidence should change engineering work

The return path matters most when evidence is negative.

In many organizations, a failed system test creates a defect in a separate tracking system. The defect is assigned to a component team. The model remains untouched unless the investigation eventually concludes that the architecture or requirement was wrong.

That sequence assumes failure belongs to implementation until proven otherwise. Complex systems do not respect that assumption.

A failed degraded-localization scenario may expose a planner defect. It may also reveal an interface that does not carry enough confidence information, an impossible timing allocation, or a requirement that left fallback behavior undefined. The evidence should reopen the connected claims and place the affected model elements inside the investigation boundary.

This does not mean every failed test triggers an architecture rewrite. It means the workflow preserves the possibility that the model is part of what failed.

That changes root-cause behavior. Teams are less likely to patch the nearest component when the evidence map shows that several implementations satisfy their local contracts while the system-level claim still fails. The structure points the investigation toward the missing relationship or incorrect allocation.

## Confidence is a computed view

Programs like dashboards with green requirements and completion percentages. The numbers create a sense of control, but they often compress away the information needed to judge whether the control is real.

An executable evidence map supports a more defensible view.

For each system claim, the team can ask which configurations have current evidence, which operating conditions were exercised, which assumptions remain untested, and which recent changes invalidated earlier results. A release view can then be generated from the claims relevant to that release rather than assembled from status reports.

The result is not a universal confidence score. Complex engineering judgment should not be reduced to one number. It is a current map of what the organization knows, how it knows it, and where the gaps remain.

That map can drive release gates. A safety-relevant claim with stale evidence can block promotion. A lower-criticality gap can require an explicit waiver with an owner and expiration. The model gives those decisions a common structure without pretending they are all automatic.

## Closing the engineering loop

A descriptive model can remain correct while the system fails. It records intent, and intent may be internally coherent even when reality disagrees.

An executable engineering workflow has to absorb that disagreement.

The model sends claims and dependencies into verification. Verification returns evidence tied to exact configurations. New evidence confirms claims, leaves gaps, or exposes assumptions that need to change. Those changes produce another targeted set of engineering and verification work.

Now the model participates in a real feedback loop. It does not merely preserve the design the team started with. It changes as the team learns what the system can actually do.

That return path is what turns execution into engineering. Without it, the model can generate activity. With it, the model can accumulate justified confidence.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
