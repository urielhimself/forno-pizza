interface PizzaImageProps {
  variant: 'margherita' | 'marinara' | 'diavola'
  spinReverse?: boolean
  size?: number | string
}

const SRC: Record<PizzaImageProps['variant'], string> = {
  margherita: '/images/pizzas/margherita.webp',
  marinara: '/images/pizzas/marinara.webp',
  diavola: '/images/pizzas/diavola.webp',
}

const ALT: Record<PizzaImageProps['variant'], string> = {
  margherita: 'Pizza Margherita',
  marinara: 'Pizza Marinara',
  diavola: 'Pizza Diavola',
}

export default function PizzaImage({ variant, spinReverse = false, size = '100%' }: PizzaImageProps) {
  const animation = spinReverse
    ? 'slow-rotate-reverse 60s linear infinite'
    : 'slow-rotate 55s linear infinite'

  return (
    <div
      className="pizza-image-wrap"
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes slow-rotate { to { transform: rotate(360deg); } }
        @keyframes slow-rotate-reverse { to { transform: rotate(-360deg); } }
        .pizza-image-inner {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .pizza-image-inner::after {
          content: '';
          position: absolute;
          inset: 6%;
          border-radius: 50%;
          box-shadow: 0 50px 80px rgba(0,0,0,0.55), 0 20px 40px rgba(199,58,31,0.25);
          pointer-events: none;
          z-index: 0;
        }
        .pizza-image-inner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          clip-path: circle(49% at 50% 50%);
          -webkit-clip-path: circle(49% at 50% 50%);
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.45)) contrast(1.04) saturate(1.08);
          position: relative;
          z-index: 1;
          display: block;
        }
      `}</style>
      <div className="pizza-image-inner" style={{ animation }}>
        <img src={SRC[variant]} alt={ALT[variant]} loading="lazy" />
      </div>
    </div>
  )
}
