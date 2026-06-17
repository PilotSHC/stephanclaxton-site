import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes by Stephan Claxton. Systems thinking applied to engineering in the age of AI and autonomy. Architecture, executable models, verification, and the discipline of building software that has to be right.",
};

export default function WritingIndex() {
  return (
    <article className="article" style={{ maxWidth: "48rem" }}>
      <div className="meta">Writing</div>
      <h1>
        Systems thinking, applied to engineering in the age of AI and autonomy
      </h1>
      <div className="byline">By Stephan Claxton</div>

      <ul className="writing-list" style={{ marginTop: "2rem" }}>
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
