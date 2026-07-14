import { useEffect, useRef } from 'react'

// Pointer-driven 3D tilt: writes CSS custom props (--rx, --ry, --mx, --my)
// consumed by the .tilt styles. Disabled for touch pointers and reduced motion.
export default function useTilt(maxTilt = 10) {
  const ref = useRef(null)
  const frame = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height

      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${((0.5 - py) * maxTilt).toFixed(2)}deg`)
        el.style.setProperty('--ry', `${((px - 0.5) * maxTilt).toFixed(2)}deg`)
        el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
        el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
        el.style.setProperty('--glare', '1')
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty('--rx', '0deg')
        el.style.setProperty('--ry', '0deg')
        el.style.setProperty('--glare', '0')
      })
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame.current)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [maxTilt])

  return ref
}
