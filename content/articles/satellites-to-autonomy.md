---
title: What satellite systems engineering taught me about building autonomous vehicles
description: Two domains that look nothing alike on the surface, and the MBSE discipline that translates between them.
slug: satellites-to-autonomy
publishAt: 2026-05-20T09:00:00-07:00
tags: [systems-engineering, mbse, autonomous-vehicles, sysml, aerospace]
linkedinHook: |
  Spacecraft taught me you can't push a hotfix to a satellite in geostationary orbit. You get telemetry, and whatever resilience you designed in years earlier.

  Autonomous vehicles have the harder verification problem, and that's exactly why MBSE matters more here than it did in space.

  My first essay on the move from satellite systems engineering to autonomy.
---

Before I worked on autonomous vehicles, I worked on systems that couldn't be touched after launch.

That's the defining constraint of satellite engineering, and it shapes everything. When a spacecraft separates from the launch vehicle, every architectural decision you made (every requirement you traced, every failure mode you analyzed, every interface you documented) is now permanent. You don't get to push a hotfix to a satellite in geosynchronous orbit. You get telemetry, and you get whatever resilience you designed in years earlier.

Moving from that world into autonomous vehicle development at Applied Intuition has been clarifying in unexpected ways. The two domains look nothing alike on the surface. But the systems engineering discipline underneath, and specifically the model-based systems engineering discipline, translates more directly than I expected.

## Satellites taught me to take models seriously

Spacecraft programs have used MBSE for decades, not because it's fashionable but because the alternative is unworkable. You cannot integrate a satellite the way you integrate a web app. By the time hardware exists, the architecture has to be right. SysML models, requirements databases, interface control documents: these aren't compliance artifacts on a space program. They're the actual design.

What I carried into AV work is a deep skepticism of "we'll figure it out in integration." On a satellite, you don't figure it out in integration. You figure it out in the model, two years before integration, or you fly a very expensive paperweight.

## Autonomy has the harder verification problem

Here's where the comparison gets interesting. A satellite operates in an environment that is mostly predictable: orbital mechanics, thermal cycles, radiation, known mission phases. The operational design domain is bounded.

An autonomous vehicle's operational design domain is open-ended in a way no spacecraft's ever is. Every intersection is different. Every human driver behaves differently. The long tail of edge cases is genuinely infinite. You can verify a satellite's behavior against its mission profile; you cannot exhaustively verify an AV against the world.

That's why MBSE matters more in autonomy, not less. When you can't test your way to confidence, you have to architect your way there. You need executable models that can drive simulation across scenario spaces no test fleet can physically cover.

## The cultural difference is real

The hardest adjustment wasn't technical. Space programs run on multi-year cycles with formal milestone reviews, requirements baselines, and change boards. AV development runs on weekly iterations, simulation runs measured in millions of miles, and architectural decisions that have to survive both rapid software change and the eventual scrutiny of a serious incident investigation.

The instinct from space ("lock the architecture, then build") doesn't survive contact with autonomy. But the underlying habit of taking architecture seriously, of treating system-level reasoning as a real discipline rather than something engineers do in their heads, absolutely does. The teams that succeed in AV development aren't the ones that abandon systems engineering. They're the ones that figure out how to do it at a faster cadence.

## Where MBSE is heading

SysML v2 is going to matter more than the broader engineering community currently realizes. The textual syntax, the cleaner semantics, the genuinely improved tooling: all of it points toward a future where systems models live in version control alongside code, get reviewed in pull requests, and participate in CI/CD pipelines. That's a world satellite programs have been gesturing toward for years and a world AV programs are actively building.

If you're a systems engineer thinking about where to spend your next decade, I'd point at the intersection of MBSE methodology and high-consequence software systems, whether that's spacecraft, autonomy, defense, or medical devices. The problems are getting harder. The tooling is finally catching up.

And the lessons from space turn out to travel further than I expected.

---

*Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.*
