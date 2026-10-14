import { useEffect, useState } from 'react'
import { BuildingIcon, GlobeIcon, UsersIcon } from './Icons'

// Counts from 0 up to `target` with an ease-out curve
function useCountUp(target, delay = 0, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf
    let start
    const timer = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now
        const p = Math.min((now - start) / duration, 1)
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [target, delay, duration])

  return value
}

function Stat({ Icon, to, label, delay }) {
  const value = useCountUp(to, delay)
  return (
    <div className="stat">
      <Icon className="stat__icon" width={26} height={26} strokeWidth={1.5} />
      <strong className="stat__num">{value}+</strong>
      <span className="stat__label">{label}</span>
    </div>
  )
}

const stats = [
  { Icon: BuildingIcon, to: 250, label: 'Projects Complete' },
  { Icon: UsersIcon, to: 120, label: 'Happy Clients' },
  { Icon: GlobeIcon, to: 15, label: 'Countries Worldwide' },
]

export default function StatsCard() {
  return (
    <section className="stats glass rise" style={{ '--d': '1.35s' }}>
      {stats.map((s, i) => (
        <Stat key={s.label} {...s} delay={1500 + i * 150} />
      ))}
    </section>
  )
}