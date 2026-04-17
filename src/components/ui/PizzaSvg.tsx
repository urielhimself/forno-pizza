interface PizzaSvgProps {
  variant: 'margherita' | 'marinara' | 'diavola'
  className?: string
  spinReverse?: boolean
  size?: number
}

export default function PizzaSvg({ variant, className = '', spinReverse = false, size = 400 }: PizzaSvgProps) {
  const spinClass = `pizza-spin${spinReverse ? '-reverse' : ''}`

  if (variant === 'margherita') {
    return (
      <svg
        className={`${className} ${spinClass}`}
        viewBox="0 0 400 400"
        width={size}
        height={size}
        style={{
          animation: `${spinReverse ? 'spinReverse' : 'spin'} 60s linear infinite`,
          filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.5))',
        }}
      >
        <circle cx="200" cy="200" r="185" fill="#d4a574" />
        <circle cx="200" cy="200" r="168" fill="#c73a1f" />
        <circle cx="200" cy="200" r="168" fill="url(#sauce1)" opacity="0.4" />
        <ellipse cx="160" cy="170" rx="28" ry="20" fill="#f4ede0" />
        <ellipse cx="240" cy="160" rx="24" ry="18" fill="#f4ede0" />
        <ellipse cx="260" cy="230" rx="30" ry="22" fill="#f4ede0" />
        <ellipse cx="170" cy="250" rx="26" ry="20" fill="#f4ede0" />
        <ellipse cx="210" cy="210" rx="22" ry="16" fill="#f4ede0" />
        <ellipse cx="190" cy="140" rx="12" ry="7" fill="#4a5d3a" transform="rotate(-30 190 140)" />
        <ellipse cx="240" cy="270" rx="14" ry="8" fill="#4a5d3a" transform="rotate(45 240 270)" />
        <circle cx="130" cy="150" r="3" fill="#1a1410" />
        <circle cx="280" cy="190" r="3" fill="#1a1410" />
        <defs>
          <filter id="sauce1">
            <feTurbulence baseFrequency="0.9" />
            <feColorMatrix values="0 0 0 0 0.4 0 0 0 0 0.08 0 0 0 0 0.04 0 0 0 0.5 0" />
          </filter>
        </defs>
      </svg>
    )
  }

  if (variant === 'marinara') {
    return (
      <svg
        className={`${className} ${spinClass}`}
        viewBox="0 0 400 400"
        width={size}
        height={size}
        style={{
          animation: 'spinReverse 60s linear infinite',
          filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.5))',
        }}
      >
        <circle cx="200" cy="200" r="185" fill="#d4a574" />
        <circle cx="200" cy="200" r="168" fill="#a82f1a" />
        <circle cx="200" cy="200" r="168" fill="url(#sauce2)" opacity="0.5" />
        <ellipse cx="150" cy="170" rx="8" ry="4" fill="#f4ede0" opacity="0.9" />
        <ellipse cx="250" cy="180" rx="8" ry="4" fill="#f4ede0" opacity="0.9" />
        <ellipse cx="220" cy="240" rx="8" ry="4" fill="#f4ede0" opacity="0.9" />
        <ellipse cx="180" cy="260" rx="8" ry="4" fill="#f4ede0" opacity="0.9" />
        <ellipse cx="270" cy="220" rx="8" ry="4" fill="#f4ede0" opacity="0.9" />
        <circle cx="160" cy="200" r="2" fill="#4a5d3a" />
        <circle cx="230" cy="210" r="2" fill="#4a5d3a" />
        <circle cx="200" cy="180" r="2" fill="#4a5d3a" />
        <circle cx="210" cy="260" r="2" fill="#4a5d3a" />
        <circle cx="170" cy="230" r="2" fill="#4a5d3a" />
        <circle cx="250" cy="250" r="2" fill="#4a5d3a" />
        <circle cx="130" cy="180" r="3" fill="#1a1410" />
        <circle cx="280" cy="240" r="3" fill="#1a1410" />
        <defs>
          <filter id="sauce2">
            <feTurbulence baseFrequency="0.9" />
            <feColorMatrix values="0 0 0 0 0.3 0 0 0 0 0.05 0 0 0 0 0.02 0 0 0 0.5 0" />
          </filter>
        </defs>
      </svg>
    )
  }

  // diavola
  return (
    <svg
      className={`${className} ${spinClass}`}
      viewBox="0 0 400 400"
      width={size}
      height={size}
      style={{
        animation: 'spin 60s linear infinite',
        filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.5))',
      }}
    >
      <circle cx="200" cy="200" r="185" fill="#b8895d" />
      <circle cx="200" cy="200" r="168" fill="#8f2212" />
      <circle cx="200" cy="200" r="168" fill="url(#sauce3)" opacity="0.5" />
      <ellipse cx="170" cy="180" rx="26" ry="20" fill="#e8dcc5" opacity="0.95" />
      <ellipse cx="250" cy="220" rx="28" ry="22" fill="#e8dcc5" opacity="0.95" />
      <ellipse cx="200" cy="270" rx="24" ry="18" fill="#e8dcc5" opacity="0.95" />
      <circle cx="190" cy="160" r="18" fill="#a82f1a" />
      <circle cx="260" cy="180" r="16" fill="#a82f1a" />
      <circle cx="150" cy="230" r="17" fill="#a82f1a" />
      <circle cx="240" cy="260" r="15" fill="#a82f1a" />
      <circle cx="180" cy="290" r="14" fill="#a82f1a" />
      <circle cx="185" cy="155" r="2" fill="#f4ede0" opacity="0.6" />
      <circle cx="195" cy="165" r="1.5" fill="#f4ede0" opacity="0.6" />
      <circle cx="255" cy="178" r="2" fill="#f4ede0" opacity="0.6" />
      <circle cx="148" cy="228" r="1.5" fill="#f4ede0" opacity="0.6" />
      <circle cx="130" cy="160" r="5" fill="#1a1410" />
      <circle cx="290" cy="200" r="4" fill="#1a1410" />
      <circle cx="260" cy="320" r="5" fill="#1a1410" />
      <circle cx="120" cy="280" r="4" fill="#1a1410" />
      <defs>
        <filter id="sauce3">
          <feTurbulence baseFrequency="0.9" />
          <feColorMatrix values="0 0 0 0 0.25 0 0 0 0 0.03 0 0 0 0 0.01 0 0 0 0.6 0" />
        </filter>
      </defs>
    </svg>
  )
}
