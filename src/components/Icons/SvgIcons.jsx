import React from 'react';

// ===== PREMIUM OWL MASCOT =====
export const OwlMascot = ({ size = 160 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="owlBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#b388ff" />
        <stop offset="100%" stopColor="#5e35b1" />
      </linearGradient>
      <linearGradient id="owlBelly" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffd93d" />
        <stop offset="100%" stopColor="#f4a62a" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="130" rx="55" ry="60" fill="url(#owlBody)" />
    <ellipse cx="100" cy="135" rx="40" ry="45" fill="url(#owlBelly)" />
    <ellipse cx="100" cy="140" rx="28" ry="32" fill="#ffa94d" />
    <circle cx="100" cy="75" r="50" fill="url(#owlBody)" />
    <path d="M 60 40 L 70 15 L 85 40 Z" fill="url(#owlBody)" />
    <path d="M 140 40 L 130 15 L 115 40 Z" fill="url(#owlBody)" />
    <circle cx="80" cy="75" r="18" fill="#fff" />
    <circle cx="120" cy="75" r="18" fill="#fff" />
    <circle cx="82" cy="77" r="9" fill="#0a0d1a" />
    <circle cx="122" cy="77" r="9" fill="#0a0d1a" />
    <circle cx="85" cy="73" r="3.5" fill="#fff" />
    <circle cx="125" cy="73" r="3.5" fill="#fff" />
    <ellipse cx="65" cy="95" rx="8" ry="5" fill="#ff6bcb" opacity="0.6" />
    <ellipse cx="135" cy="95" rx="8" ry="5" fill="#ff6bcb" opacity="0.6" />
    <path d="M 100 88 L 95 98 L 105 98 Z" fill="#ffa94d" />
    <ellipse cx="45" cy="130" rx="15" ry="35" fill="url(#owlBody)" transform="rotate(-15 45 130)" />
    <ellipse cx="155" cy="130" rx="15" ry="35" fill="url(#owlBody)" transform="rotate(15 155 130)" />
    <ellipse cx="85" cy="185" rx="10" ry="5" fill="#ffa94d" />
    <ellipse cx="115" cy="185" rx="10" ry="5" fill="#ffa94d" />
    <rect x="65" y="25" width="70" height="8" rx="2" fill="#ffd93d" />
    <polygon points="100,15 130,28 70,28" fill="#ffd93d" />
    <line x1="130" y1="28" x2="130" y2="45" stroke="#ffd93d" strokeWidth="2" />
    <circle cx="130" cy="47" r="4" fill="#ffd93d" />
  </svg>
);

// ===== PREMIUM CARTOON CHEST =====
export const CartoonChest = ({ size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chestBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#b8941f" />
        <stop offset="100%" stopColor="#8a6f1a" />
      </linearGradient>
      <linearGradient id="chestLid" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffd93d" />
        <stop offset="100%" stopColor="#f4a62a" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="180" rx="65" ry="8" fill="#000" opacity="0.4" />
    <rect x="40" y="100" width="120" height="70" rx="8" fill="url(#chestBody)" stroke="#6b5410" strokeWidth="3" />
    <path d="M 40 100 L 40 75 Q 40 60, 55 60 L 145 60 Q 160 60, 160 75 L 160 100 Z" fill="url(#chestLid)" stroke="#6b5410" strokeWidth="3" />
    <path d="M 45 95 L 45 78 Q 45 65, 58 65 L 142 65 Q 155 65, 155 78 L 155 95 Z" fill="#ffe97a" opacity="0.4" />
    <rect x="55" y="60" width="10" height="110" fill="#8a6f1a" opacity="0.6" />
    <rect x="135" y="60" width="10" height="110" fill="#8a6f1a" opacity="0.6" />
    <rect x="88" y="105" width="24" height="28" rx="4" fill="#ffd93d" stroke="#8a6f1a" strokeWidth="2" />
    <circle cx="100" cy="115" r="4" fill="#8a6f1a" />
    <rect x="98" y="115" width="4" height="10" fill="#8a6f1a" />
    <circle cx="75" cy="120" r="6" fill="#fff" />
    <circle cx="125" cy="120" r="6" fill="#fff" />
    <circle cx="76" cy="121" r="3" fill="#0a0d1a">
      <animate attributeName="ry" values="3;0.3;3" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="126" cy="121" r="3" fill="#0a0d1a">
      <animate attributeName="ry" values="3;0.3;3" dur="3s" repeatCount="indefinite" />
    </circle>
    <path d="M 90 140 Q 100 148, 110 140" stroke="#8a6f1a" strokeWidth="2" fill="none" strokeLinecap="round" />
    <text x="30" y="70" fontSize="20" fill="#f4d03f">✨</text>
    <text x="160" y="90" fontSize="16" fill="#f4d03f">✨</text>
  </svg>
);

// ===== PREMIUM BASKET CHARACTER =====
export const BasketCharacter = ({ size = 260 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bsk" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffd93d" />
        <stop offset="100%" stopColor="#f4a62a" />
      </linearGradient>
      <linearGradient id="cn" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe97a" />
        <stop offset="100%" stopColor="#f4a62a" />
      </linearGradient>
    </defs>

    {/* Falling coins */}
    <g>
      <circle cx="45" cy="30" r="22" fill="url(#cn)" stroke="#8a6f1a" strokeWidth="2.5">
        <animate attributeName="cy" values="10;75;10" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="45" y="40" fontSize="22" fontWeight="900" fill="#8a6f1a" textAnchor="middle" fontFamily="Fredoka, sans-serif">V</text>
    </g>
    <g>
      <circle cx="155" cy="20" r="22" fill="url(#cn)" stroke="#8a6f1a" strokeWidth="2.5">
        <animate attributeName="cy" values="10;65;10" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <text x="155" y="30" fontSize="22" fontWeight="900" fill="#8a6f1a" textAnchor="middle" fontFamily="Fredoka, sans-serif">V</text>
    </g>
    <g>
      <circle cx="100" cy="40" r="18" fill="url(#cn)" stroke="#8a6f1a" strokeWidth="2.5">
        <animate attributeName="cy" values="5;70;5" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="48" fontSize="18" fontWeight="900" fill="#8a6f1a" textAnchor="middle" fontFamily="Fredoka, sans-serif">V</text>
    </g>

    {/* Basket */}
    <path d="M 40 118 L 160 118 L 150 185 L 50 185 Z" fill="url(#bsk)" stroke="#8a6f1a" strokeWidth="3.5" />
    <line x1="45" y1="130" x2="155" y2="130" stroke="#8a6f1a" strokeWidth="2.5" opacity="0.5" />
    <line x1="47" y1="148" x2="153" y2="148" stroke="#8a6f1a" strokeWidth="2.5" opacity="0.5" />
    <line x1="50" y1="166" x2="150" y2="166" stroke="#8a6f1a" strokeWidth="2.5" opacity="0.5" />
    <line x1="70" y1="118" x2="67" y2="185" stroke="#8a6f1a" strokeWidth="2.5" opacity="0.5" />
    <line x1="100" y1="118" x2="100" y2="185" stroke="#8a6f1a" strokeWidth="2.5" opacity="0.5" />
    <line x1="130" y1="118" x2="133" y2="185" stroke="#8a6f1a" strokeWidth="2.5" opacity="0.5" />

    {/* Rim */}
    <rect x="32" y="108" width="136" height="16" rx="8" fill="#ff6bcb" stroke="#e91e63" strokeWidth="2.5" />

    {/* Cute face */}
    <circle cx="75" cy="150" r="5.5" fill="#0a0d1a" />
    <circle cx="125" cy="150" r="5.5" fill="#0a0d1a" />
    <circle cx="77" cy="148" r="1.8" fill="#fff" />
    <circle cx="127" cy="148" r="1.8" fill="#fff" />
    <path d="M 88 162 Q 100 172, 112 162" stroke="#0a0d1a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <ellipse cx="65" cy="158" rx="7" ry="4" fill="#ff6bcb" opacity="0.7" />
    <ellipse cx="135" cy="158" rx="7" ry="4" fill="#ff6bcb" opacity="0.7" />
  </svg>
);

// ===== ROYAL SHIELD BADGE (Level Badge) =====
export const RoyalShieldBadge = ({ size = 130, level = 5 }) => (
  <svg width={size} height={size} viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff9c4" />
        <stop offset="20%" stopColor="#ffd93d" />
        <stop offset="50%" stopColor="#f4a62a" />
        <stop offset="80%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8a6f1a" />
      </linearGradient>
      <linearGradient id="shieldDark" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2a2410" />
        <stop offset="100%" stopColor="#0a0808" />
      </linearGradient>
      <linearGradient id="shieldShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      <filter id="shieldShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#ffd93d" floodOpacity="0.5" />
      </filter>
    </defs>

    {/* Outer golden shield */}
    <polygon
      points="70,14 118,30 130,68 122,118 100,148 70,158 40,148 18,118 10,68 22,30"
      fill="url(#shieldGold)"
      stroke="#8a6f1a"
      strokeWidth="2"
      filter="url(#shieldShadow)"
    />

    {/* Inner dark shield */}
    <polygon
      points="70,28 108,42 118,72 112,112 94,138 70,146 46,138 28,112 22,72 32,42"
      fill="url(#shieldDark)"
      stroke="url(#shieldGold)"
      strokeWidth="1.5"
    />

    {/* Shine */}
    <polygon
      points="70,28 108,42 118,72 70,60"
      fill="url(#shieldShine)"
      opacity="0.35"
    />

    {/* Level number */}
    <text
      x="70"
      y="90"
      textAnchor="middle"
      fontSize="42"
      fontWeight="900"
      fontFamily="Fredoka, sans-serif"
      fill="url(#shieldGold)"
      stroke="#8a6f1a"
      strokeWidth="0.5"
    >
      {String(level).padStart(2, '0')}
    </text>

    {/* "LEVEL" text */}
    <text
      x="70"
      y="112"
      textAnchor="middle"
      fontSize="11"
      fontWeight="800"
      letterSpacing="3"
      fill="#ffd93d"
      fontFamily="Fredoka, sans-serif"
    >
      LEVEL
    </text>

    {/* Crown on top */}
    <g transform="translate(70, 8)">
      <path
        d="M -22 0 L -16 -12 L -8 -4 L 0 -16 L 8 -4 L 16 -12 L 22 0 L 18 4 L -18 4 Z"
        fill="url(#shieldGold)"
        stroke="#8a6f1a"
        strokeWidth="1"
      />
      <circle cx="0" cy="-16" r="2.5" fill="#fff9c4" />
      <circle cx="-16" cy="-12" r="2" fill="#fff9c4" />
      <circle cx="16" cy="-12" r="2" fill="#fff9c4" />
    </g>
  </svg>
);

// ===== ROYAL TROPHY (for Level Up celebration) =====
export const RoyalTrophy = ({ size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trophyGold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff9c4" />
        <stop offset="30%" stopColor="#ffd93d" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8a6f1a" />
      </linearGradient>
      <radialGradient id="trophyShine" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="70" cy="122" rx="32" ry="6" fill="#8a6f1a" />
    <rect x="42" y="106" width="56" height="14" rx="3" fill="url(#trophyGold)" stroke="#8a6f1a" strokeWidth="1" />
    <rect x="62" y="88" width="16" height="20" fill="url(#trophyGold)" stroke="#8a6f1a" strokeWidth="1" />
    <path d="M 40 30 Q 35 70, 60 88 L 80 88 Q 105 70, 100 30 Z" fill="url(#trophyGold)" stroke="#8a6f1a" strokeWidth="1.5" />
    <path d="M 40 40 Q 22 45, 32 65 Q 38 72, 48 70" fill="none" stroke="url(#trophyGold)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 100 40 Q 118 45, 108 65 Q 102 72, 92 70" fill="none" stroke="url(#trophyGold)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 45 35 Q 42 60, 55 80 L 60 80 Q 50 60, 52 35 Z" fill="url(#trophyShine)" />
    <polygon points="70,50 74,60 85,60 76,66 79,76 70,70 61,76 64,66 55,60 66,60" fill="#fff9c4" stroke="#8a6f1a" strokeWidth="0.5" />
  </svg>
);

// ===== LEVEL ANIMALS (Roadmap Nodes) =====
export const AnimalBird = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <ellipse cx="40" cy="50" rx="20" ry="18" fill="#6ee7b7" stroke="#10b981" strokeWidth="1.5" />
    <circle cx="40" cy="32" r="14" fill="#6ee7b7" stroke="#10b981" strokeWidth="1.5" />
    <circle cx="35" cy="30" r="3" fill="#0a0d1a" />
    <circle cx="45" cy="30" r="3" fill="#0a0d1a" />
    <circle cx="36" cy="29" r="1" fill="#fff" />
    <circle cx="46" cy="29" r="1" fill="#fff" />
    <path d="M 35 37 L 40 43 L 45 37 Z" fill="#ffa94d" />
  </svg>
);

export const AnimalChick = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <ellipse cx="40" cy="52" rx="20" ry="16" fill="#ffd93d" stroke="#f4a62a" strokeWidth="1.5" />
    <circle cx="40" cy="32" r="15" fill="#ffd93d" stroke="#f4a62a" strokeWidth="1.5" />
    <circle cx="34" cy="30" r="3" fill="#0a0d1a" />
    <circle cx="46" cy="30" r="3" fill="#0a0d1a" />
    <circle cx="35" cy="29" r="1" fill="#fff" />
    <circle cx="47" cy="29" r="1" fill="#fff" />
    <polygon points="35,38 40,45 45,38" fill="#ffa94d" />
  </svg>
);

export const AnimalFox = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <polygon points="22,26 28,10 36,24" fill="#ffa94d" stroke="#bf360c" strokeWidth="1.5" />
    <polygon points="58,26 52,10 44,24" fill="#ffa94d" stroke="#bf360c" strokeWidth="1.5" />
    <circle cx="40" cy="42" r="22" fill="#ffa94d" stroke="#bf360c" strokeWidth="1.5" />
    <circle cx="32" cy="40" r="3" fill="#0a0d1a" />
    <circle cx="48" cy="40" r="3" fill="#0a0d1a" />
    <circle cx="33" cy="39" r="1" fill="#fff" />
    <circle cx="49" cy="39" r="1" fill="#fff" />
    <ellipse cx="40" cy="53" rx="12" ry="8" fill="#fff" />
    <circle cx="40" cy="51" r="2.5" fill="#0a0d1a" />
  </svg>
);

export const AnimalOwl = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <ellipse cx="40" cy="52" rx="22" ry="20" fill="#b388ff" stroke="#7c4dff" strokeWidth="1.5" />
    <circle cx="40" cy="35" r="20" fill="#b388ff" stroke="#7c4dff" strokeWidth="1.5" />
    <polygon points="24,20 26,10 34,20" fill="#b388ff" stroke="#7c4dff" strokeWidth="1" />
    <polygon points="56,20 54,10 46,20" fill="#b388ff" stroke="#7c4dff" strokeWidth="1" />
    <circle cx="33" cy="35" r="7" fill="#fff" />
    <circle cx="47" cy="35" r="7" fill="#fff" />
    <circle cx="33" cy="35" r="3.5" fill="#0a0d1a" />
    <circle cx="47" cy="35" r="3.5" fill="#0a0d1a" />
    <circle cx="34" cy="34" r="1.2" fill="#fff" />
    <circle cx="48" cy="34" r="1.2" fill="#fff" />
    <polygon points="37,42 40,46 43,42" fill="#ffa94d" />
    <ellipse cx="40" cy="55" rx="10" ry="8" fill="#ffd93d" opacity="0.7" />
  </svg>
);

