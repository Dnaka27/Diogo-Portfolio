const HeroSection = ({ profile }) => {
  return (
    <section id='hero' className='section hero'>
      <div className='hero-copy'>
        <p className='eyebrow'>{profile.eyebrow}</p>
        <h1 className='hero-title'>{profile.name}</h1>
        <p className='hero-description'>{profile.summary}</p>
        <div className='hero-actions'>
          <a className='button button-primary' href='#projects'>
            {profile.ctaPrimary}
          </a>
          <a className='button button-secondary' href='#contact'>
            {profile.ctaSecondary}
          </a>
        </div>
        <div className='hero-metrics' aria-label='Profile highlights'>
          {profile.metrics.map((metric) => (
            <div key={metric.label} className='metric-pill'>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className='hero-panel' aria-label='Template notes'>
        <div className='hero-card'>
          <strong>Core focus</strong>
          <span>Data and backend oriented product building.</span>
          <ul className='tag-list'>
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div className='hero-note'>
          <strong>{profile.noteTitle}</strong>
          <p>{profile.noteBody}</p>
        </div>
      </aside>
    </section>
  )
}

export default HeroSection
