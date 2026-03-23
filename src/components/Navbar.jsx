import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar({ dark, toggleDark }) {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-200/80 dark:bg-[#042b05]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          AK<span className="text-green-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg bg-slate-200/70 dark:bg-white/10 hover:bg-slate-300/70 dark:hover:bg-white/20 border border-slate-300/60 dark:border-white/10 transition-all cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} className="fill-white text-white" /> : <Moon size={18} className="fill-green-700 text-green-700" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleDark} className="p-2 rounded-lg text-slate-600 dark:text-slate-400 cursor-pointer">
            {dark ? <Sun size={18} className="fill-white text-white" /> : <Moon size={18} className="fill-green-700 text-green-700" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-lg text-slate-600 dark:text-slate-400 cursor-pointer">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-stone-200 dark:bg-[#042b05] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
