// Mirrors the Technical Skills section of the resume; highlighted ones render first.
const groups = [
  { label: 'Languages',     skills: ['Python', 'TypeScript', 'Java', 'C++', 'SQL'] },
  { label: 'Frameworks',    skills: ['React', 'Next.js', 'FastAPI', 'Hono', 'LangChain'] },
  { label: 'Cloud & Tools', skills: ['Git', 'Linux', 'Cloudflare Workers', 'Oracle Cloud', 'pytest', 'Claude API', 'Gemini API'] },
]

// The ones I lean on most, highlighted in the page accent.
const core = ['Python', 'TypeScript', 'React', 'FastAPI', 'Cloudflare Workers', 'Claude API']

export default function Skills() {
  return (
    <section id="skills" className="px-6 pt-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="divide-y divide-green-100 border-t border-green-100 mt-4">
          {groups.map(group => (
            <div key={group.label} className="py-8 grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8">
              <h3 className="text-lg font-bold accent-text sm:pt-2">{group.label}</h3>
              <ul className="flex flex-wrap items-center gap-2.5">
                {[...group.skills.filter(n => core.includes(n)), ...group.skills.filter(n => !core.includes(n))].map(name => (
                  <li
                    key={name}
                    className={`rounded-md border px-3 py-2 text-[15px] leading-tight ${core.includes(name)
                      ? 'accent-tint accent-tint-border accent-text font-bold'
                      : 'border-line bg-white text-ink font-medium'}`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
