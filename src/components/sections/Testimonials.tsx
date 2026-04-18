import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

const testimonials = [
  {
    id: 1,
    name: 'מאיה גולדברג',
    role: 'כותבת אוכל, הארץ',
    text: 'אכלתי פיצה בשלוש יבשות. המרינרה כאן היא הדבר הטוב ביותר שנכנס לפה שלי. ללא גבינה. ללא פשרות. רק אש וכוונה.',
    rating: 5,
    from: 'left',
  },
  {
    id: 2,
    name: 'רועי שמואל',
    role: 'קבוע מאז 2019',
    text: 'אני מגיע כל יום שלישי. אותו שולחן, אותה הזמנה. הדיאבולה. אשתי חושבת שאני צריך עזרה. היא כנראה צודקת. לא אכפת לי.',
    rating: 5,
    from: 'right',
  },
  {
    id: 3,
    name: 'ד"ר נועה בן-דוד',
    role: 'רופאה, תל אביב',
    text: 'מבחינה רפואית, כדאי שאבוא פחות. מבחינה מוסרית, לא יכולה להפסיק. לקרום יש יציבות מבנית שאני יכולה לתאר רק כארכיטקטונית.',
    rating: 5,
    from: 'left',
  },
  {
    id: 4,
    name: 'עמיר חסן',
    role: 'שף, יפו',
    text: 'אני מכין אוכל לפרנסה. אני לא מכין פיצה כזו. אף אחד שאני מכיר לא מכין פיצה כזו. הפסקתי לנסות.',
    rating: 5,
    from: 'right',
  },
  {
    id: 5,
    name: 'תמר לוי',
    role: 'ביקרה מניו יורק',
    text: 'טסתי חזרה מניו יורק במיוחד בשביל זה. המטפל שלי אמר שזו בחירה בריאה. אני נוטה להסכים.',
    rating: 5,
    from: 'left',
  },
  {
    id: 6,
    name: 'שי פרץ',
    role: 'אדריכל',
    text: 'דלת התנור היא האובייקט היפה ביותר בתל אביב. הפיצה שיוצאת ממנו היא האובייקט השני בדירוג.',
    rating: 5,
    from: 'right',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      // Reveal label
      gsap.utils.toArray<HTMLElement>('.reveal', el).forEach((target) => {
        gsap.from(target, {
          y: 40, opacity: 0, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: target, start: 'top 85%' },
        })
      })

      // Heading lines
      gsap.utils.toArray<HTMLElement>('.reveal-lines', el).forEach((heading) => {
        const html = heading.innerHTML
        const lines = html.split('<br>').map(
          (l) => `<span style="display:block;overflow:hidden;"><span class="tli" style="display:block;transform:translateY(110%);">${l}</span></span>`,
        )
        heading.innerHTML = lines.join('')
        gsap.to(heading.querySelectorAll<HTMLElement>('.tli'), {
          y: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: heading, start: 'top 80%' },
        })
      })

      // Cards — alternating left/right slide-in
      gsap.utils.toArray<HTMLElement>('.testimonial-card', el).forEach((card) => {
        const fromLeft = card.dataset.from === 'left'
        gsap.from(card, {
          x: fromLeft ? -120 : 120,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
          },
        })

        // Subtle parallax float while scrolling
        gsap.to(card, {
          y: fromLeft ? -30 : -45,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })

      // Decorative line grows
      gsap.from('.testi-divider', {
        scaleX: 0,
        duration: 1.5,
        ease: 'expo.out',
        transformOrigin: 'left center',
        scrollTrigger: { trigger: '.testi-divider', start: 'top 85%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .testi-section {
          padding: 180px 40px 160px;
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }
        .testi-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--ink) 20%, var(--ink) 80%, transparent);
          opacity: 0.15;
        }
        .testi-header {
          max-width: 1400px;
          margin: 0 auto 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
        }
        .testi-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--tomato);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .testi-label::before {
          content: '';
          width: 40px; height: 1px;
          background: currentColor;
        }
        .testi-heading {
          font-family: var(--display);
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .testi-heading .italic { font-style: italic; color: var(--tomato); }
        .testi-sub {
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 380px;
        }
        .testi-divider {
          width: 60px; height: 1px;
          background: var(--tomato);
          margin: 32px 0;
        }
        .testi-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .testimonial-card {
          background: var(--ink);
          color: var(--cream);
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 0;
          background: var(--tomato);
          transition: height 0.5s cubic-bezier(0.7, 0, 0.3, 1);
        }
        .testimonial-card:hover::before { height: 100%; }
        .testimonial-card:hover { transform: translateY(-8px); }
        .card-quote-mark {
          font-family: var(--display);
          font-size: 80px;
          font-weight: 300;
          font-style: italic;
          color: var(--tomato);
          line-height: 0.7;
          margin-bottom: 24px;
          opacity: 0.7;
        }
        .card-text {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(244, 237, 224, 0.85);
          margin-bottom: 40px;
          font-style: italic;
        }
        .card-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(244, 237, 224, 0.12);
        }
        .card-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--tomato);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--display);
          font-size: 18px;
          font-style: italic;
          color: var(--cream);
          flex-shrink: 0;
        }
        .card-name {
          font-family: var(--display);
          font-size: 17px;
          font-weight: 400;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .card-role {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(244, 237, 224, 0.45);
        }
        .card-stars {
          margin-left: auto;
          display: flex;
          gap: 3px;
          color: var(--ember);
          font-size: 12px;
        }
        @media (max-width: 1100px) {
          .testi-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .testi-section { padding: 100px 24px 100px; }
          .testi-header { grid-template-columns: 1fr; gap: 40px; }
          .testi-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section ref={sectionRef} className="testi-section">
        <div className="testi-header">
          <div>
            <div className="testi-label reveal">"מה אנשים אומרים"</div>
            <h2 className="testi-heading reveal-lines">
              מילים כנות<br />
              מאנשים <span className="italic">רעבים.</span>
            </h2>
          </div>
          <div>
            <p className="testi-sub reveal">
              אנחנו לא מבקשים ביקורות. אנחנו לא ראויים להן יותר מהפיצה עצמה. אבל אנשים כותבים אותן בכל זאת, ואנחנו קוראים כל אחת, בדרך כלל בשעתיים בלילה.
            </p>
            <div className="testi-divider" />
          </div>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card"
              data-from={t.from}
            >
              <div className="card-quote-mark">"</div>
              <p className="card-text">{t.text}</p>
              <div className="card-footer">
                <div className="card-avatar">{t.name[0]}</div>
                <div>
                  <div className="card-name">{t.name}</div>
                  <div className="card-role">{t.role}</div>
                </div>
                <div className="card-stars">
                  {'★'.repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
