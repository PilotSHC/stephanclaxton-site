import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The curse of the sheep",
  description: "Reflections on context, mastery, and systems engineering from INCOSE IS 2026, and why the discipline exists to preserve understanding across time.",
  openGraph: {
    title: "The curse of the sheep",
    description: "Reflections on context, mastery, and systems engineering from INCOSE IS 2026, and why the discipline exists to preserve understanding across time.",
    type: "article",
    publishedTime: "2026-08-26T09:00:00-07:00",
    authors: ["Stephan Claxton"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The curse of the sheep",
  "author": {
    "@type": "Person",
    "name": "Stephan Claxton",
    "url": "https://www.stephanclaxton.com"
  },
  "datePublished": "2026-08-26T09:00:00-07:00",
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
        <h1>The curse of the sheep</h1>
        <div className="byline">
          Stephan Claxton, Systems Engineer at Applied Intuition
        </div>

        <p>"The Curse of the Sheep is what drives us forward today."</p>
        <p>There are always a handful of moments that survive a conference.</p>
        <p>Most of the presentations eventually blur together. The slides become difficult to distinguish. Even the best ideas slowly fade into pages of notes.</p>
        <p>Yet somehow, months or years later, one unexpected conversation is often the one you remember.</p>
        <p>When I think back on INCOSE IS 2026 in Yokohama, that conversation did not happen inside the conference center.</p>
        <p>It happened over a cup of coffee.</p>
        <p>By the sixth day of the symposium, my notebook had become a collection of disconnected ideas.</p>
        <p>The week had started with tutorials from many of the people who helped shape modern systems engineering. The conversations had gradually shifted toward AI, SysML v2, digital engineering, knowledge graphs, semantic technologies, and the future of engineering.</p>
        <p>Every session was interesting.</p>
        <p>Every conversation added another idea.</p>
        <p>But they still felt like individual puzzle pieces.</p>
        <p>I did not yet know what picture they were forming.</p>
        <p>That afternoon, my wife and I wandered into a small coffee roastery in Yokohama.</p>
        <p>It was not on our itinerary.</p>
        <p>It was not recommended by the conference.</p>
        <p>It simply looked interesting.</p>
        <p>Inside, shelves were lined with freshly roasted beans. Brewing equipment covered nearly every table. The owner greeted us warmly and asked if we would like to learn about his coffee.</p>
        <p>What I assumed would be a quick stop turned into nearly an hour.</p>
        <p>He told us he had spent twenty-three years working with coffee and sixteen years roasting it.</p>
        <p>Then he started explaining his process.</p>
        <p>I expected to hear about beans.</p>
        <p>Instead, he talked about humidity.</p>
        <p>Every morning, before roasting, he measures the humidity inside the shop.</p>
        <p>As he spoke, another variable appeared.</p>
        <p>Water chemistry.</p>
        <p>Then another.</p>
        <p>Roast profile.</p>
        <p>Then another.</p>
        <p>Extraction.</p>
        <p>Everything seemed connected to everything else.</p>
        <p>I asked why he still measured the humidity after all these years.</p>
        <p>He looked at me as though the answer were obvious.</p>
        <p>Because today's humidity is not yesterday's.</p>
        <p>That answer stayed with me.</p>
        <p>Not because it was surprising.</p>
        <p>Because I realized I had expected something different.</p>
        <p>Somewhere along the way I had convinced myself that expertise meant needing fewer observations.</p>
        <p>His experience had led him in the opposite direction.</p>
        <p>The longer he practiced his craft, the more carefully he observed it.</p>
        <p>Before leaving, I noticed a small wooden sign hanging on the wall.</p>
        <p>"The Curse of the Sheep is what drives us forward today."</p>
        <p>I asked him what it meant.</p>
        <p>He smiled.</p>
        <p>He told me the story of Kaldi, the Ethiopian shepherd who noticed his sheep behaving differently after eating bright red berries.</p>
        <p>Most people would have walked past.</p>
        <p>Kaldi stopped.</p>
        <p>He asked why.</p>
        <p>That question eventually led to coffee.</p>
        <p>I smiled, thanked him for the coffee, and we left.</p>
        <p>At the time, I thought it was simply a charming story.</p>
        <p>I did not realize it would become the lens through which I would reinterpret the previous six days.</p>
        <h2>Looking back through my notes</h2>
        <p>On the walk back to my hotel, I could not stop thinking about the coffee roaster.</p>
        <p>It was not because of the coffee itself. It was because of a question I had not expected to leave with.</p>
        <p>Why was someone with twenty-three years of experience still measuring the humidity every morning?</p>
        <p>The more I thought about it, the more I realized I had walked into his shop carrying an assumption I had not even recognized. I assumed experience meant certainty. I assumed that after enough years, the measurements would become less important because instinct would replace them.</p>
        <p>Instead, I had watched the opposite happen.</p>
        <p>His experience had not reduced the number of variables he considered. If anything, it had expanded them. Every answer he gave led to another relationship. Humidity influenced the roast. The roast influenced extraction. Water chemistry influenced flavor. Nothing existed in isolation, and he never spoke about a single decision without explaining what it affected.</p>
        <p>By the time I got back to the hotel, I found myself opening my notebook from the conference.</p>
        <p>I was not looking for a specific presentation. I was trying to understand why that conversation had stayed with me.</p>
        <p>As I flipped through six days of notes, I began noticing something I had completely missed while sitting in the sessions.</p>
        <p>The conference was not giving me disconnected ideas.</p>
        <p>It was returning to the same idea from different directions.</p>
        <p>The symposium had opened with tutorials led by many of the people who helped shape modern systems engineering. Before anyone talked about AI, SysML v2, or digital engineering, they talked about the foundations of the discipline: stakeholders, architecture, verification, trade studies, and systems thinking. At the time, I appreciated those sessions because they grounded the rest of the week. Looking back, I think they were doing something more subtle. They were reminding us that systems engineering has never been defined by its tools. It has always been defined by the quality of the decisions those tools enable.</p>
        <p>As the conference progressed, the conversations naturally shifted toward newer topics. There were demonstrations of SysML v2, discussions about digital engineering and AI, presentations on semantic technologies, knowledge graphs, digital threads, and every emerging capability shaping the future of our profession.</p>
        <p>I arrived expecting those technologies to dominate the conference.</p>
        <p>They certainly dominated the agenda.</p>
        <p>What surprised me was that they did not dominate the conversations I remembered most.</p>
        <p>Instead, I kept hearing people ask a different set of questions.</p>
        <p>How do we help stakeholders understand increasingly complex systems?</p>
        <p>How do we preserve engineering knowledge across decades-long programs?</p>
        <p>How do we ensure that a model becomes something people can reason with rather than simply something they maintain?</p>
        <p>Those are not really questions about tools.</p>
        <p>They are questions about understanding.</p>
        <p>One presentation in particular crystallized that realization.</p>
        <p>Saulius Pavalkis spoke about why so many Model-Based Systems Engineering initiatives struggle. I expected a discussion about notation or tooling. Instead, he presented something far more uncomfortable. Organizations often mistake modeling for understanding.</p>
        <p>One slide found its way into my notebook almost immediately.</p>
        <p>"The notation is fine. The organization is broken."</p>
        <p>At first, I interpreted it as a criticism of MBSE adoption.</p>
        <p>Later, I realized it was something much broader.</p>
        <p>Organizations do not struggle because they lack models.</p>
        <p>They struggle because models alone do not create shared understanding.</p>
        <p>That thought surfaced again during a conversation with a PhD student from the Netherlands whose research focused on the Elephant Specification Language, a structured specification language developed to bridge requirements engineering and systems architecture. We spent nearly an hour talking about formal methods, semantics, and the evolution of engineering languages.</p>
        <p>A few days later we crossed paths again between sessions.</p>
        <p>He smiled and said, "Sometimes I feel like I am just reinventing the wheel."</p>
        <p>Without thinking, I replied, "The first wheel was a stone."</p>
        <p>We both laughed.</p>
        <p>The exchange lasted less than thirty seconds, but it stayed with me for the rest of the conference.</p>
        <p>Engineering has always built upon itself. Every generation inherits the thinking of those before it. Better languages, better abstractions, and better tools do not replace that work. They extend it. Progress is not about abandoning the past. It is about preserving what we have learned while making it possible to learn something new.</p>
        <p>The same idea appeared again in my conversations with Ray, a veteran systems engineer from Canada. We seemed to run into each other everywhere: after presentations, while waiting for coffee, and in hallway conversations between sessions. Somehow every discussion drifted toward governance.</p>
        <p>Ray spoke passionately about efforts in Canada to place more engineering decisions into the hands of practicing engineers rather than politicians who often lack the technical context behind those decisions. Whether one agrees with every policy proposal is not really the point. What stayed with me was the principle underneath it.</p>
        <p>Good decisions require good context.</p>
        <p>By the end of the week, I realized none of these people had been talking about the same subject.</p>
        <p>The coffee roaster was talking about coffee.</p>
        <p>The PhD student was talking about formal specification languages.</p>
        <p>Ray was talking about governance.</p>
        <p>Saulius was talking about MBSE.</p>
        <p>And yet, somehow, they all seemed to be pointing toward the same idea.</p>
        <p>I just had not figured out what it was yet.</p>
        <h2>The purpose of the discipline</h2>
        <p>The flight home gave me something the conference could not.</p>
        <p>For the first time all week, there were no presentations to catch, no hallway conversations to continue, and no notebook demanding another page of notes. Somewhere over the Pacific, I finally had enough distance to think about what I had actually experienced.</p>
        <p>I kept coming back to the coffee roaster.</p>
        <p>It was not because he had taught me something about coffee. It was because he had quietly challenged an assumption I did not realize I had been carrying. I had always associated expertise with certainty. I assumed that as someone became more experienced, instinct gradually replaced observation. Yet after twenty-three years of roasting coffee, he had not become less attentive to the system around him. He had become more attentive. Every morning still began with measuring the humidity because every morning the system presented him with a slightly different set of conditions. His expertise was not found in ignoring those changes. It was found in recognizing that they mattered.</p>
        <p>As that thought settled in, the conversations from the conference began to reconnect in my mind.</p>
        <p>The tutorials on systems thinking were not really about diagrams or frameworks. They were about helping engineers understand relationships that are otherwise easy to overlook. Saulius was not arguing that organizations needed a different modeling language; he was challenging the assumption that better models automatically produce better understanding. The PhD student was not reinventing the wheel through his research into formal specification languages. He was extending decades of accumulated engineering knowledge into new domains. Ray was not simply making an argument about governance in Canada. He was making the case that better decisions require the people making them to understand the systems those decisions affect.</p>
        <p>Individually, those conversations seemed unrelated.</p>
        <p>Together, they described a profession wrestling with the same challenge.</p>
        <p>How do we preserve understanding as our systems become too large, too interconnected, and too long-lived for any one person to hold entirely in their head?</p>
        <p>That question changed the way I thought about systems engineering.</p>
        <p>For years, much of our profession has focused on improving the artifacts we create. We have built better modeling languages, more expressive architectures, richer digital threads, stronger traceability, and increasingly capable AI. Every one of those advances matters. But as I reflected on the week, I realized they all share the same purpose. None of them exist for their own sake. They exist because engineering is fundamentally a collaborative activity carried out over years, often decades, by people who will never all occupy the same room at the same time.</p>
        <p>A requirement is valuable because it preserves the intent of a stakeholder long after the conversation has ended. An architecture is valuable because it captures relationships that would otherwise exist only in the mind of its author. Traceability preserves the reasoning behind decisions. Verification preserves evidence that future engineers can trust. Even AI is only as useful as the engineering understanding it is able to access and reason over.</p>
        <p>The longer I thought about it, the more I realized that every one of these artifacts is trying to solve the same problem.</p>
        <p>Organizations forget.</p>
        <p>Projects outlive the people who started them. Engineers retire. Teams reorganize. Suppliers change. Programs evolve. Over time, the context behind thousands of engineering decisions slowly disappears, and with it disappears an organization's ability to understand why the system became what it is.</p>
        <p>That, I believe, is the real purpose of systems engineering.</p>
        <p>The purpose of systems engineering is to preserve and continually refine engineering understanding by capturing the context required to make better decisions.</p>
        <p>Viewed through that lens, the future of our profession looks different.</p>
        <p>The question is no longer whether AI can generate a requirement or produce an architecture. Those capabilities will continue to improve, and they should. The more interesting question is whether they help engineers understand their systems more deeply than they could before. The value of AI is not that it removes the engineer from the loop. It is that it helps preserve, organize, and retrieve the context that allows engineers to exercise better judgment.</p>
        <p>Looking back, I do not think the coffee roaster taught me how to make better coffee.</p>
        <p>He reminded me what mastery actually looks like.</p>
        <p>Mastery is not having fewer questions.</p>
        <p>It is knowing which questions are worth asking every single day.</p>
        <p>That is the Curse of the Sheep.</p>
        <p>Once you learn to see systems, you stop looking for certainty.</p>
        <p>You start looking for understanding.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p>
      </article>
    </>
  );
}
