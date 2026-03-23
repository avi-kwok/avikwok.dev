import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-50 dark:bg-[#041705]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-teal-500 dark:text-teal-400 text-sm font-medium mb-3 tracking-wide uppercase">Get in touch</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Talk</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
          Whether you're a recruiter, a potential collaborator, or looking to reach out - I'm always free.
          I'm actively looking for internship and co-op opportunities for 2026 and 2027.
        </p>

        {/* PLACEHOLDER: Replace with your real email */}
        <a
          href="mailto:avidankwok@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors mb-12 text-sm"
        >
          <Mail size={16} /> avidankwok@gmail.com →
        </a>

        <div className="flex justify-center gap-4">
          {[
            { href: 'https://www.linkedin.com/in/avidankwok/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { href: 'https://github.com/avi-kwok', icon: <Github size={18} />, label: 'GitHub' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 text-sm transition-colors"
            >
              {l.icon} {l.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
