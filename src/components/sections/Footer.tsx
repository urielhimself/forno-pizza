import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-lines', el).forEach((heading) => {
        const html = heading.innerHTML
        const lines = html.split('<br>').map(
          (l) => `<span style="display:block;overflow:hidden;"><span class="rli5" style="display:block;transform:translateY(110%);">${l}</span></span>`,
        )
        heading.innerHTML = lines.join('')
        gsap.to(heading.querySelectorAll<HTMLElement>('.rli5'), {
          y: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 80%' },
        })
      })

      gsap.from('.finale-title-wrap', {
        scale: 0.85,
        scrollTrigger: {
          trigger: '.finale-section',
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .finale-section { padding: 160px 40px 60px; background: var(--cream); position: relative; text-align: center; }
        .finale-title-wrap { font-family: var(--display); font-size: clamp(5rem, 15vw, 18rem); font-weight: 300; line-height: 0.85; letter-spacing: -0.04em; margin-bottom: 60px; }
        .finale-title-wrap .italic { font-style: italic; color: var(--tomato); }
        .finale-cta {
          display: inline-block;
          font-family: var(--display);
          font-size: 18px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 22px 60px;
          border: 1px solid var(--ink);
          border-radius: 999px;
          text-decoration: none;
          color: var(--ink);
          transition: all 0.4s cubic-bezier(0.7,0,0.3,1);
          position: relative;
          overflow: hidden;
        }
        .finale-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--tomato);
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.7,0,0.3,1);
          z-index: -1;
        }
        .finale-cta:hover { color: var(--cream); border-color: var(--tomato); }
        .finale-cta:hover::before { transform: translateY(0); }
        .footer-meta { margin-top: 140px; padding-top: 40px; border-top: 1px solid rgba(26,20,16,0.15); display: flex; justify-content: space-between; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); }
        @media (max-width: 900px) {
          .finale-section { padding: 100px 24px 40px; }
          .footer-meta { flex-direction: column; gap: 16px; }
        }
      `}</style>
      <section ref={sectionRef} className="finale-section" id="visit">
        <h2 className="finale-title-wrap reveal-lines">
          Come <span className="italic">hungry.</span><br />
          Leave <span className="italic">changed.</span>
        </h2>
        <a href="#" className="finale-cta" data-cursor="reserve">Reserve a Table</a>
        <div className="footer-meta">
          <span>FORNO · 14 LILIENBLUM ST, TEL AVIV</span>
          <span>TUE–SUN · 18:00–23:00</span>
          <span>© MMXXVI · ALL RIGHTS RESERVED</span>
        </div>
      </section>
    </>
  )
}
