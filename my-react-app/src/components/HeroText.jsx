import { ArrowIcon, PlayIcon } from './Icons'

export default function HeroText() {
  return (
    <div className="content">
      <p className="eyebrow fade-up" style={{ '--d': '0.45s' }}>
        Architecture — Interiors — Landscapes
      </p>

      <h1 className="title">
        <span className="line">
          <span style={{ '--d': '0.6s' }}>Spaces</span>
        </span>
        <span className="line">
          <span style={{ '--d': '0.75s' }}>
            That <em>Inspire</em>
          </span>
        </span>
      </h1>

      <p className="lead fade-up" style={{ '--d': '1s' }}>
        We design meaningful spaces that blend architecture, nature and modern living.
      </p>

      <div className="actions fade-up" style={{ '--d': '1.15s' }}>
        <a className="btn-dark" href="#projects">
          <span>Explore Our Work</span>
          <ArrowIcon width={17} height={17} />
        </a>

        <button className="btn-reel" type="button">
          <span className="btn-reel__circle">
            <PlayIcon width={14} height={14} />
          </span>
          <span>Watch Showreel</span>
        </button>
      </div>
    </div>
  )
}