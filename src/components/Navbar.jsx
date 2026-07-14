import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const navItems = [
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = ({ profile }) => {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.top-strip-inner', {
          y: -18,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <header ref={scope} className='top-strip'>
      <nav className='wrap top-strip-inner' aria-label='Primary navigation'>
        <a className='brand' href='#hero'>
          <span className='brand-mark'>D.O</span>
          <span>
            <span className='brand-name'>{profile.name}</span>
            <span className='brand-role'>{profile.eyebrow}</span>
          </span>
        </a>

        <div className='strip-links'>
          {navItems.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
