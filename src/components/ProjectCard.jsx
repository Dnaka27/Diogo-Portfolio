import Tilt from './Tilt'

const ProjectCard = ({
  title,
  summary,
  category,
  year,
  stack,
  demoUrl,
  repoUrl,
  featured,
}) => {
  const links = [
    demoUrl ? { href: demoUrl, label: 'Live demo' } : null,
    repoUrl ? { href: repoUrl, label: 'Repository' } : null,
  ].filter(Boolean)

  return (
    <Tilt as='article' className='project-card' maxTilt={9}>
      <div className='project-card-header depth-2'>
        <div>
          <span className='project-kicker'>{category}</span>
          <h3>{title}</h3>
        </div>
        <div className='project-card-meta'>
          {featured ? <span className='featured-badge'>Featured</span> : null}
          <span className='project-year'>{year}</span>
        </div>
      </div>

      <div className='project-card-body depth-1'>
        <p>{summary}</p>
        <ul className='project-stack' aria-label={`${title} technology stack`}>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='project-card-footer depth-1'>
        <div className='project-links'>
          {links.map((link) => (
            <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Tilt>
  )
}

export default ProjectCard
