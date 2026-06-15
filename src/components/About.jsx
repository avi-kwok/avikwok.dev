import { FileText, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const STATS = [
  { value: '2029', label: 'Expected Graduation Year' },
  { value: 'Top 1%', label: 'In Rocket League and Valorant' },
  { value: 'Yoshi', label: 'Favourite Character' },
  { value: 'Green', label: 'Favourite Colour' },
]

export default function About() {
  return (
    <section id="about" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: intro */}
          <div className="flex flex-col">
            <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">About me</p>

            {/* Links — where the old headline used to be */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="/Avidan-Kwok-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
              >
                <FileText size={16} /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/avidankwok/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:border-slate-400 text-sm transition-colors"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
              </a>
              <a
                href="https://github.com/avi-kwok"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:border-slate-400 text-sm transition-colors"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a second-year student at UBC pursuing a combined major in Business and Computer Science, currently looking to expand my experience through tech internships and hands-on projects.
              </p>
              <p>
                My professional career so far has been shaped by my experience in working at TD as a customer experience associate. Outside of work, I build full-stack applications for anything that inspires me. <span className="font-medium text-slate-700 dark:text-slate-300">Mushu Kwok AI</span> is a full-stack RAG chatbot that brings my real-life dog to life. a Next.js front end and FastAPI backend that retrieves facts from a ChromaDB vector store and streams answers from a Groq-hosted LLM in real time. My <span className="font-medium text-slate-700 dark:text-slate-300">Ultimate Frisbee Coaching App</span> (my first project ever) is a Node, Express, and MongoDB platform that helps coaches manage rosters, plan lineups, and track player stats.
              </p>
              <p>
                I'm drawn to work that sits at the crossroads of people and systems, including product thinking, fintech, strategy, and ops. If it involves understanding how things work and making them work better, I'm interested.
              </p>
              <p>
                Outside of class and work, I'm a (now retired) :( national Ultimate Frisbee player - which has redefined how I approach teamwork, pressure, and preparation. In my free time, I enjoy playing Rocket League competitively, cooking steak whenever I'm in the mood, playing a wide variety of sports, and attending occasional poker home games.
              </p>
            </div>
          </div>

          {/* Right: image (matches the intro height) with the fun facts beside it */}
          <div className="flex gap-4 items-stretch min-h-0">
            <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <img src="/photo.jpg" alt="Avidan Kwok" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-3 w-32 sm:w-36 shrink-0">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex-1 flex flex-col items-center justify-center text-center p-3 rounded-xl bg-stone-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <div className={`text-lg sm:text-xl font-bold mb-0.5 ${idx < 2 ? 'text-green-600 dark:text-green-400' : 'text-emerald-600 dark:text-emerald-400'}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-[11px] leading-tight text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
