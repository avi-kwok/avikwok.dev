import { Music } from 'lucide-react'

// Newest first (Beer in Japan sits beside Joji so the half-width pair fills a row). `date` is when the photo went up on the site (mm/dd/yyyy).
// The grid is dense-packed, so a half-width photo may backfill a gap left by a
// full-width one above it. w/h are the file's pixel size so the layout doesn't jump while loading.
const photos = [
  { src: '/teddybear.jpg',   caption: 'TEDDY BEAR???',                            date: '11/03/2026', wide: true, w: 1600, h: 1067 },
  { src: '/minecraftpr.jpg', caption: 'New speedrun PB of 16:49.864 - shoutout Jon Ko for being the GOAT mentor',              date: '10/04/2026', wide: true, w: 1600, h: 900 },
  { src: '/joji.jpg',        caption: 'Joji in Seattle ‼️',                                date: '07/19/2026', w: 900, h: 1200 },
  { src: '/japanbeer.jpg',   caption: 'Beer in Japan ✅',                          date: '04/30/2026', w: 900, h: 1200 },
  { src: '/GC2.jpg',         caption: 'Hit 0.3% of all Rocket League players!',   date: '06/15/2026', wide: true, w: 1600, h: 898 },
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
    <section className="py-14 px-6">
      <div className="max-w-xl mx-auto w-full">

        {/* Portrait */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="/specialyoshi.png"
            alt="Special Yoshi"
            className="w-56 h-56 object-contain"
            draggable={false}
          />
          <p className="mt-3 text-xs text-slate-400 italic">Illustration by Avidan Kwok and Jadon Lao</p>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-2 grid-flow-row-dense gap-x-4 gap-y-8 mb-16">
          {photos.map((ph, i) => (
            <figure key={ph.src} className={ph.wide ? 'col-span-2' : ''}>
              <img
                src={ph.src}
                alt={ph.caption}
                width={ph.w}
                height={ph.h}
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-auto block rounded-xl bg-green-50 ring-1 ring-green-200"
                draggable={false}
              />
              <figcaption className="mt-2 flex justify-between items-baseline gap-3 text-sm">
                <span className="text-slate-700">{ph.caption}</span>
                <span className="text-xs text-slate-400 tabular-nums shrink-0">{ph.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Theme selector */}
        <h2 className="font-display text-xl font-bold text-slate-900 mb-2">Background music</h2>
        <ul className="divide-y divide-green-100 border-y border-green-200">
          {themes.map(theme => {
            const active = selectedTheme.id === theme.id
            return (
              <li key={theme.id}>
                <button
                  onClick={() => handleSelect(theme)}
                  className="w-full flex items-center gap-3 py-3.5 text-left cursor-pointer group"
                >
                  <Music size={14} className={active ? 'text-green-600' : 'text-slate-300 group-hover:text-green-500'} />
                  <span className={`flex-1 text-[15px] ${active ? 'font-semibold text-green-700' : 'text-slate-500 group-hover:text-slate-800'}`}>
                    {theme.name}
                  </span>
                  {active && (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Now playing
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Nintendo disclaimer — right under the music options */}
        <p className="mt-6 text-center text-xs text-slate-400 leading-relaxed">
          Music and character images © Nintendo. All rights reserved.<br />
          Not affiliated with or endorsed by Nintendo.
        </p>

      </div>
    </section>
  )
}
