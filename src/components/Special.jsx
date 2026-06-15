import { Music } from 'lucide-react'

const photos = [
  { src: '/steak.jpg',      caption: 'Steak' },
  { src: '/drivingdog.jpg', caption: 'The next Shigeru Shimada' },
  { src: '/GC2.png',        caption: 'Hit 0.3% of all Rocket League players!', wide: true },
]

export default function Special({ themes, selectedTheme, setSelectedTheme }) {
  function handleSelect(theme) {
    if (theme.id === selectedTheme.id) {
      window.__musicRestart?.()
    } else {
      setSelectedTheme(theme)
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto w-full">

        {/* Portrait */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="/specialyoshi.png"
            alt="Special Yoshi"
            className="w-64 h-64 object-contain drop-shadow-lg"
            draggable={false}
          />
          <p className="mt-3 text-xs text-slate-400 italic">Illustration by Avidan Kwok and Jadon Lao</p>
        </div>

        {/* Photo gallery — thin gradient border (matches the project widgets), rounded */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {photos.map(ph => (
            <figure key={ph.src} className={ph.wide ? 'col-span-2' : ''}>
              <div className="rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 p-[1.5px] shadow-sm">
                <div className="rounded-2xl overflow-hidden bg-white">
                  <img src={ph.src} alt={ph.caption} className="w-full h-auto block" draggable={false} />
                </div>
              </div>
              <figcaption className="mt-2 text-center text-sm text-slate-500">{ph.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Theme selector */}
        <h2 className="text-xl font-bold text-slate-900 mb-4">Background Music</h2>
        <div className="space-y-3">
          {themes.map(theme => {
            const active = selectedTheme.id === theme.id
            return (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all cursor-pointer text-left
                  ${active
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
              >
                <Music size={15} className={active ? 'text-emerald-500 flex-shrink-0' : 'text-slate-300 flex-shrink-0'} />
                <span className={`flex-1 text-sm font-medium ${active ? 'text-emerald-700' : 'text-slate-600'}`}>
                  {theme.name}
                </span>
                {active && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Now Playing
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Nintendo disclaimer — right under the music options */}
        <p className="mt-6 text-center text-xs text-slate-400 leading-relaxed">
          Music and character images © Nintendo. All rights reserved.<br />
          Not affiliated with or endorsed by Nintendo.
        </p>

      </div>
    </section>
  )
}
