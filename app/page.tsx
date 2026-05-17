import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="label">Sunnyvale, CA · MMXXVI</div>
          <h1>Stephan Claxton</h1>
          <p className="lede">
            I design and architect engineered systems — where simulation,
            software, and hardware have to behave as one coherent thing.
          </p>
          <p className="lede">
            Today that work is in autonomy at Applied Intuition. Before that,
            model-based systems engineering for space and defense programs at
            Lockheed Martin and Strategic Technology Consulting, an Arcfield
            company.
          </p>
        </div>

        <aside>
          <dl>
            <dt>Practice</dt>
            <dd>Systems architecture &amp; design</dd>
            <dd>MBSE · SysML</dd>

            <dt>Domains</dt>
            <dd>Autonomy · Space · Defense</dd>

            <dt>Education</dt>
            <dd>MBA, Embry-Riddle</dd>
            <dd>BE, Western Michigan</dd>
          </dl>
        </aside>
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
            <span>Sunnyvale, CA</span>
          </div>

          <div className="role">Sr. Principal Systems Engineer · TPM</div>
          <div className="where">
            Strategic Technology Consulting (Arcfield)
            <span>Management consulting · Defense</span>
          </div>

          <div className="role">Sr. Systems Engineer</div>
          <div className="where">
            Lockheed Martin
            <span>Model-based systems engineering · Space &amp; defense</span>
          </div>
        </div>
      </section>
    </>
  );
}
