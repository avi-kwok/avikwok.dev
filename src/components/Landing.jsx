import { useState } from 'react'

export default function Landing({ onDone }) {
  const [expanding, setExpanding] = useState(false)

  function handleYoshiClick() {
    if (expanding) return
    window.__musicPlay?.()
    setExpanding(true)
    setTimeout(onDone, 650)
  }

  return (
    <div className="min-h-screen bg-white grid place-items-center overflow-hidden select-none">
      <div className="relative grid place-items-center">
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

        <p className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-base sm:text-lg text-slate-600 italic animate-pulse pointer-events-none">
          click me to start
        </p>
      </div>
    </div>
  )
}
