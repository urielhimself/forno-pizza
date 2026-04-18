import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

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

        <h1 className="hero-title-display">
          <span className="hero-line"><span className="hero-word">אש,</span></span>
          <span className="hero-line"><span className="hero-word hero-italic">קמח,</span></span>
          <span className="hero-line"><span className="hero-word">&nbsp;&nbsp;סבלנות.</span></span>
        </h1>

        <div
          className="hero-pizza-wrap"
          style={{
            position: 'absolute',
            top: '50%',
            right: -100,
            width: 500,
            height: 500,
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', animation: 'slow-rotate 40s linear infinite' }}
          >
            <circle cx="250" cy="250" r="230" fill="#d4a574" />
            <circle cx="250" cy="250" r="210" fill="#c73a1f" opacity="0.95" />
            <circle cx="250" cy="250" r="210" fill="url(#saucegrain)" opacity="0.3" />
            <ellipse cx="180" cy="200" rx="32" ry="24" fill="#f4ede0" opacity="0.95" />
            <ellipse cx="310" cy="180" rx="28" ry="20" fill="#f4ede0" opacity="0.95" />
            <ellipse cx="340" cy="280" rx="34" ry="26" fill="#f4ede0" opacity="0.95" />
            <ellipse cx="200" cy="320" rx="30" ry="22" fill="#f4ede0" opacity="0.95" />
            <ellipse cx="260" cy="260" rx="26" ry="20" fill="#f4ede0" opacity="0.95" />
            <ellipse cx="140" cy="280" rx="22" ry="18" fill="#f4ede0" opacity="0.9" />
            <ellipse cx="380" cy="220" rx="20" ry="16" fill="#f4ede0" opacity="0.9" />
            <ellipse cx="220" cy="160" rx="14" ry="8" fill="#4a5d3a" transform="rotate(-30 220 160)" />
            <ellipse cx="290" cy="230" rx="12" ry="7" fill="#4a5d3a" transform="rotate(45 290 230)" />
            <ellipse cx="170" cy="260" rx="13" ry="7" fill="#4a5d3a" transform="rotate(20 170 260)" />
            <ellipse cx="300" cy="340" rx="14" ry="8" fill="#4a5d3a" transform="rotate(-15 300 340)" />
            <ellipse cx="240" cy="350" rx="12" ry="7" fill="#4a5d3a" transform="rotate(60 240 350)" />
            <circle cx="160" cy="180" r="3" fill="#1a1410" />
            <circle cx="320" cy="200" r="4" fill="#1a1410" />
            <circle cx="280" cy="380" r="3" fill="#1a1410" />
            <circle cx="120" cy="340" r="3" fill="#1a1410" />
            <defs>
              <filter id="saucegrain">
                <feTurbulence baseFrequency="0.9" numOctaves={2} />
                <feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.1  0 0 0 0 0.05  0 0 0 0.4 0" />
              </filter>
            </defs>
          </svg>
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
