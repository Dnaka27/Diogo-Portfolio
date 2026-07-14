import useReveal from '../hooks/useReveal'

const SkillsSection = ({ profile, skillGroups }) => {
  const ref = useReveal()

  return (
    <section id='skills' className='section-shell content-section'>
      <div className='section-heading section-heading-split'>
        <div>
          <h2 className='section-title'>Skills and foundations.</h2>
        </div>
      </div>

      <div ref={ref} className='skills-board reveal-3d'>
        <article className='skills-intro'>
          <h3>{profile.stackTitle}</h3>
          <p>{profile.stackBody}</p>

          <div className='skills-priority'>
            {profile.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>

        <div className='skills-layout'>
          {skillGroups.map((group) => (
            <article key={group.title} className='skill-group'>
              <h3>{group.title}</h3>
              <ul className='skill-grid'>
                {group.skills.map((skill) => {
                  if (typeof skill === 'string') {
                    return <li key={skill}>{skill}</li>
                  }

                  return (
                    <li key={skill.label} className='skill-item-with-children'>
                      <strong>{skill.label}</strong>
                      <ul className='skill-sublist'>
                        {skill.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
