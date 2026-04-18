import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: () => {
            if (loaderRef.current) loaderRef.current.style.display = 'none'
            onComplete()
          },
        })
      },
    })

    const counter = { val: 0 }
    tl.to(counter, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.floor(counter.val)
        if (countRef.current) {
          countRef.current.textContent = `פורנו — ${String(v).padStart(2, '0')}`
        }
        if (barRef.current) {
          barRef.current.style.width = `${v}%`
        }
      },
    })

    return () => { tl.kill() }
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--ink)',
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--cream)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 400,
          fontStyle: 'italic',
          fontSize: 28,
          letterSpacing: '0.05em',
          overflow: 'hidden',
        }}
      >
        <span ref={countRef}>פורנו — 00</span>
      </div>
      <div
        ref={barRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 2,
          background: 'var(--tomato)',
          width: '0%',
          transition: 'none',
        }}
      />
    </div>
  )
}
