import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

let lenisInstance: Lenis | null = null

export function initLenis(): Lenis {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenisInstance.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time: number) => lenisInstance!.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return lenisInstance
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance
}
