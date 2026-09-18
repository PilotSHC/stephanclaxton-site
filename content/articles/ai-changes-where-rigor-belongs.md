---
title: AI changes where engineering rigor belongs
description: When AI compresses the development cycle, quality depends on moving rigor into architecture, evidence, and the change path itself.
slug: ai-changes-where-rigor-belongs
publishAt: 2026-09-18T09:00:00-07:00
tags: [systems-engineering, ai-systems, engineering-leadership, verification, autonomy]
linkedinHook: |
  When I was learning to ski, my instructor told me, “Speed hides mistakes.”

  AI can do the same thing to engineering. It collapses the time between an idea and an implementation, but it does not collapse the distance between an implementation and justified confidence in it.

  Maintaining quality at AI speed requires changing where rigor lives.
---

When I was learning to ski, my instructor gave me a line I still think about:

“Speed hides mistakes.”

At low speed, bad technique is obvious. You feel the hesitation, the poor balance, the turn that never quite closes. Add speed and some of those problems appear to disappear. Momentum carries you through. The run feels smoother, right up to the moment the terrain changes and the mistake you never corrected matters all at once.

The lesson was not to avoid speed. It was to develop technique that still worked when I accelerated.

AI creates the same problem for engineering organizations. It collapses the time between an idea and an implementation. It does not collapse the distance between an implementation and justified confidence in it.

Consider an agent-generated change that touches behavior logic, tests, and documentation in one afternoon. Passing local checks can establish that the patch is internally consistent. It cannot establish that every affected product configuration still satisfies the claims required for release. That system-level proof does not get easier because the code arrived faster.

The engineering challenge of the AI era is preserving quality when the rate of change exceeds the old lifecycle’s capacity to understand it. Slowing every change back down would surrender the value AI creates. Rigor has to move into the structure through which changes travel.

## AI accelerates one side of the lifecycle

Many gated lifecycles assume that implementation arrives slowly enough for periodic review and verification to keep up.

Requirements took time to write. Architecture took time to document. Software took time to implement. Verification followed because there was a manageable stream of completed work to verify. Formal reviews were expensive, but the work between them was also expensive, so the cadence roughly matched.

AI breaks that balance.

The cost of drafting, implementing, and revising falls quickly. The cost of understanding system consequences does not fall at the same rate. Neither does the cost of producing credible evidence for a safety-relevant behavior, resolving an interaction across product variants, or deciding whether an observed regression changes the release argument.

The bottleneck moves.

If the organization keeps the old lifecycle, work accumulates in review and verification. Leaders see growing queues and ask reviewers to move faster. Teams respond by sampling more lightly, narrowing review scope, or treating passing component tests as sufficient evidence. Delivery metrics improve until integration or operation exposes what the lifecycle stopped seeing.

The failure is structural. The system is sending a higher volume of change through controls built for a lower one.

## Susan is carrying two lifecycles

A systems engineer I will call Susan is working through this transition now.

She learned to express rigor through complete artifacts, formal reviews, and enough detail that another engineer could reconstruct the reasoning later. Software development asks her to work through small diffs, continuous integration, and decisions that may be revised before a traditional review package is finished.

Both instincts are rational. Together they create an impossible job.

If Susan preserves the old level of detail in the old format, the implementation moves ahead while she documents it. If she matches software speed by dropping the detail, the organization loses the system-level reasoning it hired her to provide. Telling her to “be more agile” does not resolve the conflict. Neither does asking the software team to wait for a document lifecycle calibrated for a different era.

The workflow has to preserve the reasoning at a smaller unit of change. The requirement, interface decision, affected configurations, and evidence obligation need to move with the implementation instead of arriving in a package later.

Susan’s struggle is not resistance to software. It is evidence that the organization accelerated implementation before redesigning how rigor reaches it.

## Slow is not the same as rigorous

Engineering organizations often frame quality and speed as a tradeoff. Move fast and accept risk, or slow down and preserve rigor.

That framing protects weak processes.

A requirement does not become better because it waited two weeks for a review board. An interface does not become coherent because its change request moved through four approvals. Time can create room for thought, but delay by itself produces no evidence.

Rigor comes from explicit intent, visible assumptions, enforced constraints, and evidence that is appropriate to the claim. A slow process can lack all four. A fast process can contain them.

The real tradeoff is between decisions that can safely share a fast path and decisions whose consequences require more work.

A local refactor behind a stable interface should not wait for a system architecture review. A change to that interface should carry its consumers, affected configurations, and verification obligations into the review. A change to a safety constraint may need new scenario coverage, hardware evidence, and explicit acceptance of residual risk.

Treating every change alike creates either bureaucracy or recklessness. Quality at speed depends on knowing the difference.

## Match the path to consequence and reversibility

The most important lifecycle design decision is how work enters different control paths.

Consequence matters. A formatting change and a change to degraded braking behavior do not deserve the same evidence burden.

