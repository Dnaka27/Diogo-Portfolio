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
    <article className='project-card'>
      <div className='project-card-header'>
        <div>
          <h3>{title}</h3>
        </div>
        {featured ? <span className='featured-badge'>Featured</span> : null}
      </div>

      <div className='project-card-body'>
        <div className='project-meta'>
          <span>{category}</span>
          <span>{year}</span>
        </div>
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
