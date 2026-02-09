import './Projects.css'
import React from 'react'

const projectData = [
  {
    name: 'Coin Viewer',
    category: 'Data Science',
    className: 'data-science',
    description: [
      { text: `A currency quotation application built with ` },
      { text: `Python`, highlight: true },
      { text: ` and ` },
      { text: `Streamlit`, highlight: true },
    ],
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
    description: [
      { text: `A basic To Do List application built with ` },
      { text: `React`, highlight: true },
      { text: `, ` },
      { text: `JavaScript`, highlight: true },
      { text: ` and ` },
      { text: `CSS`, highlight: true },
      { text: ` to manage tasks efficiently.` },
    ],
    githubRepository: 'https://github.com/Dnaka27/ToDoList_basic/',
    techs: ['fa-brands fa-react', 'fa-brands fa-square-js', 'fa-brands fa-css'],
  },
  {
    name: 'RAG Gemini',
    category: 'Artificial Intelligence',
    className: 'ai',
    description: [
      { text: `A Retrieval-Augmented Generation (RAG) system built with ` },
      { text: `Python`, highlight: true },
      { text: ` and ` },
      { text: `Google Gemini`, highlight: true },
      { text: ` using embeddings to enhance contextual question answering.` },
    ],
    githubRepository: 'https://github.com/Dnaka27/RAG-Gemini-embedding',
    techs: ['fa-brands fa-python', 'fa-brands fa-google'],
  },
  {
    name: 'CV Hand Controller',
    category: 'Data Science',
    className: 'data-science',
    description: [
      {
        text: `A computer vision–based hand gesture control system built with `,
      },
      { text: `Python`, highlight: true },
      {
        text: `, using real-time hand tracking to control interactions and inputs.`,
      },
    ],
    githubRepository: 'https://github.com/Dnaka27/Computer_vision-Hand_control',
    techs: ['fa-brands fa-python', 'fa-solid fa-robot'],
  },
  {
    name: 'AI Web Searcher',
    category: 'Artificial Intelligence',
    className: 'ai',
    description: [
      { text: `An AI-powered web search application built with ` },
      { text: `Python`, highlight: true },
      { text: ` and ` },
      { text: `Google APIs`, highlight: true },
      {
        text: ` to retrieve, process, and summarize information from the web.`,
      },
    ],
    githubRepository: 'https://github.com/Dnaka27/AI-WebSearch',
    techs: ['fa-brands fa-python', 'fa-brands fa-google'],
  },
]

const ProjectContent = ({ project }) => (
  <div className='project-content'>
    <div className='project-header'>
      <h3>{project.name}</h3>
      <p className='project-description'>
        {project.description.map((part, index) =>
          part.highlight ? (
            <span key={index} className='project-style-tech'>
              {part.text}
            </span>
          ) : (
            part.text
          )
        )}
      </p>
    </div>
    <div className='project-media'>
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
