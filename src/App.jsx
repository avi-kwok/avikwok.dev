import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#041705] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar dark={dark} toggleDark={() => setDark(d => !d)} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
