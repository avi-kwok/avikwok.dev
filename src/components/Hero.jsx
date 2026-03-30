import { ArrowDown, FileText, Linkedin, Github, Mail, Volume2 } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Hero() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function playName() {
    if (playing) return
    const audio = audioRef.current
    audio.currentTime = 0
    audio.play()
    setPlaying(true)
    audio.onended = () => setPlaying(false)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-transparent to-green-50/20 dark:from-green-950/20 dark:via-transparent dark:to-green-950/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <audio ref={audioRef} preload="auto">
          <source src="/name.mp3" type="audio/mpeg" />
          <source src="/name.m4a" type="audio/mp4" />
          <source src="/name.wav" type="audio/wav" />
          <source src="/name.ogg" type="audio/ogg" />
        </audio>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Avidan Kwok
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <button
            onClick={playName}
            className={`w-56 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer shadow-sm
              ${playing
                ? 'border-emerald-500 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 shadow-emerald-200 dark:shadow-emerald-900'
                : 'border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 hover:shadow-md hover:shadow-emerald-100 dark:hover:shadow-emerald-900/50'
              }`}
          >
            <Volume2 size={12} className={playing ? 'animate-pulse' : ''} />
            {playing ? 'How to pronounce "Avidan"' : 'How to pronounce "Avidan"'}
          </button>
          <div className="w-56 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 flex-shrink-0 bg-emerald-500 rounded-full animate-pulse" />
            Open to internships in Canada
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          UBC Sauder second year student targeting tech internships in software engineering, product, or anything else tech related ‼️
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="/Avidan-Kwok-Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <FileText size={16} /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/avidankwok/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:hover:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium rounded-lg transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/avi-kwok"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:hover:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium rounded-lg transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:hover:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium rounded-lg transition-colors"
          >
            <Mail size={16} /> Contact
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <span className="text-xs">Scroll down</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
