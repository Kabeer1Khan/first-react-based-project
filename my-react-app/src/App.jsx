import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import projects from './data/projects'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HeroText from './components/HeroText'
import FeaturedCard from './components/FeaturedCard'
import StatsCard from './components/StatsCard'
import CtaCard from './components/CtaCard'

export default function App() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const heroRef = useRef(null)
  const total = projects.length

  const go = useCallback((i) => setIndex(((i % total) + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])

  // Auto-advance the featured project every 6.5s (pauses while hovering the cards)
  useEffect(() => {
    if (paused) return
    const t = setTimeout(next, 6500)
    return () => clearTimeout(t)
  }, [index, paused, next])

  // Gentle mouse parallax on the background photo
  useEffect(() => {
    const el = heroRef.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let raf

    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const loop = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      el.style.setProperty('--mx', cx.toFixed(4))
      el.style.setProperty('--my', cy.toFixed(4))
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className="hero" id="home" ref={heroRef}>
      <Background projects={projects} index={index} />

      <Navbar />
      <Sidebar thumb={projects[index].thumb} />

      <ul className="tags fade-up" style={{ '--d': '1.1s' }}>
        <li>Modern</li>
        <li>Sustainable</li>
        <li>Functional</li>
        <li>Timeless</li>
      </ul>

      <HeroText />

      <div
        className="bottom"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <FeaturedCard
          projects={projects}
          index={index}
          onPrev={prev}
          onNext={next}
          onGo={go}
        />
        <StatsCard />
        <CtaCard />
      </div>
    </main>
  )
}