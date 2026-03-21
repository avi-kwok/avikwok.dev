import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Mushu Kwok AI',
    subtitle: 'RAG-Powered Conversational Chatbot',
    preview: '/mushu-preview.png',
    previewBg: 'from-slate-800 to-slate-700',
    previewLabel: 'Mushu Kwok AI',
    description:
      'A locally-run AI chatbot that uses Retrieval-Augmented Generation (RAG) to answer questions about Mushu; my personal dog brought to life through AI. Built a full-stack pipeline from document ingestion and vector storage to a streaming chat interface.',
    impact:
      'End-to-end RAG pipeline with sub-second retrieval and real-time token streaming via Server-Sent Events.',
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Ollama', 'Next.js', 'React', 'Docker'],
    live: null,
    github: 'https://github.com/avi-kwok/mushu-AI',
    gradient: 'from-green-500/10 to-purple-500/10 dark:from-green-900/20 dark:to-purple-900/20',
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
    impact:
      'Deployed on Render with persistent MongoDB storage; supports full CRUD for rosters, game plans, and player statistics.',
    tags: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB', 'REST API'],
    live: 'https://ultideploy.onrender.com',
    github: 'https://github.com/avi-kwok',
    gradient: 'from-teal-500/10 to-emerald-500/10 dark:from-teal-900/20 dark:to-emerald-900/20',
    dot: 'bg-teal-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">Work I've built</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-gradient-to-br ${p.gradient} border border-slate-200 dark:border-slate-700 flex flex-col hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors overflow-hidden`}
            >
              {/* Preview image */}
              <div className="w-full h-48 overflow-hidden">
                {p.preview
                  ? <img src={p.preview} alt={p.title} className="w-full h-full object-cover" style={{ objectPosition: '0% 15%' }} />
                  : <div className={`w-full h-full bg-gradient-to-br ${p.previewBg} flex items-center justify-center`}>
                      <span className="text-slate-400 text-sm font-mono">{p.previewLabel}</span>
                    </div>
                }
              </div>

              <div className="p-8 flex flex-col flex-1">
              <div className="mb-6 flex-1">
                <div className={`w-2 h-2 rounded-full ${p.dot} mb-4`} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{p.subtitle}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{p.description}</p>
                <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Impact: </span>
                    {p.impact}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
