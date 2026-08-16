import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const CHIP_TONES = 5

// Deterministic tone per label, so the same technology always gets the
// same color across every project card.
const chipTone = (label) => {
  let hash = 0
  for (let i = 0; i < label.length; i += 1) {
    hash = (hash * 31 + label.charCodeAt(i)) % CHIP_TONES
  }
  return hash + 1
}

// Projects are presented as numbered detail views of the drawing:
// DETAIL A, DETAIL B, … — the reference letter comes from the grid order.
const ProjectCard = ({
  reference,
  title,
  summary,
  category,
  year,
  stack,
  demoUrl,
  repoUrl,
  featured,
}) => {
  const scope = useRef(null)
  const { contextSafe } = useGSAP({ scope })

  const links = [
    demoUrl ? { href: demoUrl, label: 'Live demo' } : null,
    repoUrl ? { href: repoUrl, label: 'Repository' } : null,
  ].filter(Boolean)

  const hoverIn = contextSafe(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.to(scope.current, { x: -3, y: -3, duration: 0.3, ease: 'power2.out' })
  })

  const hoverOut = contextSafe(() => {
    gsap.to(scope.current, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' })
  })

  // The whole card opens the live demo (falling back to the repository when
  // there isn't one); clicks on the inner links keep their own destination
  // and must not also trigger the card.
  const cardTarget = demoUrl || repoUrl

  const openCardTarget = (event) => {
    if (!cardTarget || event.target.closest('a')) return
    window.open(cardTarget, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      ref={scope}
      className={`detail-card${cardTarget ? ' detail-card-clickable' : ''}`}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      onClick={openCardTarget}
    >
      <div className='detail-head'>
        <span className='detail-ref'>
          Detail {reference} · {category}
        </span>
        <span className='detail-year'>
          {featured ? <span className='featured-flag'>Featured</span> : null} {year}
        </span>
      </div>

      <h3>{title}</h3>
      <p>{summary}</p>

      <ul className='chip-row' aria-label={`${title} technology stack`}>
        {stack.map((item) => (
          <li key={item} style={{ '--chip-color': `var(--tone-${chipTone(item)})` }}>
            {item}
          </li>
        ))}
      </ul>

      <div className='detail-links'>
        {links.map((link) => (
          <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
