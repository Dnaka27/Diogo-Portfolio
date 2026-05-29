import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <section id='projects' className='section-shell content-section'>
      <div className='section-heading section-heading-split'>
        <div>
          <h2 className='section-title'>Projects</h2>
        </div>
      </div>

      <div className='projects-showcase'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            layout='compact'
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
