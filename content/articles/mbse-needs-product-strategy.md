---
title: MBSE needs a product strategy, not a modeling rollout
description: MBSE transformations succeed when leaders treat the engineering workflow as a product with users, outcomes, adoption constraints, and a focused path to value.
slug: mbse-needs-product-strategy
publishAt: 2026-10-02T09:00:00-07:00
tags: [systems-engineering, mbse, engineering-leadership, engineering-culture]
linkedinHook: |
  Most MBSE transformations are managed as tool deployments. Buy the platform, train the modelers, define the ontology, and tell every program to adopt it.

  Six months later, the model library is growing while the product teams still make decisions in the same meetings, tickets, and code reviews.

  MBSE needs a product strategy. The first question is not how to roll out modeling. It is which engineering decision should become materially better.
---

Most MBSE transformations fail before the notation matters.

The organization buys a platform, trains a cohort of modelers, publishes governance, and asks each program to create a system model. Six months later, the model library is growing while the product teams still make decisions in the same meetings, tickets, and code reviews. The new tool has users. It has not changed the work.

This is usually described as an adoption problem. That diagnosis is too shallow.

The transformation was designed as a rollout when it needed to be designed as a product. A rollout asks how to get people into a tool. A product strategy asks which problem is important enough that people will change how they work to solve it.

MBSE needs the second question.

## Start with the decision, not the model

Enterprise modeling programs often begin by defining scope. Which viewpoints will the model contain? What metamodel will the organization standardize? Which teams need licenses? These are implementation questions presented as strategy.

The strategic question is simpler: which engineering decision is currently too slow, too expensive, or too unreliable?

An autonomy program might struggle to determine which vehicle variants are affected by a sensor-interface change. A spacecraft program might spend weeks rebuilding the verification impact of a requirement update. A medical-device team might discover late that software behavior and a safety claim evolved on different schedules.

Each is a candidate product wedge. The model earns adoption by making that one decision better.

For the vehicle program, the first useful workflow may connect interface definitions, hardware variants, downstream consumers, and affected scenarios. Change the sensor interface, and the system returns a review set before the engineer opens a ticket. The outcome is not “we modeled the sensor stack.” The success criteria are shorter impact analysis and fewer dependencies discovered after implementation begins.

That is a product proposition an engineering leader can fund and a user can recognize.

## Pick a wedge with organizational pull

The best first use case sits where pain, authority, and available data overlap.

Pain matters because changing workflow has a cost. If the current process is merely annoying, engineers will tolerate it rather than learn a new one. Authority matters because the team adopting the workflow must be able to change the relevant review or release rule. Available data matters because a useful result cannot depend on completing an enterprise model first.

This is why “build the complete digital twin” is a weak opening move. Value arrives too late. Every domain has to agree before any domain benefits, so the program accumulates dependencies faster than users.

A narrow release gate is different. One product team can model the interfaces and verification claims around a high-risk subsystem. The workflow can run against a real release. Leaders can compare decision time, rework, and escaped defects with the previous process. The organization learns before it scales.

The wedge should also create pull from adjacent teams. If software engineers receive better impact analysis, verification engineers get a targeted scenario set, and product leaders see a clearer release argument, each group has a reason to strengthen the shared model. Adoption expands because the workflow returns value, not because a mandate expands scope.

## Make the right path the shortest path

Leaders often underestimate the product-design problem inside engineering transformation.

The incumbent workflow may be fragmented, but it is familiar. An engineer can change code, request review, and merge without leaving the tools they use all day. If the MBSE workflow requires opening a separate application, finding the right package, updating several relationships, exporting a report, and attaching it to a ticket, the organization has made the correct path slower.

Policy will not overcome that structure for long.

The executable workflow has to meet engineers where changes already move. A pull request that affects a modeled interface should surface the relevant system context automatically. A requirement change should identify the tests and configurations whose evidence becomes stale. The graphical view can remain available for exploration, but the decision should travel through the same review path as implementation.

Good internal products remove translation work. They do not ask every user to become a modeling specialist.

That means the product team behind the engineering workflow owns more than the model. It owns integrations, review surfaces, response time, failure messages, and the path from a proposed change to an accepted one. A technically correct check with an incomprehensible error is a broken product. Engineers will route around it, as they should.

## Measure changed behavior

Modeling programs tend to measure what their tools can count: model elements, trained users, active licenses, or requirements linked. Those numbers describe activity. They do not establish that engineering improved.

The measures that matter sit in the work.

How long does it take to understand the system impact of a proposed change? How often does an interface defect escape into integration? How much verification is rerun because the team cannot select a trustworthy affected set? How old is the evidence behind the claims used for a release decision? How many manual reconciliations are required between model, code, and test?

These measures reveal whether the structure changed.

They also keep the transformation honest. A team can produce a beautiful architecture model while decision latency gets worse. Another team can model only a narrow slice of the system and cut two weeks from every release investigation. The second team has created more value, even if its model is less impressive in a demonstration.

Product leaders already know this distinction. Usage is not the same as retention. Feature delivery is not the same as customer value. MBSE programs need the same discipline.

## Retire the workflow you intend to replace

No product strategy is complete without a migration strategy.

Organizations often keep the old review package, traceability spreadsheet, and change-board process while adding the new model-based workflow. The decision feels safe. It also guarantees that the new system remains optional.

Two sources of truth create reconciliation work. Two review paths create arguments about which approval counts. Under schedule pressure, teams return to the path with the longest history and the clearest authority. The model becomes an export produced for the new process after the real decision has already moved through the old one.

The transition has to be staged, but it cannot be indefinite.

A leader can start with one subsystem and one release gate. For a defined period, old and new outputs run in parallel so the team can compare them. The new workflow earns trust against live decisions. Once it does, the old artifact becomes a generated view or is retired for that scope. Then the boundary expands.

This is change management through operating rules. Training helps people use the new system. Retiring the old path is what makes the organization use it.

## Build a platform only after the product works

There is a predictable moment when a successful wedge attracts enterprise ambition. Other teams want their domain included. Executives ask for a common platform. Vendors propose a larger architecture.

This is where discipline matters.

The first workflow has revealed actual product requirements: which identities must stay stable, which integrations carry the most value, where human judgment is needed, and which checks are trusted enough to block a release. Those lessons should shape the platform.

Starting with the platform reverses the learning order. The organization commits to a universal data model before it knows which information must move through the system. It builds generalized services for workflows nobody has proven users want. Complexity arrives before value.

The platform should emerge from repeated, valuable workflows. Shared identity, policy, and evidence services become common infrastructure because several products need them. Standardization follows demonstrated use.

That sequence produces a smaller platform and a stronger one.

## The leadership job

Turning MBSE into an executable engineering workflow is not a tooling initiative delegated to the modeling team. It is an operating-model change.

The leader’s job is to choose where the organization needs a better decision, give a cross-functional team authority over that workflow, and hold the effort accountable to engineering outcomes. It is also to remove the old structure when the new one proves itself.

This requires product judgment. The organization has multiple users with different incentives. Adoption competes with delivery pressure. The roadmap has to sequence value before breadth. Technical architecture and organizational authority have to reinforce each other.

A leader who takes this seriously assigns one owner to the end-to-end workflow, funds the integrations that remove manual translation, gives successful checks authority over a real release decision, and names the old artifact that will be retired. Miss any of those commitments and the effort remains a tool rollout.

MBSE becomes a product strategy when leadership is willing to change the operating system around the model. The model is only the visible part.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
