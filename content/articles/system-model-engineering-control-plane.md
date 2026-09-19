---
title: The system model should become the engineering control plane
description: The next MBSE platform will coordinate decisions, policies, configurations, and evidence without trying to contain every engineering artifact.
slug: system-model-engineering-control-plane
publishAt: 2026-10-16T09:00:00-07:00
tags: [systems-engineering, mbse, ai-systems, executable-models, engineering-leadership]
linkedinHook: |
  The system model should not become another warehouse for every engineering artifact.

  It should become the control plane: the place that knows which configuration is being built, which policies govern a change, which evidence is current, and which decisions can move forward.

  That is a different product architecture from the MBSE platforms most organizations have today.
---

The system model should become the control plane for engineering.

That does not mean putting every requirement, simulation result, source file, test log, and field event into one modeling tool. Attempts to build that kind of universal repository usually produce a slower version of the fragmented environment they were meant to replace.

A control plane has a different job. It knows what the organization intends to build, which configuration is under consideration, which rules govern a change, and what evidence supports the claims needed to release it. The work itself can remain distributed across specialized systems.

This distinction matters because MBSE is approaching an architectural choice. It can become a larger authoring category, or it can become the coordination layer for high-consequence engineering.

The coordination layer has to meet three tests. It must resolve a product configuration across tools, express policy across component boundaries, and connect release claims to current evidence. A platform that cannot do those things may still be a good modeling tool. It is not an engineering control plane.

## Engineering has data planes and no control plane

Modern product organizations already have strong execution systems.

Source control manages code. CI systems build and test it. Simulation platforms execute scenarios at scale. Requirements tools hold formal intent. Product lifecycle systems manage hardware definitions and supplier data. Telemetry platforms record what deployed systems do.

Each is good at its own data plane. Each executes or stores part of the work.

The failure appears between them. A requirement changes, but the release pipeline does not know which evidence is now stale. A hardware variant enters the fleet, but a scenario campaign runs against the default configuration. A software change passes component tests while invalidating an assumption held in the safety argument.

Humans bridge these gaps through meetings, tickets, and memory. At small scale, that can work. As product variants multiply and release cadence accelerates, coordination cost grows faster than the engineering organization.

The missing layer is not another database. It is a control plane that can resolve the current engineering state and apply policy to changes moving through it.

CI can enforce a change, but it usually lacks system intent. Product lifecycle management can resolve a hardware configuration, but it rarely knows which behavior or safety claim a software change affects. A requirements tool holds intent without seeing enough of the implementation path. The system model can connect those concerns because it represents boundaries, dependencies, allocations, behavior, and intent. Its advantage is not ownership of every artifact. It is a system-level view of the relationships among their authoritative sources.

## Do not build the engineering monolith

The usual response to fragmentation is consolidation. Select one platform, migrate every artifact, and make it the source of truth.

That strategy fails for technical and organizational reasons.

Specialized tools exist because different engineering work has different needs. A simulation data store is optimized for volumes and access patterns that a modeling repository should not absorb. Software teams will not give up source-control workflows for a systems tool. Hardware lifecycle data carries supplier and configuration semantics that do not fit cleanly into a software-centered model.

Forcing all of this into one schema creates a brittle platform and a permanent migration program.

A control-plane architecture leaves execution where it belongs. The model holds stable identities, meaningful relationships, configuration references, and policy. It can point to a test result without storing the raw log. It can identify the software commit and hardware revision that define a release without replacing either source system. It can know that a scenario supports a safety claim without becoming the scenario execution engine.

This is a smaller technical scope with a larger organizational effect.

It also creates a realistic interoperability boundary. Tools do not need to agree on every internal representation. They need contracts for identity, version, status, provenance, and the events that indicate change.

## Policy is the product

The value of the control plane comes from what it can decide.

A model that only links artifacts remains a better catalog. A model that applies policy can change the path of engineering work.

When an interface changes, the control plane can identify affected consumers and require their review. When an operating constraint moves, it can invalidate evidence produced outside the new boundary. When a safety-relevant behavior changes, it can select the scenario families and hardware configurations that must run before the change is eligible for release.

Some policies should block. Others should inform.

