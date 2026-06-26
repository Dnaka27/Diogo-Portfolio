import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Projetos', target: 'projects' },
  { label: 'Stack', target: 'skills' },
  { label: 'Contato', target: 'contact' },
]

const Navbar = ({ profile }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className='nav-inner'>
        <a className='nav-brand' href='#hero'>
          {profile.name.toUpperCase()}
        </a>

        <nav aria-label='Primary navigation'>
          <ul className='nav-links'>
            {navItems.map((item) => (
              <li key={item.target}>
                <a href={`#${item.target}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='nav-status' aria-label='Availability status'>
          <span className='pulse-dot' aria-hidden='true' />
          Disponível
        </div>
      </div>
    </header>
  )
}

export default Navbar
