import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import PizzaImage from '../ui/PizzaImage'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to('.hero-word', {
        y: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'expo.out',
      })
        .to('.hero-meta', { opacity: 1, duration: 0.8 }, '-=0.8')
        .to('.hero-footer', { opacity: 1, duration: 1 }, '-=0.6')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        @keyframes slow-rotate { to { transform: rotate(360deg); } }
        @keyframes scroll-pulse {
          0%, 100% { transform: scaleY(1); opacity: 0.3; transform-origin: top; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .hero-title-display {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(5rem, 18vw, 20rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          margin: 40px 0;
        }
        .hero-line { display: block; overflow: hidden; }
        .hero-word { display: inline-block; transform: translateY(110%); }
        .hero-italic { font-style: italic; font-weight: 400; color: var(--tomato); }
        .scroll-hint {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--ink-soft);
        }
        .scroll-hint::before {
          content: '';
          display: block;
          width: 1px;
          height: 60px;
          background: currentColor;
          animation: scroll-pulse 2s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .hero-pizza-wrap { width: 300px !important; height: 300px !important; right: -60px !important; opacity: 0.5; }
        }
      `}</style>
      <section
        ref={sectionRef}
        style={{
          minHeight: '100vh',
          position: 'relative',
          padding: '140px 40px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <div
          className="hero-meta"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            opacity: 0,
          }}
        >
          <span>נוסד 2019 · פיצריה שאינה מתנצלת</span>
          <span>N°01</span>
          <span>נאפולי — תל אביב — ניו יורק</span>
        </div>

        <h1 className="hero-title-display" style={{ position: 'relative', zIndex: 2 }}>
          <span className="hero-line" style={{ paddingBottom: '0.15em' }}><span className="hero-word">אש,</span></span>
          <span className="hero-line" style={{ paddingBottom: '0.15em' }}><span className="hero-word hero-italic">קמח,</span></span>
          <span className="hero-line" style={{ paddingBottom: '0.15em' }}><span className="hero-word">&nbsp;&nbsp;סבלנות.</span></span>
        </h1>

        <div
          className="hero-pizza-wrap"
          style={{
            position: 'absolute',
            top: '50%',
            left: -80,
            width: 420,
            height: 420,
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.55,
          }}
        >
          <PizzaImage variant="margherita" />
        </div>

        <div
          className="hero-footer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            position: 'relative',
            zIndex: 2,
            opacity: 0,
          }}
        >
          <p style={{ maxWidth: 400, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
            בצק שתסס שבעים ושתיים שעות. אש שהודלקה עם שחר. פיצה כפי שנועדה להיות —<br />
            איטית, ללא פשרות, <em>חיה.</em>
          </p>
          <div className="scroll-hint">גלול</div>
        </div>
      </section>
    </>
  )
}
