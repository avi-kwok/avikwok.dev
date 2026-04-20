import { useEffect } from 'react'

export default function YoshiSelect({ yoshis, onSelect, onBack }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack])

  return (
    <div className="h-screen bg-white overflow-hidden px-8 grid place-items-center">
      <div className="flex flex-col items-start gap-3">
        <h1
          className="text-3xl sm:text-4xl font-bold text-slate-900 opacity-0 break-words max-w-[16rem] sm:max-w-none"
          style={{ animation: 'yoshiFadeIn 0.3s ease forwards' }}
        >
          Avidan Kwok's Website
        </h1>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10 place-items-center sm:flex sm:flex-row sm:items-end sm:gap-10">
          {yoshis.map((y, i) => (
            <div
              key={y.id}
              className={`flex flex-col items-center gap-2 cursor-pointer group opacity-0${yoshis.length % 2 !== 0 && i === yoshis.length - 1 ? ' col-span-2' : ''}`}
              style={{ animation: 'yoshiFadeIn 0.3s ease forwards', animationDelay: `${(i * 0.14).toFixed(2)}s` }}
              onClick={() => onSelect(y.id)}
            >
              <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                {y.label}
              </span>
              <img
                src={y.img}
                alt={y.label}
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain group-hover:brightness-75 transition-all duration-200"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-white break-words max-w-[16rem] sm:max-w-none select-none pointer-events-none"
          aria-hidden="true"
        >
          Avidan Kwok's Website
        </h1>
      </div>
    </div>
  )
}
