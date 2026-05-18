import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stephanclaxton.com"),
  title: {
    default: "Stephan Claxton: Systems Engineering for AI & Autonomy",
    template: "%s · Stephan Claxton",
  },
  description:
    "Stephan Claxton. Systems engineering for AI and autonomy. Architecture, MBSE, and executable models for the software that has to be right. Today at Applied Intuition; previously Lockheed Martin and Arcfield.",
  keywords: [
    "Stephan Claxton",
    "Systems Engineering",
    "Systems Architecture",
    "Autonomous Vehicles",
    "Autonomy",
    "AI Systems",
    "Safety-Critical AI",
    "Verification",
    "Model-Based Systems Engineering",
    "MBSE",
    "Executable Models",
    "Applied Intuition",
    "Aerospace Systems",
    "Lockheed Martin",
  ],
  authors: [{ name: "Stephan Claxton" }],
  creator: "Stephan Claxton",
  openGraph: {
    type: "website",
    title: "Stephan Claxton: Systems Engineering for AI & Autonomy",
    description:
      "Systems engineering for AI and autonomy. Architecture, MBSE, and executable models for the software that has to be right.",
    url: "https://www.stephanclaxton.com",
    siteName: "Stephan Claxton",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Stephan Claxton: Systems Engineering for AI & Autonomy",
    description:
      "Architecture, MBSE, and executable models for AI and autonomy at Applied Intuition.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stephan Claxton",
  alternateName: "Stephan Claxton",
  jobTitle: "Systems Engineer",
  description:
    "Systems engineering for AI and autonomy. Architecture, MBSE, and executable models for high-consequence software across autonomy, space, and defense.",
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
    "Systems Engineering",
    "Systems Architecture",
    "Autonomous Vehicles",
    "AI Systems",
    "Safety-Critical AI",
    "Model-Based Systems Engineering",
    "Executable Models",
    "Verification",
    "Aerospace Systems",
    "Satellite Systems",
  ],
  url: "https://www.stephanclaxton.com",
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
              Stephan Claxton
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
