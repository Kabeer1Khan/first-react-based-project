import { useState } from 'react'
import {
  ChatIcon,
  FolderIcon,
  GridIcon,
  HeartIcon,
  HomeIcon,
  PlayIcon,
} from './Icons'

const items = [
  { label: 'Home', Icon: HomeIcon },
  { label: 'Projects', Icon: GridIcon },
  { label: 'Portfolio', Icon: FolderIcon },
  { label: 'Favorites', Icon: HeartIcon },
  { label: 'Contact', Icon: ChatIcon },
]

export default function Sidebar({ thumb }) {
  const [active, setActive] = useState(0)

  return (
    <aside className="rail slide-right" style={{ '--d': '0.5s' }}>
      {items.map(({ label, Icon }, i) => (
        <button
          key={label}
          type="button"
          className={`rail__btn pop${i === active ? ' is-on' : ''}`}
          style={{ '--d': `${0.8 + i * 0.08}s` }}
          onClick={() => setActive(i)}
          aria-label={label}
        >
          <Icon />
          <span className="tip">{label}</span>
        </button>
      ))}

      <div className="rail__thumb pop" style={{ '--d': '1.25s' }}>
        <img src={thumb} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>

      <button type="button" className="rail__reel pop" style={{ '--d': '1.35s' }}>
        <span className="rail__reel-icon">
          <PlayIcon width={11} height={11} />
        </span>
        <span className="rail__reel-text">
          Watch
          <br />
          Showreel
        </span>
      </button>
    </aside>
  )
}