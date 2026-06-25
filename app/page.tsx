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
            the engineering discipline that fixes that, across autonomy, space,
            and defense.
          </p>
          <p className="lede">
            Today: systems engineering for autonomy at Applied Intuition.
            Before: MBSE for space and defense programs at Lockheed Martin,
            then technical program management at Strategic Technology
            Consulting (Arcfield).
          </p>
        </div>

        <aside>
          <dl>
            <dt>Practice</dt>
            <dd>Architecture for AI &amp; autonomy</dd>
            <dd>MBSE · executable models · verification</dd>

            <dt>Domains</dt>
            <dd>Autonomy · Space · Defense</dd>

            <dt>Now</dt>
            <dd>
              Writing on the next generation of systems engineering, for AI,
              autonomy, and the software that has to be right
            </dd>
          </dl>
        </aside>
      </section>

      <section className="section">
        <h2>Field notes</h2>
        <ul className="field-notes">
          <li>
            Structure produces behavior. The architecture of a system is its
            actual design. Change the architecture and you change what the
            system does. Change anything else, and you mostly change the
            story you tell about it.
          </li>
          <li>
            Building autonomy is the hardest verification problem in
            engineering today, and the one rewriting how systems engineering
            is practiced.
          </li>
          <li>
            Requirements traceability is institutional memory. It feels useful
            exactly once, on the worst day. That is enough.
          </li>
          <li>
            The aerospace tradition gave systems engineering its methods. AI
            and autonomy are giving it back its relevance, and making
            executable models the new default.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Writing</h2>
        <ul className="writing-list">
          <li>
            <time dateTime="2026-08">August 2026</time>
            <div>
              <Link href="/writing/curse-of-the-sheep">
                The curse of the sheep
              </Link>
              <p className="dek">
                A Yokohama coffee roaster, six days at INCOSE IS 2026, and why
                systems engineering is the discipline of preserving engineering
                memory.
              </p>
            </div>
          </li>
          <li>
            <time dateTime="2026-05">May 2026</time>
            <div>
              <Link href="/writing/satellites-to-autonomy">
                What satellite systems engineering taught me about building
                autonomous vehicles
              </Link>
              <p className="dek">
                Two domains that look nothing alike on the surface, and the
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
              Model-based systems engineering for space &amp; defense programs.
              SysML modeling, requirements architecture, MBSE practice.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