export const AnimalLion = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="26" fill="#ffd93d" stroke="#f4a62a" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="20" fill="#ffe97a" />
    <circle cx="33" cy="38" r="3" fill="#0a0d1a" />
    <circle cx="47" cy="38" r="3" fill="#0a0d1a" />
    <circle cx="34" cy="37" r="1" fill="#fff" />
    <circle cx="48" cy="37" r="1" fill="#fff" />
    <ellipse cx="40" cy="48" rx="7" ry="5" fill="#fff" />
    <circle cx="40" cy="46" r="2.5" fill="#0a0d1a" />
    <circle cx="30" cy="45" r="1.5" fill="#ff6bcb" opacity="0.6" />
    <circle cx="50" cy="45" r="1.5" fill="#ff6bcb" opacity="0.6" />
  </svg>
);

export const AnimalDragon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <circle cx="40" cy="42" r="22" fill="#ff6bcb" stroke="#e91e63" strokeWidth="1.5" />
    <circle cx="33" cy="38" r="3.5" fill="#0a0d1a" />
    <circle cx="47" cy="38" r="3.5" fill="#0a0d1a" />
    <circle cx="34" cy="37" r="1.2" fill="#fff" />
    <circle cx="48" cy="37" r="1.2" fill="#fff" />
    <polygon points="26,26 28,12 36,26" fill="#ff6bcb" stroke="#e91e63" strokeWidth="1" />
    <polygon points="54,26 52,12 44,26" fill="#ff6bcb" stroke="#e91e63" strokeWidth="1" />
    <path d="M 32 50 Q 40 57, 48 50" stroke="#0a0d1a" strokeWidth="2" fill="none" strokeLinecap="round" />
    <polygon points="35,52 40,60 45,52" fill="#ffd93d" stroke="#f4a62a" strokeWidth="1" />
  </svg>
);

