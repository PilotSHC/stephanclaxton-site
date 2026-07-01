import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doing systems engineering at startup cadence",
  description: "The methods that work at Lockheed do not survive contact with a weekly release schedule. The methods that survive are the ones worth keeping anyway.",
  openGraph: {
    title: "Doing systems engineering at startup cadence",
    description: "The methods that work at Lockheed do not survive contact with a weekly release schedule. The methods that survive are the ones worth keeping anyway.",
    type: "article",
    publishedTime: "2026-07-01T09:00:00-07:00",
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Doing systems engineering at startup cadence",
  "author": {
    "@type": "Person",
    "name": "Stephan Claxton",
    "url": "https://www.stephanclaxton.com"
  },
  "datePublished": "2026-07-01T09:00:00-07:00",
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
        <h1>Doing systems engineering at startup cadence</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>In aerospace, a system architecture review is a multi-day event. Two dozen attendees, formal action items, follow-up meetings six weeks later to verify closure. The cadence is set by the assumption that the architectural decisions under discussion will outlive most of the people in the room.</p>
        <p>At a software-cadence company, the same review needs to happen in forty-five minutes on Tuesday. The decisions will be revisited in a month if they turn out to be wrong, and the cost of being wrong is a sprint of rework, not a launch slip.</p>
        <p>Both of these reviews are doing systems engineering. They are doing it under wildly different constraints, and the methods that work at one of them do not survive contact with the other.</p>
        <h2>What does not translate</h2>
        <p>The first instinct of an engineer arriving from aerospace into a software-cadence environment is to bring their methods with them. This rarely works, and the failure mode is consistent: the methods produce artifacts faster than the team can absorb them, the team starts ignoring the artifacts, and within a quarter the systems engineer is doing solo paperwork that has no influence on what actually gets built.</p>
        <p>The specific things that do not translate include formal design review processes with multi-week feedback cycles, requirement specifications written as standalone documents detached from the implementation, exhaustive interface control documents maintained as separate artifacts, and verification matrices that exist outside the test framework.</p>
        <p>None of these are wrong. They are calibrated for a context in which architectural decisions are expensive to revisit. When the cost of revisiting drops by an order of magnitude, the calibration is off.</p>
        <h2>What does translate</h2>
        <p>What does translate is the underlying habit: taking system-level reasoning seriously as a discipline rather than something engineers do in their heads.</p>
        <p>The mechanics look different. Instead of a quarterly architecture review, you do a thirty-minute architecture check at the start of every meaningful pull request. Instead of a standalone requirements document, you have requirements that live next to the code as test specifications or property-based test definitions. Instead of an interface control document, you have a typed contract checked at build time.</p>
        <p>The artifacts are smaller and more numerous. The cadence is daily, not monthly. The half-life of any individual artifact is short, since sprints rewrite them constantly, but the underlying reasoning is preserved because it lives in the same review machinery as the code itself.</p>
        <p>This is recognizably systems engineering. It is just systems engineering at a different scale of granularity.</p>
        <p>The cleanest way to see this is to recognize where the intervention is actually happening. The familiar instinct of an engineer arriving from aerospace is to bring the methods (the review formats, the document templates, the gate criteria). The methods are the visible part of the practice, and the visible part is the part you can train someone on. But the methods are not what produces the behavior of the engineering organization. The structure does. Where decisions get made, on what cadence, against what artifacts, with what review machinery. The successful translation isn't about porting methods. It's about identifying which structural piece of the aerospace tradition is doing the actual work, and finding the software-cadence equivalent that produces the same behavior at a hundred times the rate. The methods that come along for the ride are almost incidental.</p>
        <h2>The trap of optionality</h2>
        <p>The hardest part of the translation is not method selection. It is resisting the urge to keep the aerospace methods available "for important decisions."</p>
        <p>I have watched several teams try to maintain two parallel processes: the lightweight, day-to-day systems-engineering practice that runs alongside development, and a heavyweight, formal process reserved for decisions deemed sufficiently important. The lightweight process works. The heavyweight process does not, for a structurally interesting reason.</p>
        <p>The reason is that the decisions deemed important enough to warrant the heavyweight process are exactly the decisions where speed matters most. If your team has decided to switch sensor stacks, you are not going to spend six weeks producing a formal trade study while the rest of the company waits for the answer. You are going to make the decision in two weeks with the information you can gather quickly. The heavyweight process gets used as a justification for a decision that was actually made on intuition.</p>
        <p>The honest version is to admit that the lightweight process is your real process, and to invest in making it as rigorous as it can be at the cadence it operates at. That is a more useful project than maintaining a ceremonial heavyweight process for show.</p>
        <h2>What good looks like</h2>
        <p>At its best, systems engineering at startup cadence produces a continuously updated system-level reasoning layer that anyone on the team can read, contribute to, and rely on. The model lives in version control. The requirements are checkable. The interfaces are typed. The verification is automated. The reviews happen at the speed of pull requests.</p>
        <p>The systems engineer in this environment is not the gatekeeper. They are the editor and the historian, the person who makes sure the team's collective reasoning about the system stays coherent as the system changes, and who can produce, on demand, the chain of decisions that led to the current architecture.</p>
        <p>This is a different job than the one I trained for. It is also, in some important ways, a more useful one. The decisions move faster. The feedback is more immediate. The discipline is harder to maintain because there is less institutional support for it, which is precisely why doing it well is valuable.</p>
        <h2>The translation, in one sentence</h2>
        <p>The aerospace tradition gave systems engineering its methods. The software-cadence tradition is giving it back its relevance. The job is to keep the parts that earn their keep and let go of the parts that do not, without losing the habit of taking system-level reasoning seriously, which is the part worth keeping at any cadence.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin.</p>
      </article>
    </>
  );
}
