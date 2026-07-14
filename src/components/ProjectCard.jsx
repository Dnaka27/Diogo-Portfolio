import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const ProjectCard = ({
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
    gsap.to(scope.current, {
      y: -6,
      scale: 1.015,
      skewX: 0.4,
      duration: 0.35,
      ease: 'power2.out',
    })
    gsap.to(scope.current.querySelectorAll('.project-stack li'), {
      y: -2,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.03,
    })
  })

  const hoverOut = contextSafe(() => {
    gsap.to(scope.current, { y: 0, scale: 1, skewX: 0, duration: 0.45, ease: 'power2.out' })
    gsap.to(scope.current.querySelectorAll('.project-stack li'), {
      y: 0,
      duration: 0.35,
      ease: 'power2.out',
    })
  })

  return (
    <article
      ref={scope}
      className='project-card'
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      <div className='project-card-header'>
        <div>
          <span className='project-kicker'>{category}</span>
          <h3>{title}</h3>
        </div>
        <div className='project-card-meta'>
          {featured ? <span className='featured-badge'>Featured</span> : null}
          <span className='project-year'>{year}</span>
        </div>
      </div>

      <div className='project-card-body'>
        <p>{summary}</p>
        <ul className='project-stack' aria-label={`${title} technology stack`}>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='project-card-footer'>
        <div className='project-links'>
          {links.map((link) => (
            <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
