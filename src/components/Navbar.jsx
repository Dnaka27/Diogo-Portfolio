const navItems = [
  { label: 'PROJECTS', target: 'projects' },
  { label: 'STACK', target: 'skills' },
  { label: 'CONTACT', target: 'contact' },
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
              <small>{item.label}</small>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
