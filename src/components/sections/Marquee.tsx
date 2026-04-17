import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { getLenis } from '../../lib/lenis'

const items = [
  { label: 'Margherita', italic: false },
  { label: 'Diavola', italic: true },
  { label: 'Quattro Formaggi', italic: false },
  { label: 'Bufala', italic: true },
  { label: 'Tartufo', italic: false },
  { label: 'Marinara', italic: true },
  { label: 'Capricciosa', italic: false },
  { label: 'Funghi', italic: true },
]

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tween = gsap.to(track, {
      x: () => -(track.scrollWidth / 2),
      duration: 50,
      ease: 'none',
      repeat: -1,
    })

    let lastScroll = 0
    const lenis = getLenis()

    const onScroll = ({ scroll }: { scroll: number }) => {
      const delta = scroll - lastScroll
      lastScroll = scroll
      gsap.to(tween, { timeScale: 1 + Math.abs(delta) * 0.02, duration: 0.3 })
      setTimeout(() => gsap.to(tween, { timeScale: 1, duration: 0.6 }), 200)
    }

    lenis?.on('scroll', onScroll)

    return () => {
      tween.kill()
      lenis?.off('scroll', onScroll)
    }
  }, [])

  const allItems = [...items, ...items]

  return (
    <>
      <style>{`
        .marquee-wrap {
          padding: 40px 0;
          overflow: hidden;
          border-top: 1px solid var(--ink);
          border-bottom: 1px solid var(--ink);
          background: var(--cream);
        }
        .marquee-track {
          display: flex;
          gap: 60px;
          white-space: nowrap;
          font-family: var(--display);
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          will-change: transform;
        }
        .marquee-track > span {
          display: inline-flex;
          align-items: center;
          gap: 60px;
        }
        .marquee-dot {
          width: 14px; height: 14px;
          background: var(--tomato);
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .marquee-italic { font-style: italic; font-weight: 400; }
      `}</style>
      <div className="marquee-wrap">
        <div ref={trackRef} className="marquee-track">
          {allItems.map((item, i) => (
            <span key={i} className={item.italic ? 'marquee-italic' : ''}>
              {item.label} <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
