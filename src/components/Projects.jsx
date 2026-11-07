import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'jobhunt',
    featured: true,
    headline: 'Posts new SWE internships to Discord minutes after they go live',
    preview: '/jobhunt-preview.png',
    previewColor: '#010301',
    description:
      'A Python CLI that polls 300+ first-party ATS endpoints every 30 minutes and pushes new SWE internship postings to Discord minutes after they go live. Built as a cost-first funnel: free title, location and freshness filters eliminate 99.8% of postings before any paid call, so only the survivors reach Claude for scoring. 66,000 postings ingested over 68 days of unattended scanning cost $0.22 in API spend.',
    tags: ['Python', 'Typer', 'httpx', 'Pydantic', 'SQLite', 'Claude API', 'Discord Webhooks', 'ATS REST APIs', 'pytest', 'Oracle Cloud', 'cron'],
    core: ['Python', 'Claude API', 'SQLite', 'Oracle Cloud'],
    live: 'https://avi-kwok.github.io/jobhunt/',
    liveLabel: 'Live GitHub Pages Demo',
    github: 'https://github.com/avi-kwok/jobhunt',
  },
  {
    title: 'Mushu Kwok AI',
    headline: 'Chat with an AI version of Mushu, my real-life Schnoodle',
    preview: '/mushu-preview.png',
    previewColor: '#010301',
    description:
      'A full-stack chatbot that uses Retrieval-Augmented Generation (RAG) to bring Mushu, my real life Schnoodle dog, to life through AI. Built an end-to-end pipeline from document ingestion and vector storage to a deployed streaming chat interface.',
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'ONNX', 'Groq', 'Next.js', 'React', 'Vercel', 'Railway'],
    core: ['Python', 'FastAPI', 'LangChain', 'ChromaDB'],
    live: 'https://mushukwokai.vercel.app',
    liveLabel: 'Try it out',
    github: 'https://github.com/avi-kwok/mushu-AI',
  },
  {
    title: 'Ultimate Frisbee Coaching App',
    headline: 'Roster and lineup planner for club Ultimate Frisbee teams',
    preview: '/ulti-preview.png',
    description:
      'My first ever project! A web platform built to help Ultimate Frisbee coaches manage rosters, plan lineups, and coordinate team operations - solving a real coordination problem faced by club teams. Designed and built independently from concept to deployment.',
    tags: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB', 'REST API'],
    core: ['Node.js', 'Express', 'MongoDB'],
    live: 'https://ultideploy.onrender.com',
    liveLabel: 'Open App',
    github: 'https://github.com/avi-kwok',
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
    <ul className="flex flex-wrap gap-1.5 text-[12.5px]">
      {shown.map(t => (
        <li
          key={t}
          className={`px-2 py-0.5 rounded-[4px] border ${core.includes(t)
            ? 'accent-tint accent-tint-border accent-text font-bold'
            : 'bg-white border-line text-muted font-medium'}`}
        >
          {t}
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <button
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            className="px-1 py-0.5 accent-text font-semibold hover:opacity-75 active:scale-[0.97] transition-transform cursor-pointer"
          >
            {open ? 'show less' : `+${hidden} more`}
          </button>
        </li>
      )}
    </ul>
  )
}

// Preview image: fades in once loaded, pulsing placeholder until then.
function Preview({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  // cached images can finish loading before React attaches onLoad
  const check = node => { if (node?.complete && node.naturalWidth) setLoaded(true) }
  return (
    <>
      {!loaded && <span aria-hidden="true" className="absolute inset-0 animate-pulse bg-slate-700" />}
      <img
        ref={check}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`relative w-full h-full object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 pt-4 pb-12">
      <div className="max-w-4xl mx-auto divide-y divide-green-100">
        {projects.map(p => (
          <article
            key={p.title}
            className={`py-10 grid gap-6 sm:gap-8 ${p.featured ? '' : 'sm:grid-cols-[320px_1fr]'}`}
          >
            <a
              href={p.live ?? p.github}
              target="_blank"
              rel="noreferrer"
              className={`relative block ${p.featured ? 'aspect-[16/9]' : 'aspect-[16/10]'} rounded-xl overflow-hidden ring-1 ring-[color-mix(in_srgb,var(--accent)_30%,white)] bg-slate-900`}
              style={p.previewColor ? { backgroundColor: p.previewColor } : {}}
            >
              <Preview src={p.preview} alt={p.title} />
            </a>

            <div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">{p.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{p.headline}</p>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-body">{p.description}</p>

              <div className="mt-6">
                <Tags tags={p.tags} core={p.core} />

                <div className="mt-4 flex items-center gap-6 text-sm font-medium">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary">
                      {p.liveLabel ?? 'Live demo'} <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                       className="link inline-flex items-center gap-0.5 py-1.5">
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
