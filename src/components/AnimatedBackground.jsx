import { useEffect, useRef } from 'react'

const CFG = {
  count: 60,
  maxDist: 180,
  maxDist2: 180 * 180,
  maxConn: 4,
  speed: 0.26,
  gridStep: 64,
}

const rand = (lo, hi) => Math.random() * (hi - lo) + lo

function makeNode(w, h) {
  const angle = rand(0, Math.PI * 2)
  const spd = rand(0.1, CFG.speed)
  return {
    x: rand(0, w),
    y: rand(0, h),
    vx: Math.cos(angle) * spd,
    vy: Math.sin(angle) * spd,
    r: Math.random() < 0.18 ? 3.5 : 2,
    pulse: Math.random() < 0.22,
    phase: rand(0, Math.PI * 2),
  }
}

const AnimatedBackground = () => {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let nodes = []
    let W = 0
    let H = 0
    let raf

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

    const frame = () => {
      ctx.clearRect(0, 0, W, H)

      // Grid — one batched path
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(0,212,255,0.022)'
      ctx.lineWidth = 1
      for (let x = 0; x <= W; x += CFG.gridStep) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
      }
      for (let y = 0; y <= H; y += CFG.gridStep) {
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
      }
      ctx.stroke()

      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          n.phase += 0.018
          if (n.x < -20) n.x = W + 20
          else if (n.x > W + 20) n.x = -20
          if (n.y < -20) n.y = H + 20
          else if (n.y > H + 20) n.y = -20
        }
      }

      // Connections — skip sqrt until we know we need the distance for alpha
      for (let i = 0; i < nodes.length; i++) {
        let c = 0
        for (let j = i + 1; j < nodes.length && c < CFG.maxConn; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < CFG.maxDist2) {
            const alpha = (1 - Math.sqrt(d2) / CFG.maxDist) * 0.28
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0,212,255,${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.stroke()
            c++
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        if (n.pulse) {
          const pr = n.r + 3 + Math.sin(n.phase) * 2.5
          const ringA = (0.1 + Math.sin(n.phase) * 0.06).toFixed(3)
          ctx.beginPath()
          ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(0,212,255,${ringA})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.pulse ? 'rgba(0,212,255,0.72)' : 'rgba(0,212,255,0.42)'
        ctx.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
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
