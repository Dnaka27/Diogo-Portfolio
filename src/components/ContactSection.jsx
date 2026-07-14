import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'

// The signature of the page: contact rendered as the drawing's title
// block (carimbo) — the bordered table every technical sheet signs with.
const ContactSection = ({ profile, socialLinks }) => {
  const scope = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        revealOnScroll('.tb-cell', '.titleblock', { y: 20, stagger: 0.07 })
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

  const [email, github, linkedin] = socialLinks

  return (
    <section ref={scope} id='contact' className='zone'>
      <div className='wrap section-pad'>
        <p className='crumb'>Title block</p>
        <h2 className='section-title'>{profile.contactTitle}</h2>
        <p className='lede'>{profile.contactBody}</p>

        <div className='titleblock'>
          <div className='tb-cell tb-main'>
            <h2>Let&apos;s build the next one together.</h2>
            <p>
              Email gets the fastest answer — a short note about what you are
              building is enough to start.
            </p>
            <a
              className='btn btn-primary'
              href={email?.href}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              Start a conversation
            </a>
          </div>

          <div className='tb-cell'>
            <span className='tb-label'>Author</span>
            <span className='tb-value'>Diogo Oike Kanefuku</span>
          </div>
          <div className='tb-cell'>
            <span className='tb-label'>Location</span>
            <span className='tb-value'>{profile.location}</span>
          </div>
          <div className='tb-cell'>
            <span className='tb-label'>Open to</span>
            <span className='tb-value'>{profile.availability}</span>
          </div>
          <div className='tb-cell'>
            <span className='tb-label'>Revision</span>
            <span className='tb-value'>2026 · Rev A</span>
          </div>

          {[email, github, linkedin].filter(Boolean).map((link) => (
            <a
              key={link.label}
              className='tb-cell tb-link'
              href={link.href}
              target='_blank'
              rel='noreferrer'
            >
              <span className='tb-label'>{link.label}</span>
              <span className='tb-value'>{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
