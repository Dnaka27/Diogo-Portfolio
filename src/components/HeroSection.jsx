import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import PipelineDiagram from './PipelineDiagram'

const HeroSection = ({ profile }) => {
  const scope = useRef(null)

  // The headline is split into masked words at render time (instead of
  // SplitType) so the last word can carry the redline annotation markup.
  // The whitespace between words must stay OUTSIDE the inline-block
  // mask, or the browser strips it and the words collapse together.
  const words = profile.headline.split(' ')
  const lastIndex = words.length - 1

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const stroke = scope.current.querySelector('.mark-stroke path')
        const strokeLength = stroke.getTotalLength()
        gsap.set(stroke, { strokeDasharray: strokeLength, strokeDashoffset: strokeLength })

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.ht-inner', { yPercent: 115, duration: 0.85, stagger: 0.07 }, 0.1)
          .to(stroke, { strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut' }, '-=0.35')
          .from(
            '.hero-lede, .hero-actions, .hero-facts',
            { y: 22, opacity: 0, duration: 0.6, stagger: 0.1 },
            '-=0.3',
          )
      })

      return () => mm.revert()
    },
    { scope },
  )

  const buttonEnter = contextSafe((event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.to(event.currentTarget, { y: -3, duration: 0.25, ease: 'power2.out' })
  })

  const buttonLeave = contextSafe((event) => {
    gsap.to(event.currentTarget, { y: 0, duration: 0.35, ease: 'power2.out' })
  })

  return (
    <section ref={scope} id='hero'>
      <div className='wrap hero'>
        <div>
          <h1 className='hero-title'>
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className='ht-word'>
                  <span className='ht-inner'>
                    {index === lastIndex ? (
                      <em className='mark'>
                        {word}
                        <svg
                          className='mark-stroke'
                          viewBox='0 0 100 10'
                          preserveAspectRatio='none'
                          aria-hidden='true'
                        >
                          <path d='M2 7 C 28 3, 62 9, 98 4' />
                        </svg>
                      </em>
                    ) : (
                      word
                    )}
                  </span>
                </span>
                {index < lastIndex ? ' ' : null}
              </span>
            ))}
          </h1>

          <p className='hero-lede'>{profile.spotlightBody}</p>

          <div className='hero-actions'>
            <a
              className='btn btn-primary'
              href='#projects'
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              {profile.ctaPrimary}
            </a>
            <a
              className='btn btn-ghost'
              href='#contact'
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              {profile.ctaSecondary}
            </a>
          </div>

          <ul className='hero-facts'>
            <li>
              Based in <strong>{profile.location}</strong>
            </li>
            <li>
              Open to <strong>{profile.availability}</strong>
            </li>
          </ul>
        </div>

        <PipelineDiagram stages={profile.pipeline} />
      </div>
    </section>
  )
}

export default HeroSection
