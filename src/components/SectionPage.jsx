import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

// Every section shares this frame: sticky header,
// then the page's Yoshi centred as the opening image. ??? draws its own portrait instead.
export default function SectionPage({ yoshi, onBack, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack])

  const showHero = yoshi.id !== 'special'

  return (
    <div className="min-h-screen bg-white" style={{ '--accent': yoshi.accent }}>
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="flex items-center gap-3 px-6 py-3">
          <button
            onClick={onBack}
            title="Back (Esc)"
            className="flex items-center justify-center w-8 h-8 rounded-full text-slate-400 hover:bg-green-50 hover:text-green-700 transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>
          <img src={yoshi.img} alt="" className="w-8 h-8 object-contain" />
          <span className="font-display font-semibold text-slate-900 text-base">{yoshi.label}</span>
        </div>
      </header>

      {showHero && (
        <div className="pt-12 flex flex-col items-center">
          <div className="relative grid place-items-center">
            <div aria-hidden="true" className="absolute bottom-1 w-28 h-4 rounded-[50%] blur-[3px]" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 22%, white)' }} />
            <img
              src={yoshi.img}
              alt=""
              className="relative w-36 h-36 sm:w-40 sm:h-40 object-contain"
              draggable={false}
            />
          </div>
        </div>
      )}

      {children}
    </div>
  )
}
