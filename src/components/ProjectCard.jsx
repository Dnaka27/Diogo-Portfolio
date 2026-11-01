import StackChips from './StackChips'

// Projects are presented as numbered detail views of the drawing:
// DETAIL A, DETAIL B, … — the reference letter comes from the grid order.
const ProjectCard = ({
  reference,
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

  // The whole card opens the live demo (falling back to the repository when
  // there isn't one); clicks on the inner links keep their own destination
  // and must not also trigger the card.
  const cardTarget = demoUrl || repoUrl

  const openCardTarget = (event) => {
    if (!cardTarget || event.target.closest('a')) return
    window.open(cardTarget, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      className={`detail-card${cardTarget ? ' detail-card-clickable' : ''}`}
      onClick={openCardTarget}
    >
      <div className='detail-head'>
        <span className='detail-ref'>
          Detail {reference} · {category}
        </span>
        <span className='detail-year'>
          {featured ? <span className='featured-flag'>Featured</span> : null} {year}
        </span>
      </div>

      <h3>{title}</h3>
      <p>{summary}</p>

      <StackChips items={stack} label={`${title} technology stack`} />

      <div className='detail-links'>
        {links.map((link) => (
          <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
