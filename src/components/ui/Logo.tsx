interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 120, className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.55}
      viewBox="0 0 240 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="logo-fire" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#e8662a" stopOpacity="1" />
          <stop offset="40%" stopColor="#c73a1f" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8f2212" stopOpacity="0.4" />
        </radialGradient>
        <linearGradient id="logo-text-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Arch / oven mouth shape */}
      <path
        d="M 30 110 L 30 68 Q 30 20 120 20 Q 210 20 210 68 L 210 110"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Inner arch */}
      <path
        d="M 48 110 L 48 70 Q 48 40 120 40 Q 192 40 192 70 L 192 110"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Flame inside arch */}
      <path
        d="M 120 105 C 120 105 100 90 105 72 C 108 62 115 58 112 48 C 118 58 116 62 120 70 C 122 62 128 55 125 45 C 132 56 128 65 133 72 C 138 80 140 90 120 105 Z"
        fill="url(#logo-fire)"
        opacity="0.85"
      />

      {/* Bottom base line */}
      <line x1="18" y1="112" x2="222" y2="112" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="0" y1="118" x2="240" y2="118" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />

      {/* FORNO text */}
      <text
        x="120"
        y="108"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="300"
        fontStyle="italic"
        fontSize="19"
        letterSpacing="10"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.9"
      >
        FORNO
      </text>

      {/* Tagline */}
      <text
        x="120"
        y="128"
        fontFamily="Inter Tight, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="5"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.5"
      >
        EST · MMXIX · TEL AVIV
      </text>

      {/* Small decorative dots */}
      <circle cx="25" cy="115" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="215" cy="115" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
