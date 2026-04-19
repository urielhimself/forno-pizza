import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { storyPanels } from '../../data/press'

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
        const getDistance = () => Math.max(0, track.scrollWidth - container.clientWidth)
        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => '+=' + getDistance(),
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
        .story-horizontal { height: 100vh; position: relative; overflow: hidden; direction: ltr; }
        .story-track { display: flex; height: 100%; width: max-content; align-items: center; padding: 0 6vw; gap: 120px; direction: ltr; will-change: transform; }
        .story-panel { flex: 0 0 auto; width: 500px; display: flex; flex-direction: column; gap: 24px; direction: rtl; text-align: right; }
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
          <div className="story-label reveal">היסטוריה קצרה</div>
          <h2 className="story-heading reveal-lines">
            איך רעיון <span className="italic">עקשן</span><br />
            הפך לפיצריה.
          </h2>
        </div>
        <div ref={containerRef} className="story-horizontal">
          <div ref={trackRef} className="story-track">
            {storyPanels.map((panel) => (
              <div key={panel.year} className="story-panel">
                <div className="story-panel-year">{panel.year}</div>
                <div className="story-panel-visual">
                  <img
                    src={`/images/pizzas/story.${panel.year}.webp`}
                    alt={panel.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
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
