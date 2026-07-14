import { useRef } from 'react'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'
import DataStack from './DataStack'

const HeroSection = ({ profile }) => {
  const scope = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Split by words, not chars: per-char inline-blocks drop kerning
        // and change the title's line wrapping.
        const split = new SplitType('.hero-title', { types: 'words' })

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from(split.words, {
            yPercent: 120,
            opacity: 0,
            rotateX: -55,
            transformPerspective: 600,
            duration: 0.9,
            stagger: 0.07,
          })
          .from(
            '.hero-actions .button',
            { y: 26, opacity: 0, duration: 0.6, stagger: 0.1 },
            '-=0.45',
          )
          .from(
            '.hero-stage > *',
            { y: 44, opacity: 0, duration: 0.7, stagger: 0.12 },
            '-=0.5',
          )

        revealOnScroll('.rail-card', '.hero-rail')

        return () => split.revert()
      })

      return () => mm.revert()
    },
    { scope },
  )

  const buttonEnter = contextSafe((event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.to(event.currentTarget, { scale: 1.04, duration: 0.3, ease: 'power2.out' })
  })

  const buttonLeave = contextSafe((event) => {
    gsap.to(event.currentTarget, { scale: 1, duration: 0.4, ease: 'power2.out' })
  })

  return (
    <section ref={scope} id='hero' className='hero section-shell'>
      <div className='hero-copy'>
        <h1 className='hero-title'>{profile.headline}</h1>
        <div className='hero-actions'>
          <a
            className='button button-primary'
            href='#projects'
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            {profile.ctaPrimary}
          </a>
          <a
            className='button button-secondary'
            href='#contact'
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            {profile.ctaSecondary}
          </a>
        </div>
      </div>

      <aside className='hero-stage' aria-label='Profile snapshot'>
        <DataStack layers={profile.pipeline} />

        <div className='hero-stage-card'>
          <strong>{profile.spotlightTitle}</strong>
          <p>{profile.spotlightBody}</p>
          <ul className='tag-list'>
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className='hero-stage-card'>
          <strong>{profile.noteTitle}</strong>
          <p>{profile.noteBody}</p>
        </div>

        <div className='hero-stage-card'>
          <ul className='stage-list'>
            <li>
              <strong>Based in</strong>
              <span>{profile.location}</span>
            </li>
            <li>
              <strong>Open to</strong>
              <span>{profile.availability}</span>
            </li>
          </ul>
        </div>
      </aside>

      <div className='hero-rail'>
        <p className='eyebrow'>Approach</p>
        <div className='hero-rail-grid'>
          {profile.principles.map((principle) => (
            <article key={principle.title} className='rail-card'>
              <strong>{principle.title}</strong>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
