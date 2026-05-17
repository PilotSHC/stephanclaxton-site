import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="label">Sunnyvale, CA · MMXXVI</div>
          <h1>Stephan Claxton</h1>
          <p className="lede">
            Most high-consequence software is built without a system. I work on
            the engineering discipline that fixes that — across autonomy, space,
            and defense.
          </p>
          <p className="lede">
            Today at Applied Intuition. Before that, model-based systems
            engineering for space and defense programs at Lockheed Martin and
            Strategic Technology Consulting, an Arcfield company.
          </p>
        </div>

        <aside>
          <dl>
            <dt>Practice</dt>
            <dd>Systems architecture &amp; design</dd>
            <dd>MBSE · SysML v2</dd>

            <dt>Domains</dt>
            <dd>Autonomy · Space · Defense</dd>

            <dt>Now</dt>
            <dd>
              Writing on executable models, MBSE in CI, &amp; systems
              engineering at startup cadence
            </dd>
          </dl>
        </aside>
      </section>

      <section className="section">
        <h2>Field notes</h2>
        <ul className="field-notes">
          <li>
            Architecture is the <em>actual</em> design of the system — not a
            diagram produced after the code is written.
          </li>
          <li>
            Requirements traceability is institutional memory. It feels useful
            exactly once, on the worst day. That is enough.
          </li>
          <li>
            Executable models close the verification gap descriptive models
            never could. Within five years, descriptive-only systems modeling
            will look the way hand-maintained interface documents look today.
          </li>
          <li>
            The aerospace tradition gave systems engineering its methods. The
            software-cadence tradition is giving it back its relevance.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Writing</h2>
        <ul className="writing-list">
          <li>
            <time dateTime="2026-05">May 2026</time>
            <div>
              <Link href="/writing/satellites-to-autonomy">
                What satellite systems engineering taught me about building
                autonomous vehicles
              </Link>
              <p className="dek">
                Two domains that look nothing alike on the surface — and the
                MBSE discipline that translates between them.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="role">Systems Engineer</div>
          <div className="where">
            Applied Intuition
            <span>
              Systems architecture &amp; verification for autonomous vehicle
              development
            </span>
          </div>

          <div className="role">Sr. Principal Systems Engineer · TPM</div>
          <div className="where">
            Strategic Technology Consulting (Arcfield)
            <span>
              Senior systems engineering and technical program management on
              defense programs
            </span>
          </div>

          <div className="role">Sr. Systems Engineer</div>
          <div className="where">
            Lockheed Martin
            <span>
              Model-based systems engineering for space &amp; defense programs
              — SysML modeling, requirements architecture, MBSE practice
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
