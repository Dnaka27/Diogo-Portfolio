const HeroSection = ({ profile }) => {
  const subline = profile.focusAreas.join(' · ')

  return (
    <section id='hero' className='hero-section container'>
      <div className='hero-layout'>
        <div className='hero-copy'>
          <p className='sys-label'>[ Eng. de Dados ]</p>
          <h1 className='hero-headline'>{profile.headline}</h1>
          <p className='hero-sub'>// {subline}</p>
          <div className='hero-ctas'>
            <a className='cta-primary' href='#projects'>
              {profile.ctaPrimary} →
            </a>
            <a className='cta-secondary' href='#contact'>
              {profile.ctaSecondary}
            </a>
          </div>
        </div>

        <aside className='status-panel' aria-label='Profile snapshot'>
          <div className='status-panel-header'>
            <span className='sys-label'>Profile Status</span>
          </div>
          <dl className='status-panel-rows'>
            <div className='status-row'>
              <dt>Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div className='status-row'>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className='status-row'>
              <dt>Status</dt>
              <dd>
                <span className='pulse-dot' aria-hidden='true' />
                Open to Work
              </dd>
            </div>
            <div className='status-row'>
              <dt>Focus</dt>
              <dd className='status-dd-stack'>
                {profile.focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className='hero-principles'>
        {profile.principles.map((principle) => (
          <article key={principle.title} className='principle-card'>
            <strong>{principle.title}</strong>
            <p>{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
