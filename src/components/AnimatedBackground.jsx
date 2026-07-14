import { useEffect, useRef } from 'react'

const CFG = {
  count: 70,
  depth: 640, // z range of the field
  fov: 520, // perspective strength for the projection
  maxDist: 170,
  maxDist2: 170 * 170,
  maxConn: 4,
  speed: 0.24,
  parallax: 30, // max camera shift from pointer, scaled by node depth
}

const rand = (lo, hi) => Math.random() * (hi - lo) + lo

function makeNode(w, h) {
  const angle = rand(0, Math.PI * 2)
  const spd = rand(0.08, CFG.speed)
  return {
    x: rand(-w * 0.6, w * 0.6),
    y: rand(-h * 0.6, h * 0.6),
    z: rand(0, CFG.depth),
    vx: Math.cos(angle) * spd,
    vy: Math.sin(angle) * spd,
    vz: rand(-0.18, 0.18),
    pulse: Math.random() < 0.2,
    phase: rand(0, Math.PI * 2),
  }
}

// Pseudo-3D particle field: nodes live in a 3D box and are projected onto
// the canvas with a simple perspective divide. Depth drives size, alpha and
// pointer parallax, so the network reads as a volume instead of a plane.
const AnimatedBackground = () => {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-rgb')
        .trim() || '142, 187, 216'

    let nodes = []
    let W = 0
    let H = 0
    let raf
    let camX = 0
    let camY = 0
    let targetX = 0
    let targetY = 0

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      nodes = Array.from({ length: CFG.count }, () => makeNode(W, H))
    }

    const onPointer = (event) => {
      targetX = (event.clientX / W - 0.5) * 2
      targetY = (event.clientY / H - 0.5) * 2
    }

    const project = (n) => {
      const scale = CFG.fov / (CFG.fov + n.z)
      const depth = 1 - n.z / CFG.depth // 1 = near, 0 = far
      return {
        sx: W / 2 + (n.x - camX * CFG.parallax * (0.4 + depth)) * scale,
        sy: H / 2 + (n.y - camY * CFG.parallax * (0.4 + depth)) * scale,
        scale,
        depth,
      }
    }

    const frame = () => {
      ctx.clearRect(0, 0, W, H)

      camX += (targetX - camX) * 0.04
      camY += (targetY - camY) * 0.04

      if (!reduced) {
        const bx = W * 0.62
        const by = H * 0.62
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          n.z += n.vz
          n.phase += 0.018
          if (n.x < -bx) n.x = bx
          else if (n.x > bx) n.x = -bx
          if (n.y < -by) n.y = by
          else if (n.y > by) n.y = -by
          if (n.z < 0 || n.z > CFG.depth) n.vz *= -1
        }
      }

      const proj = nodes.map(project)

      // Connections in projected space — skip sqrt until needed for alpha
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        let c = 0
        for (let j = i + 1; j < nodes.length && c < CFG.maxConn; j++) {
          const a = proj[i]
          const b = proj[j]
          const dx = a.sx - b.sx
          const dy = a.sy - b.sy
          const d2 = dx * dx + dy * dy
          if (d2 < CFG.maxDist2) {
            const near = Math.min(a.depth, b.depth)
            const alpha = (1 - Math.sqrt(d2) / CFG.maxDist) * (0.1 + near * 0.22)
            ctx.beginPath()
            ctx.moveTo(a.sx, a.sy)
            ctx.lineTo(b.sx, b.sy)
            ctx.strokeStyle = `rgba(${accent},${alpha.toFixed(3)})`
            ctx.stroke()
            c++
          }
        }
      }

      // Nodes — size and alpha scale with depth
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const p = proj[i]
        const r = (n.pulse ? 2.6 : 1.8) * (0.5 + p.depth)

        if (n.pulse) {
          const pr = r + 3 + Math.sin(n.phase) * 2.2
          const ringA = ((0.08 + Math.sin(n.phase) * 0.05) * (0.4 + p.depth)).toFixed(3)
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, pr, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${accent},${ringA})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2)
        const a = (n.pulse ? 0.32 : 0.2) + p.depth * 0.4
        ctx.fillStyle = `rgba(${accent},${a.toFixed(3)})`
        ctx.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true })
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden='true'
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}

export default AnimatedBackground
