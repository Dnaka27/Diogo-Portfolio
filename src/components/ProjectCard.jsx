import { useState } from 'react'

const ProjectCard = ({ title, summary, category, year, stack, repoUrl, featured }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = () => setExpanded((v) => !v)

  return (
    <article
      className={`log-row${expanded ? ' log-row--open' : ''}`}
      onClick={toggle}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
      aria-expanded={expanded}
      aria-label={`${title} — ${category}, ${year}`}
    >
      <div className='log-row-summary'>
        <span className='log-year'>{year}</span>
        <span className='log-title'>
          {featured && <span className='log-featured' aria-label='Featured'>★</span>}
          {title}
        </span>
        <span className='log-category'>{category}</span>
        <span className='log-stack' aria-label='Stack'>
          {stack.map((s, i) => (
            <span key={s}>
              {i > 0 && <span className='log-stack-sep'> · </span>}
              {s}
            </span>
          ))}
        </span>
        <span className='log-chevron' aria-hidden='true'>
          {expanded ? '−' : '+'}
        </span>
      </div>

      <div className='log-row-detail'>
        <div className='log-row-detail-inner'>
          <p className='log-summary-text'>{summary}</p>
          {repoUrl && (
            <a
              className='log-repo-link'
              href={repoUrl}
              target='_blank'
              rel='noreferrer'
              onClick={(e) => e.stopPropagation()}
            >
              → Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
