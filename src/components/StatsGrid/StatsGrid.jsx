import React from 'react';
import styles from './StatsGrid.module.css';

const StatsGrid = () => {
  const stats = [
    { icon: '📈', value: '80%', label: 'To Next Level', color: 'green' },
    { icon: '⚡', value: '1,580', label: 'XP Left', color: 'gold' },
    { icon: '🎁', value: '500', label: 'VEs Waiting', color: 'pink' },
    { icon: '🏆', value: '3', label: 'Badges', color: 'purple' },
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`${styles.statBox} ${styles[stat.color]}`}
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className={styles.statBoxIcon}>{stat.icon}</div>
          <div className={styles.statBoxValue}>{stat.value}</div>
          <div className={styles.statBoxLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;