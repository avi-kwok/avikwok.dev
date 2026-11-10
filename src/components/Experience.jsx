import { useState } from 'react'
import { ChevronDown, Trophy } from 'lucide-react'
import { Sparkles } from './Shiny'


const roles = [
  {
    company: 'TD Canada Trust',
    role: 'Customer Experience Associate',
    period: 'May 2025 – May 2026',
    logo: '/td.png',
    dot: 'bg-green-500',
    hover: 'hover:border-emerald-300',
    roleColor: 'text-emerald-700',
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
    logo: '/pharmasave.png',
    dot: 'bg-red-500',
    hover: 'hover:border-red-300',
    roleColor: 'text-red-700',
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
    logo: '/centro.png',
    dot: 'bg-purple-500',
    hover: 'hover:border-purple-300',
    roleColor: 'text-purple-700',
    summary: 'Administrative role in a surgical centre supporting patient flow, records, and compliance.',
    bullets: [
      'Utilized database with patient information, preparing doctors for appointments with relevant data reports.',
      'Maintained strict confidentiality and adherence to regulatory and privacy standards.',
      'Displayed high attention to detail in paperwork and administrative tasks to minimize mistakes and risks.',
    ],
  },
]

// Featured first, then newest first.
const awards = [
  {
    date: 'Oct 2026',
    title: 'First Place, UBC BizTech Product+ 2026',
    shiny: true,
    featured: true,
    photo: '/productplus.jpg',
    note: 'My first ever competition in university!',
    body: 'Won first place out of 29 teams and 150+ competitors. Pitched and prototyped an AI agent that pre-positions pharmacy inventory ahead of flu-season demand surges.',
  },
  {
    date: 'Nov 2026',
    title: 'Third Place, Best Agent on Maritime (Sponsor Track)',
    org: 'nwPlus HackCamp 2026 · Vancouver, BC',
    body: "Placed third out of 76 teams with Altamyra, whose Lesson Lens agent adapts lesson plans to each student's IEP goals.",
  },
  {
    date: 'May 2025',
    title: 'Junior Tier 1 Ultimate City Champions 2025, Head Coach',
    org: "Vancouver Secondary School's Athletic Association",
    body: 'Coached some highschoolers on how to throw a disc',
  },
  {
    date: 'Aug 2024',
    title: 'National Champion, Dyno Open, Prime Ultimate Club',
    org: 'Canadian Ultimate Championships · Ottawa, ON',
    body: 'Won the national title undefeated, competing against 24 teams across 520 players.',
  },
]

function Heading({ children }) {
  return (
    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-6">
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

// Dot sits level with the 40px icon/logo box: 24px card padding + 20px = 44px.
function TimelineItem({ dot = 'accent-bg', children }) {
  return (
    <div className="sm:pl-12 relative">
      <div className={`absolute left-4 top-[44px] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${dot} hidden sm:block ring-4 ring-white`} />
      {children}
    </div>
  )
}

function AwardCard({ a }) {
  return (
    <div className="relative">
    <div className={`rounded-2xl bg-white border p-6 ${a.shiny ? 'border-amber-300 relative overflow-hidden' : 'accent-tint-border'}`}>
      {a.shiny && <div className="shine-sweep" style={{ '--shine': 'rgba(251,191,36,.22)' }} />}
      <div className="flex items-start gap-4 relative">
        <div className="relative flex-shrink-0">
          <div className={`w-10 h-10 rounded-md bg-white border flex items-center justify-center ${a.shiny ? 'border-amber-300 text-amber-600' : 'accent-tint-border'}`}>
            <Trophy className={a.shiny ? '' : 'accent-text'} size={18} />
          </div>
          {a.shiny && (
            <Sparkles spots={[
              { top: -6, right: -6, size: 12, delay: '0s' },
              { bottom: -5, left: -6, size: 10, delay: '.8s' },
              { top: -4, left: -7, size: 10, delay: '1.6s' },
            ]} />
          )}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-ink leading-tight">{a.title}</h3>
            <span className="text-sm text-muted tabular-nums">{a.date}</span>
          </div>
          {a.org && <p className="mt-1 text-sm text-muted">{a.org}</p>}
          <div className="mt-4">
            {a.note && <p className="text-sm accent-text">{a.note}</p>}
            <p className={`${a.note ? 'mt-1.5 ' : ''}text-[15px] leading-relaxed text-body`}>{a.body}</p>
          </div>
          {a.photo && (
            <img
              src={a.photo}
              alt={`${a.title} winners`}
              width={800}
              height={533}
              loading="lazy"
              decoding="async"
              className="mt-4 w-full rounded-md ring-1 ring-amber-200 object-cover"
            />
          )}
        </div>
      </div>
    </div>
    {a.shiny && <span className="absolute top-0 right-0 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-amber-50 border border-amber-300 shadow-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">{a.featured ? 'Featured' : 'New'}</span>}
    </div>
  )
}

function RoleCard({ r }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl bg-white border border-line ${r.hover} transition-colors overflow-hidden`}>
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-white border border-line flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={r.logo} alt={r.company} className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink leading-tight">{r.company}</h3>
              <p className={`${r.roleColor} text-sm font-medium`}>{r.role}</p>
            </div>
          </div>
          <p className="text-sm text-muted tabular-nums">{r.period}</p>
        </div>

        <p className="mt-4 text-[15px] text-body">{r.summary}</p>

        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800 active:scale-[0.97] transition-[color,transform] cursor-pointer"
        >
          {open ? 'Hide details' : 'Show details'}
          <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-4 border-t border-line">
            <ul className="space-y-2.5">
              {r.bullets.map(b => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-body">
                  <span className={`w-1.5 h-1.5 rounded-full ${r.dot} mt-[0.6em] shrink-0`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 pt-10 pb-16">
      <div className="max-w-4xl mx-auto">
        <Heading>Awards</Heading>
        <Timeline>
          {awards.map(a => <TimelineItem key={a.title} dot={a.shiny ? 'bg-amber-400' : undefined}><AwardCard a={a} /></TimelineItem>)}
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
