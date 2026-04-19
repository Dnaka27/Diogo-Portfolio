const navItems = [
  { label: 'Projects', target: 'projects' },
  { label: 'Stack', target: 'skills' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = ({ profile }) => {
  return (
    <header className='site-header'>
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
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
