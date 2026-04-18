import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import Logo from '../ui/Logo'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.menu-section',
        start: 'top top',
        end: 'bottom top',
        onEnter: () => {
          if (navRef.current) navRef.current.style.mixBlendMode = 'normal'
        },
        onLeaveBack: () => {
          if (navRef.current) navRef.current.style.mixBlendMode = 'difference'
        },
        onLeave: () => {
          if (navRef.current) navRef.current.style.mixBlendMode = 'difference'
        },
        onEnterBack: () => {
          if (navRef.current) navRef.current.style.mixBlendMode = 'normal'
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '28px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        mixBlendMode: 'difference',
        color: 'var(--cream)',
      }}
    >
      <style>{`
        .nav-logo {
          font-family: var(--display);
          font-weight: 900;
          font-size: 22px;
          letter-spacing: 0.02em;
          font-style: italic;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .nav-links a {
          color: inherit;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: currentColor;
          transition: width 0.4s cubic-bezier(0.7,0,0.3,1);
        }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid currentColor;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          color: inherit;
          transition: background 0.4s ease, color 0.4s ease;
        }
        .nav-cta:hover {
          background: currentColor;
          color: var(--ink);
        }
        @media (max-width: 900px) {
          nav { padding: 20px 24px !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo size={80} />
      </div>
      <ul className="nav-links">
        <li><a href="#menu">תפריט</a></li>
        <li><a href="#story">הסיפור</a></li>
        <li><a href="#press">בעיתונות</a></li>
        <li><a href="#visit">ביקור</a></li>
      </ul>
      <a href="#reserve" className="nav-cta">הזמנת מקום</a>
    </nav>
  )
}
