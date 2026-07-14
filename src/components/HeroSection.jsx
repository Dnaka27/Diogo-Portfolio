import Tilt from './Tilt'
import DataStack from './DataStack'
import useReveal from '../hooks/useReveal'

const HeroSection = ({ profile }) => {
  const railRef = useReveal()

  return (
    <section id='hero' className='hero section-shell'>
      <div className='hero-copy'>
        <h1 className='hero-title'>{profile.headline}</h1>
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
        <DataStack layers={profile.pipeline} />

        <Tilt className='hero-stage-card' maxTilt={7}>
          <strong className='depth-1'>{profile.spotlightTitle}</strong>
          <p>{profile.spotlightBody}</p>
          <ul className='tag-list depth-1'>
            {profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </Tilt>

        <Tilt className='hero-stage-card' maxTilt={7}>
          <strong className='depth-1'>{profile.noteTitle}</strong>
          <p>{profile.noteBody}</p>
        </Tilt>

        <Tilt className='hero-stage-card' maxTilt={7}>
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
        </Tilt>
      </aside>

      <div ref={railRef} className='hero-rail reveal-3d'>
        <p className='eyebrow'>Approach</p>
        <div className='hero-rail-grid'>
          {profile.principles.map((principle) => (
            <Tilt as='article' key={principle.title} className='rail-card' maxTilt={7}>
              <strong className='depth-1'>{principle.title}</strong>
              <p>{principle.body}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
