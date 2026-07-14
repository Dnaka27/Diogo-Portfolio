import { useRef } from 'react'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'
import ProjectCard from './ProjectCard'

const REFS = ['A', 'B', 'C', 'D', 'E', 'F']

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

        revealOnScroll('.detail-card', '.details-grid', { y: 40 })

        return () => split.revert()
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section ref={scope} id='projects' className='zone'>
      <div className='wrap section-pad'>
        <p className='crumb'>Details A–{REFS[projects.length - 1]}</p>
        <h2 className='section-title'>Selected projects</h2>
        <p className='lede'>
          Four builds that show the same habit: take raw information, structure it,
          and hand people something they can actually use.
        </p>

        <div className='details-grid'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} reference={REFS[index]} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
