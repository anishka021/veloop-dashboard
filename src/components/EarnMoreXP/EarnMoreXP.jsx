import React from 'react';
import styles from './EarnMoreXP.module.css';
import { earningOpportunities } from '../../data/levelData';

const EarnMoreXP = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>✨ Earn More XP & Rewards</div>
        <div className={styles.subtitle}>Complete activities to level up faster</div>
      </div>

      <div className={styles.grid}>
        {earningOpportunities.map((item, idx) => (
          <div
            key={item.id}
            className={`${styles.card} ${styles[item.color]} ${item.comingSoon ? styles.disabled : ''}`}
            style={{ animationDelay: `${0.75 + idx * 0.05}s` }}
          >
            {item.comingSoon && <span className={styles.badge}>Coming Soon</span>}
            <div className={styles.iconWrap}>{item.icon}</div>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <div className={styles.reward}>{item.reward}</div>
            <p className={styles.desc}>{item.desc}</p>
            {!item.comingSoon && <button className={styles.cta}>Start →</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarnMoreXP;
