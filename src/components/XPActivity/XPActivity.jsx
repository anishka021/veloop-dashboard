import React from 'react';
import styles from './XPActivity.module.css';
import { xpActivity } from '../../data/levelData';

const XPActivity = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>📈 Recent XP Activity</div>
        <div className={styles.viewAll}>View All ↗</div>
      </div>

      <ul className={styles.list}>
        {xpActivity.map((item, idx) => (
          <li key={item.id} className={styles.item} style={{ animationDelay: `${0.6 + idx * 0.08}s` }}>
            <div className={styles.itemIcon}>{item.icon}</div>
            <div className={styles.itemBody}>
              <span className={styles.itemSource}>{item.source}</span>
              <span className={styles.itemTime}>{item.time}</span>
            </div>
            <span className={styles.itemAmount}>+{item.amount} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XPActivity;
