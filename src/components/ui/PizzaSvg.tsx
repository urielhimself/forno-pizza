interface PizzaSvgProps {
  variant: 'margherita' | 'marinara' | 'diavola'
  className?: string
  spinReverse?: boolean
}

export default function PizzaSvg({ variant, className = '', spinReverse = false }: PizzaSvgProps) {
  const animStyle = {
    animation: `${spinReverse ? 'pizzaSpinReverse' : 'pizzaSpin'} 60s linear infinite`,
    filter: 'drop-shadow(0 40px 100px rgba(0,0,0,0.65))',
    width: '90%',
    height: '90%',
  }

  if (variant === 'margherita') {
    return (
      <svg className={className} viewBox="0 0 500 500" style={animStyle}>
        <defs>
          {/* Crust gradient - golden brown with char */}
          <radialGradient id="mg-crust" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="#c4843e" />
            <stop offset="88%" stopColor="#b8722e" />
            <stop offset="93%" stopColor="#9a5a1a" />
            <stop offset="96%" stopColor="#7a3e0a" />
            <stop offset="100%" stopColor="#5a2a05" />
          </radialGradient>
          {/* Sauce gradient */}
          <radialGradient id="mg-sauce" cx="45%" cy="40%" r="52%">
            <stop offset="0%" stopColor="#e04020" />
            <stop offset="40%" stopColor="#cc3318" />
            <stop offset="80%" stopColor="#b02a12" />
            <stop offset="100%" stopColor="#8f2010" />
          </radialGradient>
          {/* Cheese gradient */}
          <radialGradient id="mg-cheese1" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#fdf6e8" />
            <stop offset="50%" stopColor="#f8edd4" />
            <stop offset="100%" stopColor="#e8d4a8" />
          </radialGradient>
          <radialGradient id="mg-cheese2" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fefaf0" />
            <stop offset="60%" stopColor="#f4e8c8" />
            <stop offset="100%" stopColor="#ddc898" />
          </radialGradient>
          {/* Crust texture */}
          <filter id="mg-tex">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="2" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" result="blend" />
            <feComposite in="blend" in2="SourceGraphic" operator="in" />
          </filter>
          <filter id="mg-shadow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          {/* Shine on cheese */}
          <radialGradient id="mg-shine" cx="30%" cy="25%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Plate/shadow */}
        <ellipse cx="250" cy="480" rx="210" ry="14" fill="#1a1410" opacity="0.25" />

        {/* Outer crust ring */}
        <circle cx="250" cy="250" r="232" fill="url(#mg-crust)" />

        {/* Crust char spots */}
        <circle cx="190" cy="60" r="9" fill="#3a1a05" opacity="0.7" />
        <circle cx="310" cy="52" r="6" fill="#3a1a05" opacity="0.6" />
        <circle cx="420" cy="200" r="8" fill="#3a1a05" opacity="0.65" />
        <circle cx="440" cy="310" r="7" fill="#2a1005" opacity="0.6" />
        <circle cx="350" cy="430" r="9" fill="#3a1a05" opacity="0.7" />
        <circle cx="150" cy="420" r="7" fill="#3a1a05" opacity="0.6" />
        <circle cx="65" cy="290" r="8" fill="#2a1005" opacity="0.65" />
        <circle cx="75" cy="170" r="6" fill="#3a1a05" opacity="0.6" />

        {/* Sauce base */}
        <circle cx="250" cy="250" r="208" fill="url(#mg-sauce)" />

        {/* Sauce texture swirls */}
        <ellipse cx="200" cy="220" rx="60" ry="18" fill="#d03010" opacity="0.25" transform="rotate(-20 200 220)" />
        <ellipse cx="300" cy="280" rx="55" ry="16" fill="#d03010" opacity="0.2" transform="rotate(15 300 280)" />
        <ellipse cx="260" cy="170" rx="45" ry="14" fill="#e04828" opacity="0.2" transform="rotate(30 260 170)" />

        {/* Cheese blobs — large, realistic mozzarella pools */}
        <ellipse cx="195" cy="200" rx="48" ry="36" fill="url(#mg-cheese1)" />
        <ellipse cx="190" cy="198" rx="46" ry="34" fill="url(#mg-shine)" opacity="0.6" />

        <ellipse cx="320" cy="185" rx="44" ry="32" fill="url(#mg-cheese2)" />
        <ellipse cx="318" cy="183" rx="42" ry="30" fill="url(#mg-shine)" opacity="0.55" />

        <ellipse cx="355" cy="295" rx="50" ry="38" fill="url(#mg-cheese1)" />
        <ellipse cx="353" cy="293" rx="48" ry="36" fill="url(#mg-shine)" opacity="0.5" />

        <ellipse cx="210" cy="330" rx="46" ry="34" fill="url(#mg-cheese2)" />
        <ellipse cx="208" cy="328" rx="44" ry="32" fill="url(#mg-shine)" opacity="0.55" />

        <ellipse cx="268" cy="262" rx="38" ry="28" fill="url(#mg-cheese1)" />
        <ellipse cx="266" cy="260" rx="36" ry="26" fill="url(#mg-shine)" opacity="0.5" />

        <ellipse cx="160" cy="285" rx="34" ry="26" fill="url(#mg-cheese2)" opacity="0.9" />
        <ellipse cx="390" cy="235" rx="32" ry="24" fill="url(#mg-cheese1)" opacity="0.9" />

        {/* Cheese melt edges */}
        <path d="M 195 165 Q 220 155 240 168 Q 230 185 195 180 Z" fill="#f0e0b0" opacity="0.7" />
        <path d="M 320 155 Q 345 148 360 165 Q 348 180 320 172 Z" fill="#f0e0b0" opacity="0.65" />

        {/* Basil leaves — 6 leaves, realistic with veins */}
        <g transform="rotate(-35 230 165)">
          <ellipse cx="230" cy="165" rx="20" ry="11" fill="#3a5228" />
          <ellipse cx="230" cy="165" rx="18" ry="9" fill="#4a6832" opacity="0.8" />
          <line x1="215" y1="165" x2="245" y2="165" stroke="#2a3a1a" strokeWidth="1" opacity="0.6" />
          <line x1="222" y1="162" x2="228" y2="158" stroke="#2a3a1a" strokeWidth="0.7" opacity="0.5" />
          <line x1="235" y1="162" x2="242" y2="158" stroke="#2a3a1a" strokeWidth="0.7" opacity="0.5" />
        </g>
        <g transform="rotate(40 295 238)">
          <ellipse cx="295" cy="238" rx="18" ry="10" fill="#3a5228" />
          <ellipse cx="295" cy="238" rx="16" ry="8" fill="#4a6832" opacity="0.8" />
          <line x1="281" y1="238" x2="309" y2="238" stroke="#2a3a1a" strokeWidth="1" opacity="0.6" />
        </g>
        <g transform="rotate(-15 178 265)">
          <ellipse cx="178" cy="265" rx="19" ry="10" fill="#3a5228" />
          <ellipse cx="178" cy="265" rx="17" ry="8" fill="#507038" opacity="0.8" />
          <line x1="164" y1="265" x2="192" y2="265" stroke="#2a3a1a" strokeWidth="1" opacity="0.6" />
        </g>
        <g transform="rotate(55 308 342)">
          <ellipse cx="308" cy="342" rx="20" ry="11" fill="#3a5228" />
          <ellipse cx="308" cy="342" rx="18" ry="9" fill="#4a6832" opacity="0.8" />
          <line x1="293" y1="342" x2="323" y2="342" stroke="#2a3a1a" strokeWidth="1" opacity="0.6" />
        </g>
        <g transform="rotate(-50 248 355)">
          <ellipse cx="248" cy="355" rx="17" ry="9" fill="#507038" />
          <line x1="235" y1="355" x2="261" y2="355" stroke="#2a3a1a" strokeWidth="1" opacity="0.5" />
        </g>
        <g transform="rotate(25 155 200)">
          <ellipse cx="155" cy="200" rx="16" ry="9" fill="#3a5228" />
          <line x1="143" y1="200" x2="167" y2="200" stroke="#2a3a1a" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Char spots on pizza */}
        <circle cx="245" cy="180" r="4" fill="#1a0e08" opacity="0.75" />
        <circle cx="340" cy="215" r="5" fill="#1a0e08" opacity="0.7" />
        <circle cx="290" cy="370" r="4" fill="#1a0e08" opacity="0.65" />
        <circle cx="155" cy="310" r="4" fill="#1a0e08" opacity="0.7" />
        <circle cx="375" cy="175" r="3" fill="#1a0e08" opacity="0.6" />

        {/* Olive oil sheen */}
        <ellipse cx="280" cy="240" rx="80" ry="60" fill="white" opacity="0.04" transform="rotate(-20 280 240)" />
      </svg>
    )
  }

  if (variant === 'marinara') {
    return (
      <svg className={className} viewBox="0 0 500 500" style={{ ...animStyle, animation: 'pizzaSpinReverse 60s linear infinite' }}>
        <defs>
          <radialGradient id="mar-crust" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="#c4843e" />
            <stop offset="88%" stopColor="#b8722e" />
            <stop offset="93%" stopColor="#9a5a1a" />
            <stop offset="96%" stopColor="#7a3e0a" />
            <stop offset="100%" stopColor="#5a2a05" />
          </radialGradient>
          <radialGradient id="mar-sauce" cx="40%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#d83018" />
            <stop offset="35%" stopColor="#c02a12" />
            <stop offset="70%" stopColor="#a8220e" />
            <stop offset="100%" stopColor="#881a08" />
          </radialGradient>
          <filter id="mar-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse cx="250" cy="480" rx="210" ry="14" fill="#1a1410" opacity="0.25" />

        {/* Crust */}
        <circle cx="250" cy="250" r="232" fill="url(#mar-crust)" />
        <circle cx="180" cy="62" r="8" fill="#3a1a05" opacity="0.65" />
        <circle cx="310" cy="48" r="7" fill="#3a1a05" opacity="0.6" />
        <circle cx="425" cy="195" r="9" fill="#3a1a05" opacity="0.7" />
        <circle cx="435" cy="315" r="7" fill="#2a1005" opacity="0.6" />
        <circle cx="340" cy="440" r="8" fill="#3a1a05" opacity="0.65" />
        <circle cx="145" cy="425" r="7" fill="#3a1a05" opacity="0.6" />
        <circle cx="60" cy="285" r="8" fill="#2a1005" opacity="0.65" />

        {/* Deep red sauce — no cheese, very rich */}
        <circle cx="250" cy="250" r="208" fill="url(#mar-sauce)" />

        {/* Sauce depth rings */}
        <circle cx="250" cy="250" r="175" fill="none" stroke="#901808" strokeWidth="2" opacity="0.3" />
        <circle cx="250" cy="250" r="140" fill="none" stroke="#a82010" strokeWidth="1.5" opacity="0.2" />

        {/* Tomato sauce texture swirls — more visible without cheese */}
        <ellipse cx="190" cy="210" rx="65" ry="22" fill="#d83818" opacity="0.3" transform="rotate(-25 190 210)" />
        <ellipse cx="310" cy="290" rx="60" ry="20" fill="#d83818" opacity="0.25" transform="rotate(20 310 290)" />
        <ellipse cx="260" cy="165" rx="50" ry="16" fill="#e04020" opacity="0.25" transform="rotate(35 260 165)" />
        <ellipse cx="200" cy="330" rx="55" ry="18" fill="#b82010" opacity="0.3" transform="rotate(-10 200 330)" />

        {/* Garlic slices — realistic with golden tone */}
        <g>
          <ellipse cx="175" cy="195" rx="16" ry="9" fill="#f8f0d8" transform="rotate(-15 175 195)" />
          <ellipse cx="175" cy="195" rx="14" ry="7" fill="#f0e4c0" transform="rotate(-15 175 195)" />
          <line x1="163" y1="194" x2="187" y2="196" stroke="#d4c090" strokeWidth="0.8" opacity="0.5" />
        </g>
        <g>
          <ellipse cx="290" cy="205" rx="15" ry="8" fill="#f8f0d8" transform="rotate(20 290 205)" />
          <ellipse cx="290" cy="205" rx="13" ry="6" fill="#f0e4c0" transform="rotate(20 290 205)" />
        </g>
        <g>
          <ellipse cx="250" cy="270" rx="16" ry="8" fill="#f8f0d8" transform="rotate(-5 250 270)" />
          <ellipse cx="250" cy="270" rx="14" ry="6" fill="#f0e4c0" transform="rotate(-5 250 270)" />
        </g>
        <g>
          <ellipse cx="210" cy="300" rx="14" ry="8" fill="#f8f0d8" transform="rotate(30 210 300)" />
          <ellipse cx="210" cy="300" rx="12" ry="6" fill="#f0e4c0" transform="rotate(30 210 300)" />
        </g>
        <g>
          <ellipse cx="310" cy="255" rx="15" ry="8" fill="#f8f0d8" transform="rotate(-25 310 255)" />
          <ellipse cx="310" cy="255" rx="13" ry="6" fill="#f0e4c0" transform="rotate(-25 310 255)" />
        </g>
        <g>
          <ellipse cx="330" cy="335" rx="14" ry="7" fill="#f8f0d8" transform="rotate(10 330 335)" />
          <ellipse cx="330" cy="335" rx="12" ry="5" fill="#f0e4c0" transform="rotate(10 330 335)" />
        </g>
        <g>
          <ellipse cx="165" cy="340" rx="15" ry="8" fill="#f8f0d8" transform="rotate(-20 165 340)" />
          <ellipse cx="165" cy="340" rx="13" ry="6" fill="#f0e4c0" transform="rotate(-20 165 340)" />
        </g>

        {/* Oregano — tiny dark green specs scattered */}
        {[
          [200,230],[240,195],[290,240],[260,310],[195,280],[340,210],
          [170,250],[310,330],[230,360],[350,290],[185,165],[285,165],
        ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#3a5028" opacity="0.85" />
        ))}
        {[
          [215,245],[265,180],[305,255],[245,325],[210,295],[360,225],[335,300],
        ].map(([x,y], i) => (
          <rect key={i} x={x-2} y={y-1} width="4" height="2" rx="1" fill="#3a5028" opacity="0.75" transform={`rotate(${i * 37} ${x} ${y})`} />
        ))}

        {/* Char spots */}
        <circle cx="240" cy="175" r="5" fill="#1a0e08" opacity="0.75" />
        <circle cx="345" cy="210" r="4" fill="#1a0e08" opacity="0.7" />
        <circle cx="305" cy="375" r="5" fill="#1a0e08" opacity="0.65" />
        <circle cx="155" cy="305" r="4" fill="#1a0e08" opacity="0.7" />

        {/* Olive oil pools — golden sheen */}
        <ellipse cx="240" cy="250" rx="90" ry="70" fill="#e8a020" opacity="0.06" />
        <ellipse cx="300" cy="200" rx="50" ry="35" fill="#e8a020" opacity="0.05" transform="rotate(-15 300 200)" />
      </svg>
    )
  }

  // diavola
  return (
    <svg className={className} viewBox="0 0 500 500" style={animStyle}>
      <defs>
        <radialGradient id="dia-crust" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="#a87040" />
          <stop offset="87%" stopColor="#8a5220" />
          <stop offset="93%" stopColor="#6a3810" />
          <stop offset="97%" stopColor="#4a2208" />
          <stop offset="100%" stopColor="#2a1005" />
        </radialGradient>
        <radialGradient id="dia-sauce" cx="45%" cy="42%" r="52%">
          <stop offset="0%" stopColor="#9a1808" />
          <stop offset="45%" stopColor="#881008" />
          <stop offset="80%" stopColor="#700808" />
          <stop offset="100%" stopColor="#580505" />
        </radialGradient>
        <radialGradient id="dia-moz" cx="30%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#ede0c8" />
          <stop offset="50%" stopColor="#e0d0b0" />
          <stop offset="100%" stopColor="#c8b888" />
        </radialGradient>
        <radialGradient id="dia-salami" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#c83020" />
          <stop offset="50%" stopColor="#b02818" />
          <stop offset="80%" stopColor="#981808" />
          <stop offset="100%" stopColor="#801008" />
        </radialGradient>
        <radialGradient id="dia-salami-shine" cx="25%" cy="20%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id="dia-blur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      <ellipse cx="250" cy="480" rx="210" ry="14" fill="#1a1410" opacity="0.3" />

      {/* Dark/charred crust */}
      <circle cx="250" cy="250" r="232" fill="url(#dia-crust)" />
      {/* Heavy char on crust */}
      <circle cx="185" cy="58" r="10" fill="#1a0800" opacity="0.8" />
      <circle cx="310" cy="50" r="8" fill="#1a0800" opacity="0.75" />
      <circle cx="428" cy="198" r="11" fill="#1a0800" opacity="0.8" />
      <circle cx="440" cy="318" r="9" fill="#1a0800" opacity="0.75" />
      <circle cx="342" cy="445" r="10" fill="#1a0800" opacity="0.8" />
      <circle cx="148" cy="430" r="9" fill="#1a0800" opacity="0.75" />
      <circle cx="62" cy="290" r="10" fill="#1a0800" opacity="0.75" />
      <circle cx="68" cy="175" r="8" fill="#1a0800" opacity="0.7" />
      <circle cx="240" cy="42" r="7" fill="#1a0800" opacity="0.7" />

      {/* Dark sauce */}
      <circle cx="250" cy="250" r="208" fill="url(#dia-sauce)" />

      {/* Smoky sauce texture */}
      <ellipse cx="210" cy="215" rx="70" ry="25" fill="#700808" opacity="0.35" transform="rotate(-20 210 215)" />
      <ellipse cx="300" cy="295" rx="65" ry="22" fill="#600505" opacity="0.3" transform="rotate(18 300 295)" />

      {/* Smoked mozzarella — slightly darker/ivory than regular */}
      <ellipse cx="205" cy="200" rx="52" ry="38" fill="url(#dia-moz)" />
      <ellipse cx="203" cy="198" rx="48" ry="34" fill="#e8d0a0" opacity="0.4" />
      <ellipse cx="200" cy="196" rx="40" ry="28" fill="white" opacity="0.12" />

      <ellipse cx="325" cy="235" rx="50" ry="36" fill="url(#dia-moz)" />
      <ellipse cx="323" cy="233" rx="46" ry="32" fill="#e8d0a0" opacity="0.4" />
      <ellipse cx="321" cy="232" rx="38" ry="26" fill="white" opacity="0.12" />

      <ellipse cx="235" cy="305" rx="46" ry="34" fill="url(#dia-moz)" />
      <ellipse cx="233" cy="303" rx="42" ry="30" fill="#e8d0a0" opacity="0.4" />

      <ellipse cx="165" cy="280" rx="38" ry="28" fill="url(#dia-moz)" opacity="0.9" />
      <ellipse cx="360" cy="300" rx="36" ry="26" fill="url(#dia-moz)" opacity="0.9" />

      {/* Salami slices — overlapping, realistic */}
      {/* Salami 1 */}
      <circle cx="225" cy="185" r="32" fill="#701010" />
      <circle cx="225" cy="185" r="30" fill="url(#dia-salami)" />
      <circle cx="225" cy="185" r="30" fill="url(#dia-salami-shine)" />
      <circle cx="220" cy="182" r="4" fill="#f0d8c0" opacity="0.55" />
      <circle cx="230" cy="192" r="3" fill="#f0d8c0" opacity="0.5" />
      <circle cx="218" cy="192" r="2.5" fill="#f0d8c0" opacity="0.45" />
      {/* Fold/curl at edge */}
      <path d="M 215 158 Q 225 153 235 160 Q 228 168 220 165 Z" fill="#c02818" opacity="0.6" />

      {/* Salami 2 */}
      <circle cx="315" cy="215" r="29" fill="#701010" />
      <circle cx="315" cy="215" r="27" fill="url(#dia-salami)" />
      <circle cx="315" cy="215" r="27" fill="url(#dia-salami-shine)" />
      <circle cx="310" cy="212" r="3.5" fill="#f0d8c0" opacity="0.5" />
      <circle cx="320" cy="220" r="3" fill="#f0d8c0" opacity="0.45" />
      <path d="M 305 191 Q 315 187 325 193 Q 318 200 310 198 Z" fill="#c02818" opacity="0.55" />

      {/* Salami 3 */}
      <circle cx="180" cy="305" r="30" fill="#701010" />
      <circle cx="180" cy="305" r="28" fill="url(#dia-salami)" />
      <circle cx="180" cy="305" r="28" fill="url(#dia-salami-shine)" />
      <circle cx="175" cy="302" r="4" fill="#f0d8c0" opacity="0.5" />
      <circle cx="185" cy="312" r="2.5" fill="#f0d8c0" opacity="0.45" />

      {/* Salami 4 */}
      <circle cx="310" cy="340" r="28" fill="#701010" />
      <circle cx="310" cy="340" r="26" fill="url(#dia-salami)" />
      <circle cx="310" cy="340" r="26" fill="url(#dia-salami-shine)" />
      <circle cx="306" cy="337" r="3.5" fill="#f0d8c0" opacity="0.5" />
      <circle cx="315" cy="346" r="3" fill="#f0d8c0" opacity="0.45" />

      {/* Salami 5 — half visible at edge */}
      <circle cx="250" cy="170" r="26" fill="#701010" />
      <circle cx="250" cy="170" r="24" fill="url(#dia-salami)" />
      <circle cx="250" cy="170" r="24" fill="url(#dia-salami-shine)" />
      <circle cx="246" cy="168" r="3" fill="#f0d8c0" opacity="0.45" />

      {/* Chili oil drizzle */}
      <path d="M 190 240 Q 240 250 280 230 Q 310 220 350 250" stroke="#e05010" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M 170 300 Q 210 290 260 305 Q 300 318 340 305" stroke="#d04008" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />

      {/* Heavy char spots on pizza surface */}
      <circle cx="270" cy="165" r="6" fill="#0a0503" opacity="0.85" />
      <circle cx="370" cy="230" r="5" fill="#0a0503" opacity="0.8" />
      <circle cx="350" cy="380" r="6" fill="#0a0503" opacity="0.8" />
      <circle cx="145" cy="340" r="5" fill="#0a0503" opacity="0.8" />
      <circle cx="155" cy="190" r="5" fill="#0a0503" opacity="0.75" />
      <circle cx="290" cy="390" r="4" fill="#0a0503" opacity="0.75" />

      {/* Smoky haze */}
      <circle cx="250" cy="250" r="160" fill="#200000" opacity="0.06" />
    </svg>
  )
}
