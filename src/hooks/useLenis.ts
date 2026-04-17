import { useEffect } from 'react'
import { getLenis } from '../lib/lenis'
import { ScrollTrigger } from '../lib/gsap'

export function useLenisScrollEvent(
  cb: (data: { scroll: number; velocity: number }) => void,
) {
  useEffect(() => {
    const lenis = getLenis()
    if (!lenis) return
    lenis.on('scroll', cb)
    return () => lenis.off('scroll', cb)
  }, [cb])
}

export function useScrollTriggerRefresh() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])
}
