import { useRef, useState } from 'react'
import { gsap, useEntrance } from '../lib/gsap'

const navItems = [
  { label: 'Projects', target: 'projects' },
  { label: 'Background', target: 'background' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = ({ profile }) => {
  const scope = useRef(null)
  // Initial value comes from the pre-paint script in index.html.
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  )

  useEntrance(scope, () => {
    gsap.from('.top-strip-inner', {
      y: -18,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
  })

  const isDark = theme === 'dark'
  const toggleLabel = isDark ? 'Switch to paper theme' : 'Switch to blueprint theme'

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Private browsing: the choice just won't persist.
    }
    setTheme(next)
  }

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

        <div className='strip-right'>
          <div className='strip-links'>
            {navItems.map((item) => (
              <a key={item.target} href={`#${item.target}`}>
                {item.label}
              </a>
            ))}
          </div>

          <button
            type='button'
            className='theme-toggle'
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={toggleLabel}
            title={toggleLabel}
          >
            <span className='theme-toggle-swatch' aria-hidden='true' />
            {isDark ? 'Paper' : 'Blueprint'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
