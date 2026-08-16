import { useRef, useState } from 'react'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { gsap, revealOnScroll } from '../lib/gsap'

const TABS = [
  { id: 'notes', label: 'Notes & spec' },
  { id: 'certificates', label: 'Certificates' },
]

// Left: general notes (like the notes column of a drawing).
// Right: spec table — a bill of materials for the skill set.
const SkillsSection = ({ profile, skillGroups, certificates }) => {
  const scope = useRef(null)
  const [activeTab, setActiveTab] = useState('notes')
  const [certIndex, setCertIndex] = useState(0)

  const showCert = (direction) => {
    setCertIndex(
      (current) => (current + direction + certificates.length) % certificates.length,
    )
  }

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

        revealOnScroll('.skills-notes', '.skills-board', { x: -32, y: 0 })
        revealOnScroll('.spec-row', '.spec-table', { y: 24, stagger: 0.08 })

        return () => split.revert()
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <section ref={scope} id='skills' className='zone'>
      <div className='wrap section-pad'>
        <p className='crumb'>Specification</p>
        <h2 className='section-title'>Skills and foundations</h2>

        <div className='tab-row' role='tablist' aria-label='Skills view'>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type='button'
              role='tab'
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`tab-btn${activeTab === tab.id ? ' tab-btn-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'notes' ? (
          <div
            className='skills-board tab-panel'
            role='tabpanel'
            id='panel-notes'
            aria-labelledby='tab-notes'
          >
            <div className='skills-notes'>
              <h3 className='notes-title'>{profile.stackTitle}</h3>
              <p className='notes-body'>{profile.stackBody}</p>

              <aside className='general-notes'>
                <h4>General notes</h4>
                <ol>
                  {profile.principles.map((principle) => (
                    <li key={principle.title}>
                      <strong>{principle.title}</strong>
                      <p>{principle.body}</p>
                    </li>
                  ))}
                  <li>
                    <strong>{profile.noteTitle}</strong>
                    <p>{profile.noteBody}</p>
                  </li>
                </ol>
              </aside>
            </div>

            <div className='spec-table'>
              {skillGroups.map((group) => (
                <div key={group.title} className='spec-row'>
                  <div className='spec-key'>{group.title}</div>
                  <div className='spec-val'>
                    {typeof group.skills[0] === 'string' ? (
                      <ul>
                        {group.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className='spec-sub'>
                        {group.skills.map((skill) => (
                          <div key={skill.label}>
                            <strong>{skill.label}</strong>
                            <ul>
                              {skill.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className='cert-carousel tab-panel'
            role='tabpanel'
            id='panel-certificates'
            aria-labelledby='tab-certificates'
          >
            <div className='cert-viewport'>
              <div
                className='cert-track'
                style={{ transform: `translateX(-${certIndex * 100}%)` }}
              >
                {certificates.map((cert, index) => (
                  <div
                    className='cert-card'
                    key={cert}
                    aria-hidden={certIndex !== index}
                  >
                    <span className='cert-index'>
                      C.{String(index + 1).padStart(2, '0')}
                    </span>
                    <p className='cert-name'>{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='cert-nav'>
              <button
                type='button'
                onClick={() => showCert(-1)}
                aria-label='Previous certificate'
              >
                &larr;
              </button>
              <span className='cert-counter'>
                {String(certIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
              </span>
              <button
                type='button'
                onClick={() => showCert(1)}
                aria-label='Next certificate'
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillsSection
