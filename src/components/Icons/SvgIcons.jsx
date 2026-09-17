import React from 'react';

// ===== OWL MASCOT =====
export const OwlMascot = ({ size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="130" rx="55" ry="60" fill="#8e6cc9" />
    <ellipse cx="100" cy="135" rx="40" ry="45" fill="#f4d03f" />
    <ellipse cx="100" cy="140" rx="28" ry="32" fill="#ff9f43" />
    <circle cx="100" cy="75" r="50" fill="#8e6cc9" />
    <path d="M 60 40 L 70 15 L 85 40 Z" fill="#8e6cc9" />
    <path d="M 140 40 L 130 15 L 115 40 Z" fill="#8e6cc9" />
    <circle cx="80" cy="75" r="18" fill="#fff" />
    <circle cx="120" cy="75" r="18" fill="#fff" />
    <circle cx="82" cy="77" r="9" fill="#0a0d1a" />
    <circle cx="122" cy="77" r="9" fill="#0a0d1a" />
    <circle cx="85" cy="73" r="3" fill="#fff" />
    <circle cx="125" cy="73" r="3" fill="#fff" />
    <ellipse cx="65" cy="95" rx="8" ry="5" fill="#e94e9c" opacity="0.5" />
    <ellipse cx="135" cy="95" rx="8" ry="5" fill="#e94e9c" opacity="0.5" />
    <path d="M 100 88 L 95 98 L 105 98 Z" fill="#ff9f43" />
    <ellipse cx="45" cy="130" rx="15" ry="35" fill="#8e6cc9" transform="rotate(-15 45 130)">
      <animateTransform attributeName="transform" type="rotate" values="-15 45 130;-25 45 130;-15 45 130" dur="0.8s" repeatCount="indefinite" additive="sum" />
    </ellipse>
    <ellipse cx="155" cy="130" rx="15" ry="35" fill="#8e6cc9" transform="rotate(15 155 130)">
      <animateTransform attributeName="transform" type="rotate" values="15 155 130;25 155 130;15 155 130" dur="0.8s" repeatCount="indefinite" additive="sum" />
    </ellipse>
    <ellipse cx="85" cy="185" rx="10" ry="5" fill="#ff9f43" />
    <ellipse cx="115" cy="185" rx="10" ry="5" fill="#ff9f43" />
    <rect x="65" y="25" width="70" height="8" rx="2" fill="#d4af37" />
    <polygon points="100,15 130,28 70,28" fill="#d4af37" />
    <line x1="130" y1="28" x2="130" y2="45" stroke="#d4af37" strokeWidth="2" />
    <circle cx="130" cy="47" r="4" fill="#d4af37" />
  </svg>
);

// ===== CARTOON CHEST =====
export const CartoonChest = ({ size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chestBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#b8941f" />
        <stop offset="100%" stopColor="#8a6f1a" />
      </linearGradient>
      <linearGradient id="chestLid" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#b8941f" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="180" rx="65" ry="8" fill="#000" opacity="0.4" />
    <rect x="40" y="100" width="120" height="70" rx="8" fill="url(#chestBody)" stroke="#6b5410" strokeWidth="3" />
    <path d="M 40 100 L 40 75 Q 40 60, 55 60 L 145 60 Q 160 60, 160 75 L 160 100 Z" fill="url(#chestLid)" stroke="#6b5410" strokeWidth="3" />
    <path d="M 45 95 L 45 78 Q 45 65, 58 65 L 142 65 Q 155 65, 155 78 L 155 95 Z" fill="#f4d03f" opacity="0.4" />
    <rect x="55" y="60" width="10" height="110" fill="#8a6f1a" opacity="0.6" />
    <rect x="135" y="60" width="10" height="110" fill="#8a6f1a" opacity="0.6" />
    <rect x="88" y="105" width="24" height="28" rx="4" fill="#f4d03f" stroke="#8a6f1a" strokeWidth="2" />
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
    <text x="25" y="150" fontSize="14" fill="#f4d03f">✨</text>
  </svg>
);

// ===== GAME BASKET CHARACTER =====
export const BasketCharacter = ({ size = 160 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="basketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8a6f1a" />
      </linearGradient>
      <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f4d03f" />
        <stop offset="100%" stopColor="#b8941f" />
      </linearGradient>
    </defs>
    <g>
      <circle cx="60" cy="30" r="14" fill="url(#coinGrad)" stroke="#8a6f1a" strokeWidth="2">
        <animate attributeName="cy" values="10;60;10" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="60" y="36" fontSize="14" fontWeight="700" fill="#8a6f1a" textAnchor="middle">V</text>
    </g>
    <g>
      <circle cx="140" cy="20" r="14" fill="url(#coinGrad)" stroke="#8a6f1a" strokeWidth="2">
        <animate attributeName="cy" values="10;50;10" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <text x="140" y="26" fontSize="14" fontWeight="700" fill="#8a6f1a" textAnchor="middle">V</text>
    </g>
    <g>
      <circle cx="100" cy="40" r="12" fill="url(#coinGrad)" stroke="#8a6f1a" strokeWidth="2">
        <animate attributeName="cy" values="5;55;5" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="45" fontSize="12" fontWeight="700" fill="#8a6f1a" textAnchor="middle">V</text>
    </g>
    <path d="M 50 120 L 150 120 L 140 180 L 60 180 Z" fill="url(#basketGrad)" stroke="#6b5410" strokeWidth="3" />
    <line x1="55" y1="130" x2="145" y2="130" stroke="#8a6f1a" strokeWidth="2" opacity="0.6" />
    <line x1="57" y1="145" x2="143" y2="145" stroke="#8a6f1a" strokeWidth="2" opacity="0.6" />
    <line x1="59" y1="160" x2="141" y2="160" stroke="#8a6f1a" strokeWidth="2" opacity="0.6" />
    <line x1="75" y1="120" x2="72" y2="180" stroke="#8a6f1a" strokeWidth="2" opacity="0.6" />
    <line x1="100" y1="120" x2="100" y2="180" stroke="#8a6f1a" strokeWidth="2" opacity="0.6" />
    <line x1="125" y1="120" x2="128" y2="180" stroke="#8a6f1a" strokeWidth="2" opacity="0.6" />
    <rect x="42" y="112" width="116" height="12" rx="6" fill="#f4d03f" stroke="#8a6f1a" strokeWidth="2" />
    <circle cx="80" cy="150" r="4" fill="#0a0d1a" />
    <circle cx="120" cy="150" r="4" fill="#0a0d1a" />
    <path d="M 92 158 Q 100 165, 108 158" stroke="#0a0d1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <ellipse cx="72" cy="155" rx="5" ry="3" fill="#e94e9c" opacity="0.6" />
    <ellipse cx="128" cy="155" rx="5" ry="3" fill="#e94e9c" opacity="0.6" />
    <text x="30" y="90" fontSize="18">✨</text>
    <text x="165" y="100" fontSize="16">✨</text>
  </svg>
);

// ===== LEVEL BADGE ICON =====
export const LevelBadgeIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f4d03f" />
        <stop offset="100%" stopColor="#b8941f" />
      </linearGradient>
    </defs>
    <path d="M 20 48 L 20 62 L 32 56 L 44 62 L 44 48 Z" fill="#e94e9c" />
    <circle cx="32" cy="30" r="22" fill="url(#badgeGrad)" stroke="#f4d03f" strokeWidth="2" />
    <circle cx="32" cy="30" r="16" fill="#8e6cc9" opacity="0.3" />
    <path d="M 32 16 L 36 26 L 46 26 L 38 33 L 41 44 L 32 38 L 23 44 L 26 33 L 18 26 L 28 26 Z" fill="#fff" stroke="#d4af37" strokeWidth="1" />
  </svg>
);

// ===== LEVEL ANIMALS =====
export const AnimalBird = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <ellipse cx="32" cy="40" rx="18" ry="16" fill="#52c41a" />
    <circle cx="32" cy="24" r="12" fill="#52c41a" />
    <circle cx="28" cy="22" r="2.5" fill="#0a0d1a" />
    <circle cx="36" cy="22" r="2.5" fill="#0a0d1a" />
    <path d="M 28 28 L 32 32 L 36 28 Z" fill="#ff9f43" />
  </svg>
);

export const AnimalChick = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <ellipse cx="32" cy="42" rx="18" ry="14" fill="#f4d03f" />
    <circle cx="32" cy="24" r="13" fill="#f4d03f" />
    <circle cx="27" cy="22" r="2.5" fill="#0a0d1a" />
    <circle cx="37" cy="22" r="2.5" fill="#0a0d1a" />
    <polygon points="28,28 32,34 36,28" fill="#ff9f43" />
  </svg>
);

