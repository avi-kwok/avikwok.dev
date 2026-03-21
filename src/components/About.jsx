export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">About me</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Builder. Analyst. Team player.
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a second-year student at the UBC Sauder School of Business, currently looking to expand my experience through tech internships and developing projects.
              </p>
              <p>
                My professional career so far has been shaped by working in retail banking at TD, financial operations at Pharmasave, and healthcare administration at Centro Medical. Each role reinforced the same lesson: precision and empathy go together.
              </p>
              <p>
                I'm drawn to work that sits at the crossroads of people and systems, including product thinking, fintech, strategy, and ops. If it involves understanding how things work and making them work better, I'm interested.
              </p>
              <p>
                Outside of class and work, I'm a (now retired) :( national Ultimate Frisbee player - which has redefined how I approach teamwork, pressure, and preparation. In my free time, I enjoy playing Rocket League, cooking steak, playing sports, and attending occasional poker home games. 
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <img src="/photo.jpg" alt="Avidan Kwok" className="w-full h-auto block" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2028', label: 'Expected Graduation Year' },
            { value: 'Top 1%', label: 'In Rocket League and Valorant' },
            { value: 'Yoshi', label: 'Favourite Character' },
            { value: 'Green', label: 'Favourite Colour' },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-xl bg-stone-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <div className={`text-2xl font-bold mb-1 ${idx < 2 ? 'text-green-600 dark:text-green-400' : 'text-emerald-600 dark:text-emerald-400'}`}>{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
