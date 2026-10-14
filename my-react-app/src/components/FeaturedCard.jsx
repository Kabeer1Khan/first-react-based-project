import { people } from '../data/projects'
import { ArrowIcon, ArrowLeftIcon, PlusIcon } from './Icons'

const hide = (e) => {
  e.currentTarget.style.display = 'none'
}

export default function FeaturedCard({ projects, index, onPrev, onNext, onGo }) {
  const project = projects[index]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <article className="featured glass rise" style={{ '--d': '1.2s' }}>
      <div className="featured__thumb">
        {projects.map((p, i) => (
          <img
            key={p.id}
            className={i === index ? 'is-on' : ''}
            src={p.thumb}
            alt={i === index ? p.title : ''}
            onError={hide}
          />
        ))}
        <span className="featured__label">Featured Project</span>
        <div className="featured__people">
          {people.map((src) => (
            <img key={src} className="avatar" src={src} alt="" onError={hide} />
          ))}
          <button className="avatar avatar--plus" type="button" aria-label="Add collaborator">
            <PlusIcon width={14} height={14} />
          </button>
        </div>
      </div>

      <div className="featured__body">
        <div className="swap" key={project.id}>
          <div className="featured__head">
            <h3 className="featured__title">{project.title}</h3>
            <span className="featured__count">
              {pad(index + 1)} / {pad(projects.length)}
            </span>
          </div>
          <p className="featured__desc">{project.desc}</p>
          <a className="featured__link" href="#projects">
            <span>View Project</span>
            <ArrowIcon width={13} height={13} />
          </a>
        </div>

        <div className="featured__foot">
          <div className="dashes" role="tablist" aria-label="Choose project">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={p.title}
                className={`dash${i === index ? ' is-on' : ''}`}
                onClick={() => onGo(i)}
              />
            ))}
          </div>
          <div className="featured__nav">
            <button className="round" type="button" onClick={onPrev} aria-label="Previous project">
              <ArrowLeftIcon width={17} height={17} />
            </button>
            <button
              className="round round--dark"
              type="button"
              onClick={onNext}
              aria-label="Next project"
            >
              <ArrowIcon width={17} height={17} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}