export const AnimalFox = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <polygon points="20,20 24,8 30,20" fill="#ff9f43" />
    <polygon points="44,20 40,8 34,20" fill="#ff9f43" />
    <circle cx="32" cy="32" r="18" fill="#ff9f43" />
    <circle cx="26" cy="30" r="2.5" fill="#0a0d1a" />
    <circle cx="38" cy="30" r="2.5" fill="#0a0d1a" />
    <ellipse cx="32" cy="42" rx="10" ry="6" fill="#fff" />
    <circle cx="32" cy="40" r="2" fill="#0a0d1a" />
  </svg>
);

export const AnimalOwl = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <ellipse cx="32" cy="42" rx="18" ry="18" fill="#8e6cc9" />
    <circle cx="32" cy="28" r="16" fill="#8e6cc9" />
    <polygon points="20,16 22,8 28,16" fill="#8e6cc9" />
    <polygon points="44,16 42,8 36,16" fill="#8e6cc9" />
    <circle cx="26" cy="28" r="6" fill="#fff" />
    <circle cx="38" cy="28" r="6" fill="#fff" />
    <circle cx="26" cy="28" r="3" fill="#0a0d1a" />
    <circle cx="38" cy="28" r="3" fill="#0a0d1a" />
    <polygon points="30,34 32,38 34,34" fill="#ff9f43" />
  </svg>
);