Reversibility matters too. A server-side feature behind a flag can be observed and rolled back quickly. A change embedded in deployed hardware, a certified configuration, or a vehicle behavior that can create immediate physical risk has a different correction path.

The organization should encode these differences before the next change arrives.

That means defining system boundaries, critical interfaces, protected invariants, and the classes of decision that require broader authority. It means knowing which evidence can be generated in software, which claims require physical testing, and which uncertainties need a human decision rather than another automated check.

AI can help classify a proposed change against that structure. It should not invent the structure each time.

This is where systems engineering becomes a source of velocity. A clear architecture gives routine changes a safe fast path because the boundaries are known. Ambiguous architecture makes every change look potentially global, so teams either review everything or learn to ignore the review.

Clear boundaries reduce the review surface for routine work. Ambiguous boundaries force teams either to escalate too much or to accept changes without understanding their system effects.

## Put known rules in the change path

Human review is expensive and variable. It should focus on uncertainty, not rediscover rules the organization already knows.

If an interface has a valid range, check it automatically. If a requirement change invalidates evidence, mark that evidence stale when the change is proposed. If a behavior must hold across three hardware variants, select those variants in the verification plan. If two artifacts must change together, prevent one from merging alone.

These are engineering decisions made once and executed repeatedly.

The mechanism can be a model constraint, a typed contract, a policy check, or a scenario regression. The format matters less than where it runs. A rule documented in a process guide depends on memory. The same rule in the change path shapes every decision that crosses it.

This also changes the economics of quality. Some assurance work still repeats known checks by hand. Encoding a stable rule once can shift later review toward exceptions, new failure modes, and conflicts the rule cannot resolve.

That investment has to be treated as product infrastructure. Checks need owners. Failure messages need to explain what action is required. False positives need to be measured because a control that engineers routinely bypass has no practical authority.

Gate count is a poor quality measure. Decision reliability is the better one.

## Human judgment moves upstream

AI relocates the highest-value human judgment within engineering.

Generated code still requires code review. The problem is that line-by-line review cannot establish system impact on its own, and generation can increase the number of changes that need that broader judgment.

The higher-value work is defining what must remain true.

Leaders and senior engineers decide which behaviors are protected, which evidence is sufficient, where autonomy ends, and what conditions require escalation. They decide how much uncertainty the product can carry into a release and which risks cannot be delegated to a probabilistic system.

Those decisions become architecture, policy, acceptance criteria, and verification strategy. AI can operate quickly inside them. When a proposed change crosses one of their boundaries, the workflow brings the uncertainty back to a person with the right authority.

This gives engineering leadership a stronger role. The job shifts from approving a stream of artifacts to designing the system that decides which artifacts need approval.

It also creates accountability. If every difficult decision becomes “the model suggested it,” the organization has automated ambiguity. Named owners, explicit waiver scopes, and expiration dates remain necessary when policy cannot produce a clean answer.

## Verification has to become incremental

Fast development cannot wait for full-system verification after every change. It also cannot rely on local tests when system behavior changed.

The practical answer is incremental evidence.

A proposed change should identify the claims it can affect. Those claims should resolve to the configurations, scenarios, analyses, and tests needed to refresh confidence. The workflow runs the smallest evidence set that is defensible, not the smallest set that is convenient and not the entire program by default.

This requires a system-level dependency structure. Without it, teams have only two choices: rerun too much or trust too much.

Incremental verification also makes uncertainty visible earlier. A team can see before implementation that an apparently small behavior change requires unavailable hardware evidence or expands the operating domain beyond current scenario coverage. Product leaders can then change scope while the decision is still cheap.

AI can accelerate this loop by proposing affected claims and generating candidate tests. The result still has to be grounded in the exact product configuration and reviewed against the evidence policy. Faster evidence generation is useful. Faster unsupported confidence is not.

## Measure confidence latency

AI-era organizations will be tempted to measure generated output: changes completed, code produced, tests added, or cycle time reduced.

Those measures describe production. They say little about whether the engineering system can support the resulting pace.

Track confidence latency: the elapsed time between a proposed change and a release decision supported by the required system evidence. Break that interval into waits for impact analysis, configuration resolution, test capacity, evidence review, and waiver ownership.

Put confidence latency beside implementation cycle time in the same operating review. If implementation gets faster while confidence takes longer, assurance work is accumulating even though delivery dashboards look healthy.

Zero latency would be the wrong target. Some evidence takes time because physics and consequence impose real limits. Leaders need to know where the time goes and stop spending it on translation, reconstruction, and ceremonial control.

## The leadership decision

The leadership decision is how to allocate scarce expert attention. Define which changes qualify for a fast path, the evidence each path must produce, and the conditions that return a decision to a named human owner.

Fund the architecture and policy infrastructure that make those rules executable. Measure whether confidence keeps pace with implementation, and retire controls that add delay without changing a release decision.

The objective is concrete: reduce the time from proposed change to justified release without lowering the standard of justification.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
