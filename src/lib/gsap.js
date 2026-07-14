import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Single registration point for GSAP plugins — import gsap from here,
// never from the package directly, so plugins are registered exactly once.
gsap.registerPlugin(ScrollTrigger, useGSAP)

// Shared entrance for scroll-triggered reveals: fires once when the
// element enters ~80% of the viewport and never replays.
export const revealOnScroll = (targets, trigger, vars = {}) =>
  gsap.from(targets, {
    y: 48,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    ...vars,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      once: true,
      ...vars.scrollTrigger,
    },
  })

export { gsap, ScrollTrigger }
