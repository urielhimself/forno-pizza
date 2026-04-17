import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { storyPanels } from '../../data/press'

function StoryVisual({ visual }: { visual: string }) {
  if (visual === 'flame') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="#2d2620" />
        <circle cx="200" cy="200" r="100" fill="#c73a1f" />
        <circle cx="200" cy="200" r="100" fill="url(#flame1)" opacity="0.8" />
        <ellipse cx="200" cy="220" rx="120" ry="15" fill="#1a1410" opacity="0.5" />
        <defs>
          <radialGradient id="flame1">
            <stop offset="0%" stopColor="#ffcc66" />
            <stop offset="60%" stopColor="#e8662a" />
            <stop offset="100%" stopColor="#8f2212" />
          </radialGradient>
        </defs>
      </svg>
    )
  }
  if (visual === 'oven') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="#e8dcc5" />
        <rect x="50" y="80" width="300" height="180" fill="#8f2212" />
        <rect x="70" y="100" width="260" height="10" fill="#c73a1f" />
        <rect x="70" y="120" width="260" height="10" fill="#c73a1f" />
        <circle cx="200" cy="180" r="40" fill="#1a1410" />
        <circle cx="200" cy="180" r="30" fill="#e8662a" />
        <circle cx="200" cy="180" r="20" fill="#ffcc66" />
      </svg>
    )
  }
  if (visual === 'pies') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="#1a1410" />
        <circle cx="150" cy="150" r="60" fill="#c73a1f" />
        <circle cx="250" cy="150" r="50" fill="#d4a574" />
        <circle cx="200" cy="220" r="70" fill="#8f2212" />
        <circle cx="150" cy="150" r="45" fill="#f4ede0" opacity="0.3" />
        <circle cx="250" cy="150" r="38" fill="#c73a1f" />
      </svg>
    )
  }
  if (visual === 'review') {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <rect width="400" height="300" fill="#f4ede0" />
        <rect x="60" y="60" width="280" height="180" fill="#1a1410" />
        <text x="200" y="140" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="50" fill="#c73a1f" textAnchor="middle">★★★★</text>
        <text x="200" y="200" fontFamily="Fraunces, serif" fontSize="20" fill="#f4ede0" textAnchor="middle">The New York Times</text>
      </svg>
    )
  }
  // today
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
      <rect width="400" height="300" fill="#c73a1f" />
      <text x="200" y="170" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="300" fontSize="100" fill="#f4ede0" textAnchor="middle">today.</text>
    </svg>
  )
}

export default function Story() {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
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
          (l) => `<span style="display:block;overflow:hidden;"><span class="rli3" style="display:block;transform:translateY(110%);">${l}</span></span>`,
        )
        heading.innerHTML = lines.join('')
        gsap.to(heading.querySelectorAll<HTMLElement>('.rli3'), {
          y: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 80%' },
        })
      })

      const track = trackRef.current
      const container = containerRef.current
      if (track && container) {
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 80),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => '+=' + (track.scrollWidth - window.innerWidth),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .story-section { overflow: hidden; background: var(--cream); }
        .story-intro { padding: 180px 40px 80px; max-width: 1000px; }
        .story-label { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--tomato); margin-bottom: 32px; }
        .story-heading { font-family: var(--display); font-size: clamp(3rem, 6vw, 7rem); font-weight: 300; line-height: 0.95; letter-spacing: -0.03em; }
        .story-heading .italic { font-style: italic; color: var(--tomato); }
        .story-horizontal { height: 100vh; position: relative; }
        .story-track { display: flex; height: 100%; width: max-content; align-items: center; padding: 0 40px; gap: 120px; }
        .story-panel { flex: 0 0 auto; width: 500px; display: flex; flex-direction: column; gap: 24px; }
        .story-panel-year { font-family: var(--display); font-size: 96px; font-weight: 300; font-style: italic; color: var(--tomato); line-height: 1; }
        .story-panel-visual { width: 100%; aspect-ratio: 4/3; background: var(--cream-dark); overflow: hidden; }
        .story-panel-title { font-family: var(--display); font-size: 32px; font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; }
        .story-panel-body { font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
        @media (max-width: 900px) {
          .story-intro { padding: 100px 24px 60px; }
          .story-panel { width: 80vw; }
        }
      `}</style>
      <section ref={sectionRef} className="story-section" id="story">
        <div className="story-intro">
          <div className="story-label reveal">A Short History</div>
          <h2 className="story-heading reveal-lines">
            How a <span className="italic">stubborn</span> idea<br />
            became a pizzeria.
          </h2>
        </div>
        <div ref={containerRef} className="story-horizontal">
          <div ref={trackRef} className="story-track">
            {storyPanels.map((panel) => (
              <div key={panel.year} className="story-panel">
                <div className="story-panel-year">{panel.year}</div>
                <div className="story-panel-visual">
                  <StoryVisual visual={panel.visual} />
                </div>
                <h3 className="story-panel-title">{panel.title}</h3>
                <p className="story-panel-body" dangerouslySetInnerHTML={{ __html: panel.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
