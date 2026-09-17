import React from 'react';
import styles from './LevelRoadmap.module.css';
import {
  AnimalBird, AnimalChick, AnimalFox,
  AnimalOwl, AnimalLion, AnimalDragon
} from '../Icons/SvgIcons';
import { levelRoadmap } from '../../data/levelData';

const animalMap = {
  bird: AnimalBird,
  chick: AnimalChick,
  fox: AnimalFox,
  owl: AnimalOwl,
  lion: AnimalLion,
  dragon: AnimalDragon,
};

const LevelRoadmap = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>✨ Your Level Journey</div>
        <div className={styles.legend}>
          <span><i className={styles.completed}></i> Completed</span>
          <span><i className={styles.current}></i> Current</span>
          <span><i className={styles.locked}></i> Locked</span>
        </div>
      </div>

      <div className={styles.roadmapWrap}>
        <div className={styles.roadmap}>
          {levelRoadmap.map((lvl, idx) => {
            const AnimalIcon = animalMap[lvl.animal];
            return (
              <React.Fragment key={lvl.level}>
                <div className={`${styles.item} ${styles[lvl.status]}`}>
                  {lvl.status === 'current' && (
                    <div className={styles.youAreHereBadge}>📍 You Are Here</div>
                  )}
                  <div className={styles.nodeOuter}>
                    <div className={styles.nodeRing} />
                    <div className={styles.node}>
                      <AnimalIcon size={48} />
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.levelLabel}>
                      LEVEL {String(lvl.level).padStart(2, '0')}
                    </div>
                    <div className={styles.levelName}>{lvl.name}</div>
                    <div className={styles.reward}>✨ {lvl.reward}</div>
                  </div>
                </div>
                {idx < levelRoadmap.length - 1 && (
                  <div className={styles.connector}>
                    <div className={styles.connectorLine} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LevelRoadmap;
