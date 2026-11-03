import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'jobhunt',
    headline: "My personal job finder that posts tech internships the moment they're posted.",
    subtitle: 'Python CLI Scanner for over 300 companies',
    preview: '/jobhunt-preview.png',
    previewBg: 'from-slate-500 to-slate-700',
    previewColor: '#010301',
    previewLabel: 'jobhunt',
    description:
      'A Python CLI that polls 144 first-party ATS endpoints every 30 minutes and pushes new SWE internship postings to Discord minutes after they go live. Built as a cost-first funnel: free title, location and freshness filters eliminate 99.8% of postings before any paid call, so only the survivors reach Claude for scoring. 66,000 postings ingested over 68 days of unattended scanning cost $0.22 in API spend.',
    tags: ['Python', 'Typer', 'httpx', 'Pydantic', 'SQLite', 'Claude API', 'Discord Webhooks', 'ATS REST APIs', 'pytest', 'Oracle Cloud', 'cron'],
    core: ['Python', 'Claude API', 'SQLite', 'Oracle Cloud'],
    live: 'https://avi-kwok.github.io/jobhunt/',
    liveLabel: 'Live GitHub Pages Demo',
    github: 'https://github.com/avi-kwok/jobhunt',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    dot: 'bg-green-500',
  },
    {
    title: 'Mushu Kwok AI',
    headline: "The most fun I've ever had working on a project",
    subtitle: 'RAG-Powered Conversational Chatbot',
    preview: '/mushu-preview.png',
    previewBg: 'from-slate-800 to-slate-700',
    previewColor: '#010301',
    previewLabel: 'Mushu Kwok AI',
    description:
      'A full-stack chatbot that uses Retrieval-Augmented Generation (RAG) to bring Mushu, my real life Schnoodle dog, to life through AI. Built an end-to-end pipeline from document ingestion and vector storage to a deployed streaming chat interface.',
    cta: 'Check out the live demo to talk to my real life AI dog!',
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'ONNX', 'Groq', 'Next.js', 'React', 'Vercel', 'Railway'],
    core: ['Python', 'FastAPI', 'LangChain', 'ChromaDB'],
    live: 'https://mushukwokai.vercel.app',
    liveLabel: 'Try it out',
    github: 'https://github.com/avi-kwok/mushu-AI',
    bg: 'bg-sky-50 dark:bg-sky-950/40',
    dot: 'bg-green-500',
  },
  {
    title: 'Ultimate Frisbee Coaching App',
    subtitle: 'Full-Stack Team Management Web App',
    preview: '/ulti-preview.png',
    previewBg: 'from-teal-900 to-slate-800',
    previewLabel: 'Ulti Coaching App',
    description:
      'My first ever project! A web platform built to help Ultimate Frisbee coaches manage rosters, plan lineups, and coordinate team operations - solving a real coordination problem faced by club teams. Designed and built independently from concept to deployment.',
    tags: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB', 'REST API'],
    core: ['Node.js', 'Express', 'MongoDB'],
    live: 'https://ultideploy.onrender.com',
    liveLabel: 'Open App',
    github: 'https://github.com/avi-kwok',
    bg: 'bg-pink-50 dark:bg-pink-950/40',
    dot: 'bg-teal-500',
  },
]

const MAX_TAGS = 6

// Shows the first few tools; "+N more" reveals the rest.
// Core techs (blue + bold) are listed first so they're never hidden behind "+N more".
function Tags({ tags: all, core = [] }) {
  const [open, setOpen] = useState(false)
  const tags = [...core, ...all.filter(t => !core.includes(t))]
  const shown = open ? tags : tags.slice(0, MAX_TAGS)
  const hidden = tags.length - MAX_TAGS
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5 text-[12.5px]">
      {shown.map(t => (
        <li
          key={t}
          className={`px-2 py-0.5 rounded-[4px] border border-b-2 ${core.includes(t)
            ? 'accent-tint accent-tint-border accent-text font-bold'
            : 'bg-white border-slate-200 text-slate-600 font-medium'}`}
        >
          {t}
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <button
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            className="px-1 py-0.5 accent-text font-semibold hover:opacity-75 cursor-pointer"
          >
            {open ? 'show less' : `+${hidden} more`}
          </button>
        </li>
      )}
    </ul>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 pt-4 pb-12">
      <div className="max-w-4xl mx-auto divide-y divide-green-100">
        {projects.map(p => (
          <article key={p.title} className="py-10 grid sm:grid-cols-[240px_1fr] gap-6 sm:gap-8">
            <a
              href={p.live ?? p.github}
              target="_blank"
              rel="noreferrer"
              className="block aspect-[16/10] rounded-lg overflow-hidden ring-1 accent-tint-border ring-[color-mix(in_srgb,var(--accent)_30%,white)] bg-slate-900"
              style={p.previewColor ? { backgroundColor: p.previewColor } : {}}
            >
              <img
                src={p.preview}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain hover:scale-[1.03] transition-transform duration-300"
              />
            </a>

            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-2.5"><span className="w-2.5 h-2.5 rounded-full accent-bg" />{p.title}</h3>
              <p className="mt-0.5 text-sm text-slate-500">{p.subtitle}</p>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                {p.headline && <><em>{p.headline}</em>. </>}{p.description}
                {p.cta && <> <span className="font-medium text-slate-900">{p.cta}</span></>}
              </p>

              <Tags tags={p.tags} core={p.core} />

              <div className="mt-4 flex gap-6 text-sm font-medium">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-0.5 py-1.5 text-slate-900 underline decoration-green-500 decoration-2 underline-offset-4 hover:text-green-700">
                    {p.liveLabel ?? 'Live demo'} <ArrowUpRight size={14} />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-0.5 py-1.5 text-slate-700 underline decoration-green-500 decoration-2 underline-offset-4 hover:text-green-700">
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
