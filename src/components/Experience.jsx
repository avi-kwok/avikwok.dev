import { useState } from 'react'
import { ChevronDown, Trophy } from 'lucide-react'


const roles = [
  {
    company: 'TD Canada Trust',
    role: 'Customer Experience Associate',
    period: 'May 2025 – May 2026',
    location: 'Vancouver, BC',
    logo: '/td.png',
    dot: 'bg-green-500',
    hover: 'hover:border-emerald-300',
    roleColor: 'text-emerald-600',
    summary: 'Retail banking role focused on client advisory, financial transactions, and branch growth.',
    bullets: [
      'Partnered with advisors on personalized client referrals, generating $1.2M+ in investments and 18% branch growth.',
      'Authenticated clients and upheld KYC/AML and banking privacy regulations, supporting compliance audits and testing.',
      'Earned a 100% customer score in 2026 through clear, concise client service in English, Cantonese, and Mandarin.',
    ],
  },
  {
    company: 'Pharmasave',
    role: 'Financial Assistant',
    period: 'Oct 2024 – Jan 2025',
    location: 'Vancouver, BC',
    logo: '/pharmasave.png',
    dot: 'bg-red-500',
    hover: 'hover:border-red-300',
    roleColor: 'text-red-600',
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
    hover: 'hover:border-purple-300',
    roleColor: 'text-purple-600',
    summary: 'Administrative role in a surgical centre supporting patient flow, records, and compliance.',
    bullets: [
      'Utilized database with patient information, preparing doctors for appointments with relevant data reports.',
      'Maintained strict confidentiality and adherence to regulatory and privacy standards.',
      'Displayed high attention to detail in paperwork and administrative tasks to minimize mistakes and risks.',
    ],
  },
]

// Newest first.
const awards = [
  {
    date: 'Oct 2026',
    title: 'First Place, UBC BizTech Product+ 2026',
    badge: '🥇 1st of 29 teams',
    org: 'Vancouver, BC',
    note: 'My first ever competition in university!',
    body: 'Won first place out of 29 teams and 150+ competitors. Pitched and prototyped an AI agent that pre-positions pharmacy inventory ahead of flu-season demand surges.',
  },
  {
    date: 'Aug 2024',
    title: 'National Champion, Dyno Open, Prime Ultimate Club',
    badge: '🥇 Undefeated',
    org: 'Canadian Ultimate Championships · Ottawa, ON',
    body: 'Won the national title undefeated, competing against 24 teams across 520 players.',
  },
]

function Heading({ children }) {
  return (
    <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3 mb-6">
      <span className="w-1.5 h-7 rounded-full accent-bg" />
      {children}
    </h2>
  )
}

// Vertical line with a dot per item (kept from the original Experience page).
function Timeline({ children }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-green-200 hidden sm:block" />
      <div className="space-y-6">{children}</div>
    </div>
  )
}

function TimelineItem({ dot = 'accent-bg', children }) {
  return (
    <div className="sm:pl-12 relative">
      <div className={`absolute left-4 top-7 w-3 h-3 -translate-x-1/2 rounded-full ${dot} hidden sm:block ring-4 ring-white`} />
      {children}
    </div>
  )
}

function AwardCard({ a }) {
  return (
    <div className="rounded-2xl bg-white border accent-tint-border p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-white border accent-tint-border flex items-center justify-center flex-shrink-0">
          <Trophy className="accent-text" size={18} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-slate-900 leading-tight">{a.title}</h3>
            <span className="text-sm text-slate-500">{a.date}</span>
          </div>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-white border border-yellow-300 text-yellow-700 text-xs font-semibold">{a.badge}</span>
          <p className="mt-2 text-sm text-slate-500">{a.org}</p>
          {a.note && <p className="mt-3 text-sm italic accent-text">{a.note}</p>}
          <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{a.body}</p>
        </div>
      </div>
    </div>
  )
}

function RoleCard({ r }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl bg-white border border-slate-200 ${r.hover} transition-colors overflow-hidden`}>
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={r.logo} alt={r.company} className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-tight">{r.company}</h3>
              <p className={`${r.roleColor} text-sm font-medium`}>{r.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">{r.period}</p>
            <p className="text-xs text-slate-400">{r.location}</p>
          </div>
        </div>

        <p className="text-[15px] text-slate-700">{r.summary}</p>

        <button
          onClick={() => setOpen(o => !o)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800 transition-colors cursor-pointer"
        >
          {open ? 'Hide details' : 'Show details'}
          <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="px-6 pb-6 pt-4 border-t border-slate-100">
          <ul className="space-y-2.5">
            {r.bullets.map(b => (
              <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                <span className={`${r.roleColor} mt-0.5 flex-shrink-0 font-bold`}>›</span>
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
    <section id="experience" className="px-6 pt-10 pb-16">
      <div className="max-w-4xl mx-auto">
        <Heading>Awards</Heading>
        <Timeline>
          {awards.map(a => <TimelineItem key={a.title}><AwardCard a={a} /></TimelineItem>)}
        </Timeline>

        <div className="mt-16">
          <Heading>Experience</Heading>
          <Timeline>
            {roles.map(r => <TimelineItem key={r.company} dot={r.dot}><RoleCard r={r} /></TimelineItem>)}
          </Timeline>
        </div>
      </div>
    </section>
  )
}
