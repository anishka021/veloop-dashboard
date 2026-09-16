import React from 'react';
import styles from './LevelRoadmap.module.css';
import { levelRoadmap } from '../../data/levelData';

const LevelRoadmap = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>✨ Level Progression</div>
        <div className={styles.legend}>
          <span><i className={styles.completed}></i> Completed</span>
          <span><i className={styles.current}></i> Current</span>
          <span><i className={styles.locked}></i> Locked</span>
        </div>
      </div>

      <div className={styles.roadmapWrap}>
        <div className={styles.roadmap}>
          {levelRoadmap.map((lvl, idx) => (
            <React.Fragment key={lvl.level}>
              <div className={`${styles.item} ${styles[lvl.status]}`}>
                {lvl.status === 'current' && (
                  <div className={styles.youAreHereBadge}>📍 You Are Here</div>
                )}
                <div className={styles.nodeOuter}>
                  <div className={styles.nodeRing} />
                  <div className={styles.node}>
                    {lvl.status === 'completed' ? '✓' : lvl.status === 'locked' ? '🔒' : lvl.level}
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.levelLabel}>LEVEL {String(lvl.level).padStart(2, '0')}</div>
                  <div className={styles.levelName}>{lvl.emoji} {lvl.name}</div>
                  <div className={styles.reward}>✨ {lvl.reward}</div>
                </div>
              </div>

              {idx < levelRoadmap.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelRoadmap;
