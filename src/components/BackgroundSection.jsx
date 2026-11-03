import { useRef } from 'react'
import { gsap, revealOnScroll, revealSectionTitle, useEntrance } from '../lib/gsap'
import StackChips from './StackChips'

const STEP_START = 'top 72%'

const RouteSubject = ({ subject }) => (
  <div>
    <h5 className='route-subject'>{subject.title}</h5>
    {subject.summary ? (
      <div className='route-subject-summary'>
        <span>{subject.summary}</span>
        <StackChips compact items={subject.stack} label={`${subject.title} technologies`} />
      </div>
    ) : (
      <ul className='route-topics'>
        {subject.topics.map((topic) => (
          <li key={topic.label}>
            <span>{topic.label}</span>
            <StackChips compact items={topic.stack} label={`${topic.label} technologies`} />
          </li>
        ))}
      </ul>
    )}
  </div>
)

const RouteStep = ({ step }) => (
  <li className='route-step'>
    <div className='route-marker' aria-hidden='true'>
      <span className='route-edge' />
      <span className='route-node' />
    </div>

    <div className='route-body'>
      <p className='route-period'>{step.period}</p>
      <h4 className='route-title'>{step.title}</h4>
      {step.org ? (
        <p className='route-org'>
          {step.org}
          {step.place ? <span className='route-place'> · {step.place}</span> : null}
        </p>
      ) : null}
      {step.context ? <p className='route-context'>{step.context}</p> : null}
      <div className='route-subjects'>
        {step.subjects.map((subject) => (
          <RouteSubject key={subject.title} subject={subject} />
        ))}
      </div>
    </div>
  </li>
)

// FIG. 2 — academic and professional paths as two parallel routes, oldest
// stop first. The edge between stops draws with the scroll, and each stop
// appears as the line reaches it.
const BackgroundSection = ({ paths }) => {
  const scope = useRef(null)

  useEntrance(scope, () => {
    gsap.utils.toArray('.route').forEach((route) => {
      const line = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: route,
          start: STEP_START,
          end: 'bottom 72%',
          scrub: 0.4,
        },
      })

      // One edge after the other, each lasting as long as it is tall, so
      // the line keeps a constant speed and reaches each stop as it appears.
      route.querySelectorAll('.route-edge').forEach((edge) => {
        line.fromTo(edge, { scaleY: 0 }, { scaleY: 1, duration: edge.offsetHeight })
      })
    })

    gsap.utils.toArray('.route-step').forEach((step) => {
      gsap.from(step.querySelector('.route-node'), {
        scale: 0,
        duration: 0.4,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: step, start: STEP_START, once: true },
      })

      revealOnScroll(step.querySelector('.route-body'), step, {
        y: 20,
        duration: 0.7,
        scrollTrigger: { start: STEP_START },
      })
    })

    return revealSectionTitle(scope.current)
  })

  return (
    <section ref={scope} id='background' className='zone'>
      <div className='wrap section-pad'>
        <p className='crumb'>Fig. 2 · Two routes</p>
        <h2 className='section-title'>Background</h2>

        <div className='routes'>
          {paths.map((path) => (
            <div key={path.id} className='route-column'>
              <h3 id={`route-${path.id}`} className='route-heading'>
                {path.title}
              </h3>

              <ol className='route' aria-labelledby={`route-${path.id}`}>
                {path.steps.map((step) => (
                  <RouteStep key={step.id} step={step} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BackgroundSection
