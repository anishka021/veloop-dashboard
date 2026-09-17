import React from 'react';
import styles from './XPActivity.module.css';
import { IconReferral, IconTarget, IconVideo, IconGame } from '../Icons/SvgIcons';
import { xpActivity } from '../../data/levelData';

const iconMap = {
  referral: IconReferral,
  target: IconTarget,
  video: IconVideo,
  game: IconGame,
};

const XPActivity = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>📈 Recent Activity</div>
        <div className={styles.viewAll}>View All ↗</div>
      </div>

      <ul className={styles.list}>
        {xpActivity.map((item, idx) => {
          const Icon = iconMap[item.iconType];
          return (
            <li key={item.id} className={styles.item} style={{ animationDelay: `${0.6 + idx * 0.08}s` }}>
              <div className={styles.itemIcon}>
                <Icon size={48} />
              </div>
              <div className={styles.itemBody}>
                <span className={styles.itemSource}>{item.source}</span>
                <span className={styles.itemTime}>{item.time}</span>
              </div>
              <span className={styles.itemAmount}>+{item.amount} XP</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default XPActivity;
