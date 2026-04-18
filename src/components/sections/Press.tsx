import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { pressQuotes } from '../../data/press'

export default function Press() {
  const sectionRef = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)
  const quoteRef = useRef<HTMLDivElement>(null)
  const attrRef = useRef<HTMLDivElement>(null)

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

      gsap.from('.press-quote-wrap', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.press-section', start: 'top 75%' },
      })
      gsap.from('.press-attribution', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.press-section', start: 'top 75%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const showQuote = (i: number) => {
    if (quoteRef.current) {
      gsap.fromTo(quoteRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' })
    }
    if (attrRef.current) {
      gsap.fromTo(attrRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.3 })
    }
    setCurrent(i)
  }

  const next = () => showQuote((current + 1) % pressQuotes.length)
  const prev = () => showQuote((current - 1 + pressQuotes.length) % pressQuotes.length)

  return (
    <>
      <style>{`
        .press-section { padding: 160px 40px; background: var(--ink); color: var(--cream); }
        .press-inner { max-width: 1200px; margin: 0 auto; }
        .press-label { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--ember); margin-bottom: 48px; }
        .press-quote { font-family: var(--display); font-size: clamp(2rem, 4vw, 4rem); font-weight: 300; line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 48px; }
        .press-quote em { font-style: italic; color: var(--ember); }
        .press-attribution { display: flex; justify-content: space-between; align-items: center; padding-top: 32px; border-top: 1px solid rgba(244,237,224,0.2); font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(244,237,224,0.7); }
        .press-nav { display: flex; gap: 8px; }
        .press-nav button { width: 36px; height: 36px; border: 1px solid rgba(244,237,224,0.3); background: transparent; color: var(--cream); border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.3s ease; font-family: var(--display); }
        .press-nav button:hover { background: var(--ember); border-color: var(--ember); }
        @media (max-width: 900px) { .press-section { padding: 100px 24px; } }
      `}</style>
      <section ref={sectionRef} className="press-section" id="press">
        <div className="press-inner">
          <div className="press-label reveal">עיתונות · ביקורות</div>
          <div ref={quoteRef} className="press-quote-wrap">
            <blockquote
              className="press-quote"
              dangerouslySetInnerHTML={{ __html: pressQuotes[current].quote }}
            />
          </div>
          <div className="press-attribution">
            <div ref={attrRef}>{pressQuotes[current].attribution}</div>
            <div className="press-nav">
              <button onClick={prev}>←</button>
              <button onClick={next}>→</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
