import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowIcon, SearchIcon } from './Icons'

const links = ['Home', 'Projects', 'Services', 'About', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(null)
  const [pill, setPill] = useState({ left: 0, width: 0 })
  const [open, setOpen] = useState(false) // mobile menu
  const refs = useRef([])
  const headerRef = useRef(null)

  const current = hover ?? active

  // The dark "pill" slides to whichever link is hovered (or active)
  useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[current]
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    if (document.fonts?.ready) document.fonts.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [current])

  // Close the mobile menu on Escape, on outside tap, or when the screen gets wide
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 901px)')
    const onResize = (e) => {
      if (e.matches) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false)
    }
    mq.addEventListener('change', onResize)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutside)
    return () => {
      mq.removeEventListener('change', onResize)
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onOutside)
    }
  }, [open])

  return (
    <header className="nav" ref={headerRef}>
      <a className="brand fade-down" href="#home" aria-label="MR L Production">
        <span className="brand__mark">NP</span>
        <span className="brand__name">Mr L Production</span>
      </a>

      {/* Desktop navigation */}
      <nav
        className="nav__pill fade-down"
        style={{ '--d': '0.15s' }}
        onMouseLeave={() => setHover(null)}
        aria-label="Primary"
      >
        <span
          className="nav__indicator"
          style={{ width: pill.width, transform: `translateX(${pill.left}px)` }}
        />
        {links.map((label, i) => (
          <a
            key={label}
            ref={(el) => (refs.current[i] = el)}
            className={`nav__link${i === current ? ' is-on' : ''}`}
            href={`#${label.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault()
              setActive(i)
            }}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="nav__right fade-down" style={{ '--d': '0.3s' }}>
        <button className="icon-btn" aria-label="Search" type="button">
          <SearchIcon />
        </button>
        <a className="cta-pill" href="#contact">
          <span>Start a Project</span>
          <span className="cta-pill__arrow">
            <ArrowIcon />
          </span>
        </a>

        {/* Hamburger (tablet + phone only) */}
        <button
          className={`icon-btn menu-btn${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {/* Mobile / tablet dropdown menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {links.map((label, i) => (
          <a
            key={label}
            className={`mobile-menu__link${i === active ? ' is-on' : ''}`}
            style={{ '--i': i }}
            href={`#${label.toLowerCase()}`}
            tabIndex={open ? 0 : -1}
            onClick={(e) => {
              e.preventDefault()
              setActive(i)
              setOpen(false)
            }}
          >
            <span>{label}</span>
            <span className="mobile-menu__num">{String(i + 1).padStart(2, '0')}</span>
          </a>
        ))}
        <a
          className="cta-pill mobile-menu__cta"
          href="#contact"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          <span>Start a Project</span>
          <span className="cta-pill__arrow">
            <ArrowIcon />
          </span>
        </a>
      </nav>
    </header>
  )
}