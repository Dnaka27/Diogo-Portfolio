import { useEffect, useRef, useState } from 'react'

const ContactSection = ({ profile, socialLinks }) => {
  const [progress, setProgress] = useState(0)
  const [connected, setConnected] = useState(false)
  const sectionRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          let p = 0
          const tick = () => {
            p += 3
            setProgress(Math.min(p, 100))
            if (p < 100) {
              requestAnimationFrame(tick)
            } else {
              setConnected(true)
            }
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id='contact' className='contact-section container' ref={sectionRef}>
      <div className='section-header'>
        <p className='sys-label'>[ Contato ]</p>
        <h2 className='section-title'>Connection</h2>
      </div>

      <div className='contact-layout'>
        <div className='contact-terminal' aria-live='polite'>
          <p className='terminal-status-line'>
            {connected ? 'Conexão estabelecida' : 'Iniciando conexão...'}
          </p>
          <div className='terminal-progress-track' role='progressbar' aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className='terminal-progress-fill' style={{ width: `${progress}%` }} />
          </div>
          <p className={`terminal-ready${connected ? ' terminal-ready--visible' : ''}`}>
            Pronto para colaborar.
          </p>
        </div>

        <div className='contact-links'>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className='contact-cmd'
              href={link.href}
              target='_blank'
              rel='noreferrer'
            >
              <span className='contact-cmd-prompt'>$</span>
              <span className='contact-cmd-key'>{link.label.toLowerCase()}</span>
              <span className='contact-cmd-value'>{link.value}</span>
            </a>
          ))}
        </div>
      </div>

      <p className='contact-note'>{profile.contactBody}</p>
    </section>
  )
}

export default ContactSection
