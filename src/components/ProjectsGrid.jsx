import { useRef } from 'react'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'
import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitType('#projects .section-title', { types: 'words' })

        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: scope.current, start: 'top 80%', once: true },
        })

        revealOnScroll('.project-card', '.projects-showcase')

        return () => split.revert()
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section ref={scope} id='projects' className='section-shell content-section'>
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
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
