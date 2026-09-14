import React from 'react';
import styles from './XPActivity.module.css';
import { TrendingUp, Users, Target, Video, Gamepad2, ArrowUpRight } from 'lucide-react';
import { xpActivity } from '../../data/levelData';

const iconMap = {
  users: Users, target: Target, video: Video, gamepad: Gamepad2,
};

const XPActivity = () => {
  if (xpActivity.length === 0) {
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>Recent XP Activity</h3>
        <div className={styles.empty}>
          <TrendingUp size={36} />
          <p>Your XP journey starts here.</p>
          <button className={styles.emptyBtn}>Start Earning XP</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <TrendingUp size={16} />
          Recent XP Activity
        </h3>
        <span className={styles.viewAll}>
          View All <ArrowUpRight size={12} />
        </span>
      </div>

      <ul className={styles.list}>
        {xpActivity.map((item, idx) => {
          const Icon = iconMap[item.icon] || TrendingUp;
          return (
            <li
              key={item.id}
              className={styles.item}
              style={{ animationDelay: `${0.6 + idx * 0.08}s` }}
            >
              <div className={styles.itemIcon}>
                <Icon size={14} />
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