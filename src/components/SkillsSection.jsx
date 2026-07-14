import { useRef } from 'react'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'

const SkillsSection = ({ profile, skillGroups }) => {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitType('#skills .section-title', { types: 'words' })

        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: scope.current, start: 'top 80%', once: true },
        })

        revealOnScroll('.skills-intro', '.skills-board', { x: -40, y: 0 })
        revealOnScroll('.skill-group', '.skills-board', { y: 36 })

        return () => split.revert()
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section ref={scope} id='skills' className='section-shell content-section'>
      <div className='section-heading section-heading-split'>
        <div>
          <h2 className='section-title'>Skills and foundations.</h2>
        </div>
      </div>

      <div className='skills-board'>
        <article className='skills-intro'>
          <h3>{profile.stackTitle}</h3>
          <p>{profile.stackBody}</p>

          <div className='skills-priority'>
            {profile.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>

        <div className='skills-layout'>
          {skillGroups.map((group) => (
            <article key={group.title} className='skill-group'>
              <h3>{group.title}</h3>
              <ul className='skill-grid'>
                {group.skills.map((skill) => {
                  if (typeof skill === 'string') {
                    return <li key={skill}>{skill}</li>
                  }

                  return (
                    <li key={skill.label} className='skill-item-with-children'>
                      <strong>{skill.label}</strong>
                      <ul className='skill-sublist'>
                        {skill.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
