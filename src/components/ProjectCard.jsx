import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

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

  return (
    <article
      ref={scope}
      className='detail-card'
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
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
          <li key={item}>{item}</li>
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
