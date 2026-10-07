import React from 'react';

interface CalangoMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  animated?: boolean;
}

export const CalangoMascot: React.FC<CalangoMascotProps> = ({
  className = '',
  size = 'md',
  animated = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    hero: 'w-64 h-64 md:w-80 md:h-80',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
      title="Calango Mascote · O lagarto maker da Rede Estadual de Pernambuco"
      aria-label="Calango Mascote do Ôxe Maker vestindo óculos de proteção e detalhes robóticos"
    >
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-[0_8px_16px_rgba(1,177,253,0.35)] ${
          animated ? 'animate-[pulse_4s_ease-in-out_infinite]' : ''
        }`}
      >
        {/* Glow halo */}
        <circle cx="160" cy="160" r="140" fill="#01B1FD" fillOpacity="0.08" />
        <circle cx="160" cy="160" r="115" stroke="#FCC140" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4" />

        {/* Lizard Long Curved Robotic Tail */}
        <path
          d="M70 210 C40 230 20 180 40 140 C55 110 80 120 75 145 C70 170 85 180 110 190"
          stroke="#01B1FD"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        {/* Tail LED segments */}
        <circle cx="38" cy="142" r="5" fill="#FCC140" />
        <circle cx="55" cy="120" r="4" fill="#01B1FD" />
        <circle cx="70" cy="135" r="4" fill="#FCC140" />

        {/* Lizard Feet / Claws */}
        {/* Back Left Foot */}
        <path
          d="M85 220 L70 245 M75 248 L80 220 M90 246 L86 220"
          stroke="#FCC140"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Back Right Foot */}
        <path
          d="M175 235 L190 260 M182 262 L172 235 M198 256 L175 235"
          stroke="#FCC140"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Front Left Foot with wrench/ferro de solda */}
        <path
          d="M100 160 L75 175 L60 170"
          stroke="#FCC140"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Screwdriver / Soldering Iron held in left paw */}
        <rect x="42" y="152" width="28" height="6" rx="2" fill="#94A3B8" transform="rotate(-25 42 152)" />
        <rect x="30" y="147" width="16" height="4" fill="#FCC140" transform="rotate(-25 30 147)" />
        <circle cx="28" cy="141" r="3" fill="#01B1FD" className="animate-ping" />

        {/* Front Right Foot waving */}
        <path
          d="M210 155 L245 140 L255 125"
          stroke="#FCC140"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="258" cy="123" r="5" fill="#01B1FD" />

        {/* Lizard Body */}
        <ellipse
          cx="145"
          cy="185"
          rx="55"
          ry="40"
          fill="#107C41"
          stroke="#FCC140"
          strokeWidth="4"
          transform="rotate(-15 145 185)"
        />
        {/* Calango belly in bright neon lime/yellow */}
        <ellipse
          cx="148"
          cy="192"
          rx="38"
          ry="25"
          fill="#84CC16"
          transform="rotate(-15 148 192)"
        />

        {/* Circuit traces on lizard back */}
        <path
          d="M125 155 L135 165 L155 165 L165 175"
          stroke="#01B1FD"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="125" cy="155" r="3" fill="#01B1FD" />
        <circle cx="165" cy="175" r="3" fill="#FCC140" />

        <path
          d="M110 175 L120 185 L130 185"
          stroke="#FCC140"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="110" cy="175" r="2.5" fill="#01B1FD" />

        {/* Lizard Neck */}
        <path
          d="M175 160 L195 145 L205 165 L185 180 Z"
          fill="#107C41"
        />

        {/* Lizard Head */}
        <path
          d="M180 135 C180 105 210 95 240 110 C265 122 265 145 240 155 C210 165 180 155 180 135 Z"
          fill="#16A34A"
          stroke="#FCC140"
          strokeWidth="4"
        />

        {/* Lizard Snout & Nostrils */}
        <circle cx="254" cy="128" r="2.5" fill="#064E3B" />

        {/* Lizard Smile (friendly pernambucano) */}
        <path
          d="M232 142 C242 145 252 140 255 136"
          stroke="#050D34"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Maker Goggles Strap */}
        <path
          d="M182 124 C195 120 220 120 250 122"
          stroke="#050D34"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M182 124 C195 120 220 120 250 122"
          stroke="#FCC140"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Maker Goggle Left Frame & Lens */}
        <circle cx="210" cy="116" r="18" fill="#1E292D" stroke="#FCC140" strokeWidth="4" />
        <circle cx="210" cy="116" r="13" fill="#01B1FD" fillOpacity="0.85" />
        {/* Reflection */}
        <path d="M204 110 Q212 108 217 114" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        {/* Digital HUD Target inside lens */}
        <circle cx="210" cy="116" r="6" stroke="#050D34" strokeWidth="2" strokeDasharray="3 3" fill="none" />
        <circle cx="210" cy="116" r="2" fill="#050D34" />

        {/* Maker Goggle Right Frame & Lens */}
        <circle cx="238" cy="120" r="17" fill="#1E292D" stroke="#FCC140" strokeWidth="4" />
        <circle cx="238" cy="120" r="12" fill="#01B1FD" fillOpacity="0.85" />
        <path d="M233 115 Q240 113 244 119" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="238" cy="120" r="5" stroke="#050D34" strokeWidth="2" fill="none" />
        <circle cx="238" cy="120" r="2" fill="#050D34" />

        {/* Cyber Antenna on top of head */}
        <path d="M216 98 L218 80" stroke="#01B1FD" strokeWidth="3" strokeLinecap="round" />
        <circle cx="218" cy="78" r="5" fill="#FCC140" className="animate-pulse" />
        <path d="M214 74 A 8 8 0 0 1 224 74" stroke="#01B1FD" strokeWidth="2" fill="none" />

        {/* Small Frevo/Pernambuco bandanna ribbon on neck */}
        <path
          d="M188 152 L178 168 L192 165 L202 178 L198 158 Z"
          fill="#FCC140"
          stroke="#0030B5"
          strokeWidth="2"
        />
        <circle cx="190" cy="158" r="3" fill="#01B1FD" />
      </svg>
    </div>
  );
};
