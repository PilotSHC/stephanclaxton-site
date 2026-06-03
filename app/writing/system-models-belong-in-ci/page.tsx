import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your system model belongs in CI, not your document repository",
  description: "The shift from descriptive models to executable ones is what finally makes system-level engineering compatible with the cadence of modern autonomy and AI development.",
  openGraph: {
    title: "Your system model belongs in CI, not your document repository",
    description: "The shift from descriptive models to executable ones is what finally makes system-level engineering compatible with the cadence of modern autonomy and AI development.",
    type: "article",
    publishedTime: "2026-06-03T09:00:00-07:00",
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your system model belongs in CI, not your document repository",
  "author": {
    "@type": "Person",
    "name": "Stephan Claxton",
    "url": "https://www.stephanclaxton.com"
  },
  "datePublished": "2026-06-03T09:00:00-07:00",
  "publisher": {
    "@type": "Person",
    "name": "Stephan Claxton"
  }
};

export default function Article() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article">
        <div className="meta">Essay</div>
        <h1>Your system model belongs in CI, not your document repository</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>For thirty years, systems models have lived in document repositories. Engineers built them in heavyweight desktop tools, exported them as PDFs for review, and watched them quietly drift out of sync with what the teams actually shipped. The discipline of model-based systems engineering survived this not because the models were useful in real time, but because the alternative (no system-level reasoning at all) was worse.</p>
        <p>SysML v2 changes the economics of that arrangement. Not because the language is better designed than its predecessor, though it is. The real shift is structural: the models can finally live where the rest of the engineering work lives.</p>
        <h2>The case for putting models in git</h2>
        <p>A SysML v2 model is text. That sounds trivial, but it's the difference between a model that participates in your engineering workflow and one that doesn't. You can diff it. You can review it. You can merge two engineers' changes. You can revert a commit that broke an invariant. You can write a tool that runs on every push.</p>
        <p>These are the same affordances that made software engineering productive for the last two decades. Systems engineering has been doing without them, and the cost shows up everywhere: in models that lag the implementation by months, in interface documents that nobody fully trusts, in design reviews that surface "the model doesn't reflect the current architecture" as a recurring agenda item.</p>
        <h2>What CI for systems models actually looks like</h2>
        <p>Concretely, here's what a CI pipeline for a SysML v2 model can do today:</p>
        <p>A pre-commit step parses the model and checks that every requirement has a verification method assigned. A pull request check confirms that every newly introduced interface has both a sender and a receiver. A nightly job runs the model's executable behavior against a scenario library and reports which requirements are still satisfied. A deploy gate refuses to ship if any safety-relevant requirement has degraded its verification status.</p>
        <p>None of this requires new tooling categories. It requires treating the model as a first-class artifact that goes through the same review machinery as the code.</p>
        <h2>The cultural lift is harder than the technical lift</h2>
        <p>Most teams I've watched try this hit the same wall: the systems engineers want to keep working in their familiar graphical tools, and the software engineers don't want to learn SysML. The models stay in the desktop tool, the CI integration becomes a one-way export, and within six months the model is back to being a quarterly artifact.</p>
        <p>The teams that succeed treat the model the same way they treat any other piece of source code. The graphical view becomes a rendering of the text, not the canonical form. New engineers are taught to read the SysML the way they're taught to read TypeScript. Pull requests touch both code and model files together. Architectural decisions are recorded in commit messages.</p>
        <p>This is a real shift, and not everyone wants to make it. But the teams that do start to get something genuinely new: a system-level reasoning layer that stays current with the implementation because it has nowhere else to drift to.</p>
        <h2>What changes downstream</h2>
        <p>Once the model lives in CI, a few second-order effects show up.</p>
        <p>Verification becomes more honest. When the verification status of every requirement is computed from the model's last test run, "we tested that" gets replaced with "the requirement was satisfied on commit a1b2c3d4."</p>
        <p>Cross-team coordination gets faster. Interface changes propagate visibly. A subsystem team that breaks a contract sees the build go red the same way a software team would.</p>
        <p>Onboarding gets easier. New engineers can read the system architecture by reading the repository, not by sitting through a series of overview presentations.</p>
        <p>None of these are revolutionary on their own. Together, they start to look like systems engineering at software cadence.</p>
        <h2>Where this is heading</h2>
        <p>The interesting question is what happens when this becomes normal. Systems engineering as a discipline has spent decades arguing that it deserves a seat at the table during early architecture work. The honest answer is that the seat has often been awkward because the artifacts didn't keep up. Models that lag implementation by months don't earn a seat anywhere.</p>
        <p>Models that live in the same repository as the code, with the same review process and the same continuous validation, are a different proposition. They can be referenced in design discussions because they reflect what's actually true. They can be argued with because they're precise enough to be wrong.</p>
        <p>That's the shift worth paying attention to. SysML v2 is the version of the language that finally makes it possible.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin.</p>
      </article>
    </>
  );
}