// ===== ACTIVITY ICONS =====
export const IconReferral = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="24" cy="24" r="6" fill="#6ee7b7" />
    <circle cx="40" cy="24" r="6" fill="#6ee7b7" />
    <path d="M 20 42 Q 32 52, 44 42" stroke="#6ee7b7" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

export const IconTarget = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="18" fill="none" stroke="#ffd93d" strokeWidth="3" />
    <circle cx="32" cy="32" r="10" fill="none" stroke="#ffd93d" strokeWidth="3" />
    <circle cx="32" cy="32" r="4" fill="#ffd93d" />
  </svg>
);

export const IconVideo = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <rect x="16" y="24" width="32" height="20" rx="3" fill="#64b5f6" />
    <polygon points="26,32 32,38 38,32" fill="#fff" />
  </svg>
);

export const IconGame = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <rect x="18" y="26" width="28" height="20" rx="10" fill="none" stroke="#b388ff" strokeWidth="3" />
    <circle cx="26" cy="36" r="2" fill="#b388ff" />
    <circle cx="38" cy="36" r="2" fill="#b388ff" />
  </svg>
);

// ===== BIG EARN ICONS =====
export const IconTargetBig = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="22" fill="none" stroke="#d4af37" strokeWidth="3" />
    <circle cx="32" cy="32" r="14" fill="none" stroke="#d4af37" strokeWidth="3" />
    <circle cx="32" cy="32" r="6" fill="#f4d03f" />
    <path d="M 32 4 L 32 12 M 32 52 L 32 60 M 4 32 L 12 32 M 52 32 L 60 32" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const IconVideoBig = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <rect x="8" y="16" width="48" height="32" rx="4" fill="#4a90e2" />
    <polygon points="26,26 42,32 26,38" fill="#fff" />
    <rect x="8" y="44" width="48" height="4" fill="#2d6fb8" />
  </svg>
);