export const AnimalLion = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="22" fill="#d4af37" />
    <circle cx="32" cy="32" r="16" fill="#f4d03f" />
    <circle cx="26" cy="30" r="2.5" fill="#0a0d1a" />
    <circle cx="38" cy="30" r="2.5" fill="#0a0d1a" />
    <ellipse cx="32" cy="40" rx="6" ry="4" fill="#fff" />
    <circle cx="32" cy="38" r="2" fill="#0a0d1a" />
  </svg>
);

export const AnimalDragon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="20" fill="#e94e9c" />
    <circle cx="26" cy="28" r="3" fill="#0a0d1a" />
    <circle cx="38" cy="28" r="3" fill="#0a0d1a" />
    <polygon points="20,18 22,8 28,18" fill="#e94e9c" />
    <polygon points="44,18 42,8 36,18" fill="#e94e9c" />
    <path d="M 24 38 Q 32 46, 40 38" stroke="#0a0d1a" strokeWidth="2" fill="none" />
    <polygon points="28,42 32,50 36,42" fill="#f4d03f" />
  </svg>
);

// ===== ACTIVITY ICONS =====
export const IconReferral = ({ size = 32, color = "#52c41a" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={color} opacity="0.15" />
    <circle cx="24" cy="24" r="6" fill={color} />
    <circle cx="40" cy="24" r="6" fill={color} />
    <path d="M 20 42 Q 32 52, 44 42" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

export const IconTarget = ({ size = 32, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={color} opacity="0.15" />
    <circle cx="32" cy="32" r="18" fill="none" stroke={color} strokeWidth="3" />
    <circle cx="32" cy="32" r="10" fill="none" stroke={color} strokeWidth="3" />
    <circle cx="32" cy="32" r="4" fill={color} />
  </svg>
);

export const IconVideo = ({ size = 32, color = "#4a90e2" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={color} opacity="0.15" />
    <rect x="16" y="24" width="32" height="20" rx="3" fill={color} />
    <polygon points="26,32 32,38 38,32" fill="#fff" />
  </svg>
);

export const IconGame = ({ size = 32, color = "#8e6cc9" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="28" fill={color} opacity="0.15" />
    <rect x="18" y="26" width="28" height="20" rx="10" fill="none" stroke={color} strokeWidth="3" />
    <circle cx="26" cy="36" r="2" fill={color} />
    <circle cx="38" cy="36" r="2" fill={color} />
  </svg>
);

// ===== EARN CARD ICONS (Bigger) =====
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