import { useState } from 'react'

// Each project gets its own shade of orange; a skill's dots show which projects used it.
const PROJECTS = [
  { id: 'jobhunt', name: 'jobhunt',          color: '#c2410c' },
  { id: 'mushu',   name: 'Mushu Kwok AI',    color: '#f97316' },
  { id: 'ulti',    name: 'Ulti Coach App',   color: '#fdba74' },
]

// Mirrors the Technical Skills section of the resume. `core` = the ones I lean on most.
const groups = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python',     core: true, used: ['jobhunt', 'mushu'] },
      { name: 'JavaScript', core: true, used: ['mushu', 'ulti'] },
      { name: 'Java',       used: [] },
      { name: 'C++',        used: [] },
      { name: 'SQL',        used: ['jobhunt'] },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'React',   core: true, used: ['mushu'] },
      { name: 'FastAPI', core: true, used: ['mushu'] },
      { name: 'Next.js', used: ['mushu'] },
      { name: 'Node.js', used: ['ulti'] },
      { name: 'Express', used: ['ulti'] },
    ],
  },
  {
    label: 'Cloud & Tools',
    skills: [
      { name: 'Claude API',   core: true, used: ['jobhunt'] },
      { name: 'Git',          used: ['jobhunt', 'mushu', 'ulti'] },
      { name: 'Linux',        used: ['jobhunt'] },
      { name: 'Oracle Cloud', used: ['jobhunt'] },
      { name: 'SQLite',       used: ['jobhunt'] },
      { name: 'pytest',       used: ['jobhunt'] },
      { name: 'MongoDB',      used: ['ulti'] },
    ],
  },
]

const shade = id => PROJECTS.find(p => p.id === id).color

function SkillTile({ s, focus }) {
  const dim = focus && !s.used.includes(focus)
  const lit = focus && s.used.includes(focus)
  return (
    <li
      className={`flex flex-col justify-between rounded-md border border-b-[3px] transition-all duration-200
        min-w-[104px] px-3 pt-2 pb-2 text-[15px] ${s.core ? 'font-bold' : 'font-medium'}
        ${dim ? 'opacity-25' : 'opacity-100'}`}
      style={{
        borderColor: lit ? shade(focus) : s.core ? '#fdba74' : '#e2e8f0',
        backgroundColor: s.core ? '#fff7ed' : '#fff',
      }}
    >
      <span className={`leading-tight ${s.core ? 'text-orange-700' : 'text-slate-900'}`}>{s.name}</span>
      <span className="mt-2 flex items-center justify-between gap-3 h-3">
        <span className="flex gap-1">
          {s.used.map(id => (
            <span key={id} className="w-2 h-2 rounded-[2px]" style={{ backgroundColor: shade(id) }} />
          ))}
        </span>
        {s.core && <span className="text-[10px] font-semibold uppercase tracking-wide text-orange-600">core</span>}
      </span>
    </li>
  )
}

export default function Skills() {
  const [pinned, setPinned] = useState(null)
  const [hover, setHover] = useState(null)
  const focus = hover ?? pinned

  return (
    <section id="skills" className="px-6 pt-4 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Project legend: hover (or tap) a project to light up the skills it used */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-4 text-sm text-slate-500">
          <span>Used in:</span>
          {PROJECTS.map(p => (
            <button
              key={p.id}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setPinned(cur => (cur === p.id ? null : p.id))}
              aria-pressed={pinned === p.id}
              className={`inline-flex items-center gap-2 cursor-pointer transition-colors ${focus === p.id ? 'text-slate-900 font-medium' : 'hover:text-slate-800'}`}
            >
              <span className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: p.color }} />
              {p.name}
            </button>
          ))}
        </div>

        <div className="divide-y divide-green-100 border-t border-green-100">
          {groups.map(group => (
            <div key={group.label} className="py-8 grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8">
              <h3 className="text-lg font-bold accent-text sm:pt-2">{group.label}</h3>
              <ul className="flex flex-wrap items-end gap-2.5">
                {group.skills.map(s => <SkillTile key={s.name} s={s} focus={focus} />)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
