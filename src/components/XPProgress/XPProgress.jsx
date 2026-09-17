import React, { useEffect, useState } from 'react';
import styles from './XPProgress.module.css';
import { levelData } from '../../data/levelData';

const XPProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(levelData.progressPercent), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.labels}>
        <span className={styles.current}>
          <strong>{levelData.currentXP.toLocaleString()}</strong> XP
        </span>
        <span className={styles.percent}>{progress}%</span>
        <span className={styles.target}>{levelData.requiredXP.toLocaleString()} XP</span>
      </div>
    </div>
  );
};

export default XPProgress;
