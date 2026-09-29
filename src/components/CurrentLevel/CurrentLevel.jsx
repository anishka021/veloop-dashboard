import React, { useEffect, useState } from 'react';
import styles from './CurrentLevel.module.css';
import XPProgress from '../XPProgress/XPProgress';
import { RoyalShieldBadge } from '../Icons/SvgIcons';
import { levelData } from '../../data/appData';

const CurrentLevel = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = levelData.currentXP / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= levelData.currentXP) {
        setCount(levelData.currentXP);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.cardGlow1} />
      <div className={styles.cardGlow2} />
      <div className={styles.cardContent}>
        <div className={styles.levelHeader}>
          <div className={styles.levelHeaderLabel}>CURRENT LEVEL</div>
          <div className={styles.infoIcon}>ⓘ</div>
        </div>

        <div className={styles.royalSection}>
          <div className={styles.shieldWrap}>
            <div className={styles.shieldGlow} />
            <RoyalShieldBadge size={130} level={levelData.currentLevel} />
          </div>
          <div className={styles.xpInfo}>
            <div className={styles.xpCount}>{count.toLocaleString()}</div>
            <div className={styles.xpLabel}>XP</div>
            <div className={styles.xpTarget}>to reach Level {String(levelData.nextLevel).padStart(2, '0')}</div>
          </div>
        </div>

        <XPProgress />
      </div>
    </div>
  );
};

export default CurrentLevel;