---
title: Why autonomous vehicles have a harder verification problem than spacecraft
description: A satellite operates in a bounded environment. An autonomous vehicle operates in an open-ended one. The difference reshapes everything about how you build confidence in the system.
slug: av-verification-vs-spacecraft
publishAt: 2026-07-29T09:00:00-07:00
tags: [systems-engineering, autonomous-vehicles, verification, aerospace, safety]
linkedinHook: |
  Spacecraft engineers spend years verifying behavior before launch because they cannot iterate after launch. Autonomous vehicle engineers can iterate continuously, which sounds like the easier problem.

  It is not.

  The reason has to do with the difference between a bounded operational design domain and an open-ended one — and why the second one breaks the verification techniques the first one taught us to trust.

  Why AV verification is genuinely harder than what aerospace traditionally faced →
---

The conventional wisdom is that spacecraft verification is the hardest problem in engineering. You build a system that has to work the first time, in an environment you cannot fully simulate, with no possibility of physical iteration after deployment. The discipline aerospace developed to handle this — formal verification, exhaustive analysis, multi-year integration testing — is widely regarded as the gold standard for high-stakes system engineering.

Having done this work and then moved to autonomous vehicle development, I have come to think the conventional wisdom is partially wrong. Spacecraft verification is hard, but it is hard in a way that engineering knows how to handle. Autonomous vehicle verification is hard in a way that engineering is still figuring out, and the gap between the two is wider than it first appears.

## What spacecraft engineers actually verify

A spacecraft's verification problem is bounded by its operational design domain. The vehicle will operate in a known orbital regime, encounter a known set of thermal and radiation conditions, communicate through known windows, execute a known set of mission phases. The operational design domain is large — there are many cases to consider — but it is finite, and most of it is parameterizable.

This makes verification tractable in a specific sense. You can enumerate the operational scenarios. You can sample the parameter space densely. You can model the environment with enough fidelity that simulation results predict flight results within reasonable tolerances. The verification activity is genuinely difficult, but it is structurally the same shape as the activity itself: you list the cases the system must handle, you exercise the system against those cases, you analyze the residual risk for the cases you cannot fully test, and you ship.

When something unexpected happens in flight, it is almost always traceable to a scenario the team did not fully consider — a parameter combination that fell outside the tested envelope, an interaction between subsystems that was not modeled, a failure mode that was deemed too unlikely to design around. The fix, in retrospect, is always to expand the operational design domain definition. The verification framework itself remains intact.

## What autonomous vehicle engineers face

An autonomous vehicle's operational design domain is not bounded in the same way. The vehicle will operate on roads, around other drivers, in weather, near pedestrians — and within each of those categories, the variation is effectively infinite. Every intersection is different. Every human driver behaves differently. Every weather condition combines with every road condition in ways that no test plan can fully enumerate.

This is not a difference of degree. It is a difference of kind. Spacecraft verification assumes that you can list the cases. AV verification has no analogous list to construct. There is no exhaustive enumeration of "all the things a pedestrian might do" or "all the ways a truck might behave on a highway." The long tail is genuinely infinite, and the most consequential edge cases are exactly the ones that did not occur to anyone to put on a list.

The verification techniques that work for spacecraft, applied directly to AVs, produce a false sense of confidence. You can run a million simulated miles and pass every test in your scenario library and still encounter, on day one of public operation, a situation that nobody on the team had ever considered. The verification was thorough with respect to the cases the team thought to verify. It said nothing about the cases nobody thought of.

## What replaces enumeration

The honest answer to "how do you verify a system whose operational design domain you cannot fully enumerate" is that you do not, in the spacecraft sense. You build confidence through different mechanisms.

You build confidence through the architecture itself — by constructing the system so that it degrades gracefully in unfamiliar situations, so that the failure mode of an unrecognized scenario is conservative behavior rather than dangerous behavior. This is the equivalent of designing in safety margins, but applied to the cognitive structure of the system rather than its physical structure.

You build confidence through scenario generation at scale — by running not the specific scenarios you have written down, but generated variations of them, sampled from a distribution intended to approximate the real world's distribution. This is closer to statistical verification than to enumerative verification, and it produces a different kind of guarantee: confidence over a distribution, not certainty over a list.

You build confidence through fleet operation under controlled exposure — by deploying the system into limited conditions, observing its behavior at a scale that no test program can match, and tightening the operational envelope based on what is actually observed. This is the part that has no aerospace analog. Spacecraft cannot accumulate behavioral evidence from observed operation in the relevant way. Autonomous vehicles can, and the resulting evidence is genuinely informative if the program is structured to learn from it.

None of these techniques individually replace enumerative verification. Together, they constitute a verification methodology that is recognizably different from the aerospace one — less certain, more empirical, more dependent on the system's own ability to behave conservatively when surprised.

## Why this is genuinely harder

The reason AV verification is harder than spacecraft verification is not that the systems are more complex, though they often are. It is that the verification problem itself is structurally different, and the techniques that aerospace developed do not transfer cleanly.

A spacecraft engineer who joins an AV team and brings their verification mindset with them will be productive in some ways and counterproductive in others. The productive part is the seriousness — the assumption that verification is a real discipline, not a checkbox. The counterproductive part is the instinct that exhaustive enumeration is achievable. Applied to AVs, that instinct produces verification plans that look thorough but are not, because they cover the space of scenarios the team imagined rather than the space of scenarios the world contains.

The teams that handle this well treat verification as a continuous activity rather than a pre-deployment gate. They expect to discover new scenarios in operation. They build the machinery to incorporate those scenarios back into the test program. They accept that the verification status of the system is a moving target that gets better over time, rather than a binary that is either complete or incomplete.

This is, by aerospace standards, an uncomfortable way to operate. It is also, given the structure of the problem, the only honest one.

## The shared discipline

What aerospace and autonomy share, despite the difference in verification techniques, is the underlying commitment to taking system-level behavior seriously. The aerospace tradition built the methods for one shape of problem. The autonomy tradition is building methods for a different shape of problem. Both are doing the same work — making sure complex systems do what they are supposed to do — under different constraints.

The engineers who can move productively between these worlds are the ones who hold onto the discipline while letting the methods adapt. That is harder than it sounds, and worth the effort.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
