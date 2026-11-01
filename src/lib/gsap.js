import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'

// Single registration point for GSAP plugins — import gsap from here,
// never from the package directly, so plugins are registered exactly once.
gsap.registerPlugin(ScrollTrigger, useGSAP)

// Runs a section's entrance animations scoped to its ref, only when the user
// allows motion. `animate` may return a cleanup function.
export const useEntrance = (scope, animate) =>
  useGSAP(
    () => {
      const mm = gsap.matchMedia(scope)
      mm.add('(prefers-reduced-motion: no-preference)', animate)
      return () => mm.revert()
    },
    { scope },
  )

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

// Word-by-word entrance for a section's title. Returns the cleanup that
// restores the original markup.
export const revealSectionTitle = (section) => {
  const split = new SplitType(section.querySelector('.section-title'), { types: 'words' })

  gsap.from(split.words, {
    yPercent: 110,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.08,
    scrollTrigger: { trigger: section, start: 'top 80%', once: true },
  })

  return () => split.revert()
}

export { gsap, ScrollTrigger }
