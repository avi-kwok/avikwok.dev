import { useState, useRef, useEffect } from 'react'
import { Volume2 } from 'lucide-react'

export default function YoshiSelect({ yoshis, onSelect, onBack }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack])

  function playName() {
    if (playing) return
    const musicWasPlaying = window.__musicIsPlaying?.() ?? false
    window.__musicPause?.()
    const audio = audioRef.current
    audio.currentTime = 0
    audio.volume = 0.15
    audio.play()
    setPlaying(true)
    audio.onended = () => {
      setPlaying(false)
      if (musicWasPlaying) window.__musicPlay?.()
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden px-6 sm:px-8 py-12 sm:py-16 grid grid-rows-[1fr_auto_1fr] justify-items-center select-none">
      <audio ref={audioRef} preload="auto">
        <source src="/name.mp3" type="audio/mpeg" />
      </audio>

      {/* Header + widgets */}
      <div
        className="flex flex-col items-center gap-4 sm:gap-5 mb-8 sm:mb-10 opacity-0 self-end"
        style={{ animation: 'yoshiFadeIn 0.3s ease forwards' }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center leading-snug">
          Hey, I'm{' '}
          <span className="text-emerald-500">Avidan</span>{' '}
          Kwok
        </h1>

        <div className="flex flex-row flex-wrap justify-center items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-600 text-xs sm:text-sm font-medium shadow-[0_0_12px_rgba(52,211,153,0.35)] whitespace-nowrap">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
            Open to internships in Canada
          </div>

          <button
            onClick={playName}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap
              ${playing
                ? 'border-emerald-500 text-emerald-600 bg-emerald-50 shadow-[0_0_14px_rgba(52,211,153,0.5)]'
                : 'border-emerald-300 text-emerald-600 bg-emerald-50 hover:shadow-[0_0_14px_rgba(52,211,153,0.5)]'
              }`}
          >
            <Volume2 size={14} className={playing ? 'animate-pulse' : ''} />
            How to pronounce "Avidan"
          </button>
        </div>
      </div>

      {/* Yoshis */}
      <div className="w-full grid grid-cols-2 gap-x-10 gap-y-10 place-items-center justify-center sm:flex sm:flex-row sm:items-end sm:justify-center sm:gap-8 md:gap-10">
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
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain group-hover:brightness-75 transition-all duration-200"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div aria-hidden="true" />
    </div>
  )
}
