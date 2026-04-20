import { useState, useRef } from 'react'
import { Volume2 } from 'lucide-react'

export default function Landing({ onDone }) {
  const [playing,   setPlaying]   = useState(false)
  const [expanding, setExpanding] = useState(false)
  const audioRef = useRef(null)

  function playName() {
    if (playing) return
    const musicWasPlaying = window.__musicIsPlaying?.() ?? false
    window.__musicPause?.()
    const audio = audioRef.current
    audio.currentTime = 0
    audio.play()
    setPlaying(true)
    audio.onended = () => {
      setPlaying(false)
      if (musicWasPlaying) window.__musicPlay?.()
    }
  }

  function handleYoshiClick() {
    if (expanding) return
    window.__musicPlay?.()
    setExpanding(true)
    setTimeout(onDone, 650)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden select-none">
      <audio ref={audioRef} preload="auto">
        <source src="/name.mp3" type="audio/mpeg" />
      </audio>

      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center px-4">
        Avidan Kwok's Website
      </h1>

      <div
        onClick={handleYoshiClick}
        className={`cursor-pointer ${!expanding ? 'hover:scale-105 transition-transform duration-200' : ''}`}
        style={expanding ? { animation: 'yoshiExpand 0.65s ease-in forwards', transformOrigin: 'center' } : {}}
      >
        <img
          src="/fatyoshi.jpeg"
          alt="Fat Yoshi"
          className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
          draggable={false}
        />
      </div>

      <p className="mt-3 text-xs text-slate-400 italic animate-pulse">click me to start</p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
        <button
          onClick={playName}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all cursor-pointer
            ${playing
              ? 'border-emerald-500 text-emerald-600 bg-emerald-50 shadow-[0_0_14px_rgba(52,211,153,0.5)]'
              : 'border-emerald-300 text-emerald-600 bg-emerald-50 hover:shadow-[0_0_14px_rgba(52,211,153,0.5)]'
            }`}
        >
          <Volume2 size={14} className={playing ? 'animate-pulse' : ''} />
          How to pronounce "Avidan"
        </button>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-600 text-sm font-medium shadow-[0_0_12px_rgba(52,211,153,0.35)]">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
          Open to internships in Canada
        </div>
      </div>
    </div>
  )
}
