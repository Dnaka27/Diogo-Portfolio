import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <section id='projects' className='section'>
      <div className='section-heading'>
        <p className='eyebrow'>Projects</p>
        <h2 className='section-title'>Selected projects and technical experiments.</h2>
        <p>
          The current grid keeps the newer layout, but now uses the original
          local project content and repository links.
        </p>
      </div>

      <div className='projects-grid'>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
