// Full-bleed hero photo. Every project image is stacked and cross-fades
// when the active project changes; a soft cream shade keeps the text readable.
const hide = (e) => {
  e.currentTarget.style.display = 'none'
}

export default function Background({ projects, index }) {
  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="bg__parallax">
          {projects.map((p, i) => (
            <img
              key={p.id}
              className={`bg__img${i === index ? ' is-on' : ''}`}
              src={p.bg}
              alt=""
              draggable="false"
              onError={hide}
            />
          ))}
        </div>
      </div>
      <div className="shade" aria-hidden="true" />
    </>
  )
}