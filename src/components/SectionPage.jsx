import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function SectionPage({ yoshi, onBack, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onBack()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack])

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white border-b border-slate-100 flex items-center gap-3 px-6 py-3">
        <button
          onClick={onBack}
          title="Back (Esc)"
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <img src={yoshi.img} alt={yoshi.label} className="w-8 h-8 object-contain" />
        <span className="font-semibold text-slate-800 text-base">{yoshi.label}</span>
      </div>
      {children}
    </div>
  )
}
