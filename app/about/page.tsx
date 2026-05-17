import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stephan Claxton — engineering systems design and architecture across autonomy, space, and defense. Model-based systems engineering, SysML, and complex software-hardware integration.",
};

export default function AboutPage() {
  return (
    <article className="article">
      <div className="meta">About</div>
      <h1>About Stephan Claxton</h1>
      <div className="byline">
        Engineering systems design &amp; architecture · Sunnyvale, CA
      </div>

      <p>
        I design and architect engineered systems — the kind where software,
        hardware, and human operations all have to behave as one coherent
        whole. My work sits at the intersection of model-based systems
        engineering methodology and the practical realities of shipping
        complex systems that have to behave correctly in environments you
        can&rsquo;t fully predict.
      </p>

      <p>
        Most of my career has been spent on systems that don&rsquo;t tolerate
        ambiguity: autonomous vehicles, spacecraft, and defense platforms. The
        common thread isn&rsquo;t the domain — it&rsquo;s the discipline of
        treating architecture as the actual design of the system, not a
        diagram you make after the code is written.
      </p>

      <p>
        Today that work is in autonomy at Applied Intuition. Before that, I
        led senior systems engineering and technical program management at
        Strategic Technology Consulting (an Arcfield company), and I started
        in aerospace at Lockheed Martin doing model-based systems engineering
        for space and defense programs. That&rsquo;s where I learned to take
        models seriously — not as compliance artifacts, but as the design of
        systems you can&rsquo;t reach once they&rsquo;re deployed.
      </p>

      <h2>Things I care about</h2>
      <p>
        SysML v2 and what executable models will mean for the next decade of
        systems engineering. Requirements traceability as a survival skill,
        not a checkbox. Architecture as the real product of systems
        engineering. The cultural translation problem of bringing
        aerospace-grade discipline into software-cadence development without
        slowing the whole thing down.
      </p>

      <h2>Education</h2>
      <p>
        MBA in Finance from Embry-Riddle Aeronautical University. Bachelor of
        Engineering from Western Michigan University.
      </p>

      <h2>Get in touch</h2>
      <p>
        The best way to reach me is{" "}
        <a href="mailto:hello@stephanclaxton.com">email</a> or{" "}
        <a
          href="https://www.linkedin.com/in/stephan-claxton-mbse-mba-91895691/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
        . I&rsquo;m especially interested in conversations about systems
        architecture in high-consequence software, MBSE and SysML tooling,
        and what good systems-engineering practice looks like at startup
        cadence.
      </p>
    </article>
  );
}
