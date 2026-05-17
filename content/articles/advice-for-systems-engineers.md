---
title: What I would tell a systems engineer five years into their career
description: The career advice nobody gave me, written for the engineer I was at 28 and now sometimes see across the table.
slug: advice-for-systems-engineers
publishAt: 2026-08-12T09:00:00-07:00
tags: [systems-engineering, career, mbse, engineering-leadership]
linkedinHook: |
  Systems engineers tend to get useful technical mentorship and almost no useful career mentorship. The career part of the conversation gets folded into general engineering advice that does not really fit the role.

  Five things I wish someone had told me at 28, written for the engineer I sometimes see across the table now →
---

Systems engineers tend to get useful technical mentorship and almost no useful career mentorship. The technical conversations are rich — there is a whole literature on MBSE methods, on requirements engineering, on architecture frameworks — but the career conversation tends to get folded into general engineering advice that does not really fit the role.

The discipline is structurally different from software engineering or hardware engineering. You are usually the person on the team who sees the whole system, which means you are usually not the person who ships the most visible code or builds the most visible component. Promotion criteria written for individual contributors who ship things do not naturally favor the engineer whose contribution is the coherence of what everyone else ships.

I would have benefited from someone naming this directly when I was five years in. Here is what I would say to the engineer I was then, and to the engineer I sometimes see across the table now.

## Your influence depends on the artifact you produce, not the meetings you attend

The trap of early-career systems engineering is treating the job as primarily a coordination activity. You attend the cross-team meetings. You make sure the interfaces are agreed upon. You facilitate the design reviews. You write the meeting notes.

This is real work, and someone has to do it. The trap is that this version of the job has no surface area for promotion. You cannot point at a meeting and say "I made this happen." The engineering organization, when it is deciding who to promote, will look for artifacts that demonstrate technical contribution, and "I kept everyone aligned" is hard to evaluate.

The fix is to produce artifacts. A system architecture document that other engineers actually use. A model that drives simulation that other teams rely on. A trade study that materially changed which technology the team adopted. A verification strategy that the safety team references. These are things you can point at, and the act of producing them forces you to do the technical work that the coordination role often allows you to avoid.

## The senior systems engineer's value is in saying "no, but"

Junior systems engineers say yes to everything. They take the action item. They write the document. They schedule the meeting. They are pleasant to work with and badly overworked.

Mid-career systems engineers learn to say no, which solves the overwork problem and creates a new one. They become known as the engineer who pushes back, who slows things down, who insists on rigor when the team wants to move.

Senior systems engineers say "no, but." They turn down the version of the request that does not make sense and offer the version that does. "We cannot ship this with that interface, but if we narrow the scope to the on-road case we can ship next sprint." "The current trade space is too broad to study rigorously, but we can pick three candidates and have an answer in a week." "I cannot sign off on this verification plan as written, but I can suggest two changes that would let me sign it off by Friday."

The "no" preserves the rigor. The "but" preserves the velocity. The combination is what makes a senior systems engineer worth listening to. The engineer who only does the "no" half is correct but ineffective.

## Specialize in something, but pick carefully

The pressure on systems engineers to be generalists is enormous, and the pressure usually wins. Five years in, you can have a working understanding of mechanical engineering, software architecture, requirements management, safety analysis, verification methodology, and the specific systems your company builds.

This is a fine place to be at five years. It is a bad place to be at fifteen.

The systems engineers who have the most interesting careers in their second decade are the ones who picked one thing — one technical domain, one methodology, one phase of the lifecycle — and went genuinely deep on it. The domain matters less than the depth. I have watched engineers build extraordinarily interesting careers on MBSE tooling, on safety case construction, on early-phase concept-of-operations work, on verification methodology, on specific application domains like space or autonomy or medical devices.

The thing to avoid is the trap of generalist comfort. The generalist version of the role is rewarding because everyone needs your perspective and nobody else can quite do what you do. The trap is that you become hard to replace at the project level and easy to replace at the industry level. The specialists earn the inverse — easier to replace on a given project, harder to replace in the field.

## Take the regulated industry job for a while, even if you do not stay

There is a particular kind of engineering discipline that you can only learn by working in a heavily regulated industry — aerospace, medical devices, nuclear, automotive functional safety. The discipline is hard to articulate but easy to recognize. It includes a respect for documentation that is not just compliance theater, a habit of treating verification as a real activity rather than a formality, an instinct for asking "how would we defend this decision if something went wrong?"

Engineers who have done time in a regulated industry carry these habits forward into less regulated environments. Engineers who have not done that time can learn the same lessons eventually, but they tend to learn them the expensive way — by being the systems engineer in the room when something goes wrong and there is no documentation, no verification, no trace.

The trade-off is that the regulated industries move slowly and pay less than the software-cadence industries. The career advice is to do a tour — three to five years, at a real program with real consequences — and then take that discipline with you wherever you go next. The cultural difference is hard to overstate, and the engineers who have seen both sides bring something to their teams that engineers who have only seen one side cannot.

## Your skill set ages well, but only if you keep it current

The good news for systems engineers is that the discipline ages well. The fundamentals — operational analysis, architecture trade studies, verification strategy, requirements engineering — are durable in a way that specific frameworks and technologies are not. A systems engineer with twenty years of experience is, in most cases, more valuable than one with five.

The bad news is that this is only true if you keep the skills current. Systems engineering has been undergoing a quiet transformation for the last decade — the shift from descriptive to executable models, the integration of systems engineering tooling with software development practices, the emergence of new methods for handling open-ended operational design domains. Engineers who do not engage with these shifts find themselves doing the systems engineering of 2010 in 2026, and the gap widens every year.

The fix is to treat your continuing education as part of the job. Read the SysML v2 specification when it is finalized. Try the new tooling. Pay attention to what the software industry is figuring out about systems-level reasoning under the names of "platform engineering" and "observability." Some of what they are learning is what systems engineering already knew. Some of it is genuinely new and worth absorbing.

The senior systems engineers who are still in demand at fifty are the ones who never stopped learning. The ones who stopped are doing fine, but they are doing the work that the discipline was good at twenty years ago, not the work it is good at now. The market notices the difference.

## A closing observation

The systems engineering role is genuinely strange. You are paid to think about things that everyone else on the team is too close to see clearly. You are responsible for outcomes you cannot directly produce. Your best work is often invisible — the disasters you prevented, the trade studies that closed off bad paths early, the architectural decisions that saved a year of rework that nobody else even knows would have happened.

This is not a role that rewards seeking credit. It is a role that rewards being correct, often, in ways that compound over a career. The engineers who flourish in it are the ones who can derive enough satisfaction from being correct that the absence of visible credit does not bother them.

If that is you, the field has more interesting problems available right now than it has had in decades. The verification problem of autonomous systems, the integration of executable models into software workflows, the systems-engineering challenges of large-scale AI deployment — these are real problems that need people who can think about them at the system level. The discipline is more relevant than it has been since the Apollo program, and most of the field has not noticed yet.

That is the opportunity. Take it seriously.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin.*
