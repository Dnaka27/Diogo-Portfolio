import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const navItems = [
  { label: 'PROJECTS', target: 'projects' },
  { label: 'STACK', target: 'skills' },
  { label: 'CONTACT', target: 'contact' },
]

const Navbar = ({ profile }) => {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.site-nav', {
          y: -24,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <header ref={scope} className='site-header'>
      <nav className='site-nav section-shell' aria-label='Primary navigation'>
        <a className='site-brand' href='#hero'>
          <span className='site-brand-mark'>DO</span>
          <div>
            <strong>{profile.name}</strong>
            <small>{profile.eyebrow}</small>
          </div>
        </a>

        <div className='site-nav-links'>
          {navItems.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              <small>{item.label}</small>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
