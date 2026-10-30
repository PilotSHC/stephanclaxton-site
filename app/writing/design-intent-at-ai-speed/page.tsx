import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design intent has to move at AI speed",
  description: "AI accelerates implementation. Product leaders must make intent explicit, versioned, and executable at the same cadence as design and code.",
  alternates: {
    canonical: "/writing/design-intent-at-ai-speed",
  },
  openGraph: {
    title: "Design intent has to move at AI speed",
    description: "AI accelerates implementation. Product leaders must make intent explicit, versioned, and executable at the same cadence as design and code.",
    type: "article",
    url: "/writing/design-intent-at-ai-speed",
    siteName: "Stephan Claxton",
    locale: "en_US",
    publishedTime: "2026-09-18T09:00:00-07:00",
    authors: ["Stephan Claxton"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design intent has to move at AI speed",
    description: "AI accelerates implementation. Product leaders must make intent explicit, versioned, and executable at the same cadence as design and code.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Design intent has to move at AI speed",
  "author": {
    "@type": "Person",
    "name": "Stephan Claxton",
    "url": "https://www.stephanclaxton.com"
  },
  "datePublished": "2026-09-18T09:00:00-07:00",
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
        <h1>Design intent has to move at AI speed</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>When I was learning to ski, my instructor gave me a line I still think about:</p>
        <p>“Speed hides mistakes.”</p>
        <p>At low speed, bad technique is obvious. You feel the hesitation, the poor balance, the turn that never quite closes. Add speed and some of those problems appear to disappear. Momentum carries you through. The run feels smoother, right up to the moment the terrain changes and the mistake you never corrected matters all at once.</p>
        <p>The lesson was not to avoid speed. It was to develop technique that still worked when I accelerated.</p>
        <p>AI creates the same problem in product development. Teams can move from an idea to a working implementation before the organization has made the intent behind the idea precise. The demo looks good. The local tests pass. Momentum makes the product feel coherent.</p>
        <p>Then the terrain changes. A second product variant behaves differently. A safety constraint appears late. The team discovers that product, engineering, and verification each implemented a different version of the same decision.</p>
        <p>The product leadership problem is no longer how to make execution faster. It is how to design intent at the speed execution can now move.</p>
        <h2>AI makes execution cheap and intent scarce</h2>
        <p>In many product organizations, implementation capacity constrains the roadmap. Teams spend significant energy deciding what deserves engineering time because engineering time is expensive.</p>
        <p>AI changes that constraint.</p>
        <p>An agent can explore several designs, build a prototype, draft tests, and revise the implementation while the team is still discussing the original request. This is useful. It also makes a weak product decision look more complete than it is.</p>
        <p>Code is evidence that something can be built. It is not evidence that the organization agreed on what should be built.</p>
        <p>Product intent is more than a feature description. It connects a customer outcome to the behavior the product should produce, the boundaries within which that behavior is acceptable, the tradeoffs leadership is willing to make, and the evidence required before the result can ship.</p>
        <p>When that intent remains distributed across a roadmap item, a design conversation, an architecture model, and several people’s memories, AI accelerates each local interpretation. The organization gets more output and less convergence.</p>
        <p>That is the new bottleneck. Execution capacity is growing faster than the company’s ability to maintain shared intent.</p>
        <h2>Susan is carrying intent between two lifecycles</h2>
        <p>A systems engineer I will call Susan is working through this transition now.</p>
        <p>She learned to preserve intent through complete artifacts. Requirements hold the expected behavior. Architecture records the boundaries and allocations. Verification planning defines what evidence will be needed. Formal reviews bring those pieces together before implementation moves too far.</p>
        <p>Software development uses a different unit of work. Intent arrives as a small change: a ticket, a pull request, a test, or a conversation attached to the next release. The system changes continuously, often before a traditional review package could be completed.</p>
        <p>Susan is asked to preserve the same level of reasoning at a much shorter cadence.</p>
        <p>If she maintains the old artifact lifecycle, implementation moves ahead while she documents the decision. Her model becomes a record of what the software team already did. If she matches the software cadence by reducing everything to a ticket, the detail disappears. Assumptions, affected variants, and verification consequences return later as integration problems.</p>
        <p>This can look like resistance to software. It is a product operating-model failure: the roadmap item is too thin to preserve the decision, while the systems artifact arrives too late to shape it.</p>
        <p>A product lead should not ask Susan to choose between those lifecycles. The smaller unit of intent must carry the outcome, boundary, affected variants, unresolved tradeoffs, and evidence obligation from the moment the decision enters the roadmap.</p>
        <h2>Make intent a versioned product decision</h2>
        <p>Consider a decision to let an autonomous inspection system classify certain defects without routing every result to a human reviewer.</p>
        <p>The roadmap can express this as higher throughput. The implementation can express it as a changed confidence threshold. Neither representation carries the full decision.</p>
        <p>The intent includes which defect classes and customers are in scope, the cost of false acceptance versus false rejection, when human review remains mandatory, and what evidence leadership expects before release.</p>
        <p>Those relationships need one versioned decision boundary.</p>
        <p>Treat the decision, not the ticket, as the durable unit. Its record should show the customer outcome, current scope, rejected alternatives, assumptions, owner, and release standard. Requirements, code, and evidence may remain in their own tools, but each change should identify the decision version it implements.</p>
        <p>That gives iteration memory. The team can change direction without losing why the previous boundary existed or which commitments must now be reconsidered.</p>
        <h2>Stable intent creates room to move</h2>
        <p>Product leaders do not create speed by specifying every implementation detail. They create speed by making the important boundaries clear.</p>
        <p>A team should know the outcome it owns, the system behavior that must remain true, the interfaces it cannot change alone, and the risks that require escalation. Inside those boundaries, engineers and agents should have room to explore.</p>
        <p>Too little intent creates rework. Teams discover late that they solved different problems or optimized one component at the expense of the product.</p>
        <p>Too much prescription creates waiting. Every local decision returns to the center because the specification confused product intent with implementation design.</p>
        <p>The useful middle is precise about commitments and flexible about means.</p>
        <p>For a reversible software behavior behind a controlled release, the intent may leave several implementation choices open and ask for rapid evidence from a narrow deployment. For a behavior that crosses a safety boundary or changes hardware assumptions, the intent should constrain more and require broader authority.</p>
        <p>Consequence and reversibility determine how much freedom a change can carry. Product leadership defines those rules before schedule pressure defines them badly.</p>
        <p>AI performs better inside this structure. It can generate options against explicit outcomes and constraints, compare their system effects, and identify where a proposal exceeds the decision boundary. Without that structure, the agent fills gaps with plausible assumptions. Speed hides the missing intent.</p>
        <h2>Detail should become progressive, not disposable</h2>
        <p>Moving faster does not mean every decision begins with maximum detail.</p>
        <p>Early product work is supposed to be incomplete. A team may know the customer outcome before it knows the system allocation. It may know the operating boundary before it selects the implementation. Forcing full precision too early turns the intent model into speculation.</p>
        <p>The important property is that detail accumulates without breaking the decision apart.</p>
        <p>The initial intent can state the outcome, scope, and constraints. Architecture adds affected boundaries and variants. Engineering adds implementation choices. Verification adds the evidence plan. Each contribution deepens the same decision instead of creating another artifact that has to be reconciled later.</p>
        <p>This is progressive fidelity.</p>
        <p>It preserves the level of detail systems engineering needs while letting the organization commit detail only when the decision requires it. A product leader can review the customer and portfolio implications without reading a system model. A safety engineer can inspect the operating assumptions and evidence. A software engineer can see the interface and behavioral consequences in the change they are implementing.</p>
        <p>Different views serve different users. The underlying intent remains connected.</p>
        <p>That connection is what lets iteration accelerate. A changed customer priority can propagate into the affected system decisions. An architecture constraint can return to the roadmap before a team spends a sprint building through it. Detail becomes useful to speed because it arrives where the next decision happens.</p>
        <h2>Manage unresolved intent as product work</h2>
        <p>A product lead should ask two separate questions before commitment: what will it cost to build this capability, and what will it cost to know it behaves as intended?</p>
        <p>Keep unresolved intent visible alongside delivery work. Decisions without an owner, an operating boundary, a chosen tradeoff, or a release standard are not ready for autonomous execution, even if a prototype exists.</p>
        <p>The aim is not instant certainty. It is to settle each question before implementation turns an assumption into product behavior.</p>
        <h2>Product leadership becomes intent architecture</h2>
        <p>The product lead has to make intent a managed product surface.</p>
        <p>At each decision boundary, someone must own the outcome, scope, tradeoffs, and release standard. The lead’s job is to keep those commitments coherent as customer evidence and technical constraints change, then give teams freedom inside them.</p>
        <p>AI exposes whether the organization had a shared decision or only a persuasive prototype.</p>
        <p>That means defining which decisions need system-level intent, who owns each boundary, what detail is required at each stage, and which evidence permits the decision to move. It means funding the connections between roadmap, architecture, implementation, and verification. It also means retiring duplicate artifacts once the new path has earned authority.</p>
        <p>The objective is not to preserve an old lifecycle at a higher speed. It is to preserve the quality of thought that lifecycle was trying to protect while changing the structure that carries it.</p>
        <p>My ski instructor was right. Speed hides mistakes.</p>
        <p>The answer is to make intent visible enough that acceleration stops hiding them.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p>
      </article>
    </>
  );
}
