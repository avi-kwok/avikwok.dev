import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

export default function MusicWidget() {
  const [volume,  setVolume]  = useState(0.5    )
  const [playing, setPlaying] = useState(false)
  const audioRef    = useRef(null)
  const startedRef  = useRef(false)

  useEffect(() => {
    startedRef.current = true
    audioRef.current?.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }, [])

  // Expose direct pause/play methods for Landing pronunciation button
  useEffect(() => {
    window.__musicPause = () => {
      audioRef.current?.pause()
      setPlaying(false)
    }
    window.__musicPlay = () => {
      if (!startedRef.current || !audioRef.current) return
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
    window.__musicIsPlaying = () => !audioRef.current?.paused
    return () => {
      delete window.__musicPause
      delete window.__musicPlay
      delete window.__musicIsPlaying
    }
  }, [])

  // Keep audio volume in sync; resume if started but paused
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = volume
    if (startedRef.current && volume > 0 && audioRef.current.paused && playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [volume, playing])

  function togglePlay() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      startedRef.current = true
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 px-4 py-2.5">
      <audio ref={audioRef} src="/bg-music.mp3" loop preload="auto" />

      <button
        onClick={togglePlay}
        title={playing ? 'Pause' : 'Play'}
        className="text-emerald-600 hover:text-emerald-800 transition-colors cursor-pointer flex-shrink-0"
      >
        {playing ? <Pause size={15} /> : <Play size={15} />}
      </button>

      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-semibold text-slate-700 leading-tight truncate">Yoshi's Island Theme</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={e => setVolume(parseFloat(e.target.value))}
          className="accent-emerald-500 cursor-pointer w-24 mt-1"
        />
      </div>
    </div>
  )
}
