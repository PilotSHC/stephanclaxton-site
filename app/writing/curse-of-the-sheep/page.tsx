import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The curse of the sheep",
  description: "A Yokohama coffee roaster, six days at INCOSE IS 2026, and why systems engineering is the discipline of preserving engineering memory.",
  openGraph: {
    title: "The curse of the sheep",
    description: "A Yokohama coffee roaster, six days at INCOSE IS 2026, and why systems engineering is the discipline of preserving engineering memory.",
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
        <p>There are always one or two moments from a conference that stay with you.</p>
        <p>Sometimes it is a keynote that changes how you think. Sometimes it is a hallway conversation with someone you have admired for years. Occasionally it is a slide that refuses to leave your notebook.</p>
        <p>The moment I keep returning to from INCOSE IS 2026 did not happen in a tutorial, a keynote, or a conference room.</p>
        <p>It happened in a small coffee roastery tucked away on a quiet street in Yokohama.</p>
        <p>By the time I found that little coffee shop, I had already spent six days immersed in systems engineering.</p>
        <p>The week had begun with tutorials taught by many of the people who helped shape the discipline itself. Before there were conversations about AI, SysML v2, or digital engineering, there were conversations about first principles: stakeholders, architecture, verification, decision making, and systems thinking. It was a reminder that systems engineering did not begin with modeling languages. It began with the challenge of understanding complexity well enough to make good decisions.</p>
        <p>As the symposium unfolded, the topics evolved. Digital engineering. Model-Based Systems Engineering. Artificial intelligence. Knowledge graphs. Semantic technologies. Digital threads. SysML v2. The future of engineering seemed to be everywhere.</p>
        <p>By the sixth day, my notebook was overflowing with ideas. My phone held dozens of photographs of presentation slides. My mind was trying to connect conversations that, at the time, still felt unrelated.</p>
        <p>Then I walked into that coffee shop.</p>
        <p>The shop was small, intimate, and unmistakably someone's life's work.</p>
        <p>Bags of carefully roasted beans lined the shelves. Brewing equipment occupied every available surface. Nothing felt performative. Nothing felt designed for Instagram. It felt like a workshop, a place where craft had been refined one careful day at a time.</p>
        <p>On the wall hung a simple wooden sign.</p>
        <p>"The Curse of the Sheep is what drives us forward today."</p>
        <p>I smiled. It sounded whimsical. Maybe an inside joke. Maybe clever branding.</p>
        <p>I took a picture and did not think much more about it.</p>
        <p>The owner greeted us warmly and, before long, what I expected to be a quick stop for coffee became an hour-long conversation.</p>
        <p>He told us he had spent twenty-three years working with coffee and sixteen years roasting it.</p>
        <p>As he walked us through his process, I found myself paying less attention to the equipment and more attention to the way he thought.</p>
        <p>He explained different brewing techniques and why each revealed different characteristics from the same bean. He spoke about roasting profiles, extraction methods, and water chemistry, not as isolated techniques, but as relationships within a living system.</p>
        <p>Then he described how every morning begins.</p>
        <p>Before roasting a single bean, he measures the humidity.</p>
        <p>Every day.</p>
        <p>Not because it is part of a checklist.</p>
        <p>Because humidity changes how the beans roast.</p>
        <p>Later, while brewing, he checks the pH of the water. Temperature. Humidity. Water chemistry. Roast profile. Extraction.</p>
        <p>No single variable determined the outcome.</p>
        <p>Each only mattered because of its relationship to the others.</p>
        <p>As I listened, I realized something that felt almost backwards.</p>
        <p>After twenty-three years, I expected him to rely less on measurements.</p>
        <p>Instead, he relied on them more.</p>
        <p>Experience had not eliminated uncertainty.</p>
        <p>It had taught him where uncertainty lived.</p>
        <p>Before we left, I asked him about the sign.</p>
        <p>He smiled.</p>
        <p>It referenced the legend of Kaldi, the Ethiopian shepherd who noticed his sheep behaving strangely after eating bright red berries. While others might have ignored it, the shepherd became curious enough to investigate.</p>
        <p>That curiosity eventually led to the discovery of coffee.</p>
        <p>"The Curse of the Sheep," he said, "is the inability to stop asking why."</p>
        <p>I left thinking it was a beautiful philosophy for making coffee.</p>
        <p>I did not realize it would become the lens through which I would reinterpret the previous six days.</p>
        <h2>Looking back at INCOSE</h2>
        <p>As I walked back through Yokohama that afternoon, I could not stop thinking about something that should have seemed obvious.</p>
        <p>Why was a master craftsman still measuring everything?</p>
        <p>Should not twenty-three years of experience make the process simpler?</p>
        <p>The more I thought about it, the more I realized I had been asking the wrong question.</p>
        <p>Experience had not reduced the complexity of the system.</p>
        <p>It had revealed it.</p>
        <p>The coffee roaster was not measuring because he lacked confidence.</p>
        <p>He was measuring because he understood how much context could change between yesterday and today.</p>
        <p>That realization sent me back through six days of notes.</p>
        <p>What struck me was not any single presentation.</p>
        <p>It was the pattern emerging across all of them.</p>
        <p>The symposium had begun with something I had not expected.</p>
        <p>Rather than diving immediately into the latest tools and technologies, many of the opening tutorials returned to the foundations of systems engineering itself. Stakeholders. Purpose. Mission. Architecture. Verification. Decision making.</p>
        <p>The people leading those sessions had spent decades shaping the discipline. They were not dismissing modern engineering. They were reminding us why the discipline existed before any of today's tooling ever appeared.</p>
        <p>It was a subtle but important message.</p>
        <p>The future of systems engineering will not be built by abandoning its foundations.</p>
        <p>It will be built by remembering why those foundations mattered in the first place.</p>
        <p>As the week progressed, the conversations naturally shifted.</p>
        <p>There were demonstrations of SysML v2. Discussions about AI-assisted engineering. Digital engineering. Knowledge graphs. Semantic technologies. Digital threads.</p>
        <p>These are exciting developments, and I believe they represent an important evolution of our profession.</p>
        <p>But I also noticed something different this year.</p>
        <p>The conversations seemed less consumed by the question, "What tool should we use?" And increasingly focused on questions like: "Can this help us make better decisions?" "Can stakeholders actually understand the model?" "Can we learn faster?" "Can we trust the information we are using?"</p>
        <p>Five years ago, many conference conversations felt like debates over notation.</p>
        <p>This year felt different.</p>
        <p>It felt like the community was beginning to mature beyond the notation itself.</p>
        <p>The tools were not becoming less important.</p>
        <p>They were becoming assumed.</p>
        <p>Which meant the discussion could finally move to the harder problem.</p>
        <p>Understanding.</p>
        <p>One presentation in particular crystallized that shift.</p>
        <p>Saulius Pavalkis spoke about why so many Model-Based Systems Engineering initiatives struggle.</p>
        <p>It was not a criticism of SysML.</p>
        <p>It was not a criticism of modeling.</p>
        <p>It was something much more uncomfortable.</p>
        <p>Organizations often mistake modeling for understanding.</p>
        <p>One slide contained a sentence I have not stopped thinking about.</p>
        <p>"The notation is fine. The organization is broken."</p>
        <p>At first, I heard it as a statement about MBSE adoption.</p>
        <p>Later, I realized it was a statement about learning.</p>
        <p>The notation was not failing.</p>
        <p>Organizations were failing to use it to build shared understanding.</p>
        <p>As I continued flipping through my notes, I realized the conference was not giving me isolated ideas.</p>
        <p>It was showing me the same idea through different people.</p>
        <p>One evening I spent nearly an hour talking with a PhD student from the Netherlands whose research focused on the Elephant Specification Language (ESL), a formal specification language developed at Eindhoven University of Technology. We talked about requirements, formal methods, semantics, and architecture.</p>
        <p>The conversation wandered through decades of engineering thought, from structured specifications to modern model-based engineering.</p>
        <p>A few days later we crossed paths again.</p>
        <p>He laughed.</p>
        <p>"Sometimes I feel like I am just reinventing the wheel."</p>
        <p>Without thinking, I replied, "The first wheel was a stone."</p>
        <p>We both laughed.</p>
        <p>But the more I reflected on that exchange, the less it felt like a joke.</p>
        <p>Nothing in engineering is truly new.</p>
        <p>We are not inventing understanding.</p>
        <p>We are refining it.</p>
        <p>Every generation inherits the work of those before it. Better languages. Better abstractions. Better tools.</p>
        <p>The responsibility is not to discard what came before.</p>
        <p>It is to preserve the context they created while extending it.</p>
        <p>Another conversation kept resurfacing throughout the week.</p>
        <p>Ray, a seasoned systems engineer from Canada, seemed to appear everywhere. After sessions. Between talks. Waiting for coffee. Standing in hallways.</p>
        <p>Every conversation eventually drifted toward governance.</p>
        <p>He described efforts in Canada to place greater engineering decision-making into the hands of practicing engineers rather than politicians who often lack the technical context of the systems they are governing.</p>
        <p>Whether one agrees with every policy proposal is almost beside the point.</p>
        <p>What struck me was the underlying principle.</p>
        <p>Better decisions require better context.</p>
        <p>That observation extended far beyond public policy.</p>
        <p>It explained why digital threads fail. Why traceability breaks down. Why architecture becomes stale. Why organizations lose hard-earned knowledge. Why AI struggles when engineering information is fragmented across disconnected documents and repositories.</p>
        <p>Every one of those problems is fundamentally a context problem.</p>
        <p>Looking back, I realized the coffee roaster was not teaching me about coffee.</p>
        <p>The PhD student was not teaching me about specification languages.</p>
        <p>Ray was not teaching me about governance.</p>
        <p>Saulius was not teaching me about MBSE.</p>
        <p>Each of them was illuminating a different facet of the same idea.</p>
        <p>Understanding is impossible without context.</p>
        <p>And preserving context is the central challenge of systems engineering.</p>
        <h2>Observe, then decide</h2>
        <p>When I first walked into that coffee shop, I thought I was watching someone make coffee.</p>
        <p>Looking back, I think I was watching someone practice systems engineering.</p>
        <p>Not because he understood chemistry.</p>
        <p>Not because he had perfected a process.</p>
        <p>And certainly not because he had accumulated twenty-three years of experience.</p>
        <p>He was practicing systems engineering because every morning began with the same discipline.</p>
        <p>Observe.</p>
        <p>Understand.</p>
        <p>Then decide.</p>
        <p>That sequence matters.</p>
        <p>Too often, engineering organizations reverse it.</p>
        <p>We decide.</p>
        <p>Then we look for data that justifies the decision.</p>
        <p>The coffee roaster did the opposite.</p>
        <p>Every morning he allowed reality to speak first.</p>
        <p>Only then did he act.</p>
        <p>Somewhere over the last decade, I think many of us, including me, have become captivated by the instruments of systems engineering. Better architectures. Better repositories. Better semantic models. Better digital threads. Better AI. Better engineering intelligence.</p>
        <p>Those questions are legitimate.</p>
        <p>But somewhere between the coffee shop and the flight home, a different question became harder to ignore.</p>
        <p>How do we help engineers preserve and refine context?</p>
        <p>Because that is what every one of those technologies is really trying to accomplish.</p>
        <p>Requirements preserve stakeholder context. Architecture preserves structural context. Interfaces preserve interaction context. Verification preserves evidentiary context. Traceability preserves historical context. Ontologies preserve semantic context. Knowledge graphs preserve relationship context. Digital threads preserve lifecycle context.</p>
        <p>Artificial intelligence does not create context.</p>
        <p>It consumes it.</p>
        <p>Without context, AI cannot reason.</p>
        <p>Without context, models become drawings.</p>
        <p>Without context, traceability becomes bureaucracy.</p>
        <p>Without context, organizations slowly forget why they made the decisions they did.</p>
        <p>Perhaps we have been solving the wrong problem.</p>
        <p>The challenge is not building smarter tools.</p>
        <p>It is ensuring those tools preserve enough context for people to make better decisions.</p>
        <p>Those instruments matter.</p>
        <p>But they are not the discipline.</p>
        <p>They are instruments.</p>
        <p>The discipline is understanding.</p>
        <p>The conference also kept returning to a question that reframes what models are for.</p>
        <p>Can the model answer a stakeholder's question?</p>
        <p>Not: can it conform to the language?</p>
        <p>Not: can it satisfy the framework?</p>
        <p>Not: can it pass the validation rules?</p>
        <p>Can it help another human being make a better decision?</p>
        <p>That is a fundamentally different objective.</p>
        <p>Models are not the customer.</p>
        <p>Engineers are not even the customer.</p>
        <p>The stakeholder is.</p>
        <p>Systems engineering has never been about creating beautiful models.</p>
        <p>It has always been about helping people make sense of complexity.</p>
        <p>The artifacts only matter because they preserve the context necessary for human understanding.</p>
        <p>For years we have talked about autonomous engineering. One-click architecture generation. AI-generated requirements. Automatically synthesized designs.</p>
        <p>Those capabilities are coming, and I believe they will transform our profession.</p>
        <p>But somewhere during INCOSE I stopped seeing the human in the loop as a limitation.</p>
        <p>I began seeing it as the strength.</p>
        <p>There is no single click that produces a thoughtful design.</p>
        <p>There is no prompt that replaces decades of engineering judgment.</p>
        <p>There is no model that understands why a stakeholder hesitated during a meeting.</p>
        <p>There is no AI that can yet recognize when the right question has not even been asked.</p>
        <p>Great engineering does not emerge from automation alone.</p>
        <p>It emerges from the conversation between human judgment and computational capability.</p>
        <p>The future is not human versus AI.</p>
        <p>It is humans equipped with richer context than they have ever had before.</p>
        <p>The human remains the integrator.</p>
        <p>The one who asks, "Does this make sense?" "What are we missing?" "What changed?" "What does this mean?"</p>
        <p>Those are not weaknesses in the process.</p>
        <p>They are the reason engineering succeeds.</p>
        <h2>Engineering memory</h2>
        <p>When I boarded my flight home, I thought about the people I had met during the week.</p>
        <p>The coffee roaster who measured humidity every morning.</p>
        <p>The PhD student building on decades of formal specification research.</p>
        <p>Ray arguing that better governance begins with better engineering context.</p>
        <p>Saulius reminding us that notation is not the problem.</p>
        <p>Individually, they were telling different stories.</p>
        <p>Collectively, they were describing the same profession.</p>
        <p>A profession that has spent decades creating better representations of systems.</p>
        <p>And is now beginning to ask a more important question.</p>
        <p>How do we preserve understanding as those systems become unimaginably complex?</p>
        <p>I kept returning to the same reframing.</p>
        <p>Requirements preserve organizational memory.</p>
        <p>Architecture preserves structural memory.</p>
        <p>Traceability preserves decision memory.</p>
        <p>Verification preserves evidence.</p>
        <p>Models preserve design intent.</p>
        <p>Knowledge graphs preserve relationships.</p>
        <p>Context, when you need it for a decision, is preserved memory.</p>
        <p>The coffee roaster measures humidity because he remembers yesterday.</p>
        <p>The PhD student builds on fifty years of research because academia preserves memory.</p>
        <p>Ray wants engineers making decisions because they carry engineering memory.</p>
        <p>Saulius warns about organizations because organizations lose memory.</p>
        <p>Looking back, I no longer think the purpose of systems engineering is producing requirements, architectures, models, or digital threads.</p>
        <p>Those are artifacts.</p>
        <p>Artifacts are not the discipline.</p>
        <p>They are how the discipline preserves memory.</p>
        <p>Every requirement preserves the memory of a stakeholder need.</p>
        <p>Every architectural decision preserves the memory of why the system is structured the way it is.</p>
        <p>Every interface preserves the memory of how systems interact.</p>
        <p>Every verification result preserves the memory of what we learned.</p>
        <p>Every trace preserves the memory of how one decision shaped another.</p>
        <p>Systems engineering exists because organizations forget.</p>
        <p>People leave.</p>
        <p>Programs outlive careers.</p>
        <p>Knowledge fragments.</p>
        <p>Context disappears.</p>
        <p>The purpose of systems engineering is to preserve engineering memory so that we can continually refine our understanding of reality.</p>
        <p>The coffee roaster understood that long before I did.</p>
        <p>Every morning he measured the humidity, not because he distrusted yesterday's work, but because he remembered yesterday well enough to know today would be different.</p>
        <p>That is the Curse of the Sheep.</p>
        <p>Once you learn to see systems, you stop searching for certainty.</p>
        <p>You start preserving understanding.</p>
        <hr />
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p>
      </article>
    </>
  );
}
