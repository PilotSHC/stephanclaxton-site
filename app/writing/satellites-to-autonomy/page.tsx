import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What satellite systems engineering taught me about building autonomous vehicles",
  description:
    "By Stephan Claxton. Two domains that look nothing alike on the surface, and the MBSE discipline that translates between them.",
  openGraph: {
    title:
      "What satellite systems engineering taught me about building autonomous vehicles",
    description:
      "By Stephan Claxton, Systems Engineer at Applied Intuition.",
    type: "article",
    publishedTime: "2026-05-16",
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What satellite systems engineering taught me about building autonomous vehicles",
  author: {
    "@type": "Person",
    name: "Stephan Claxton",
    url: "https://www.stephanclaxton.com",
  },
  datePublished: "2026-05-16",
  publisher: {
    "@type": "Person",
    name: "Stephan Claxton",
  },
};

export default function Article() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article">
        <div className="meta">Essay · May 2026</div>
        <h1>
          What satellite systems engineering taught me about building
          autonomous vehicles
        </h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>
          Before I worked on autonomous vehicles, I worked on systems that
          couldn&rsquo;t be touched after launch.
        </p>

        <p>
          That&rsquo;s the defining constraint of satellite engineering, and it
          shapes everything. When a spacecraft separates from the launch
          vehicle, every architectural decision you made (every requirement
          you traced, every failure mode you analyzed, every interface you
          documented) is now permanent. You don&rsquo;t get to push a hotfix
          to a satellite in geosynchronous orbit. You get telemetry, and you
          get whatever resilience you designed in years earlier.
        </p>

        <p>
          Moving from that world into autonomous vehicle development at Applied
          Intuition has been clarifying in unexpected ways. The two domains
          look nothing alike on the surface. But the systems engineering
          discipline underneath, and specifically the model-based systems
          engineering discipline, translates more directly than I expected.
        </p>

        <h2>Satellites taught me to take models seriously</h2>

        <p>
          Spacecraft programs have used MBSE for decades, not because it&rsquo;s
          fashionable but because the alternative is unworkable. You cannot
          integrate a satellite the way you integrate a web app. By the time
          hardware exists, the architecture has to be right. SysML models,
          requirements databases, interface control documents: these
          aren&rsquo;t compliance artifacts on a space program. They&rsquo;re
          the actual design.
        </p>

        <p>
          What I carried into AV work is a deep skepticism of &ldquo;we&rsquo;ll
          figure it out in integration.&rdquo; On a satellite, you don&rsquo;t
          figure it out in integration. You figure it out in the model, two
          years before integration, or you fly a very expensive paperweight.
        </p>

        <h2>Autonomy has the harder verification problem</h2>

        <p>
          Here&rsquo;s where the comparison gets interesting. A satellite
          operates in an environment that is mostly predictable: orbital
          mechanics, thermal cycles, radiation, known mission phases. The
          operational design domain is bounded.
        </p>

        <p>
          An autonomous vehicle&rsquo;s operational design domain is open-ended
          in a way no spacecraft&rsquo;s ever is. Every intersection is
          different. Every human driver behaves differently. The long tail of
          edge cases is genuinely infinite. You can verify a satellite&rsquo;s
          behavior against its mission profile; you cannot exhaustively verify
          an AV against the world.
        </p>

        <p>
          That&rsquo;s why MBSE matters <em>more</em> in autonomy, not less.
          When you can&rsquo;t test your way to confidence, you have to
          architect your way there. You need executable models that can
          drive simulation across scenario spaces no test fleet can physically
          cover.
        </p>

        <h2>The cultural difference is real</h2>

        <p>
          The hardest adjustment wasn&rsquo;t technical. Space programs run on
          multi-year cycles with formal milestone reviews, requirements
          baselines, and change boards. AV development runs on weekly
          iterations, simulation runs measured in millions of miles, and
          architectural decisions that have to survive both rapid software
          change and the eventual scrutiny of a serious incident investigation.
        </p>

        <p>
          The instinct from space (&ldquo;lock the architecture, then
          build&rdquo;) doesn&rsquo;t survive contact with autonomy. But the{" "}
          <em>underlying habit</em> of taking architecture seriously, of
          treating system-level reasoning as a real discipline rather than
          something engineers do in their heads, absolutely does. The teams
          that succeed in AV development aren&rsquo;t the ones that abandon
          systems engineering. They&rsquo;re the ones that figure out how to do
          it at a faster cadence.
        </p>

        <h2>Where MBSE is heading</h2>

        <p>
          SysML v2 is going to matter more than the broader engineering
          community currently realizes. The textual syntax, the cleaner
          semantics, the genuinely improved tooling: all of it points toward a
          future where systems models live in version control alongside code,
          get reviewed in pull requests, and participate in CI/CD pipelines.
          That&rsquo;s a world satellite programs have been gesturing toward
          for years and a world AV programs are actively building.
        </p>

        <p>
          If you&rsquo;re a systems engineer thinking about where to spend your
          next decade, I&rsquo;d point at the intersection of MBSE methodology
          and high-consequence software systems, whether that&rsquo;s
          spacecraft, autonomy, defense, or medical devices. The problems are
          getting harder. The tooling is finally catching up.
        </p>

        <p>And the lessons from space turn out to travel further than I expected.</p>

        <hr />

        <p className="endnote">
          Stephan Claxton is a Systems Engineer at Applied Intuition. He
          previously held senior systems engineering roles at Strategic
          Technology Consulting (an Arcfield company) and Lockheed Martin,
          where he worked on model-based systems engineering for space and
          defense programs. He holds an MBA from Embry-Riddle Aeronautical
          University and an engineering degree from Western Michigan
          University.
        </p>
      </article>
    </>
  );
}
