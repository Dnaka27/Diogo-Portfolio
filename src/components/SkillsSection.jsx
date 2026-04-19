const SkillsSection = ({ profile, skillGroups }) => {
  return (
    <section id='skills' className='section-shell content-section'>
      <div className='section-heading section-heading-split'>
        <div>
          <h2 className='section-title'>Skills and foundations.</h2>
        </div>
      </div>

      <div className='skills-board'>
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
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
