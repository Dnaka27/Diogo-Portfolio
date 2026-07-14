import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

// Pure-CSS 3D isometric stack of data planes — no WebGL.
// The scene holds the static isometric tilt; GSAP spins the inner
// spinner around the stack axis and floats the whole scene.
const DataStack = ({ layers = [] }) => {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.data-stack-spinner', {
          rotation: '+=360',
          duration: 26,
          ease: 'none',
          repeat: -1,
        })
        gsap.to('.data-stack-scene', {
          y: -12,
          duration: 3.6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      })

      return () => mm.revert()
    },
    { scope },
  )

  return (
    <div ref={scope} className='data-stack' aria-hidden='true'>
      <div className='data-stack-scene'>
        <div className='data-stack-spinner'>
          {layers.map((label, index) => (
            <div
              key={label}
              className='data-plane'
              style={{ '--i': index, '--n': layers.length }}
            >
              <span className='data-plane-label'>{label}</span>
            </div>
          ))}
          <div className='data-core' />
        </div>
      </div>
    </div>
  )
}

export default DataStack
