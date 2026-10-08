import { Music } from 'lucide-react'

// Newest first. `date` is when the photo went up on the site (mm/dd/yyyy).
// The grid is dense-packed, so a half-width photo may backfill a gap left by a
// full-width one above it — Beer in Japan rides up next to the dog for that reason.
const photos = [
  { src: '/minecraftpr.png', caption: 'New speedrun PB of 16:49.864 - shoutout Jon Ko for being the GOAT mentor',              date: '10/04/2026', wide: true },
  { src: '/joji.jpg',        caption: 'Joji in Seattle ‼️',                                date: '07/19/2026' },
  { src: '/steak.jpg',       caption: 'Steak',                                    date: '06/15/2026' },
  { src: '/drivingdog.jpg',  caption: 'The next Shigeru Shimada',                 date: '06/15/2026' },
  { src: '/GC2.png',         caption: 'Hit 0.3% of all Rocket League players!',   date: '06/15/2026', wide: true },
  { src: '/japanbeer.jpg',   caption: 'Beer in Japan ✅',                          date: '04/30/2026' },
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
        <div className="grid grid-cols-2 grid-flow-row-dense gap-4 mb-12">
          {photos.map(ph => (
            <figure key={ph.src} className={ph.wide ? 'col-span-2' : ''}>
              <div className="rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 p-[1.5px] shadow-sm">
                <div className="rounded-2xl overflow-hidden bg-white">
                  <img src={ph.src} alt={ph.caption} className="w-full h-auto block" draggable={false} />
                </div>
              </div>
              <figcaption className="mt-2 text-center text-sm text-slate-500">{ph.caption} - {ph.date}</figcaption>
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
