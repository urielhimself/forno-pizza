import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal', el).forEach((target) => {
        gsap.from(target, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: target, start: 'top 85%' },
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-lines', el).forEach((heading) => {
        const html = heading.innerHTML
        const lines = html.split('<br>').map(
          (l) => `<span style="display:block;overflow:hidden;"><span class="rli" style="display:block;transform:translateY(110%);">${l}</span></span>`,
        )
        heading.innerHTML = lines.join('')
        gsap.to(heading.querySelectorAll<HTMLElement>('.rli'), {
          y: 0,
          duration: 1.4,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 80%' },
        })
      })

      gsap.from('.philosophy-heading', {
        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top 70%',
          end: 'bottom center',
          scrub: 1,
        },
        color: '#c5b8a0',
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .philosophy-section {
          position: relative;
          padding: 180px 40px;
          min-height: 100vh;
        }
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: start;
          max-width: 1600px;
          margin: 0 auto;
        }
        .phil-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--tomato);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .phil-label::before {
          content: '';
          width: 40px; height: 1px;
          background: currentColor;
        }
        .philosophy-heading {
          font-family: var(--display);
          font-size: clamp(3rem, 5.5vw, 6rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .philosophy-heading .italic { font-style: italic; color: var(--tomato); }
        .phil-body {
          position: sticky;
          top: 30vh;
          font-size: 17px;
          line-height: 1.7;
          color: var(--ink-soft);
        }
        .phil-body p + p { margin-top: 24px; }
        .drop {
          font-family: var(--display);
          font-size: 3em;
          font-style: italic;
          font-weight: 400;
          float: left;
          line-height: 0.85;
          padding: 8px 12px 0 0;
          color: var(--tomato);
        }
        @media (max-width: 900px) {
          .philosophy-section { padding: 100px 24px; }
          .philosophy-grid { grid-template-columns: 1fr; gap: 60px; }
          .phil-body { position: static; }
        }
      `}</style>
      <section ref={sectionRef} className="philosophy-section">
        <div className="philosophy-grid">
          <div>
            <div className="phil-label reveal">Philosophy</div>
            <h2 className="philosophy-heading reveal-lines">
              We make <span className="italic">three</span><br />
              things. That's<br />
              the whole <span className="italic">menu.</span>
            </h2>
          </div>
          <div className="phil-body">
            <p className="reveal">
              <span className="drop">T</span>here are pizzerias that chase trends and pizzerias that ignore them. We do neither. We chose three pies in 2019 — the Margherita, the Marinara, and the Diavola — and we have made them, unchanged, ever since.
            </p>
            <p className="reveal">
              The dough rests for seventy-two hours. The tomatoes come from a farm we visit twice a year. The oven, a wood-fired Stefano Ferrara, burns at 485°C and has never been turned off.
            </p>
            <p className="reveal">
              This is a long way of saying: we are not in a hurry, and we hope you aren't either.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
