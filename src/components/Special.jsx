import { Music } from 'lucide-react'
import { photos, imgProps } from '../gallery'

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
          {photos.map(ph => (
            <figure key={ph.name} className={ph.wide ? 'col-span-2' : ''}>
              <img
                {...imgProps(ph)}
                alt={ph.caption}
                width={ph.w}
                height={ph.h}
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
        <h2 className="font-display text-xl font-bold text-ink mb-2">Background music</h2>
        <ul className="divide-y divide-green-100 border-y border-green-200">
          {themes.map(theme => {
            const active = selectedTheme.id === theme.id
            return (
              <li key={theme.id}>
                <button
                  onClick={() => handleSelect(theme)}
                  className="w-full flex items-center gap-3 py-3.5 text-left cursor-pointer group"
                >
                  <Music size={14} className={active ? 'accent-text' : 'text-slate-300 group-hover:accent-text'} />
                  <span className={`flex-1 text-[15px] ${active ? 'font-semibold accent-text' : 'text-muted group-hover:text-ink'}`}>
                    {theme.name}
                  </span>
                  {active && (
                    <span className="flex items-center gap-1.5 text-xs font-medium accent-text">
                      <span className="w-1.5 h-1.5 accent-bg rounded-full" />
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