export const IconReferralBig = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="22" cy="24" r="8" fill="#52c41a" />
    <circle cx="42" cy="24" r="8" fill="#52c41a" />
    <path d="M 8 48 Q 22 40, 36 48" fill="none" stroke="#52c41a" strokeWidth="3" strokeLinecap="round" />
    <path d="M 28 48 Q 42 40, 56 48" fill="none" stroke="#52c41a" strokeWidth="3" strokeLinecap="round" />
    <path d="M 30 16 L 34 16 L 34 20 L 38 20 L 38 24 L 34 24 L 34 28 L 30 28 L 30 24 L 26 24 L 26 20 L 30 20 Z" fill="#52c41a" />
  </svg>
);

export const IconGameBig = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <rect x="10" y="20" width="44" height="26" rx="13" fill="#8e6cc9" />
    <circle cx="22" cy="33" r="4" fill="#fff" />
    <circle cx="42" cy="33" r="4" fill="#fff" />
    <rect x="30" y="24" width="4" height="4" fill="#fff" />
    <rect x="30" y="38" width="4" height="4" fill="#fff" />
  </svg>
);

export const IconStarBig = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <polygon points="32,10 38,26 54,26 42,36 46,52 32,42 18,52 22,36 10,26 26,26" fill="#d4af37" />
  </svg>
);

