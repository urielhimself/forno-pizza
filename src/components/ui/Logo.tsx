interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 72, className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hudi-flame" cx="50%" cy="90%" r="75%">
          <stop offset="0%"  stopColor="#ffcc66" stopOpacity="1" />
          <stop offset="30%" stopColor="#e8662a" stopOpacity="1" />
          <stop offset="65%" stopColor="#c73a1f" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#8f2212" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hudi-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c73a1f" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c73a1f" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle inner glow */}
      <circle cx="120" cy="120" r="110" fill="url(#hudi-glow)" />

      {/* Outer ring — double border */}
      <circle cx="120" cy="120" r="116" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <circle cx="120" cy="120" r="109" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.28" />

      {/* Four cardinal ornament marks on outer ring */}
      <circle cx="120" cy="4"   r="2.2" fill="currentColor" opacity="0.45" />
      <circle cx="120" cy="236" r="2.2" fill="currentColor" opacity="0.45" />
      <circle cx="4"   cy="120" r="2.2" fill="currentColor" opacity="0.45" />
      <circle cx="236" cy="120" r="2.2" fill="currentColor" opacity="0.45" />

      {/* ── TOP SECTION ── */}

      {/* Small wheat-ear ornaments flanking the header */}
      {/* Left wheat */}
      <line x1="60" y1="63" x2="60" y2="48" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <ellipse cx="57" cy="56" rx="4" ry="7" fill="currentColor" opacity="0.22" transform="rotate(-18 57 56)" />
      <ellipse cx="63" cy="54" rx="3.5" ry="6" fill="currentColor" opacity="0.18" transform="rotate(12 63 54)" />
      {/* Right wheat */}
      <line x1="180" y1="63" x2="180" y2="48" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <ellipse cx="177" cy="56" rx="4" ry="7" fill="currentColor" opacity="0.22" transform="rotate(18 177 56)" />
      <ellipse cx="183" cy="54" rx="3.5" ry="6" fill="currentColor" opacity="0.18" transform="rotate(-12 183 54)" />

      {/* "פיצה של" descriptor */}
      <text
        x="120" y="64"
        fontFamily="Frank Ruhl Libre, serif"
        fontWeight="300"
        fontSize="12"
        letterSpacing="7"
        fill="currentColor"
        textAnchor="middle"
        direction="rtl"
        opacity="0.7"
      >
        פיצה של
      </text>

      {/* Thin rule below descriptor */}
      <line x1="76" y1="72" x2="164" y2="72" stroke="currentColor" strokeWidth="0.6" opacity="0.22" />

      {/* ── FLAME EMBLEM ── centered between header and name */}
      {/* Outer soft halo */}
      <ellipse cx="120" cy="107" rx="22" ry="12" fill="#c73a1f" opacity="0.07" />
      {/* Main flame shape — elegant calligraphic */}
      <path
        d="M120 124
           C120 124 104 112 107 96
           C110 85  118 80  115 68
           C121 80  119 87  120 95
           C122 87  130 78  127 66
           C135 78  131 89  136 97
           C141 107 140 118 120 124Z"
        fill="url(#hudi-flame)"
        opacity="0.92"
      />
      {/* Tiny inner flame highlight */}
      <path
        d="M120 118
           C120 118 112 110 114 100
           C116 93  120 90  120 95
           C120 90  124 93  126 100
           C128 110 120 118 120 118Z"
        fill="#ffcc66"
        opacity="0.35"
      />

      {/* ── MAIN NAME: הודי ── */}
      <text
        x="120" y="185"
        fontFamily="Frank Ruhl Libre, serif"
        fontWeight="300"
        fontStyle="italic"
        fontSize="74"
        letterSpacing="-3"
        fill="currentColor"
        textAnchor="middle"
        direction="rtl"
      >
        הודי
      </text>

      {/* ── BOTTOM SECTION ── */}

      {/* Ornamental divider — lines + center dot */}
      <line x1="58"  y1="194" x2="108" y2="194" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />
      <circle cx="120" cy="194" r="2" fill="currentColor" opacity="0.4" />
      <line x1="132" y1="194" x2="182" y2="194" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />

      {/* Tagline */}
      <text
        x="120" y="209"
        fontFamily="Heebo, sans-serif"
        fontWeight="300"
        fontSize="7.5"
        letterSpacing="5"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.48"
      >
        EST · MMXIX · תל אביב
      </text>

      {/* Bottom thin rule */}
      <line x1="72" y1="217" x2="168" y2="217" stroke="currentColor" strokeWidth="0.5" opacity="0.16" />
    </svg>
  )
}
