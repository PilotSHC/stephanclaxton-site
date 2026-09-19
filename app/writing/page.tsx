import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes by Stephan Claxton. Systems thinking applied to engineering in the age of AI and autonomy. Architecture, executable models, verification, and the discipline of building software that has to be right.",
};

export default function WritingIndex() {
  return (
    <article className="article">
      <div className="meta">Writing</div>
      <h1>
        Systems thinking, applied to engineering in the age of AI and autonomy
      </h1>
      <div className="byline">By Stephan Claxton</div>

      <ul className="writing-list" style={{ marginTop: "2rem" }}>
        <li>
          <time dateTime="2026-09">September 2026</time>
          <div>
            <Link href="/writing/design-intent-at-ai-speed">
              Design intent has to move at AI speed
            </Link>
            <p className="dek">
              AI accelerates implementation. Product leaders must make intent explicit, versioned, and executable at the same cadence as design and code.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-08">August 2026</time>
          <div>
            <Link href="/writing/advice-for-systems-engineers">
              What I would tell a systems engineer five years into their career
            </Link>
            <p className="dek">
              The career advice nobody gave me, written for the engineer I was at 28 and now sometimes see across the table.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-07">July 2026</time>
          <div>
            <Link href="/writing/av-verification-vs-spacecraft">
              Why autonomous vehicles have a harder verification problem than spacecraft
            </Link>
            <p className="dek">
              A satellite operates in a bounded environment. An autonomous vehicle operates in an open-ended one. The difference reshapes everything about how you build confidence in the system.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-07">July 2026</time>
          <div>
            <Link href="/writing/executable-models-verification">
              Executable models close the verification gap that descriptive models never could
            </Link>
            <p className="dek">
              A system model that can drive simulation is a different category of artifact than a system model that can only be reviewed.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-07">July 2026</time>
          <div>
            <Link href="/writing/mbse-at-startup-cadence">
              Doing systems engineering at startup cadence
            </Link>
            <p className="dek">
              The methods that work at Lockheed do not survive contact with a weekly release schedule. The methods that survive are the ones worth keeping anyway.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-06">June 2026</time>
          <div>
            <Link href="/writing/curse-of-the-sheep">
              The curse of the sheep
            </Link>
            <p className="dek">
              Reflections on context, mastery, and systems engineering from INCOSE IS 2026, and why the discipline exists to preserve understanding across time.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-06">June 2026</time>
          <div>
            <Link href="/writing/requirements-traceability-survival-skill">
              Requirements traceability is a survival skill, not a compliance checkbox
            </Link>
            <p className="dek">
              What aerospace gets right about traceability, what autonomous vehicle development is still figuring out, and why the answer changes depending on who is asking the question.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-06">June 2026</time>
          <div>
            <Link href="/writing/system-models-belong-in-ci">
              Your system model belongs in CI, not your document repository
            </Link>
            <p className="dek">
              SysML v2 helps, but the harder shift is how systems engineers work when AI handles the typing and git owns the truth.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-05">May 2026</time>
          <div>
            <Link href="/writing/reading-meadows-from-autonomy">
              Reading Donella Meadows from inside an autonomy company
            </Link>
            <p className="dek">
              A book about ecosystems and global resource flows is the most useful thing I have read for autonomy engineering. Why Meadows&#39;s leverage points matter more for AV development than additional simulation miles ever will.
            </p>
          </div>
        </li>
        <li>
          <time dateTime="2026-05">May 2026</time>
          <div>
            <Link href="/writing/satellites-to-autonomy">
              What satellite systems engineering taught me about building autonomous vehicles
            </Link>
            <p className="dek">
              Two domains that look nothing alike on the surface, and the MBSE discipline that translates between them.
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
}
