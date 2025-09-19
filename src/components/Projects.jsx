import './Projects.css'
import React from 'react'

const projectData = [
  {
    name: 'Coin Viewer',
    category: 'Data Science',
    className: 'data-science',
    description:
      'A currency quotation application built with Python and Streamlit.',
    githubRepository: 'https://github.com/Dnaka27/Coin_Viewer',
    techs: [
      'fa-brands fa-python',
      'fa-solid fa-database',
      'fa-solid fa-chart-simple',
    ],
  },
  {
    name: 'To Do List',
    category: 'Web Development',
    className: 'web-development',
    description:
      'An organizational to-do list application using React and JavaScript.',
    githubRepository: 'https://github.com/Dnaka27/ToDoList_basic/',
    techs: ['fa-brands fa-react', 'fa-brands fa-square-js', 'fa-brands fa-css'],
  },
  {
    name: 'RAG Gemini',
    category: 'Artificial Intelligence',
    className: 'ai',
    description:
      'An AI agent that utilizes Langchain with Retrieval-Augmented Generation (RAG) techniques to enhance information retrieval and response generation',
    githubRepository: 'https://github.com/Dnaka27/RAG-Gemini-embedding',
    techs: ['fa-brands fa-python', 'fa-brands fa-google'],
  },
  {
    name: 'CV Hand Controller',
    category: 'Data Science',
    className: 'data-science',
    description:
      'An application that uses computer vision to control the mouse pointer with hand movements and gestures',
    githubRepository: 'https://github.com/Dnaka27/Computer_vision-Hand_control',
    techs: [
      'fa-brands fa-python', 'fa-solid fa-robot'
    ],
  },
  {
    name: 'AI Web Searcher',
    category: 'Artificial Intelligence',
    className: 'ai',
    description:
      'Gemini Instance that utilizes Googe Search Tool to search the web and answer questions based on the results',
    githubRepository: 'https://github.com/Dnaka27/AI-WebSearch',
    techs: ['fa-brands fa-python', 'fa-brands fa-google'],
  },
]

const ProjectContent = ({ project }) => (
  <div className='project-content'>
    <div className='project-header'>
      <h3>{project.name}</h3>
      <a
        href={project.githubRepository}
        target='_blank'
        rel='noopener noreferrer'
        className='project-link'
        aria-label={`View project ${project.name} on GitHub`}
      >
        <i className='fa-brands fa-square-github'></i>
      </a>
    </div>
    <div className='project-techs'><span className='style'>Imagem</span></div>
    <p className='project-description'>{project.description}</p>
  </div>
)

const Projects = () => (
  <section id='projects' className='sectionMain'>
    <h2 className='titleSection'>PROJECTS</h2>
    <div className='accordion' id='projectAccordion'>
      {projectData.map((project, index) => (
        <div className='accordion-item' key={index}>
          <h2 className='accordion-header' id={`heading${index}`}>
            <button
              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse${index}`}
            >
              <div className='d-flex align-items-center w-100'>
                <span className='project-name'>{project.name}</span>
                <div
                  className={`project-category project-${project.className}`}
                >
                  {project.category}
                </div>
                <div className='tech-icons'>
                  {project.techs.map((tech, techIndex) => (
                    <i key={techIndex} className={tech}></i>
                  ))}
                </div>
              </div>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 0 ? 'show' : ''
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent='#projectAccordion'
          >
            <div className='accordion-body'>
              <ProjectContent project={project} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Projects
