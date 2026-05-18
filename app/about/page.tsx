import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stephan Claxton. Systems engineering for AI and autonomy. Architecture, MBSE, and executable models for the software that has to be right. Today at Applied Intuition; previously Lockheed Martin and Arcfield.",
};

export default function AboutPage() {
  return (
    <article className="article">
      <div className="meta">About</div>
      <h1>About Stephan Claxton</h1>
      <div className="byline">
        Systems engineering for AI &amp; autonomy · Sunnyvale, CA
      </div>

      <p>
        I design and architect engineered systems for the era of AI and
        autonomy. The kind where software, hardware, machine-learned
        components, and human operations all have to behave as one coherent
        whole. My work sits at the intersection of model-based systems
        engineering and the practical realities of shipping
        high-consequence software that has to be right in environments you
        can&rsquo;t fully predict.
      </p>

      <p>
        Most of my career has been spent on systems that don&rsquo;t tolerate
        ambiguity: autonomous vehicles, spacecraft, and defense platforms. The
        common thread isn&rsquo;t the domain. It&rsquo;s the discipline of
        treating architecture as the actual design of the system, not a
        diagram you make after the code is written.
      </p>

      <p>
        Today that work is on autonomy at Applied Intuition, doing systems
        engineering for AI-driven vehicle development. Before that, I led
        senior systems engineering and technical program management at
        Strategic Technology Consulting (an Arcfield company), and I started
        in aerospace at Lockheed Martin doing model-based systems engineering
        for space and defense programs. That&rsquo;s where I learned to take
        models seriously, not as compliance artifacts but as the design of
        systems you can&rsquo;t reach once they&rsquo;re deployed.
      </p>

      <h2>Things I care about</h2>
      <p>
        What systems engineering becomes in the age of AI and autonomy.
        Executable models and what they mean for verification when the
        operational design domain is open-ended. Requirements traceability as
        a survival skill, not a checkbox. Architecture as the real product of
        systems engineering. The cultural translation problem of bringing
        aerospace-grade discipline into software-cadence development without
        slowing the whole thing down.
      </p>

      <h2>How I think about this work</h2>
      <p>
        The intellectual anchor for all of this is the systems-thinking
        tradition, Donella Meadows in particular, alongside Nancy
        Leveson&rsquo;s work on safety in complex software-intensive systems.
        The discipline asks not just <em>what is this system supposed to
        do</em> but <em>what behavior is its structure producing, and which
        interventions would actually change it</em>. MBSE, SysML, and
        executable models are tools. The discipline underneath is systems
        thinking applied seriously to engineering work that has to be right.
      </p>
      <p>
        The thing Meadows got right that the engineering world is still
        catching up to: <em>structure produces behavior</em>. The fastest way
        to change what a complex system does is to change the structure that
        produces its behavior. Not the people running it, not the metrics on
        top of it, and not the language used to describe it. Most of what I
        write is some version of that observation, applied to the
        engineering of autonomous and AI-driven systems.
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
        . I&rsquo;m especially interested in conversations with founders
        and technical leaders building in AI, autonomy, and other
        high-consequence software domains, as well as with engineers
        thinking about what good systems-engineering practice looks like at
        startup cadence.
      </p>
    </article>
  );
}
