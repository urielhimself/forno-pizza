import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { menuItems } from '../../data/menu'
import PizzaSvg from '../ui/PizzaSvg'

export default function Menu() {
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
          (l) => `<span style="display:block;overflow:hidden;"><span class="rli2" style="display:block;transform:translateY(110%);">${l}</span></span>`,
        )
        heading.innerHTML = lines.join('')
        gsap.to(heading.querySelectorAll<HTMLElement>('.rli2'), {
          y: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 80%' },
        })
      })

      gsap.utils.toArray<HTMLElement>('.menu-item-row', el).forEach((item) => {
        const pizza = item.querySelector<HTMLElement>('.pizza-svg-wrap')
        const text = item.querySelector<HTMLElement>('.menu-item-text')

        if (pizza) {
          gsap.to(pizza, {
            yPercent: -20, ease: 'none',
            scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: 1 },
          })
          gsap.from(pizza, {
            scale: 0.7, opacity: 0, rotate: -45, duration: 1.5, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 70%' },
          })
        }
        if (text) {
          gsap.from(text, {
            x: 60, opacity: 0, duration: 1.2, ease: 'expo.out',
            scrollTrigger: { trigger: item, start: 'top 70%' },
          })
        }
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .menu-section {
          background: var(--ink);
          color: var(--cream);
          position: relative;
          overflow: hidden;
        }
        .menu-intro {
          padding: 160px 40px 80px;
          text-align: center;
        }
        .menu-intro-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--ember);
          margin-bottom: 32px;
        }
        .menu-intro-title {
          font-family: var(--display);
          font-size: clamp(3rem, 8vw, 9rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .menu-intro-title .italic { font-style: italic; color: var(--ember); }
        .menu-item-row {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 80px;
          gap: 80px;
          border-top: 1px solid rgba(244,237,224,0.1);
        }
        .menu-item-number {
          font-family: var(--display);
          font-size: 13px;
          letter-spacing: 0.3em;
          color: var(--ember);
          margin-bottom: 32px;
        }
        .menu-item-name {
          font-family: var(--display);
          font-size: clamp(3rem, 7vw, 8rem);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.03em;
          margin-bottom: 32px;
        }
        .menu-item-name .italic { font-style: italic; font-weight: 400; }
        .menu-item-desc {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(244,237,224,0.7);
          max-width: 420px;
          margin-bottom: 40px;
        }
        .menu-item-ingredients {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(244,237,224,0.5);
          margin-bottom: 40px;
        }
        .menu-item-ingredients span {
          position: relative;
          padding-right: 16px;
        }
        .menu-item-ingredients span:not(:last-child)::after {
          content: '·';
          position: absolute;
          right: 0;
        }
        .menu-item-price {
          font-family: var(--display);
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .pizza-svg-wrap {
          position: relative;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pizza-svg-wrap svg {
          width: 90%;
          height: 90%;
        }
        @media (max-width: 900px) {
          .menu-item-row { grid-template-columns: 1fr; padding: 60px 24px; min-height: auto; gap: 40px; }
        }
      `}</style>
      <section ref={sectionRef} className="menu-section" id="menu">
        <div className="menu-intro">
          <div className="menu-intro-label reveal">התפריט</div>
          <h2 className="menu-intro-title reveal-lines">
            שלוש פיצות.<br />
            <span className="italic">זה הסיפור כולו.</span>
          </h2>
        </div>

        <div>
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item-row" data-menu-item>
              <div className="menu-item-text">
                <div className="menu-item-number">{item.number}</div>
                <h3 className="menu-item-name">
                  {item.name}<br /><span className="italic">{item.nameItalic}</span>
                </h3>
                <p className="menu-item-desc">{item.desc}</p>
                <div className="menu-item-ingredients">
                  {item.ingredients.map((ing) => (
                    <span key={ing}>{ing}</span>
                  ))}
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
              <div className="pizza-svg-wrap">
                <PizzaSvg variant={item.variant} spinReverse={item.spinReverse} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
