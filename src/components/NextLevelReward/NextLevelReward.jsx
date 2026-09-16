import React, { useState } from 'react';
import styles from './NextLevelReward.module.css';
import { levelData } from '../../data/levelData';

const NextLevelReward = () => {
  const [wiggling, setWiggling] = useState(false);

  const handleChestClick = () => {
    setWiggling(true);
    setTimeout(() => setWiggling(false), 1200);
  };

  return (
    <div className={styles.card}>
      <div className={styles.bgGlow} />

      <div className={styles.header}>
        <span className={styles.label}>🔒 NEXT LEVEL REWARD</span>
        <span style={{ opacity: 0.6 }}>ℹ️</span>
      </div>

      <div className={styles.rewardVisual}>
        <div className={styles.chestWrap}>
          <div className={styles.chestGlow} />
          <div
            className={`${styles.chest} ${wiggling ? styles.wiggle : ''}`}
            onClick={handleChestClick}
          >
            <div className={styles.chestEyes}>
              <div className={styles.chestEye} />
              <div className={styles.chestEye} />
            </div>
            🎁
          </div>
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
        <div className={
