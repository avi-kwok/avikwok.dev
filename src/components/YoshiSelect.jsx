import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Volume2 } from 'lucide-react'

export default function YoshiSelect({ yoshis, onSelect, onBack }) {
  const [playing, setPlaying] = useState(false)
  const [arrow,   setArrow]   = useState(null)
  const audioRef   = useRef(null)
  const headerRef  = useRef(null)
  const avidanRef  = useRef(null)
  const volIconRef = useRef(null)
  const pillRef    = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack])

  // Draw the arrow from "Avidan" to the pronounce widget's volume icon, with
  // equal spacing above (header) and below (widget). Recompute on resize.
  useLayoutEffect(() => {
    function compute() {
      const h = headerRef.current, a = avidanRef.current
      const v = volIconRef.current, p = pillRef.current
      if (!h || !a || !v || !p) return
      const hb = h.getBoundingClientRect()
      const ab = a.getBoundingClientRect()
      const vb = v.getBoundingClientRect()
      const pb = p.getBoundingClientRect()
      const inset = 7
      // Start just below "Avidan"; aim toward the volume icon's centre…
      const x1 = ab.left + ab.width / 2 - hb.left
      const y1 = ab.bottom - hb.top + inset
      const tx = vb.left + vb.width / 2 - hb.left
      const ty = vb.top + vb.height / 2 - hb.top
      // …but stop at the pill's top edge, keeping the same gap as the top.
      const y2 = pb.top - hb.top - inset
      const t = ty === y1 ? 1 : (y2 - y1) / (ty - y1)
      const x2 = x1 + t * (tx - x1)
      setArrow({ x1, y1, x2, y2 })
    }
    compute()
    window.addEventListener('resize', compute)
    document.fonts?.ready.then(compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

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
    <div className="h-screen bg-white overflow-hidden px-6 sm:px-8 grid place-items-center select-none">
      <audio ref={audioRef} preload="auto">
        <source src="/name.mp3" type="audio/mpeg" />
      </audio>

      {/* The yoshis are the centered element; the header sits absolutely on top of
          them so it never shifts their centering. */}
      <div className="relative grid place-items-center">
        {/* Header + widgets — stacked directly above the yoshis */}
        <div
          ref={headerRef}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-10 sm:mb-14 w-max max-w-[90vw] flex flex-col items-center gap-11 opacity-0"
          style={{ animation: 'yoshiFadeIn 0.3s ease forwards' }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
            Hey, I'm{' '}
            <span ref={avidanRef} className="text-emerald-500">Avidan</span>{' '}
            Kwok
          </h1>

          <div className="flex flex-row flex-wrap justify-center items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-600 text-xs sm:text-sm font-medium shadow-[0_0_12px_rgba(52,211,153,0.35)] whitespace-nowrap">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
              Open to internships in Canada
            </div>

            <button
              ref={pillRef}
              onClick={playName}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap
                ${playing
                  ? 'border-emerald-500 text-emerald-600 bg-emerald-50 shadow-[0_0_14px_rgba(52,211,153,0.5)]'
                  : 'border-emerald-300 text-emerald-600 bg-emerald-50 hover:shadow-[0_0_14px_rgba(52,211,153,0.5)]'
                }`}
            >
              <span ref={volIconRef} className="inline-flex flex-shrink-0">
                <Volume2 size={14} className={playing ? 'animate-pulse' : ''} />
              </span>
              How to pronounce "Avidan"
            </button>
          </div>

          {/* Arrow from "Avidan" to the volume icon (measured, so it tracks resizes) */}
          {arrow && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible text-emerald-500"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="ak-arrowhead"
                  markerUnits="userSpaceOnUse"
                  markerWidth="14"
                  markerHeight="14"
                  refX="10"
                  refY="6"
                  orient="auto"
                >
                  <path
                    d="M2 2 L10 6 L2 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              <line
                x1={arrow.x1}
                y1={arrow.y1}
                x2={arrow.x2}
                y2={arrow.y2}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                markerEnd="url(#ak-arrowhead)"
              />
            </svg>
          )}
        </div>

        {/* Yoshis — the true center of the page */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 place-items-center sm:flex sm:flex-row sm:items-end sm:gap-8 md:gap-10">
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
      </div>
    </div>
  )
}