export const IconFlameBig = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <path d="M 32 8 C 26 22, 16 26, 16 40 C 16 50, 24 56, 32 56 C 40 56, 48 50, 48 40 C 48 26, 38 22, 32 8 Z" fill="#ff9f43" />
    <path d="M 32 24 C 29 32, 24 34, 24 42 C 24 46, 28 48, 32 48 C 36 48, 40 46, 40 42 C 40 34, 35 32, 32 24 Z" fill="#f4d03f" />
  </svg>
);

// ===== PLAYFUL EARN ICONS (for Royal Redesign) =====
export const EarnWatchIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <defs>
      <linearGradient id="watchBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#watchBg)" />
    <polygon points="26,22 46,32 26,42" fill="#fff" />
    <circle cx="22" cy="18" r="3" fill="#fff" opacity="0.5" />
  </svg>
);

export const EarnTaskIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <defs>
      <linearGradient id="taskBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#taskBg)" />
    <rect x="18" y="16" width="28" height="34" rx="3" fill="#fff" />
    <rect x="22" y="12" width="20" height="8" rx="2" fill="#166534" />
    <path d="M 24 30 L 28 34 L 38 24" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="24" y="40" width="16" height="2.5" rx="1" fill="#22c55e" opacity="0.5" />
  </svg>
);

