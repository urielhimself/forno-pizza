import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 900)
    const handleResize = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const tickFn = () => {
      cursorX.current += (mouseX.current - cursorX.current) * 0.2
      cursorY.current += (mouseY.current - cursorY.current) * 0.2
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px) translate(-50%, -50%)`
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px) translate(-50%, -50%)`
      }
    }
    gsap.ticker.add(tickFn)

    const hoverEls = document.querySelectorAll<HTMLElement>('a, button, [data-cursor]')
    const enterHandlers: Array<() => void> = []
    const leaveHandlers: Array<() => void> = []

    hoverEls.forEach((el) => {
      const onEnter = () => {
        cursorRef.current?.classList.add('cursor-hover')
        const label = el.dataset.cursor
        if (label && labelRef.current) {
          labelRef.current.textContent = label
          labelRef.current.style.opacity = '1'
        }
      }
      const onLeave = () => {
        cursorRef.current?.classList.remove('cursor-hover')
        if (labelRef.current) {
          labelRef.current.style.opacity = '0'
        }
      }
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      enterHandlers.push(onEnter)
      leaveHandlers.push(onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      gsap.ticker.remove(tickFn)
      hoverEls.forEach((el, i) => {
        el.removeEventListener('mouseenter', enterHandlers[i])
        el.removeEventListener('mouseleave', leaveHandlers[i])
      })
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--ink);
          pointer-events: none;
          z-index: 10000;
          mix-blend-mode: difference;
          transition: width 0.3s cubic-bezier(0.2,0.8,0.2,1),
                      height 0.3s cubic-bezier(0.2,0.8,0.2,1),
                      background 0.3s ease;
        }
        .cursor-dot.cursor-hover {
          width: 60px; height: 60px;
          background: var(--tomato);
          mix-blend-mode: normal;
        }
        .cursor-lbl {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 10001;
          color: var(--cream);
          font-family: var(--display);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      `}</style>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={labelRef} className="cursor-lbl" />
    </>
  )
}
