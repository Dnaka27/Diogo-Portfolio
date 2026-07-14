import { createElement } from 'react'
import useTilt from '../hooks/useTilt'

// Generic 3D tilt wrapper. Children marked with .depth-1 / .depth-2 are
// pushed onto separate Z planes for a layered parallax effect.
const Tilt = ({ as = 'div', maxTilt = 10, className = '', children, ...rest }) => {
  const ref = useTilt(maxTilt)

  return createElement(
    as,
    { ref, className: `tilt ${className}`.trim(), ...rest },
    <span key='glare' className='tilt-glare' aria-hidden='true' />,
    children,
  )
}

export default Tilt