That difference has to be designed as carefully as any customer-facing product. If every inconsistency stops the pipeline, teams will create bypasses. If every result is advisory, the model has no authority. The platform needs severity, ownership, waiver paths, and expiration. It needs to distinguish an incomplete link from a violated system invariant.

These are not administrative details. They determine whether the control plane improves decisions or becomes another source of alerts.

This layer determines release risk, engineering throughput, and who is accountable when a decision crosses organizational boundaries. The model is where policy can see across components. The workflow is where that policy acquires force.

## A change should resolve through the control plane

Consider a product change that expands an autonomous vehicle’s operating speed under a defined road condition.

The implementation may touch planning parameters and behavior logic. The system consequences extend further. Perception range assumptions may change. Stopping-distance constraints move. Existing scenario evidence may no longer cover the edge of the operating envelope. Hardware variants with different sensing performance may need separate treatment.

Today, a strong team assembles that picture through experienced people. The control plane should assemble the first version automatically.

The proposed change identifies a model element or policy boundary. The system resolves connected requirements, interfaces, configurations, scenarios, and evidence. It returns a change contract: which artifacts must move together, which owners must review, which checks must pass, and which open questions require judgment.

Real transactions will arrive with imperfect data. The model may reference interface version 18 while an implementation change was generated against version 17. A hardware registry may be unavailable while the pipeline is resolving affected variants. Two source systems may claim authority over the same identifier.

The control plane has to fail deliberately. A version conflict at a system boundary should block. An unavailable source should produce an incomplete result, not silent permission to proceed. A waiver should name its owner, scope, rationale, and expiration, then remain attached to the release that used it. These failure semantics are part of the architecture. Without them, the control plane produces confidence it has not earned.

As work completes, results return to the same contract. The release decision is no longer a status meeting that samples several tools. It is a computed view of the claims relevant to this change, the evidence attached to them, and the exceptions a leader is being asked to accept.

The people still decide. The platform makes sure they are deciding against the same system.

## AI raises the stakes

Engineering agents make the control-plane problem more urgent.

An agent can draft requirements, modify code, propose tests, and summarize evidence faster than a human team can review the resulting volume. Without a shared system context, each output can be plausible and locally correct while the combined change is incoherent.

The control plane gives agents boundaries.

It identifies the configuration they are reasoning about. It exposes interfaces and invariants that cannot change silently. It limits which claims a piece of evidence can support. It records why an exception was accepted and when that exception expires.

This is how AI moves from an assistant that produces engineering content to a participant in an engineering system.

The product hypothesis is that generic copilots will keep improving while company-specific context remains difficult to assemble and govern. In high-consequence domains, a platform can create value by making that context current enough to constrain faster work. If the context drifts, the advantage disappears with it.

That understanding should not be trapped in prompts. It should be addressable through the engineering control plane.

## The market needs an open coordination layer

Building a strategy around one vendor owning the complete engineering environment is a poor bet for most autonomy, aerospace, and defense programs. The installed base is varied, domain tools are specialized, and customers need control of records that may outlive any one supplier.

A practical platform strategy starts from that constraint.

The control plane needs open interfaces for model elements, configurations, evidence, and change events. It needs a way to resolve identities across repositories and vendors. It needs extension points for domain policy without forcing every organization into the same ontology.

This is where SysML v2 can matter, but the language is only one layer. Textual models and standard APIs improve portability. They do not define how test evidence returns, how release policy executes, or how a cross-repository change becomes one reviewable transaction. Products have to build those workflows.

The industry should judge them by coordination outcomes, not by the number of diagram types they support.

Can the platform reduce the time required to understand a change? Can it keep evidence aligned with fast-moving configurations? Can it let software, hardware, safety, and product leaders make one release decision without assembling the system by hand?

Those questions define a category larger than modeling.

## From modeling tool to management system

Every technical organization has a management system, whether it designed one or not. Decisions move through some set of artifacts, approvals, and informal relationships. At low cadence, experienced leaders can hold much of that system together themselves.

AI, autonomy, and product complexity are making that model untenable.

The system model can become the durable structure beneath the management system. It can connect intent to implementation, policy to change, and claims to evidence while leaving specialized work in the tools built for it.

That is the control-plane opportunity.

It asks less of the model as a repository and more of it as a product. The model does not need to contain the company. It needs to help the company act as if it understands the same system.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
