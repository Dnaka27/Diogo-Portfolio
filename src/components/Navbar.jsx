const navItems = [
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = () => {
  return (
    <header className='site-header'>
      <nav className='site-nav section' aria-label='Primary navigation'>
        <a className='site-brand' href='#hero'>
          Template
          <span>Portfolio</span>
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
