import React from 'react';
import styles from './LevelRoadmap.module.css';
import { Check, Lock, MapPin, Sparkles } from 'lucide-react';
import { levelRoadmap } from '../../data/levelData';

const LevelRoadmap = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>
            <Sparkles size={16} />
            Level Progression
          </h3>
          <p className={styles.subtitle}>Your journey through VELOOP Rewards</p>
        </div>
        <div className={styles.legend}>
          <span><i className={styles.dotCompleted} /> Completed</span>
          <span><i className={styles.dotCurrent} /> Current</span>
          <span><i className={styles.dotLocked} /> Locked</span>
        </div>
      </div>

      <div className={styles.roadmapWrap}>
        <div className={styles.roadmap}>
          {levelRoadmap.map((item, idx) => (
            <div key={item.level} className={styles.itemWrapper}>
              <div className={`${styles.item} ${styles[item.status]}`}>
                {item.status === 'current' && (
                  <div className={styles.youAreHereBadge}>
                    <MapPin size={10} />
                    You Are Here
                  </div>
                )}

                <div className={styles.nodeOuter}>
                  <div className={styles.nodeRing} />
                  <div className={styles.node}>
                    {item.status === 'completed' && <Check size={20} strokeWidth={3} />}
                    {item.status === 'current' && <span className={styles.nodeNum}>{item.level}</span>}
                    {item.status === 'next' && <span className={styles.nodeNum}>{item.level}</span>}
                    {item.status === 'locked' && <Lock size={16} />}
                  </div>
                </div>

                <div className={styles.info}>
                  <div className={styles.levelLabel}>LEVEL {String(item.level).padStart(2, '0')}</div>
                  <div className={styles.levelName}>{item.name}</div>
                  <div className={styles.reward}>
                    <Sparkles size={10} />
                    {item.reward}
                  </div>
                </div>
              </div>

              {idx < levelRoadmap.length - 1 && (
                <div className={`${styles.connector} ${styles[`conn_${item.status}`]}`}>
                  <div className={styles.connectorLine} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelRoadmap;