import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useGsapReveal() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal', el).forEach((target) => {
        gsap.from(target, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 85%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-lines', el).forEach((heading) => {
        const html = heading.innerHTML
        const lines = html
          .split('<br>')
          .map(
            (l) =>
              `<span style="display:block;overflow:hidden;"><span class="reveal-line-inner" style="display:block;transform:translateY(110%);">${l}</span></span>`,
          )
        heading.innerHTML = lines.join('')

        gsap.to(heading.querySelectorAll<HTMLElement>('.reveal-line-inner'), {
          y: 0,
          duration: 1.4,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

// Re-export ScrollTrigger to satisfy noUnusedLocals in consumers
export { ScrollTrigger }
