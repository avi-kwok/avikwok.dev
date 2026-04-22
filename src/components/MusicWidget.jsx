import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

export default function MusicWidget({ theme }) {
  const [volume,   setVolume]   = useState(0.5)
  const [playing,  setPlaying]  = useState(false)
  const [showName, setShowName] = useState(false)
  const audioRef   = useRef(null)
  const startedRef = useRef(false)

  // Attempt autoplay on mount
  useEffect(() => {
    startedRef.current = true
    audioRef.current?.play()
      .then(() => { setPlaying(true); setShowName(true) })
      .catch(() => {})
  }, [])

  // Switch track when theme changes
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = theme.src
    audioRef.current.load()
    if (startedRef.current) {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    }
  }, [theme.src])

  // Keep volume in sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  // Spacebar / Enter toggles play-pause
  useEffect(() => {
    function onKey(e) {
      if (e.code === 'Space' || e.code === 'Enter') {
        const tag = document.activeElement?.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return
        e.preventDefault()
        togglePlay()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [playing])

  // Expose controls for Landing and Special
  useEffect(() => {
    window.__musicPause = () => {
      audioRef.current?.pause()
      setPlaying(false)
    }
    window.__musicPlay = () => {
      if (!startedRef.current || !audioRef.current) return
      audioRef.current.play()
        .then(() => { setPlaying(true); setShowName(true) })
        .catch(() => {})
    }
    window.__musicRestart = () => {
      if (!audioRef.current) return
      audioRef.current.currentTime = 0
      audioRef.current.play()
        .then(() => { setPlaying(true); setShowName(true) })
        .catch(() => {})
    }
    window.__musicIsPlaying = () => !audioRef.current?.paused
    return () => {
      delete window.__musicPause
      delete window.__musicPlay
      delete window.__musicRestart
      delete window.__musicIsPlaying
    }
  }, [])

  function togglePlay() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      startedRef.current = true
      audioRef.current.play()
        .then(() => { setPlaying(true); setShowName(true) })
        .catch(() => {})
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 px-4 py-2.5">
      <audio ref={audioRef} loop preload="auto" />

      <button
        onClick={togglePlay}
        title={playing ? 'Pause' : 'Play'}
        className="text-emerald-600 hover:text-emerald-800 transition-colors cursor-pointer flex-shrink-0"
      >
        {playing ? <Pause size={15} /> : <Play size={15} />}
      </button>

      <div className="flex flex-col">
        <span className="text-[10px] font-semibold text-slate-700 leading-tight whitespace-nowrap">
          {showName ? theme.name : ''}
        </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={e => setVolume(parseFloat(e.target.value))}
          className="accent-emerald-500 cursor-pointer w-full mt-1"
        />
      </div>
    </div>
  )
}