export const EarnReferIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <defs>
      <linearGradient id="referBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#referBg)" />
    <circle cx="26" cy="24" r="7" fill="#fff" />
    <circle cx="42" cy="26" r="5" fill="#fff" opacity="0.85" />
    <path d="M 12 46 Q 26 38, 40 46" fill="#fff" />
    <path d="M 34 48 Q 44 42, 54 48" fill="#fff" opacity="0.85" />
    <circle cx="46" cy="20" r="2" fill="#fff" />
  </svg>
);

export const EarnGameIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <defs>
      <linearGradient id="gameBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#gameBg)" />
    <rect x="14" y="22" width="36" height="22" rx="11" fill="#fff" />
    <circle cx="24" cy="33" r="3.5" fill="#1d4ed8" />
    <circle cx="40" cy="33" r="3.5" fill="#1d4ed8" />
    <rect x="29" y="26" width="6" height="6" fill="#1d4ed8" rx="1" />
    <rect x="29" y="34" width="6" height="6" fill="#1d4ed8" rx="1" />
  </svg>
);

export const EarnStreakIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <defs>
      <linearGradient id="streakBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
      <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#streakBg)" />
    <path d="M 32 12 C 26 24, 20 28, 20 38 C 20 46, 26 52, 32 52 C 38 52, 44 46, 44 38 C 44 28, 38 24, 32 12 Z" fill="url(#flameGrad)" />
    <path d="M 32 26 C 29 32, 26 34, 26 40 C 26 44, 29 46, 32 46 C 35 46, 38 44, 38 40 C 38 34, 35 32, 32 26 Z" fill="#fff" opacity="0.7" />
  </svg>
);

export const EarnXPCatcherIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <defs>
      <linearGradient id="catchBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#catchBg)" />
    <circle cx="24" cy="22" r="6" fill="#fff" opacity="0.9" />
    <circle cx="44" cy="20" r="4" fill="#fbbf24" />
    <circle cx="34" cy="28" r="3" fill="#fbbf24" />
    <path d="M 16 40 L 48 40 L 44 52 L 20 52 Z" fill="#fff" stroke="#0891b2" strokeWidth="1.5" />
    <line x1="22" y1="40" x2="22" y2="52" stroke="#0891b2" strokeWidth="1" />
    <line x1="30" y1="40" x2="30" y2="52" stroke="#0891b2" strokeWidth="1" />
    <line x1="38" y1="40" x2="38" y2="52" stroke="#0891b2" strokeWidth="1" />
  </svg>
);

