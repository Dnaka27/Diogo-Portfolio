const HeroSection = ({ profile }) => {
  return (
    <section id='hero' className='hero section-shell'>
      <div className='hero-copy'>
        <p className='eyebrow'>{profile.eyebrow}</p>
        <h1 className='hero-title'>{profile.headline}</h1>
        <p className='hero-description'>{profile.summary}</p>

        <div className='hero-actions'>
          <a className='button button-primary' href='#projects'>
            {profile.ctaPrimary}
          </a>
          <a className='button button-secondary' href='#contact'>
            {profile.ctaSecondary}
          </a>
        </div>
      </div>

      <aside className='hero-stage' aria-label='Profile snapshot'>
        <div className='hero-stage-card'>
          <strong>{profile.spotlightTitle}</strong>
          <p>{profile.spotlightBody}</p>
          <ul className='tag-list'>
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className='hero-stage-card'>
          <strong>{profile.noteTitle}</strong>
          <p>{profile.noteBody}</p>
        </div>

        <div className='hero-stage-card'>
          <ul className='stage-list'>
            <li>
              <strong>Based in</strong>
              <span>{profile.location}</span>
            </li>
            <li>
              <strong>Open to</strong>
              <span>{profile.availability}</span>
            </li>
          </ul>
        </div>
      </aside>

      <div className='hero-rail'>
        <p className='eyebrow'>Approach</p>
        <div className='hero-rail-grid'>
          {profile.principles.map((principle) => (
            <article key={principle.title} className='rail-card'>
              <strong>{principle.title}</strong>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
