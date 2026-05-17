import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes by Stephan Claxton on model-based systems engineering, SysML, and autonomous vehicle development.",
};

export default function WritingIndex() {
  return (
    <article className="article" style={{ maxWidth: "48rem" }}>
      <div className="meta">Writing</div>
      <h1>Notes on systems, models, and the work in between</h1>
      <div className="byline">By Stephan Claxton</div>

      <ul className="writing-list" style={{ marginTop: "2rem" }}>
        <li>
          <time dateTime="2026-05">May 2026</time>
          <div>
            <Link href="/writing/satellites-to-autonomy">
              What satellite systems engineering taught me about building
              autonomous vehicles
            </Link>
            <p className="dek">
              Two domains that look nothing alike on the surface — and the MBSE
              discipline that translates between them.
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
}
