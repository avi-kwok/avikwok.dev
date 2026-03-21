import { Trophy } from 'lucide-react'

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">Athletics & Leadership</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">Beyond the Classroom</h2>

        <div className="rounded-2xl border border-yellow-200 dark:border-yellow-900/50 bg-gradient-to-br from-yellow-50 to-amber-50/50 dark:from-yellow-950/20 dark:to-amber-950/10 p-8 mb-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/20 dark:bg-stone-500/20 flex items-center justify-center flex-shrink-0">
              <Trophy className="text-yellow-600 dark:text-yellow-400" size={22} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Canadian Ultimate Junior Championships
                </h3>
                <span className="px-2.5 py-1 bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full">
                  🥇 Gold · 2024
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Dyno Open · Prime Ultimate Club · Vancouver, BC
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Competed at the national level in Ultimate Frisbee as part of Dyno Open, a junior club team under Prime Ultimate.
                Winning a national championship demands more than athletic ability - it requires clear communication under pressure,
                selfless teamwork, and consistent performance at the highest level. These are qualities I carry into everything I do.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Teamwork',
              desc: 'Competed as part of a cohesive unit, learning to lead, follow, and adapt based on what the moment requires.',
            },
            {
              title: 'Discipline',
              desc: 'Years of training and competition have built a consistent work ethic that carries directly into academic and professional contexts.',
            },
            {
              title: 'Performance Under Pressure',
              desc: 'Competing at nationals means delivering when it counts - a mindset I bring to high-stakes professional environments.',
            },
          ].map(item => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-stone-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{item.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
