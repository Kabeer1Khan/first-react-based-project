import { ctaAvatar } from '../data/projects'
import { ArrowUpRightIcon } from './Icons'

export default function CtaCard() {
  return (
    <a className="cta rise" style={{ '--d': '1.5s' }} href="#contact">
      <img
        className="cta__avatar"
        src={ctaAvatar}
        alt=""
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      <span className="cta__go">
        <ArrowUpRightIcon width={19} height={19} />
      </span>
      <h3 className="cta__title">
        Bring Your Vision
        <br />
        To Life
      </h3>
      <p className="cta__text">Let&apos;s create a space that feels like you.</p>
    </a>
  )
}