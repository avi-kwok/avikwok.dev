import { useState } from 'react'
import { Mail, Linkedin, Github, ArrowUpRight, FileText, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('avidankwok@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="pt-5 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Contact</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors text-sm cursor-pointer"
          >
            {copied ? <Check size={16} /> : <Mail size={16} />}
            {copied ? 'Copied!' : 'avidankwok@gmail.com'}
          </button>
          <a
            href="/Avidan-Kwok-Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
          >
            <FileText size={16} /> Resume
          </a>
          {[
            { href: 'https://www.linkedin.com/in/avidankwok/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: 'https://github.com/avi-kwok',             icon: <Github size={16} />,   label: 'GitHub'   },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400 text-sm transition-colors"
            >
              {l.icon} {l.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
