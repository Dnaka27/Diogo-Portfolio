const coreStack = [
  'Python',
  'SQL',
  'Data Engineering',
  'Machine Learning',
  'Applied AI',
]

const SkillsSection = ({ skillGroups }) => {
  const certs = skillGroups.find((g) => g.title === 'Courses & Certificates')?.skills ?? []

  return (
    <section id='skills' className='stack-section container'>
      <div className='section-header'>
        <p className='sys-label'>[ Sistema ]</p>
        <h2 className='section-title'>Stack</h2>
      </div>

      <div className='stack-layout'>
        <div className='stack-core' aria-label='Core technologies'>
          {coreStack.map((tech) => (
            <div key={tech} className='stack-tech'>
              {tech.toUpperCase()}
            </div>
          ))}
        </div>

        <div className='stack-certs'>
          <p className='sys-label'>[ Certificações ]</p>
          <ul className='cert-list'>
            {certs.map((cert) => (
              <li key={cert} className='cert-item'>
                <span className='cert-bullet' aria-hidden='true'>—</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
