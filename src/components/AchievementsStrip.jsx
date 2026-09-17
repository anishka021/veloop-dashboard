import React from 'react';
import styles from './AchievementsStrip.module.css';
import {
  AchieveStar, AchieveTarget, AchieveFlame,
  AchieveLock, AchieveKey, AchieveDiamond
} from '../Icons/SvgIcons';
import { achievements } from '../../data/levelData';

const iconMap = {
  star: AchieveStar,
  target: AchieveTarget,
  flame: AchieveFlame,
  lock: AchieveLock,
  key: AchieveKey,
  diamond: AchieveDiamond,
};

const AchievementsStrip = () => {
  return (
    <div className={styles.card}>
      <div className={styles.label}>🏆 Your Achievements</div>
      <div className={styles.badges}>
        {achievements.map(a => {
          const Icon = iconMap[a.type];
          return (
            <div key={a.id} className={`${styles.badgeItem} ${a.unlocked ? styles.unlocked : ''}`}>
              <Icon unlocked={a.unlocked} />
              <div className={styles.badgeLabel}>{a.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsStrip;