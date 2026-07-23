---
title: Configuration-aware context is what most AI engineering tools are missing
description: AI tools answer engineering questions without knowing which version of your system they're advising about. That omission is structural, not cosmetic.
slug: configuration-aware-context
publishAt: 2026-08-26T09:00:00-07:00
tags: [systems-engineering, ai-systems, mbse, autonomy, configuration-management]
linkedinHook: |
  Engineering decisions are configuration-relative. Whether a behavioral choice is correct depends on which software baseline you are running, which hardware is installed, what operational design domain you have committed to, and what constraints were already locked upstream.

  Most AI tools in the engineering space do not model this. They carry general engineering knowledge but no artifact that anchors that knowledge to the specific state of a specific system at a specific point in design maturity.

  The result is answers that are correct in the abstract but wrong for your program. The fix is structural, not conversational.
---

Engineering decisions are configuration-relative. Whether a behavioral choice is correct depends on which software baseline you are running, which hardware configuration is installed, what operational design domain you have committed to, and what constraints were already established upstream in the design. Two systems that look the same on an architecture diagram can require completely different answers to the same engineering question.

Most AI tools in the engineering space are not built to model this. They treat engineering knowledge as version-agnostic: general, abstract, applicable to any configuration of any system. Ask them about sensor fusion degradation handling and they will give you an answer that is correct in some configuration but does not know whether it is correct in yours. This is not a minor limitation. It is the structural reason that AI-generated engineering advice feels plausible but frequently requires engineers to translate it back to the actual system before it can be acted on.

## What "configuration" means here

In systems engineering, configuration is not just a version number. It is the complete specified state of a system at a point in time: which requirements have been baselined, which design decisions have been locked, which interfaces are committed, which verification activities have been run and passed, which exceptions and waivers are in effect. Change any of those elements and you have a different configuration, and potentially different answers to the same engineering question.

This is formalized in configuration management, a discipline older than modern software engineering. Programs have configuration control boards, interface control documents, and formal baselines not because of bureaucratic enthusiasm, but because engineering decisions compose. A decision made at the component level has to be consistent with the decision at the subsystem level, which has to be consistent with the system-level requirements, which have to be consistent with the operational scenario the system was designed for. The configuration is the frame that makes those consistency checks possible.

AI tools, in their current default form, operate without that frame. They carry general engineering knowledge but no artifact that anchors that knowledge to the specific state of a specific system at a specific point in design maturity. The result is answers that are correct in the general case but may be wrong for your baseline.

## Where this breaks in practice

The failure mode is subtle at first. You ask an AI assistant about acceptable response latency for a planner component and get a technically reasonable answer. You do not notice that the answer assumes a sensor fusion architecture your program replaced two years ago. The advice is plausible. You act on it. The inconsistency surfaces in integration, or in testing, or later.

The problem compounds when engineers at different program stages consult the same tool without adjusting for their configuration. An engineer on a pre-baseline design phase gets the same answer as an engineer on a mature system with locked interfaces and accumulated waivers. The tool does not distinguish between these contexts because it has no artifact that carries them.

This is not a failure of AI capability. It is a failure of what context the AI tool actually receives. You cannot reason correctly about a configuration-dependent question if you have no representation of the configuration.

## What configuration-aware context actually looks like

The fix is structural, not conversational. Telling the AI "we're on software baseline 4.2" in a chat prompt moves the problem without solving it. The model has no way to know what baseline 4.2 specifies, which decisions it locks, or what constraints it implies unless that information exists in a form the model can reason against.

Configuration-aware context requires the AI tool to have access to the actual engineering artifacts that define the system state: the current requirements baseline, the current interface definitions, the verification status of relevant components, and the design decisions that are already closed. Not summaries. Not the engineer's description of these artifacts. The artifacts themselves, in a form the tool can parse and compare.

This is one of the places where the argument for model-based systems engineering and the argument for useful AI tooling converge. A system model maintained in version control, at a specific commit, is an addressable statement of configuration. An AI tool that receives the model at that commit is operating with the same ground truth the engineering team is operating with. One that does not has to approximate it from context, which it will do imperfectly.

## The autonomy case makes this concrete

Autonomous vehicles are a useful lens because their configurations are genuinely complex. The software stack changes weekly. The sensor configuration changes by vehicle variant and test program. The operational design domain changes by geography and permit. The behavioral requirements change by release.

Ask an AI tool whether a particular response to sensor degradation is acceptable, without providing the current ODD definition, the current sensor baseline, and the current behavioral requirements for this variant, and you are asking a question the tool does not have enough context to answer correctly. It will answer anyway. The answer will sound informed.

Every engineering team working on high-consequence systems has experienced the particular frustration of getting AI-generated content that is locally coherent but inconsistent with some upstream decision the tool did not know about. The upstream decision was not in the chat history. The configuration was not in the context window. The tool reasoned forward from the general case and arrived somewhere plausible but wrong.

## The deeper structural issue

There is a useful way to frame what is happening here. General engineering knowledge, which is what most AI tools carry, is knowledge about how systems tend to work. Configuration-specific engineering reasoning is knowledge about how this system works, at this state, given these constraints. The gap between those two is exactly the gap that systems engineers fill when they contextualize general knowledge for a specific program.

That gap is not filled by the engineer being smart. It is filled by the engineer having access to the program's configuration artifacts and knowing how to read them. When an AI tool displaces that engineer in generating advice but does not have access to those artifacts, it takes over the answer-generation function while losing the context-loading function. The answers come faster and read better. The systematic error embedded in those answers is harder to see.

This is a stock-and-flow problem in configuration knowledge. The engineering team's ability to make correct configuration-specific decisions depends on a stock of configuration context that gets built up and maintained through continuous documentation, baselining, and review. AI tools that operate outside that stock do not draw it down, but they also do not contribute to it, and the advice they give can lead engineers away from it. The configuration baseline exists; the tool just cannot see it.

## What has to change

Three things need to move for this to improve.

First, AI tools for engineering need to treat configuration context as a first-class input, not a prompt hint. A structured artifact can be checked for consistency, queried for specific properties, and compared against other structured artifacts. A prompt hint can only be believed.

Second, the system model has to be the carrier of that context. The argument for putting system models in version control (so they are current and trustworthy) and the argument for configuration-aware AI tooling are the same argument approached from two directions. A system model in CI, at a specific commit, gives every configuration an addressable state. An AI tool that knows which commit it is advising against is in a fundamentally different position than one advising against the air.

Third, engineers need the judgment to recognize when a tool's response cannot be correct because the tool lacks the context to make it correct. That judgment is not a prompt technique. It is the product of understanding what configuration the system is in and what the tool's context window actually contains.

## Why this matters now

AI tooling in engineering is at a stage where capability is outpacing integration. The tools are impressive. The gap between what they can do in a general sense and what they can do correctly for a specific program is real and mostly invisible to people who have not worked deep inside a configuration-managed program.

The engineers who handle this well are the ones who treat AI tool output the way they treat any other engineering input: check the source, check the version, check whether the advice is appropriate for the current configuration. The engineers who handle it poorly treat plausible output as correct output, and discover the difference when something breaks.

The discipline that catches this is not new. Configuration management has always been the practice of keeping answers anchored to specific system states. The novelty is that AI tools have made it easier to get answers without that anchor, and the answers are now harder to distinguish from correct ones.

Generic advice for configuration-dependent decisions is not wrong in principle. It is wrong in application. In engineering, application is where the stakes are.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
