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

      // Slide heading from left, body from right
      gsap.from('.phil-left-col', {
        x: -80,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.philosophy-section', start: 'top 75%' },
      })
      gsap.from('.phil-body', {
        x: 80,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.philosophy-section', start: 'top 75%' },
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
          <div className="phil-left-col">
            <div className="phil-label reveal">פילוסופיה</div>
            <h2 className="philosophy-heading reveal-lines">
              אנחנו מכינים<br />
              שלושה דברים.<br />
              זה התפריט <span className="italic">כולו.</span>
            </h2>
          </div>
          <div className="phil-body">
            <p className="reveal">
              שלוש פיצות. בחרנו אותן ב-2019 ולא שינינו מאז. לא מפני שלא יכולנו — אלא מפני שלא היה צורך.
            </p>
            <p className="reveal">
              הבצק נח שבעים ושתיים שעות. העגבניות מגיעות מחווה שאנחנו מבקרים בה פעמיים בשנה. התנור, שרפת עצים מתוצרת סטפנו פרארה, בוער ב-485° ומעולם לא כובה.
            </p>
            <p className="reveal">
              אנחנו לא ממהרים. אנחנו מקווים שגם אתם לא.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
