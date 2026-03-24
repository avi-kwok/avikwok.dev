import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const roles = [
  {
    company: 'TD Canada Trust',
    role: 'Customer Experience Associate',
    period: 'May 2025 – Present',
    location: 'Vancouver, BC',
    logo: '/td.png',
    dot: 'bg-green-500',
    hover: 'hover:border-emerald-300 dark:hover:border-emerald-700',
    roleColor: 'text-emerald-600 dark:text-emerald-400',
    summary: 'Retail banking role focused on client advisory, financial transactions, and branch growth.',
    bullets: [
      'Increased overall branch business by 18% by analyzing financial profiles and providing tailored advice.',
      'Contributed $1,000,000+ in client investments by collaborating with financial advisors to fulfill branch targets.',
      'Maintained a 100% customer satisfaction score in Q2 through strong client-relationship skills.',
      'Upheld strict data privacy and compliance in accordance with Canadian banking regulations and credit standards.',
      'Designed Excel dashboards to monitor pipeline performance, customer follow-ups, and growth metrics.',
    ],
  },
  {
    company: 'Pharmasave',
    role: 'Financial Assistant',
    period: 'Oct 2024 – Jan 2025',
    location: 'Vancouver, BC',
    logo: '/pharmasave.png',
    dot: 'bg-red-500',
    hover: 'hover:border-red-300 dark:hover:border-red-700',
    roleColor: 'text-red-600 dark:text-red-400',
    summary: 'Financial operations role managing statements, pricing analysis, and audit-ready records.',
    bullets: [
      'Managed monthly financial statements with valuations up to $10,000, ensuring accuracy and operational alignment.',
      'Conducted margin and pricing analysis across OTC inventory for 50+ products.',
      'Maintained accurate financial records in accounting software to support audit-ready documentation.',
    ],
  },
  {
    company: 'Centro Medical and Surgical Centre',
    role: 'Medical Office Assistant',
    period: 'Sep 2023 – Jan 2024',
    location: 'Vancouver, BC',
    logo: '/centro.png',
    dot: 'bg-purple-500',
    hover: 'hover:border-purple-300 dark:hover:border-purple-700',
    roleColor: 'text-purple-600 dark:text-purple-400',
    summary: 'Administrative role in a surgical centre supporting patient flow, records, and compliance.',
    bullets: [
      'Utilized database with patient information, preparing doctors for appointments with relevant data reports.',
      'Maintained strict confidentiality and adherence to regulatory and privacy standards.',
      'Displayed high attention to detail in paperwork and administrative tasks to minimize mistakes and risks.',
    ],
  },
]

function RoleCard({ r }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl bg-stone-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 ${r.hover} transition-colors overflow-hidden`}>
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={r.logo} alt={r.company} className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">{r.company}</h3>
              <p className={`${r.roleColor} text-sm font-medium`}>{r.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 dark:text-slate-400">{r.period}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{r.location}</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{r.summary}</p>

        <button
          onClick={() => setOpen(o => !o)}
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
        >
          {open ? 'Hide details' : 'Show details'}
          <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700 pt-4">
          <ul className="space-y-2.5">
            {r.bullets.map((b, j) => (
              <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-stone-50 dark:bg-[#010301]">
      <div className="max-w-4xl mx-auto">
        <p className="text-teal-500 dark:text-teal-400 text-sm font-medium mb-3 tracking-wide uppercase">Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">Experience</h2>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

          <div className="space-y-10">
            {roles.map((r, i) => (
              <div key={i} className="sm:pl-12 relative">
                <div className={`absolute left-4 top-6 w-3 h-3 -translate-x-1/2 rounded-full ${r.dot} hidden sm:block ring-4 ring-white dark:ring-slate-900`} />
                <RoleCard r={r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
