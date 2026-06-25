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
        <p>Time.</p>
        <p>For the first time all week, there were no presentations to rush to, no conversations waiting around the next corner, and no pages left to fill in my notebook.</p>
        <p>Just time to think.</p>
        <p>I kept coming back to the same question.</p>
        <p>Why had a conversation about coffee become the thing I remembered most from a systems engineering conference?</p>
        <p>Slowly, the answer began to emerge.</p>
        <p>The coffee roaster was not exceptional because he knew more facts than someone else.</p>
        <p>He was exceptional because he understood the relationships between them.</p>
        <p>Humidity did not matter by itself.</p>
        <p>Water chemistry did not matter by itself.</p>
        <p>The roast profile did not matter by itself.</p>
        <p>Every decision only made sense within the context of the system as a whole.</p>
        <p>That was exactly what I had been hearing throughout the week.</p>
        <p>The tutorials on systems thinking were not really about diagrams. They were about helping engineers understand relationships.</p>
        <p>Saulius was not arguing that organizations needed different notation. He was arguing that notation without shared understanding changes very little.</p>
        <p>The PhD student was not reinventing the wheel. He was extending decades of accumulated engineering knowledge.</p>
        <p>Ray was not simply talking about governance. He was talking about the importance of making decisions with the right context.</p>
        <p>None of them were solving the same problem.</p>
        <p>Yet all of them were preserving the same thing.</p>
        <p>Understanding.</p>
        <p>That realization changed how I thought about systems engineering.</p>
        <p>For years, our profession has invested enormous energy into improving the artifacts of engineering.</p>
        <p>Better requirements.</p>
        <p>Better architectures.</p>
        <p>Better models.</p>
        <p>Better repositories.</p>
        <p>Better digital threads.</p>
        <p>Better AI.</p>
        <p>Those investments matter.</p>
        <p>But somewhere along the way, I think we have occasionally confused the artifacts with the discipline itself.</p>
        <p>Requirements are not the discipline.</p>
        <p>Architecture is not the discipline.</p>
        <p>Models are not the discipline.</p>
        <p>Traceability is not the discipline.</p>
        <p>They are the means by which the discipline preserves understanding across people, organizations, and time.</p>
        <p>Every requirement captures the memory of a stakeholder need.</p>
        <p>Every architectural decision captures the memory of why a system was designed the way it was.</p>
        <p>Every interface preserves the memory of how systems interact.</p>
        <p>Every verification activity preserves the memory of what we have learned.</p>
        <p>Every traceability link preserves the memory of how one decision influenced another.</p>
        <p>Systems engineering exists because organizations forget.</p>
        <p>Programs outlive careers.</p>
        <p>Teams change.</p>
        <p>Knowledge fragments.</p>
        <p>Context disappears.</p>
        <p>The discipline exists to ensure understanding does not disappear with it.</p>
        <p>That realization also changed how I think about the future.</p>
        <p>For years, much of the conversation around AI has focused on replacing engineering work. Generate the requirements. Generate the architecture. Generate the design.</p>
        <p>After INCOSE, I find myself thinking about a different future.</p>
        <p>The engineer is not the bottleneck.</p>
        <p>The engineer is the integrator.</p>
        <p>The human in the loop is not a weakness in the engineering process.</p>
        <p>It is the reason the process works.</p>
        <p>There is no single click that produces a thoughtful design.</p>
        <p>There is no prompt that captures decades of organizational experience.</p>
        <p>There is no model that understands the hesitation in a stakeholder's voice or recognizes that the most important question has not yet been asked.</p>
        <p>AI will become an extraordinary engineering partner.</p>
        <p>But its greatest value will not come from replacing judgment.</p>
        <p>It will come from preserving, organizing, and presenting context so that human judgment becomes better.</p>
        <p>Looking back, I do not think the coffee roaster taught me how to make better coffee.</p>
        <p>He reminded me what mastery looks like.</p>
        <p>Mastery is not the absence of measurement.</p>
        <p>It is not perfect intuition.</p>
        <p>It is not having all the answers.</p>
        <p>Mastery is knowing that every day begins by observing the system in front of you before deciding what to do next.</p>
        <p>That, ultimately, is what I brought home from INCOSE IS 2026.</p>
        <p>Not a new language.</p>
        <p>Not a new framework.</p>
        <p>Not another tool.</p>
        <p>A renewed appreciation for the purpose of the discipline itself.</p>
        <p>The purpose of systems engineering is to preserve engineering understanding by capturing and refining the context needed to make better decisions.</p>
        <p>Everything else, from requirements and architectures to models, digital threads, ontologies, traceability, and AI, exists in service of that purpose.</p>
        <p>The coffee roaster understood that long before I did.</p>
        <p>Every morning he measured the humidity.</p>
        <p>Not because he distrusted yesterday's experience.</p>
        <p>Because he respected today's reality.</p>
        <p>That is the Curse of the Sheep.</p>
        <p>Once you learn to see systems, you never stop looking for the context that helps you understand them.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p>
      </article>
    </>
  );
}
