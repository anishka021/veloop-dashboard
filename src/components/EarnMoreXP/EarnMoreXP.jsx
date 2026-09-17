import React from 'react';
import styles from './EarnMoreXP.module.css';
import {
  IconTargetBig, IconVideoBig, IconReferralBig,
  IconGameBig, IconStarBig, IconFlameBig
} from '../Icons/SvgIcons';
import { earningOpportunities } from '../../data/levelData';

const iconMap = {
  target: IconTargetBig,
  video: IconVideoBig,
  referral: IconReferralBig,
  game: IconGameBig,
  star: IconStarBig,
  flame: IconFlameBig,
};

const EarnMoreXP = () => {
  const handleClick = (e, item) => {
    if (item.comingSoon) return;
    // Confetti burst
    const emojis = ['🎉','🎊','✨','⭐','💫','🪙'];
    for (let i = 0; i < 15; i++) {
      const c = document.createElement('div');
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      c.style.position = 'fixed';
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.style.fontSize = '20px';
      c.style.transition = 'all 1s ease-out';
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 15;
      const distance = 80 + Math.random() * 120;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.5)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1100);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>✨ Earn More XP & Rewards</div>
        <div className={styles.subtitle}>Complete activities to level up faster</div>
      </div>

      <div className={styles.grid}>
        {earningOpportunities.map((item, idx) => {
          const Icon = iconMap[item.iconType];
          return (
            <div
              key={item.id}
              className={`${styles.card} ${styles[item.color]} ${item.comingSoon ? styles.disabled : ''}`}
              style={{ animationDelay: `${0.75 + idx * 0.05}s` }}
              onClick={(e) => handleClick(e, item)}
            >
              {item.comingSoon && <span className={styles.badge}>Coming Soon</span>}
              <div className={styles.iconWrap}>
                <Icon size={44} />
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <div className={styles.reward}>{item.reward}</div>
              <p className={styles.desc}>{item.desc}</p>
              {!item.comingSoon && <button className={styles.cta}>Start →</button>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EarnMoreXP;
