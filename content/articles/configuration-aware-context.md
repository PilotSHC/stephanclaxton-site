---
title: AI doesn't know which system you're talking about
description: AI engineering tools answer questions without knowing which system they are advising. That is a context problem, not a hallucination problem.
slug: configuration-aware-context
publishAt: 2026-08-26T09:00:00-07:00
tags: [systems-engineering, ai-systems, mbse, autonomy, configuration-management]
linkedinHook: |
  Every engineering decision is made against a specific system configuration. The AI you're asking doesn't know what that configuration is.

  It doesn't know your software baseline, your hardware variant, your ODD, or the design decisions already embedded throughout your architecture. It still answers.

  That isn't a hallucination problem. It's a context problem. And the fix is not a better prompt.
---

Every engineering decision is made against a specific system configuration.

Whether a design choice is correct depends on the software baseline, hardware variant, interfaces, operational design domain (ODD), requirements baseline, accepted risks, and every design decision that came before it. Change any one of those, and the correct engineering answer can change with it.

This is where today's AI engineering tools break down.

They answer engineering questions as if engineering knowledge is universal, as if there is one correct answer independent of the system being built. There rarely is.

Ask an AI assistant how to handle degraded localization. It will give you a technically sound answer. But it doesn't know whether your vehicle uses GNSS, wheel odometry, SLAM, RTK corrections, or infrastructure-assisted localization. It doesn't know your safety goals, your hardware revision, your ODD, or the assumptions already embedded throughout your architecture.

It will still answer.

That isn't a hallucination problem.

It's a context problem.

## Configuration is more than a version number

When engineers talk about configuration, they aren't talking about software version 4.2.

Configuration is the complete engineering state of a system at a point in time.

It includes the requirements that have been baselined, the interfaces that have been approved, the hardware that's actually installed, the architecture decisions that have already been made, the verification evidence that exists, the known exceptions, waivers, and the constraints inherited from earlier design decisions.

Change any of those and you're no longer talking about the same system.

You're solving a different engineering problem.

This is why configuration management exists.

Configuration Control Boards, interface baselines, change requests, and version-controlled models aren't bureaucracy. They're how engineering organizations ensure thousands of decisions remain consistent with one another over years of development.

Every decision inherits context from previous decisions.

## Where AI falls apart

Current AI tools don't operate against that engineering context.

They operate against general engineering knowledge.

That works surprisingly well. Until it doesn't.

Imagine asking whether a planner's response latency is acceptable.

The answer might be perfectly reasonable for one architecture while being completely wrong for yours because your perception pipeline, hardware, or safety allocation changed six months ago.

Nothing in the response tells you that.

The advice sounds correct.

The failure doesn't show up until integration, testing, or certification.

That's the dangerous part.

The problem isn't that AI produces bad engineering advice.

The problem is that it produces advice without knowing which system it's advising.

## Context isn't something you type into a prompt

Most people try to solve this by giving the model more information.

"We're running software baseline 4.2."

"We're using Platform B."

"This is Release 17."

That helps, but it doesn't solve the problem.

Those are labels.

The model still doesn't know what baseline 4.2 actually contains.

Real engineering context isn't a paragraph.

It's the collection of engineering artifacts that define the system.

Requirements.

Architecture.

Interfaces.

Verification evidence.

Hazard analyses.

Traceability.

Configuration history.

The AI shouldn't be reasoning from a summary of those artifacts.

It should be reasoning from the artifacts themselves.

## Why version-controlled system models matter

This is why the system model is the most practical foundation for configuration-aware AI.

A version-controlled model represents the engineering configuration at a specific point in time.

A commit isn't just source code.

It's an addressable snapshot of engineering intent.

If an AI reasons over the model at commit X, it shares the same ground truth as the engineering team reviewing commit X.

Now engineering discussions become reproducible.

If the configuration changes, the reasoning changes.

If the model changes, the recommendations change.

That's how engineering actually works.

## Autonomous systems make this obvious

Autonomous vehicles expose the problem faster than almost any other industry.

The software stack evolves weekly.

Vehicle variants use different hardware.

Behavior changes across releases.

The ODD changes by geography.

Safety assumptions change as evidence accumulates.

Ask whether a degraded sensor response is acceptable without knowing the current vehicle variant, current behavioral requirements, and current ODD, and the AI literally cannot determine the correct answer.

It will still give one.

That's the structural flaw.

## The real divide

General engineering knowledge explains how systems typically work.

Engineering practice determines how this system works, in this configuration, under these constraints.

Systems engineers spend their careers bridging that gap.

Today's AI largely ignores it.

That's why AI-generated engineering advice often feels intelligent while still requiring experienced engineers to reinterpret it before acting.

The missing piece isn't a larger model.

It's configuration-aware context.

## What needs to change

Engineering AI needs to stop treating configuration as something hidden in a prompt.

Configuration should be a first-class input.

That input should come directly from version-controlled engineering artifacts.

And engineers need tools that can reason against the same configuration the program is actually building, not some generic representation of what similar systems usually look like.

Generic engineering advice isn't inherently wrong.

It's simply disconnected from the system it's trying to improve.

In engineering, that distinction is everything.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
