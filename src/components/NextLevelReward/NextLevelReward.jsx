import React, { useState } from 'react';
import styles from './NextLevelReward.module.css';
import { CartoonChest } from '../Icons/SvgIcons';
import { levelData } from '../../data/appData';

const NextLevelReward = () => {
  const [wiggling, setWiggling] = useState(false);

  const handleChestClick = (e) => {
    setWiggling(true);
    setTimeout(() => setWiggling(false), 1200);

    const emojis = ['🎉', '🎊', '🪙', '💎', '⭐', '🏆', '🎁', '✨'];
    for (let i = 0; i < 30; i++) {
      const c = document.createElement('div');
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      c.style.position = 'fixed';
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.style.fontSize = '22px';
      c.style.transition = 'all 1.2s ease-out';
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 30;
      const distance = 120 + Math.random() * 180;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.6) rotate(720deg)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1300);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.gridBg} />
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
      <div className={styles.glowTop} />

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.lockIcon}>🔒</span>
          <span className={styles.label}>NEXT LEVEL REWARD</span>
        </div>
        <span className={styles.infoIcon}>ℹ️</span>
      </div>

      <div className={styles.rewardVisual}>
        <div className={styles.chestWrap}>
          <div className={styles.orbitRing1} />
          <div className={styles.orbitRing2} />
          <div className={styles.chestGlow} />
          <div className={styles.sparkles}>
            <span className={styles.sparkle} style={{ top: '10%', left: '10%', animationDelay: '0s' }}>✨</span>
            <span className={styles.sparkle} style={{ top: '20%', right: '15%', animationDelay: '0.5s' }}>⭐</span>
            <span className={styles.sparkle} style={{ bottom: '15%', left: '15%', animationDelay: '1s' }}>💫</span>
            <span className={styles.sparkle} style={{ bottom: '20%', right: '10%', animationDelay: '1.5s' }}>🌟</span>
          </div>
          <div
            className={`${styles.chestInner} ${wiggling ? styles.wiggle : ''}`}
            onClick={handleChestClick}
          >
            <CartoonChest size={170} />
          </div>
        </div>

        <div className={styles.rewardAmount}>
          <span className={styles.num}>{levelData.nextLevelReward.amount}</span>
          <span className={styles.unit}>{levelData.nextLevelReward.type}</span>
        </div>

        <div className={styles.unlockBadge}>
          🎯 Unlock at Level {String(levelData.nextLevel).padStart(2, '0')}
        </div>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Progress to Unlock</span>
          <span className={styles.progressPercent}>80%</span>
        </div>
        <div className={styles.miniProgress}>
          <div className={styles.miniFill} style={{ width: '80%' }}>
            <div className={styles.progressShine} />
          </div>
        </div>
        <div className={styles.progressInfo}>
          <span>1,580 XP remaining</span>
        </div>
      </div>
    </div>
  );
};

export default NextLevelReward;