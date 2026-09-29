import React, { useEffect, useState } from 'react';
import styles from './XPProgress.module.css';
import { levelData } from '../../data/appData';

const XPProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(levelData.progressPercent), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.progressLabels}>
        <span className={styles.progressCurrent}>
          {levelData.currentXP.toLocaleString()}{' '}
          <span className={styles.progressTotal}>/ {levelData.requiredXP.toLocaleString()} XP</span>
        </span>
        <span className={styles.progressPercent}>{progress}%</span>
      </div>
    </div>
  );
};

export default XPProgress;