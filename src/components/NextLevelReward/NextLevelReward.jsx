import React from 'react';
import styles from './NextLevelReward.module.css';
import { levelData } from '../../data/appData';

const NextLevelReward = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardGlow1} />
      <div className={styles.cardGlow2} />
      <div className={styles.cardContent}>
        <div className={styles.levelHeader}>
          <div className={styles.levelHeaderLabel}>🔒 NEXT LEVEL REWARD</div>
          <div className={styles.infoIcon}>ⓘ</div>
        </div>

        <div className={styles.chestWrap}>
          <div className={styles.chestVisual}>
            <div className={styles.chestRing1}></div>
            <div className={styles.chestRing2}></div>
            <div className={styles.chestEmoji}>🎁</div>
          </div>
          <div className={styles.chestInfo}>
            <div className={styles.rewardLabel}>
              UNLOCK AT LEVEL {String(levelData.nextLevel).padStart(2, '0')}
            </div>
            <div>
              <span className={styles.rewardAmount}>{levelData.nextLevelReward.amount}</span>
              <span className={styles.rewardUnit}>{levelData.nextLevelReward.type}</span>
            </div>
            <div className={styles.unlockMsg}>
              🎯 Earn {levelData.xpRemaining.toLocaleString()} more XP to unlock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLevelReward;