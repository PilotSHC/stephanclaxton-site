---
title: Doing systems engineering at startup cadence
description: The methods that work at Lockheed do not survive contact with a weekly release schedule. The methods that survive are the ones worth keeping anyway.
slug: mbse-at-startup-cadence
publishAt: 2026-07-01T09:00:00-07:00
tags: [systems-engineering, mbse, startups, engineering-culture]
linkedinHook: |
  In aerospace, a system architecture review is a multi-day event with two dozen attendees, formal action items, and a follow-up meeting six weeks later to verify closure.

  At a software-cadence company, the same review needs to happen in forty-five minutes on Tuesday.

  The methods that survive the translation are the ones worth keeping. Here is what makes the cut →
---

In aerospace, a system architecture review is a multi-day event. Two dozen attendees, formal action items, follow-up meetings six weeks later to verify closure. The cadence is set by the assumption that the architectural decisions under discussion will outlive most of the people in the room.

At a software-cadence company, the same review needs to happen in forty-five minutes on Tuesday. The decisions will be revisited in a month if they turn out to be wrong, and the cost of being wrong is a sprint of rework, not a launch slip.

Both of these reviews are doing systems engineering. They are doing it under wildly different constraints, and the methods that work at one of them do not survive contact with the other.

## What does not translate

The first instinct of an engineer arriving from aerospace into a software-cadence environment is to bring their methods with them. This rarely works, and the failure mode is consistent: the methods produce artifacts faster than the team can absorb them, the team starts ignoring the artifacts, and within a quarter the systems engineer is doing solo paperwork that has no influence on what actually gets built.

The specific things that do not translate include formal design review processes with multi-week feedback cycles, requirement specifications written as standalone documents detached from the implementation, exhaustive interface control documents maintained as separate artifacts, and verification matrices that exist outside the test framework.

None of these are wrong. They are calibrated for a context in which architectural decisions are expensive to revisit. When the cost of revisiting drops by an order of magnitude, the calibration is off.

## What does translate

What does translate is the underlying habit: taking system-level reasoning seriously as a discipline rather than something engineers do in their heads.

The mechanics look different. Instead of a quarterly architecture review, you do a thirty-minute architecture check at the start of every meaningful pull request. Instead of a standalone requirements document, you have requirements that live next to the code as test specifications or property-based test definitions. Instead of an interface control document, you have a typed contract checked at build time.

The artifacts are smaller and more numerous. The cadence is daily, not monthly. The half-life of any individual artifact is short — sprints rewrite them constantly — but the underlying reasoning is preserved because it lives in the same review machinery as the code itself.

This is recognizably systems engineering. It is just systems engineering at a different scale of granularity.

## The trap of optionality

The hardest part of the translation is not method selection. It is resisting the urge to keep the aerospace methods available "for important decisions."

I have watched several teams try to maintain two parallel processes: the lightweight, day-to-day systems-engineering practice that runs alongside development, and a heavyweight, formal process reserved for decisions deemed sufficiently important. The lightweight process works. The heavyweight process does not, for a structurally interesting reason.

The reason is that the decisions deemed important enough to warrant the heavyweight process are exactly the decisions where speed matters most. If your team has decided to switch sensor stacks, you are not going to spend six weeks producing a formal trade study while the rest of the company waits for the answer. You are going to make the decision in two weeks with the information you can gather quickly. The heavyweight process gets used as a justification for a decision that was actually made on intuition.

The honest version is to admit that the lightweight process is your real process, and to invest in making it as rigorous as it can be at the cadence it operates at. That is a more useful project than maintaining a ceremonial heavyweight process for show.

## What good looks like

At its best, systems engineering at startup cadence produces a continuously updated system-level reasoning layer that anyone on the team can read, contribute to, and rely on. The model lives in version control. The requirements are checkable. The interfaces are typed. The verification is automated. The reviews happen at the speed of pull requests.

The systems engineer in this environment is not the gatekeeper. They are the editor and the historian — the person who makes sure the team's collective reasoning about the system stays coherent as the system changes, and who can produce, on demand, the chain of decisions that led to the current architecture.

This is a different job than the one I trained for. It is also, in some important ways, a more useful one. The decisions move faster. The feedback is more immediate. The discipline is harder to maintain because there is less institutional support for it, which is precisely why doing it well is valuable.

## The translation, in one sentence

The aerospace tradition gave systems engineering its methods. The software-cadence tradition is giving it back its relevance. The job is to keep the parts that earn their keep and let go of the parts that do not — without losing the habit of taking system-level reasoning seriously, which is the part worth keeping at any cadence.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin.*
