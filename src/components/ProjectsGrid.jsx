import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  const count = String(projects.length).padStart(2, '0')

  return (
    <section id='projects' className='projects-section container'>
      <div className='section-header'>
        <p className='sys-label'>[ {count} Projetos ]</p>
        <h2 className='section-title'>Work</h2>
      </div>

      <div className='projects-log' role='list'>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
