import { useRef } from 'react'
import { revealOnScroll, useEntrance } from '../lib/gsap'

// The signature of the page: contact rendered as the drawing's title
// block (carimbo) — the bordered table every technical sheet signs with.
const ContactSection = ({ profile, socialLinks }) => {
  const scope = useRef(null)

  useEntrance(scope, () => {
    revealOnScroll('.tb-cell', '.titleblock', { y: 20, stagger: 0.07 })
  })

  const email = socialLinks.find((link) => link.href.startsWith('mailto:'))

  return (
    <section ref={scope} id='contact' className='zone'>
      <div className='wrap section-pad'>
        <p className='crumb'>Title block</p>
        <h2 className='section-title'>{profile.contactTitle}</h2>

        <div className='titleblock'>
          <div className='tb-cell tb-main'>
            <h2>Let&apos;s build the next one together.</h2>
            <p>
              a short note about what you are
              building is enough to start.
            </p>
            <a className='btn btn-primary' href={email?.href}>
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

          {socialLinks.map((link) => {
            // mailto: hands off to the mail client; a new tab would stay blank.
            const external = link !== email
            return (
              <a
                key={link.label}
                className='tb-cell tb-link'
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <span className='tb-label'>{link.label}</span>
                <span className='tb-value'>{link.value}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
