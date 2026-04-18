import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

const floatingConfigs = [
  { className: 'float-tomato', speed: -100, rotate: 45, style: { top: '20%', left: '8%', width: 100, height: 100 } },
  { className: 'float-basil', speed: 80, rotate: -30, style: { top: '65%', left: '15%', width: 140, height: 140 } },
  { className: 'float-flour', speed: -150, rotate: 60, style: { top: '30%', right: '10%', width: 160, height: 160 } },
  { className: 'float-cheese', speed: 120, rotate: -45, style: { top: '70%', right: '18%', width: 90, height: 90 } },
  { className: 'float-olive', speed: -80, rotate: 90, style: { top: '8%', right: '30%', width: 50, height: 50 } },
]

export default function Ingredients() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal', el).forEach((target) => {
        gsap.from(target, {
          y: 40, opacity: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: target, start: 'top 85%' },
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-lines', el).forEach((heading) => {
        const html = heading.innerHTML
        const lines = html.split('<br>').map(
          (l) => `<span style="display:block;overflow:hidden;"><span class="rli4" style="display:block;transform:translateY(110%);">${l}</span></span>`,
        )
        heading.innerHTML = lines.join('')
        gsap.to(heading.querySelectorAll<HTMLElement>('.rli4'), {
          y: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 80%' },
        })
      })

      floatingConfigs.forEach((cfg) => {
        gsap.to(`.${cfg.className}`, {
          y: cfg.speed, rotate: cfg.rotate, ease: 'none',
          scrollTrigger: {
            trigger: '.ingredients-section',
            start: 'top bottom', end: 'bottom top', scrub: 1.2,
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .ingredients-section {
          padding: 160px 40px;
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }
        .ingredients-inner {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .ingredients-label { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--tomato); margin-bottom: 32px; }
        .ingredients-title { font-family: var(--display); font-size: clamp(4rem, 12vw, 14rem); font-weight: 300; line-height: 0.85; letter-spacing: -0.04em; }
        .ingredients-title .italic { font-style: italic; color: var(--tomato); }
        .floating { position: absolute; pointer-events: none; opacity: 0.9; }
        @media (max-width: 900px) {
          .ingredients-section { padding: 100px 24px; }
          .floating { display: none; }
        }
      `}</style>
      <section ref={sectionRef} className="ingredients-section">
        <div className="floating float-tomato" style={{ top: '20%', left: '8%', width: 100, height: 100 }}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="55" r="35" fill="#c73a1f" />
            <circle cx="50" cy="55" r="35" fill="url(#tomshine)" opacity="0.4" />
            <path d="M 40 25 L 50 20 L 60 25 L 55 35 L 50 30 L 45 35 Z" fill="#4a5d3a" />
            <defs>
              <radialGradient id="tomshine" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="floating float-basil" style={{ top: '65%', left: '15%', width: 140, height: 140 }}>
          <svg viewBox="0 0 140 140">
            <ellipse cx="70" cy="70" rx="50" ry="28" fill="#4a5d3a" transform="rotate(-25 70 70)" />
            <path d="M 25 75 Q 70 55 115 75" stroke="#2d3a22" strokeWidth="1.5" fill="none" transform="rotate(-25 70 70)" />
          </svg>
        </div>
        <div className="floating float-flour" style={{ top: '30%', right: '10%', width: 160, height: 160 }}>
          <svg viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="65" fill="#e8dcc5" />
            <circle cx="80" cy="80" r="65" fill="url(#flour)" opacity="0.5" />
            <defs>
              <radialGradient id="flour">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#d4c5a0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="floating float-cheese" style={{ top: '70%', right: '18%', width: 90, height: 90 }}>
          <svg viewBox="0 0 90 90">
            <ellipse cx="45" cy="45" rx="38" ry="32" fill="#f4ede0" />
            <ellipse cx="45" cy="45" rx="38" ry="32" fill="url(#cheese)" opacity="0.3" />
            <defs>
              <radialGradient id="cheese" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#d4b88a" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="floating float-olive" style={{ top: '8%', right: '30%', width: 50, height: 50 }}>
          <svg viewBox="0 0 50 50">
            <ellipse cx="25" cy="25" rx="15" ry="20" fill="#4a5d3a" />
            <ellipse cx="22" cy="20" rx="3" ry="5" fill="#6a7d5a" />
          </svg>
        </div>

        <div className="ingredients-inner">
          <div className="ingredients-label reveal">מרכיבים שנבחרו בקפדנות בלתי סבירה</div>
          <h2 className="ingredients-title reveal-lines">
            קמח מ<span className="italic">Molino</span><br />
            Caputo. עגבניות<br />
            מ<span className="italic">Agro Sarnese.</span><br />
            מלח מן <span className="italic">הים.</span>
          </h2>
        </div>
      </section>
    </>
  )
}
