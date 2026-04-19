const ProjectCard = ({
  title,
  summary,
  category,
  year,
  stack,
  demoUrl,
  repoUrl,
  featured,
  layout = 'compact',
}) => {
  const links = [
    demoUrl ? { href: demoUrl, label: 'Live demo' } : null,
    repoUrl ? { href: repoUrl, label: 'Repository' } : null,
  ].filter(Boolean)

  return (
    <article className={`project-card project-card-${layout}`}>
      <div className='project-card-header'>
        <div>
          <span className='project-kicker'>{category}</span>
          <h3>{title}</h3>
        </div>
        <div className='project-card-meta'>
          {featured ? <span className='featured-badge'>Featured</span> : null}
          <span className='project-year'>{year}</span>
        </div>
      </div>

      <div className='project-card-body'>
        <p>{summary}</p>
        <ul className='project-stack' aria-label={`${title} technology stack`}>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='project-card-footer'>
        <div className='project-links'>
          {links.map((link) => (
            <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
