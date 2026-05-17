import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stephanclaxton.com"),
  title: {
    default: "Stephan Claxton — Engineering Systems Design & Architecture",
    template: "%s — Stephan Claxton",
  },
  description:
    "Stephan Claxton — engineering systems design and architecture. Model-based systems engineering, SysML, and complex system integration across autonomy, space, and defense.",
  keywords: [
    "Stephan Claxton",
    "Systems Architect",
    "Systems Architecture",
    "Systems Design",
    "Systems Engineering",
    "Model-Based Systems Engineering",
    "MBSE",
    "SysML",
    "Autonomous Vehicles",
    "Aerospace Systems",
    "Applied Intuition",
    "Lockheed Martin",
    "Embry-Riddle",
  ],
  authors: [{ name: "Stephan Claxton" }],
  creator: "Stephan Claxton",
  openGraph: {
    type: "website",
    title: "Stephan Claxton — Engineering Systems Design & Architecture",
    description:
      "Engineering systems design and architecture across autonomy, space, and defense. MBSE, SysML, and complex system integration.",
    url: "https://stephanclaxton.com",
    siteName: "Stephan Claxton",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Stephan Claxton — Engineering Systems Design & Architecture",
    description:
      "Systems architecture and design. MBSE, SysML, autonomy, space, defense.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stephan Claxton",
  alternateName: "Stephan Claxton",
  jobTitle: "Systems Architect",
  description:
    "Engineering systems design and architecture across autonomy, space, and defense. Model-based systems engineering and SysML.",
  worksFor: {
    "@type": "Organization",
    name: "Applied Intuition",
    url: "https://www.appliedintuition.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Embry-Riddle Aeronautical University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Western Michigan University",
    },
  ],
  knowsAbout: [
    "Systems Architecture",
    "Systems Design",
    "Model-Based Systems Engineering",
    "SysML",
    "Autonomous Vehicles",
    "Aerospace Systems",
    "Satellite Systems",
  ],
  url: "https://stephanclaxton.com",
  sameAs: [
    "https://www.linkedin.com/in/stephan-claxton-mbse-mba-91895691/",
    // add others as you claim them:
    // "https://github.com/<handle>",
    // "https://x.com/<handle>",
    // "https://medium.com/@<handle>",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <div className="shell">
          <header className="site-header">
            <Link href="/" className="mark">
              Stephan Claxton <em>— Systems Architecture</em>
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/">Index</Link>
              <Link href="/writing">Writing</Link>
              <Link href="/about">About</Link>
              <Link href="mailto:hello@stephanclaxton.com">Contact</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Stephan Claxton</span>
            <span>
              <a
                href="https://www.linkedin.com/in/stephan-claxton-mbse-mba-91895691/"
                rel="me noopener"
                target="_blank"
              >
                LinkedIn
              </a>
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
