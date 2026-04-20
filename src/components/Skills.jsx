const groups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'R'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'Git', 'Docker'],
  },
  {
    label: 'Business & Professional',
    skills: ['Google Workspace', 'Microsoft 365', 'Client Relations', 'Regulatory Compliance', 'Problem Solving', 'Communication'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-stone-50 dark:bg-[#010301]">
      <div className="max-w-4xl mx-auto">
        <p className="text-teal-500 dark:text-teal-400 text-sm font-medium mb-3 tracking-wide uppercase">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">Skills</h2>

        <div className="space-y-10">
          {groups.map(group => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-emerald-400 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
