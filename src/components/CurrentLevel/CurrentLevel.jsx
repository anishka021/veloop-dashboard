import React, { useEffect, useState } from 'react';
import styles from './CurrentLevel.module.css';
import XPProgress from '../XPProgress/XPProgress';
import { LevelBadgeIcon } from '../Icons/SvgIcons';
import { levelData } from '../../data/levelData';

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
      <div className={styles.shine} />
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />

      <div className={styles.levelHeader}>
        <div className={styles.levelBadge}>
          <div className={styles.badgeIconWrap}>
            <LevelBadgeIcon size={48} />
          </div>
          <div className={styles.badgeText}>
            <span className={styles.levelLabel}>CURRENT LEVEL</span>
            <span className={styles.levelNum}>
              Level {String(levelData.currentLevel).padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className={styles.levelNamePill}>⚡ {levelData.currentLevelName}</div>
      </div>

      <div className={styles.xpSection}>
        <div className={styles.xpHeader}>Current XP ℹ️</div>
        <div className={styles.xpValue}>
          <span className={styles.xpSparkle}>✨</span>
          <span>{count.toLocaleString()}</span>
          <span className={styles.xpUnit}>XP</span>
        </div>
      </div>

      <XPProgress />

      <div className={styles.levelFooter}>
        <div>
          <div className={styles.footerValue}>{levelData.xpRemaining.toLocaleString()}</div>
          <div className={styles.footerLabel}>
            XP to Level {String(levelData.nextLevel).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentLevel;
