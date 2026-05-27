import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading Donella Meadows from inside an autonomy company",
  description: "A book about ecosystems and global resource flows is the most useful thing I have read for autonomy engineering. Why Meadows's leverage points matter more for AV development than additional simulation miles ever will.",
  openGraph: {
    title: "Reading Donella Meadows from inside an autonomy company",
    description: "A book about ecosystems and global resource flows is the most useful thing I have read for autonomy engineering. Why Meadows's leverage points matter more for AV development than additional simulation miles ever will.",
    type: "article",
    publishedTime: "2026-05-27T09:00:00-07:00",
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Reading Donella Meadows from inside an autonomy company",
  "author": {
    "@type": "Person",
    "name": "Stephan Claxton",
    "url": "https://www.stephanclaxton.com"
  },
  "datePublished": "2026-05-27T09:00:00-07:00",
  "publisher": {
    "@type": "Person",
    "name": "Stephan Claxton"
  }
};

export default function Article() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article">
        <div className="meta">Essay</div>
        <h1>Reading Donella Meadows from inside an autonomy company</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>Most of the books that have shaped how I think about engineering were not written about engineering. Donella Meadows's *Thinking in Systems: A Primer* is the clearest example. It is a book about ecosystems, global resource flows, organizational behavior, and the structural reasons systems do what they do. There is nothing in it about software, AI, or autonomous vehicles.</p>
        <p>It is still the most useful book I have read for autonomy work.</p>
        <h2>What Meadows actually says</h2>
        <p>Meadows's central claim, compressed as far as it will go, is that complex systems get their behavior from their structure. Change the structure and the behavior changes. Change the people, the metrics, the language, the incentives, or the parameters, and you mostly produce noise. The behavior only shifts when the change reaches deep enough to affect the structure that was actually producing the behavior in the first place.</p>
        <p>Her 1999 essay, *Leverage Points: Places to Intervene in a System*, ranks twelve kinds of intervention from least to most powerful. The interventions at the top of the ranking, the ones with the most leverage, are the hardest to see, the slowest to act, and the most resisted. The interventions at the bottom (adjusting parameters, tuning targets, hitting metrics harder) are the most visible, the most familiar, and the most popular. Almost all engineering effort, almost everywhere, goes into the low-leverage end of her list.</p>
        <p>This is the part that brought me back to her.</p>
        <h2>Where autonomy keeps intervening at low leverage</h2>
        <p>When I look at how the autonomy industry talks about its hardest problems, I notice that almost everything happens at the bottom of Meadows's ranking. The standard interventions are running more simulation miles, collecting more edge cases, tuning the parameters of perception and planning, raising or lowering the thresholds of safety metrics. These are all parameter-level interventions, and Meadows ranks parameters at the very bottom of her list: number twelve, the lowest leverage available.</p>
        <p>She is not wrong because the interventions are useless. They are not useless. Parameters do matter. Numbers do matter. Tuning a planner is real work that produces real improvement. The point is that the system's behavior is not actually being produced by the parameter values. It is being produced by something further upstream, and adjusting the parameter is a way of compensating for the upstream structure rather than changing it.</p>
        <p>The hardest version of this trap, for an engineering culture, is that low-leverage interventions are also the most legible. You can present a graph that shows the parameter changed and the metric improved. You can show a confidence interval, a regression, a number that went up. Structural interventions almost never produce that kind of presentation. They show up as long-running second-order effects that resist clean attribution. The cultural pressure to operate at the legible end of the ranking is intense, and the field rewards it.</p>
        <h2>Where the actual leverage is</h2>
        <p>The structural interventions, Meadows's mid-range, are the ones that actually shift autonomy engineering when they happen. Where the system model lives. Whether requirements traceability is automated or maintained by hand. Whether the safety case is a document or an executable artifact. Whether interface contracts are checked at build time or relied on by convention. Whether the simulation infrastructure is owned by the verification team or the development teams. Whether the operational design domain is a paragraph in a slide deck or a versioned, machine-readable artifact that the planner can be tested against.</p>
        <p>None of these is glamorous. None of them produces a graph that anyone wants to show in a meeting. They all change the behavior of the engineering organization in ways that more test miles cannot.</p>
        <p>Higher still, in Meadows's ranking, sit the rules of the system. For autonomy, the rules question is what counts as evidence of safe behavior. The aerospace tradition has a clear answer: a verification matrix, signed and dated, against a bounded operational design domain. That answer is structurally unavailable to autonomy, because the operational design domain is not bounded. The autonomy industry has not yet converged on a replacement rule, and the absence of that rule is doing more to slow the field than any technical limitation. When the rule is unsettled, the rule itself becomes the leverage point. Argue about anything else and you are arguing inside a paradigm that has not yet been chosen.</p>
        <h2>The paradigm question</h2>
        <p>Higher than rules, Meadows places paradigms, the mindset out of which the system arises. Autonomy is currently the site of an unresolved paradigm contest, and the contest is mostly invisible from inside it.</p>
        <p>One paradigm holds that autonomous driving is a perception-and-control problem: get the perception accurate enough, get the policy good enough, and the system works. Another holds that autonomous driving is a social-negotiation problem. The vehicle is operating among human drivers whose behavior is itself emergent from a collective expectation of how vehicles behave. A third paradigm, the one I find most honest after having now done this work for a while, holds that autonomous driving is a systems-engineering problem. The perception, the planning, the policy, the sensor suite, the simulation infrastructure, the verification regime, the operational design domain, and the human operations all have to be designed as one coherent thing.</p>
        <p>Different paradigms produce different products. You can see this in the field already. Teams that operate from the perception-first paradigm build different kinds of systems than teams that operate from the systems-engineering paradigm. The same engineers, with the same training, with similar tools, will produce structurally different vehicles depending on which paradigm they take for granted.</p>
        <p>Meadows points out that paradigms are the highest-leverage place to intervene. They are also the hardest, because the paradigm out of which a system arises is usually invisible to the people operating inside it. Engineers do not typically experience themselves as operating from a paradigm. They experience themselves as doing engineering. The paradigm is the water they swim in. The intervention is to surface the paradigm long enough to ask whether the system you are building is actually the system you intended to build, or whether it is the system that this particular paradigm tends to produce regardless of intent.</p>
        <h2>Dancing with the system</h2>
        <p>Meadows's last move, in the closing pages of *Thinking in Systems*, is to step back from the analytical project entirely. She calls it "dancing with systems." The argument is that beyond a certain level of complexity, the goal of total understanding has to be given up, and replaced with humility, attentiveness, and the discipline of paying attention to what the system is actually doing rather than to what the model predicts it will do.</p>
        <p>This is the part of her work the autonomy field is most uncomfortable with. Autonomy engineering has a strong cultural commitment to verification, certification, and analytical proof of safety. Meadows's "dancing with systems" sounds, to that audience, like a counsel of resignation. It is not. What she actually argues is that the engineer who has internalized the limits of analytical knowing is the engineer who designs the system with the right kind of humility built into its architecture: feedback loops that surface anomalies, graceful degradation when the situation exceeds the design envelope, monitoring that assumes the system will surprise you.</p>
        <p>An autonomous vehicle is going to encounter situations its designers did not imagine. That is not a verification failure. It is a structural property of operating in an open-ended environment. The engineering question is what the system does when it meets one of those situations. Whether the architecture is one that surfaces the surprise and degrades gracefully, or one that hides the surprise and degrades catastrophically. That is a Meadows question, and it is a more important one than anything an additional ten thousand simulation miles can answer.</p>
        <h2>Why I keep coming back</h2>
        <p>The reason I keep coming back to *Thinking in Systems* is that it is the rare book that helps you see what you are actually doing while you are doing it. Most engineering literature gives you methods. Meadows gives you a way of looking. The methods become less interesting once you have the looking. You can recognize which ones are working on the actual structure of the problem, and which ones are decorating the surface.</p>
        <p>The autonomy industry is going to figure this out. Some teams already have. The teams that have are the ones whose engineering choices, taken together, read as if they had been designed by someone who internalized Meadows long before they ever wrote a line of code that touched a vehicle. The rest of the industry will get there by trial and error, paying the cost of low-leverage interventions until the structural ones become obvious.</p>
        <p>The book itself is short. I would read it again before reading another paper on safety metrics.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p>
      </article>
    </>
  );
}
