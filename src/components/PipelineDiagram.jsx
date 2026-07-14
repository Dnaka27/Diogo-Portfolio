import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

const SOURCES = [
  { y: 60, label: 'apis' },
  { y: 140, label: 'files' },
  { y: 220, label: 'events' },
]

const STAGE_X = [150, 255, 360]

// FIG. 1 — the daily work drawn as a DAG, in the vocabulary of a
// technical drawing. Edges self-draw on load via stroke-dashoffset.
const PipelineDiagram = ({ stages = [] }) => {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const edges = gsap.utils.toArray('.dag-edge')
        edges.forEach((path) => {
          const length = path.getTotalLength()
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        })

        gsap
          .timeline({ delay: 0.55, defaults: { ease: 'power2.out' } })
          .from('.dag-source, .dag-node', {
            scale: 0,
            transformOrigin: 'center',
            duration: 0.45,
            stagger: 0.07,
          })
          .to(
            edges,
            { strokeDashoffset: 0, duration: 0.9, stagger: 0.08, ease: 'power2.inOut' },
            '-=0.3',
          )
          .from('.dag-label, .fig-caption', { opacity: 0, y: 6, stagger: 0.05 }, '-=0.5')
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <figure ref={scope} className='figure' aria-hidden='true'>
      <svg viewBox='0 0 440 300' role='presentation'>
        {/* sources → collect */}
        <path className='dag-edge' d='M40 60 C 92 60, 96 140, 130 140' />
        <path className='dag-edge' d='M40 140 L 130 140' />
        <path className='dag-edge' d='M40 220 C 92 220, 96 140, 130 140' />
        {/* collect → structure → deliver */}
        <path className='dag-edge' d='M170 140 L 235 140' />
        <path className='dag-edge' d='M275 140 L 340 140' />
        {/* deliver → people */}
        <path className='dag-edge' d='M380 140 L 424 140' />
        <path className='dag-edge' d='M416 133 L 426 140 L 416 147' />

        {SOURCES.map((source) => (
          <g key={source.label}>
            <rect
              className='dag-source'
              x='24'
              y={source.y - 8}
              width='16'
              height='16'
            />
            <text className='dag-label dag-label-soft' x='24' y={source.y + 26}>
              {source.label}
            </text>
          </g>
        ))}

        {stages.map((stage, index) => (
          <g key={stage}>
            <circle
              className={`dag-node${index === stages.length - 1 ? ' dag-node-out' : ''}`}
              cx={STAGE_X[index]}
              cy='140'
              r='19'
            />
            <text
              className='dag-label'
              x={STAGE_X[index]}
              y='182'
              textAnchor='middle'
            >
              {stage}
            </text>
          </g>
        ))}

        <text className='dag-label dag-label-soft' x='424' y='120' textAnchor='end'>
          people
        </text>
      </svg>

      <figcaption className='fig-caption'>
        <strong>Fig. 1</strong> — a day&apos;s work, as a DAG
      </figcaption>
    </figure>
  )
}

export default PipelineDiagram
