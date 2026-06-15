import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX, ChevronRight } from 'lucide-react'

function fmt(t) {
  if (!isFinite(t) || t < 0) t = 0
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MusicWidget({ themes, theme, setTheme }) {
  const [volume,      setVolume]      = useState(0.25)
  const [playing,     setPlaying]     = useState(false)
  const [showName,    setShowName]    = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration,    setDuration]    = useState(0)
  const [showVolume,  setShowVolume]  = useState(false)
  const [minimized,   setMinimized]   = useState(false)
  const audioRef   = useRef(null)
  const startedRef = useRef(false)
  const prevVolRef = useRef(0.25)

  const idx = themes.findIndex(t => t.id === theme.id)

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

  // Skip through tracks in the same order as the "???" section
  function changeTrack(delta) {
    if (idx < 0 || themes.length === 0) return
    startedRef.current = true
    setShowName(true)
    setTheme(themes[(idx + delta + themes.length) % themes.length])
  }

  function onSeek(e) {
    const t = parseFloat(e.target.value)
    if (audioRef.current) audioRef.current.currentTime = t
    setCurrentTime(t)
  }

  // Click the volume icon to mute; click again to restore the previous level
  function toggleMute() {
    if (volume > 0) {
      prevVolRef.current = volume
      setVolume(0)
    } else {
      setVolume(prevVolRef.current || 0.25)
    }
  }

  const VolIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        onTimeUpdate={e => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={e => setDuration(e.currentTarget.duration)}
        onEnded={() => changeTrack(1)}
      />

      {/* Minimized — the whole widget collapsed into the sound icon */}
      <button
        onClick={() => setMinimized(false)}
        title="Expand music player"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-slate-200 text-emerald-600 hover:text-emerald-800 transition-opacity duration-300 cursor-pointer ${showName && minimized ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <VolIcon size={18} />
      </button>

      {/* Full widget */}
      <div className={`fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 px-4 py-3 transition-opacity duration-300 ${showName && !minimized ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        {/* Collapse button — solid circle straddling the top-left corner */}
        <button
          onClick={() => setMinimized(true)}
          title="Minimize"
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors cursor-pointer"
        >
          <ChevronRight size={16} className="rotate-45" />
        </button>

      {/* Song title */}
      <div className="text-xs font-semibold text-slate-700 leading-tight truncate mb-2">
        {showName ? theme.name : ''}
      </div>

      {/* Seek slider + elapsed / total time */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] tabular-nums text-slate-400 w-7 text-right flex-shrink-0">{fmt(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={onSeek}
          aria-label="Seek"
          className="accent-emerald-500 cursor-pointer flex-1 h-1"
        />
        <span className="text-[10px] tabular-nums text-slate-400 w-7 flex-shrink-0">{fmt(duration)}</span>
      </div>

      {/* Transport controls + volume */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => changeTrack(-1)}
            title="Previous track"
            className="text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer p-1"
          >
            <SkipBack size={16} />
          </button>
          <button
            onClick={togglePlay}
            title={playing ? 'Pause' : 'Play'}
            className="text-emerald-600 hover:text-emerald-800 transition-colors cursor-pointer p-1"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            onClick={() => changeTrack(1)}
            title="Next track"
            className="text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer p-1"
          >
            <SkipForward size={16} />
          </button>
        </div>

        {/* Volume — vertical slider, visible only while hovering the icon or the slider */}
        <div
          className="relative"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <button
            onClick={toggleMute}
            title={volume === 0 ? 'Unmute' : 'Mute'}
            className="text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer p-1 flex"
          >
            <VolIcon size={16} />
          </button>
          {showVolume && (
            <div className="absolute bottom-full right-0 pb-2 flex justify-center">
              <div className="flex justify-center bg-white rounded-xl shadow-lg border border-slate-200 px-3 py-3">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={e => setVolume(parseFloat(e.target.value))}
                  aria-label="Volume"
                  className="accent-emerald-500 cursor-pointer"
                  style={{ writingMode: 'vertical-lr', direction: 'rtl', width: '1.25rem', height: '6rem' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}
