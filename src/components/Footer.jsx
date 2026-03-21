export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Avidan Kwok
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-500">
          Built with React + Tailwind
        </span>
      </div>
    </footer>
  )
}
