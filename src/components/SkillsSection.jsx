const SkillsSection = ({ skillGroups }) => {
  return (
    <section id='skills' className='section'>
      <div className='section-heading'>
        <p className='eyebrow'>Skills</p>
        <h2 className='section-title'>Skills, certificates, and foundations.</h2>
        <p>
          This section now reflects the original local portfolio content while
          preserving the current grouped card layout.
        </p>
      </div>

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
    </section>
  )
}

export default SkillsSection
