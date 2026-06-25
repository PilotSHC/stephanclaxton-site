import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The curse of the sheep",
  description: "Reflections on context, mastery, and systems engineering from INCOSE IS 2026, and why the discipline exists to preserve understanding across time.",
  openGraph: { title: "The curse of the sheep", description: "Reflections on context, mastery, and systems engineering from INCOSE IS 2026, and why the discipline exists to preserve understanding across time.", type: "article", publishedTime: "2026-08-26T09:00:00-07:00", authors: ["Stephan Claxton"] },
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
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><article className="article"><div className="meta">Essay</div><h1>The curse of the sheep</h1><div className="byline">Stephan Claxton, Systems Engineer at Applied Intuition</div><p>There are always a handful of moments that survive a conference.</p>
        <p>The presentations eventually blur together. The slides become difficult to distinguish. Even the conversations that seemed profound at the time slowly fade into pages of notes and photographs that rarely get opened again.</p>
        <p>But every now and then, something completely unexpected becomes the part you remember.</p>
        <p>When I think back on INCOSE IS 2026 in Yokohama, it is not a keynote or a presentation that comes to mind first.</p>
        <p>It is a small coffee roastery tucked away on a quiet street.</p>
        <p>By the sixth day of the symposium, I had spent nearly a week immersed in systems engineering. The conference had begun with tutorials taught by many of the people who helped shape the discipline itself. The conversations gradually expanded into digital engineering, SysML v2, artificial intelligence, semantic technologies, knowledge graphs, digital threads, and the future of engineering. Every session introduced another idea worth exploring, and by the end of the week my notebook had become a collection of observations that I had not yet figured out how to connect.</p>
        <p>That afternoon, my wife and I wandered through Yokohama looking for a place to grab a cup of coffee before dinner.</p>
        <p>We found a small neighborhood roastery that was not on any list of recommended places. It simply looked interesting, so we walked in.</p>
        <p>The owner greeted us warmly and asked if we would like to learn about his coffee.</p>
        <p>What I expected to be a fifteen-minute stop turned into nearly an hour.</p>
        <p>He told us he had been working with coffee for twenty-three years and roasting for sixteen. As he walked us through the different beans and brewing methods, I found myself paying less attention to the equipment and more attention to the way he thought. Every explanation seemed to begin with a condition, a relationship, or a tradeoff. Nothing was ever described in isolation.</p>
        <p>At one point he began explaining his roasting process. Before roasting a single batch each morning, he measures the humidity inside the shop. Later, while preparing coffee, he measures the pH of the water. As the conversation continued, more variables surfaced. The humidity influenced the roast. The roast influenced extraction. Water chemistry influenced flavor. Every answer seemed to reveal another relationship that had to be understood before the next decision could be made.</p>
        <p>I finally asked him why he still measured the humidity every morning after so many years.</p>
        <p>He looked at me for a moment, almost surprised by the question.</p>
        <p>Then he smiled.</p>
        <p>"Because today's humidity is not yesterday's."</p>
        <p>The answer was so simple that the conversation moved on almost immediately.</p>
        <p>But I did not.</p>
        <p>I kept thinking about it.</p>
        <p>Somewhere along the way, I had come to believe that expertise meant relying less on observation. I assumed that years of experience gradually replaced the need to measure, verify, and question. Standing in that coffee shop, I realized I was watching someone whose experience had led him in exactly the opposite direction. The longer he practiced his craft, the more attentive he had become to the subtle changes in the system around him.</p>
        <p>As we were leaving, I noticed a small wooden sign hanging on the wall.</p>
        <p>"The Curse of the Sheep is what drives us forward today."</p>
        <p>I asked him what it meant.</p>
        <p>He told me the story of Kaldi, the Ethiopian shepherd who noticed his sheep behaving strangely after eating bright red berries. While everyone else walked past, Kaldi stopped long enough to ask why. His curiosity eventually led to the discovery of coffee.</p>
        <p>I thanked him for the conversation, finished the last sip of my coffee, and we walked back toward the hotel.</p>
        <p>At the time, I thought it was simply a memorable afternoon in Yokohama.</p>
        <p>I had no idea it would become the lens through which I would understand everything I had experienced during the previous six days.</p>
        <h2>Looking back through my notes</h2>
        <p>That evening, back at the hotel, I opened my notebook.</p>
        <p>It was not because I wanted to review the conference. I was trying to understand why a conversation about coffee had stayed with me more than any of the presentations I had attended.</p>
        <p>As I started flipping through six days of notes, I realized something I had not noticed while I was living it.</p>
        <p>The conference was not giving me dozens of unrelated ideas.</p>
        <p>It was returning to the same idea from different directions.</p>
        <p>The week had begun with tutorials led by many of the people who helped shape modern systems engineering. Before anyone talked about AI or SysML v2, they talked about stakeholders, architecture, verification, trade studies, and systems thinking. At the time, I appreciated those sessions because they grounded the rest of the conference. Looking back, I think they were doing something else. They were reminding us that systems engineering did not begin with tools. It began with helping people understand complex systems well enough to make informed decisions.</p>
        <p>As the symposium progressed, the technology naturally took center stage. There were presentations on digital engineering, artificial intelligence, semantic technologies, knowledge graphs, digital threads, and the rapidly evolving SysML v2 ecosystem. Like many attendees, I arrived expecting those topics to define the week.</p>
        <p>In one sense, they did.</p>
        <p>They filled the agenda.</p>
        <p>What surprised me was that they did not define the conversations I remembered most.</p>
        <p>Instead, I found myself writing down the same kinds of questions over and over again. How do we preserve engineering knowledge as programs span decades? How do we help stakeholders understand systems that no individual can completely comprehend? How do we ensure that our models become tools for reasoning instead of repositories that quietly drift out of date?</p>
        <p>Those are not really questions about technology.</p>
        <p>They are questions about understanding.</p>
        <p>One evening I found myself in conversation with a PhD student from the Netherlands whose research centered on the Elephant Specification Language, a structured specification language developed to bridge requirements engineering and systems architecture. We talked about formal methods, semantics, and the evolution of engineering languages. It was exactly the kind of conversation I expected to have at INCOSE.</p>
        <p>A few days later we crossed paths again between sessions.</p>
        <p>He laughed and said, "Sometimes I feel like I am just reinventing the wheel."</p>
        <p>Without thinking, I answered, "The first wheel was a stone."</p>
        <p>We both laughed, but the exchange stayed with me long after we walked away.</p>
        <p>Engineering has always been an iterative discipline. Every generation inherits the work of those before it, refines it, and passes it on. Better languages do not erase earlier thinking. Better abstractions do not invalidate the foundations beneath them. They simply give us new ways to build upon what we have already learned.</p>
        <p>That same pattern surfaced in conversations with Ray, a seasoned systems engineer from Canada. Somehow we kept running into one another after presentations, while waiting for coffee, or in the hallway between sessions. No matter where the conversation started, it eventually drifted toward governance.</p>
        <p>Ray spoke passionately about efforts in Canada to place more engineering decisions into the hands of practicing engineers rather than politicians who often lack the technical context behind the systems they are regulating. Whether one agrees with every policy proposal was not what interested me most. What stayed with me was the principle beneath the discussion: good decisions depend on good context. Without it, even the most capable people struggle to make informed choices.</p>
        <p>By this point I had stopped thinking these were isolated conversations.</p>
        <p>The coffee roaster.</p>
        <p>The PhD student.</p>
        <p>Ray.</p>
        <p>None of them knew each other.</p>
        <p>None of them were talking about the same subject.</p>
        <p>Yet somehow they all seemed to be circling the same idea.</p>
        <p>The final piece fell into place during a presentation by Saulius Pavalkis.</p>
        <p>He was not criticizing SysML. He was not arguing against Model-Based Systems Engineering. If anything, he was making a much more uncomfortable observation. Organizations often mistake modeling for understanding.</p>
        <p>One slide contained a sentence that immediately found its way into my notebook.</p>
        <p>"The notation is fine. The organization is broken."</p>
        <p>At first, I interpreted it as a comment about MBSE adoption.</p>
        <p>By the end of the conference, I was not so sure.</p>
        <p>Looking back through my notes, I realized he was not talking about notation at all.</p>
        <p>He was talking about something much deeper.</p>
        <p>And for the first time all week, I thought I understood why that conversation in the coffee shop had stayed with me.</p>
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
        <p className="endnote">Stephan Claxton is a Systems Engineer at Applied Intuition. He previously held senior systems engineering roles at Strategic Technology Consulting (an Arcfield company) and Lockheed Martin, where he worked on model-based systems engineering for space and defense programs.</p></article></>);
}
