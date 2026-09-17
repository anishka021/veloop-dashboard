import React, { useState } from 'react';
import styles from './NextLevelReward.module.css';
import { CartoonChest } from '../Icons/SvgIcons';
import { levelData } from '../../data/levelData';

const NextLevelReward = () => {
  const [wiggling, setWiggling] = useState(false);

  const handleChestClick = (e) => {
    setWiggling(true);
    setTimeout(() => setWiggling(false), 1200);

    // Confetti burst
    const emojis = ['🎉','🎊','🪙','💎','⭐','🏆','🎁'];
    for (let i = 0; i < 20; i++) {
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
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 100 + Math.random() * 150;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.5) rotate(720deg)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1100);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.bgGlow} />

      <div className={styles.header}>
        <span className={styles.label}>🔒 NEXT LEVEL REWARD</span>
        <span style={{ opacity: 0.6 }}>ℹ️</span>
      </div>

      <div className={styles.rewardVisual}>
        <div
          className={`${styles.chestWrap} ${wiggling ? styles.wiggle : ''}`}
          onClick={handleChestClick}
        >
          <div className={styles.chestGlow} />
          <CartoonChest size={140} />
        </div>
        <div className={styles.rewardAmount}>
          <span className={styles.num}>{levelData.nextLevelReward.amount}</span>
          <span className={styles.unit}>{levelData.nextLevelReward.type}</span>
        </div>
      </div>

      <div className={styles.lockMsg}>
        🔒 <span>Reach <strong>Level {String(levelData.nextLevel).padStart(2, '0')}</strong> to unlock</span>
      </div>

      <div className={styles.rewardProgressWrap}>
        <div className={styles.miniProgress}>
          <div className={styles.miniFill} style={{ width: '80%' }} />
        </div>
        <span className={styles.rewardPercent}>80%</span>
      </div>
    </div>
  );
};

export default NextLevelReward;