// ===== ACHIEVEMENT ICONS =====
export const AchieveStar = ({ unlocked, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={unlocked ? "#d4af37" : "#6b7080"} opacity={unlocked ? 1 : 0.5} stroke={unlocked ? "#f4d03f" : "#6b7080"} strokeWidth="3" />
    <path d="M 32 12 L 36 24 L 48 24 L 38 32 L 42 44 L 32 36 L 22 44 L 26 32 L 16 24 L 28 24 Z" fill="#fff" />
  </svg>
);

export const AchieveTarget = ({ unlocked, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={unlocked ? "#4a90e2" : "#6b7080"} opacity={unlocked ? 1 : 0.5} stroke={unlocked ? "#6b9fda" : "#6b7080"} strokeWidth="3" />
    <circle cx="32" cy="32" r="14" fill="#fff" />
    <circle cx="32" cy="32" r="8" fill={unlocked ? "#4a90e2" : "#6b7080"} />
    <circle cx="32" cy="32" r="3" fill="#fff" />
  </svg>
);

export const AchieveFlame = ({ unlocked, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={unlocked ? "#ff5c5c" : "#6b7080"} opacity={unlocked ? 1 : 0.5} stroke={unlocked ? "#ff9f43" : "#6b7080"} strokeWidth="3" />
    <path d="M 32 15 C 28 25, 20 28, 20 38 C 20 45, 25 50, 32 50 C 39 50, 44 45, 44 38 C 44 28, 36 25, 32 15 Z" fill="#f4d03f" />
  </svg>
);

export const AchieveLock = ({ unlocked, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill="#6b7080" opacity="0.5" stroke="#6b7080" strokeWidth="3" />
    <rect x="24" y="28" width="16" height="14" rx="2" fill="#a0a4b8" />
    <path d="M 28 28 L 28 22 C 28 17, 36 17, 36 22 L 36 28" stroke="#a0a4b8" strokeWidth="3" fill="none" />
  </svg>
);

export const AchieveKey = ({ unlocked, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill="#6b7080" opacity="0.5" stroke="#6b7080" strokeWidth="3" />
    <path d="M 20 24 L 26 24 L 32 20 L 38 24 L 44 24 L 44 36 L 38 40 L 38 46 L 26 46 L 26 40 L 20 36 Z" fill="#a0a4b8" />
  </svg>
);

export const AchieveDiamond = ({ unlocked, size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill="#6b7080" opacity="0.5" stroke="#6b7080" strokeWidth="3" />
    <polygon points="32,14 40,26 44,26 38,34 42,46 32,38 22,46 26,34 20,26 24,26" fill="#a0a4b8" />
  </svg>
);

// ===== BOTTOM NAV ICONS =====
export const NavHomeIcon = ({ size = 24, active = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 11L12 3L21 11V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V11Z"
      fill={active ? '#ffd93d' : 'none'}
      stroke={active ? '#ffd93d' : 'currentColor'}
      strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const NavEarnIcon = ({ size = 24, active = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill={active ? '#ffd93d' : 'none'} stroke={active ? '#ffd93d' : 'currentColor'} strokeWidth="2" />
    <path d="M12 7V12L15 15" stroke={active ? '#1a1f38' : 'currentColor'} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const NavRewardsIcon = ({ size = 24, active = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="18" height="13" rx="2" fill={active ? '#ffd93d' : 'none'} stroke={active ? '#ffd93d' : 'currentColor'} strokeWidth="2" />
    <path d="M3 12H21" stroke={active ? '#1a1f38' : 'currentColor'} strokeWidth="2" />
    <path d="M12 8V21" stroke={active ? '#1a1f38' : 'currentColor'} strokeWidth="2" />
    <path d="M8 8C8 5 12 5 12 8" stroke={active ? '#1a1f38' : 'currentColor'} strokeWidth="2" fill="none" />
    <path d="M16 8C16 5 12 5 12 8" stroke={active ? '#1a1f38' : 'currentColor'} strokeWidth="2" fill="none" />
  </svg>
);

export const NavWalletIcon = ({ size = 24, active = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 7C3 5.9 3.9 5 5 5H19C20.1 5 21 5.9 21 7V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V7Z"
      fill={active ? '#ffd93d' : 'none'} stroke={active ? '#ffd93d' : 'currentColor'} strokeWidth="2" />
    <circle cx="17" cy="13" r="1.5" fill={active ? '#1a1f38' : 'currentColor'} />
  </svg>
);

export const NavProfileIcon = ({ size = 24, active = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill={active ? '#ffd93d' : 'none'} stroke={active ? '#ffd93d' : 'currentColor'} strokeWidth="2" />
    <path d="M4 21C4 16 8 14 12 14C16 14 20 16 20 21" stroke={active ? '#ffd93d' : 'currentColor'} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);