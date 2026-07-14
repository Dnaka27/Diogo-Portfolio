import ProjectCard from './ProjectCard'
import useReveal from '../hooks/useReveal'

const ProjectsGrid = ({ projects }) => {
  const ref = useReveal()

  return (
    <section id='projects' className='section-shell content-section'>
      <div className='section-heading section-heading-split'>
        <div>
          <h2 className='section-title'>Projects</h2>
        </div>
      </div>

      <div ref={ref} className='projects-showcase reveal-3d'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
