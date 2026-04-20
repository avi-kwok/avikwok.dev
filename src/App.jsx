import { useState } from 'react'
import Landing from './components/Landing'
import YoshiSelect from './components/YoshiSelect'
import SectionPage from './components/SectionPage'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import MusicWidget from './components/MusicWidget'

const yoshis = [
  { id: 'about',      img: '/greenyoshi.png',   label: 'About'      },
  { id: 'projects',   img: '/blueyoshi.png',    label: 'Projects'   },
  { id: 'skills',     img: '/orangeyoshi.png',  label: 'Skills'     },
  { id: 'experience', img: '/blackyoshi.webp',  label: 'Experience' },
  { id: 'special',    img: '/specialyoshi.png', label: '???'        },
]

export default function App() {
  const [view, setView]           = useState('landing')
  const [fading, setFading]       = useState(false)
  const [selectKey, setSelectKey] = useState(0)

  function goTo(target) {
    setFading(true)
    setTimeout(() => {
      setView(target)
      setFading(false)
      if (target === 'select') setSelectKey(k => k + 1)
    }, 300)
  }

  function onFatYoshiDone() {
    setView('select')
    setSelectKey(k => k + 1)
  }

  const isSection    = !['landing', 'select'].includes(view)
  const currentYoshi = isSection ? yoshis.find(y => y.id === view) : null

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      {view === 'landing' && <Landing onDone={onFatYoshiDone} />}

      {view === 'select' && (
        <YoshiSelect
          key={selectKey}
          yoshis={yoshis}
          onSelect={id => goTo(id)}
          onBack={() => goTo('landing')}
        />
      )}

      {isSection && currentYoshi && (
        <SectionPage yoshi={currentYoshi} onBack={() => goTo('select')}>
          {view === 'about'      && <><About /><Contact /></>}
          {view === 'projects'   && <Projects />}
          {view === 'skills'     && <Skills />}
          {view === 'experience' && <Experience />}
          {view === 'special'    && (
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-3xl font-bold text-slate-400">Coming soon!</p>
            </div>
          )}
        </SectionPage>
      )}

      <MusicWidget />
    </div>
  )
}
