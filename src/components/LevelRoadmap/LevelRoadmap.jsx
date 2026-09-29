import React from 'react';
import styles from './LevelRoadmap.module.css';
import { levelRoadmap } from '../../data/appData';

const LevelRoadmap = () => {
  const animals = ['🐦', '🐥', '🦊', '🦉', '🦁', '🐉'];

  return (
    <div className={styles.card}>
      <div className={styles.cardGlow1}></div>
      <div className={styles.cardContent}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionTitle}>✨ Your Level Journey</div>
            <div className={styles.sectionSub}>Track your progression and unlock rewards</div>
          </div>
        </div>

        <div className={styles.roadmapWrap}>
          <div className={styles.roadmap}>
            {levelRoadmap.map((lvl, idx) => (
              <React.Fragment key={lvl.level}>
                <div className={`${styles.levelNode} ${styles[`node${lvl.status.charAt(0).toUpperCase() + lvl.status.slice(1)}`]}`}>
                  <div className={styles.levelNodeCircle}>{animals[idx]}</div>
                  <div className={styles.levelNodeLevel}>
                    LEVEL {String(lvl.level).padStart(2, '0')}
                  </div>
                  <div className={styles.levelNodeName}>{lvl.name}</div>
                  <div className={styles.levelNodeReward}>✨ {lvl.reward}</div>
                </div>

                {idx < levelRoadmap.length - 1 && (
                  <div
                    className={`${styles.connectorLine} ${
                      lvl.status === 'completed' ? styles.green :
                      lvl.status === 'locked' ? styles.gray : ''
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelRoadmap;