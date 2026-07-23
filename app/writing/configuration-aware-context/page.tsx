import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI doesn't know which system you're talking about",
  description: "AI engineering tools answer questions without knowing which system they are advising. That is a context problem, not a hallucination problem.",
  openGraph: {
    title: "AI doesn't know which system you're talking about",
    description: "AI engineering tools answer questions without knowing which system they are advising. That is a context problem, not a hallucination problem.",
    type: "article",
    publishedTime: "2026-08-26T09:00:00-07:00",
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI doesn't know which system you're talking about",
  "author": {
    "@type": "Person",
    "name": "Stephan Claxton",
    "url": "https://www.stephanclaxton.com"
  },
  "datePublished": "2026-08-26T09:00:00-07:00",
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
        <h1>AI doesn&apos;t know which system you&apos;re talking about</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>Every engineering decision is made against a specific system configuration.</p>
        <p>Whether a design choice is correct depends on the software baseline, hardware variant, interfaces, operational design domain (ODD), requirements baseline, accepted risks, and every design decision that came before it. Change any one of those, and the correct engineering answer can change with it.</p>
        <p>This is where today&apos;s AI engineering tools break down.</p>
        <p>They answer engineering questions as if engineering knowledge is universal, as if there is one correct answer independent of the system being built. There rarely is.</p>
        <p>Ask an AI assistant how to handle degraded localization. It will give you a technically sound answer. But it doesn&apos;t know whether your vehicle uses GNSS, wheel odometry, SLAM, RTK corrections, or infrastructure-assisted localization. It doesn&apos;t know your safety goals, your hardware revision, your ODD, or the assumptions already embedded throughout your architecture.</p>
        <p>It will still answer.</p>
        <p>That isn&apos;t a hallucination problem.</p>
        <p>It&apos;s a context problem.</p>

        <h2>Configuration is more than a version number</h2>
        <p>When engineers talk about configuration, they aren&apos;t talking about software version 4.2.</p>
        <p>Configuration is the complete engineering state of a system at a point in time.</p>
        <p>It includes the requirements that have been baselined, the interfaces that have been approved, the hardware that&apos;s actually installed, the architecture decisions that have already been made, the verification evidence that exists, the known exceptions, waivers, and the constraints inherited from earlier design decisions.</p>
        <p>Change any of those and you&apos;re no longer talking about the same system.</p>
        <p>You&apos;re solving a different engineering problem.</p>
        <p>This is why configuration management exists.</p>
        <p>Configuration Control Boards, interface baselines, change requests, and version-controlled models aren&apos;t bureaucracy. They&apos;re how engineering organizations ensure thousands of decisions remain consistent with one another over years of development.</p>
        <p>Every decision inherits context from previous decisions.</p>

        <h2>Where AI falls apart</h2>
        <p>Current AI tools don&apos;t operate against that engineering context.</p>
        <p>They operate against general engineering knowledge.</p>
        <p>That works surprisingly well. Until it doesn&apos;t.</p>
        <p>Imagine asking whether a planner&apos;s response latency is acceptable.</p>
        <p>The answer might be perfectly reasonable for one architecture while being completely wrong for yours because your perception pipeline, hardware, or safety allocation changed six months ago.</p>
        <p>Nothing in the response tells you that.</p>
        <p>The advice sounds correct.</p>
        <p>The failure doesn&apos;t show up until integration, testing, or certification.</p>
        <p>That&apos;s the dangerous part.</p>
        <p>The problem isn&apos;t that AI produces bad engineering advice.</p>
        <p>The problem is that it produces advice without knowing which system it&apos;s advising.</p>

        <h2>Context isn&apos;t something you type into a prompt</h2>
        <p>Most people try to solve this by giving the model more information.</p>
        <p>&ldquo;We&apos;re running software baseline 4.2.&rdquo;</p>
        <p>&ldquo;We&apos;re using Platform B.&rdquo;</p>
        <p>&ldquo;This is Release 17.&rdquo;</p>
        <p>That helps, but it doesn&apos;t solve the problem.</p>
        <p>Those are labels.</p>
        <p>The model still doesn&apos;t know what baseline 4.2 actually contains.</p>
        <p>Real engineering context isn&apos;t a paragraph.</p>
        <p>It&apos;s the collection of engineering artifacts that define the system.</p>
        <p>Requirements.</p>
        <p>Architecture.</p>
        <p>Interfaces.</p>
        <p>Verification evidence.</p>
        <p>Hazard analyses.</p>
        <p>Traceability.</p>
        <p>Configuration history.</p>
        <p>The AI shouldn&apos;t be reasoning from a summary of those artifacts.</p>
        <p>It should be reasoning from the artifacts themselves.</p>

        <h2>Why version-controlled system models matter</h2>
        <p>This is why the system model is the most practical foundation for configuration-aware AI.</p>
        <p>A version-controlled model represents the engineering configuration at a specific point in time.</p>
        <p>A commit isn&apos;t just source code.</p>
        <p>It&apos;s an addressable snapshot of engineering intent.</p>
        <p>If an AI reasons over the model at commit X, it shares the same ground truth as the engineering team reviewing commit X.</p>
        <p>Now engineering discussions become reproducible.</p>
        <p>If the configuration changes, the reasoning changes.</p>
        <p>If the model changes, the recommendations change.</p>
        <p>That&apos;s how engineering actually works.</p>

        <h2>Autonomous systems make this obvious</h2>
        <p>Autonomous vehicles expose the problem faster than almost any other industry.</p>
        <p>The software stack evolves weekly.</p>
        <p>Vehicle variants use different hardware.</p>
        <p>Behavior changes across releases.</p>
        <p>The ODD changes by geography.</p>
        <p>Safety assumptions change as evidence accumulates.</p>
        <p>Ask whether a degraded sensor response is acceptable without knowing the current vehicle variant, current behavioral requirements, and current ODD, and the AI literally cannot determine the correct answer.</p>
        <p>It will still give one.</p>
        <p>That&apos;s the structural flaw.</p>

        <h2>The real divide</h2>
        <p>General engineering knowledge explains how systems typically work.</p>
        <p>Engineering practice determines how this system works, in this configuration, under these constraints.</p>
        <p>Systems engineers spend their careers bridging that gap.</p>
        <p>Today&apos;s AI largely ignores it.</p>
        <p>That&apos;s why AI-generated engineering advice often feels intelligent while still requiring experienced engineers to reinterpret it before acting.</p>
        <p>The missing piece isn&apos;t a larger model.</p>
        <p>It&apos;s configuration-aware context.</p>

        <h2>What needs to change</h2>
        <p>Engineering AI needs to stop treating configuration as something hidden in a prompt.</p>
        <p>Configuration should be a first-class input.</p>
        <p>That input should come directly from version-controlled engineering artifacts.</p>
        <p>And engineers need tools that can reason against the same configuration the program is actually building, not some generic representation of what similar systems usually look like.</p>
        <p>Generic engineering advice isn&apos;t inherently wrong.</p>
        <p>It&apos;s simply disconnected from the system it&apos;s trying to improve.</p>
        <p>In engineering, that distinction is everything.</p>

        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p>
      </article>
    </>
  );
}
