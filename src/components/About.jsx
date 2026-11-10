import { ArrowUpRight } from 'lucide-react'

const FACTS = [
  ['Graduating', '2029'],
  ['Rocket League', 'Top 0.3%'],
  ['Best anime genre', 'Romance'],
  ['Favourite colour', 'Green'],
]

const LINKS = [
  { label: 'Resume',   href: '/Avidan-Kwok-Resume.pdf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avidankwok/' },
  { label: 'GitHub',   href: 'https://github.com/avi-kwok' },
]

export default function About() {
  return (
    <section
      id="about"
      className="px-6 pt-10 pb-16"
      // One rhythm for the page: body size, line height, and the gap between paragraphs.
      // The desktop link list reuses the same line height + gap, so it scales with the text.
      style={{ '--body-size': '17px', '--body-leading': 1.75, '--para-ratio': 1.25 }}
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_220px] gap-8 md:gap-12">
        <div>
          <div className="flex flex-col gap-[calc(var(--body-size)*var(--para-ratio))] text-[length:var(--body-size)] leading-[var(--body-leading)] text-body">
            <p>
              I'm a second-year student at UBC pursuing a combined major in Business and Computer Science, currently looking to expand my experience through technical internships, projects, and hackathons.
            </p>
            <p>
              My professional career so far has been shaped by my experience in working at TD as a customer experience associate. Outside of work, I build full-stack applications for anything. One of my projects include emulating my real life dog as a RAG Chatbot. I've even built my personal job scraper since the market is too cooked <span className="text-green-700 font-medium">(if you're currently reading this and know someone hiring for an intern, hit me up on LinkedIn please 🙏)</span> Currently, I'm building a VLM + computer vision coach that breaks down Minecraft speedruns and gives feedback on where to save time.
            </p>
            <p>
              Outside of class and work, I'm a (now retired) :( national Ultimate Frisbee player - which has redefined how I approach teamwork, pressure, and preparation. In my free time, I enjoy playing Rocket League, Teamfight Tactics and speedrunning Minecraft competitively, cooking steak whenever I'm in the mood, playing a wide variety of sports, and attending occasional poker home games.
            </p>
          </div>

        </div>

        {/* Photo, facts, links: side by side on phones, stacked in a column on desktop */}
        <aside className="order-first md:order-none grid grid-cols-[minmax(0,120px)_1fr] gap-4 sm:grid-cols-[200px_1fr] sm:gap-6 md:block md:pt-1">
          <img
            src="/photo.jpg"
            alt="Avidan Kwok"
            width={800}
            height={800}
            className="w-full md:max-w-[220px] aspect-square object-cover rounded-xl ring-1 ring-green-200"
          />
          <div className="min-w-0 md:max-w-[220px]">
            <dl className="md:mt-5 text-[13px] sm:text-sm rounded-xl accent-tint px-3 sm:px-4 py-1">
              {FACTS.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 py-1.5 sm:py-2 border-b border-green-200/70 last:border-0">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-semibold accent-text text-right tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
            {/* one row beside the photo on smaller screens, a stacked list in the desktop column */}
            <ul className="mt-3 md:mt-[calc(var(--body-size)*var(--para-ratio))] px-1 text-[15px] flex flex-wrap gap-x-5 gap-y-1 md:flex-col md:gap-y-[calc(var(--body-size)*var(--para-ratio))]">
              {LINKS.map(l => (
                <li key={l.label} className="md:h-[calc(var(--body-size)*var(--body-leading))] md:flex md:items-center">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link inline-flex items-center gap-0.5 py-0.5 transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
