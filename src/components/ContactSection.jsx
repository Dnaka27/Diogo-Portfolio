import { useRef } from 'react'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'

const ContactSection = ({ profile, socialLinks }) => {
  const scope = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitType('#contact .section-title', { types: 'words' })

        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: scope.current, start: 'top 80%', once: true },
        })

        revealOnScroll('.contact-copy > *:not(.section-title)', scope.current, { y: 28 })
        revealOnScroll('.contact-link', scope.current, { x: 32, y: 0 })

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
    <section ref={scope} id='contact' className='section-shell content-section'>
      <div className='contact-shell'>
        <div className='contact-copy'>
          <h2 className='section-title'>{profile.contactTitle}</h2>
          <p>{profile.contactBody}</p>
          <a
            className='button button-primary'
            href={socialLinks[0]?.href}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Start a conversation
          </a>
        </div>

        <div className='contact-list'>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className='contact-link'
              href={link.href}
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <strong>{link.label}</strong>
                <span>{link.value}</span>
              </div>
              <span>Open</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
