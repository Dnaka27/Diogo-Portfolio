import { useRef } from 'react'
import { revealOnScroll, revealSectionTitle, useEntrance } from '../lib/gsap'
import ProjectCard from './ProjectCard'

const refLetter = (index) => String.fromCharCode(65 + index)

const ProjectsGrid = ({ projects }) => {
  const scope = useRef(null)

  useEntrance(scope, () => {
    // Inline transforms are cleared at the end so the CSS hover lift can apply.
    revealOnScroll('.detail-card', '.details-grid', { y: 40, clearProps: 'transform,opacity' })
    return revealSectionTitle(scope.current)
  })

  return (
    <section ref={scope} id='projects' className='zone'>
      <div className='wrap section-pad'>
        <p className='crumb'>Details A–{refLetter(projects.length - 1)}</p>
        <h2 className='section-title'>Selected projects</h2>
        <p className='lede'>
          Four builds that show the same habit: take raw information, structure it,
          and hand people something they can actually use.
        </p>

        <div className='details-grid'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} reference={refLetter(index)} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
