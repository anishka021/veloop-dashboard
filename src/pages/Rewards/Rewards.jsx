import React from 'react';
import styles from './Rewards.module.css';

const rewards = [
  { icon: '💎', title: '500 VEs', sub: 'Next level reward', badge: '🔒 Level 05', color: 'iconBlue' },
  { icon: '✅', title: '100 VEs', sub: 'Level 02 reward', badge: '✓ Claimed', color: 'iconGreen' },
  { icon: '💠', title: '10 Gems', sub: 'Level 03 reward', badge: '✓ Claimed', color: 'iconPurple' },
  { icon: '🎰', title: '2 Spins', sub: 'Level 06 reward', badge: '🔒 Level 06', color: 'iconRed' },
];

const Rewards = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🎁 <span>YOUR REWARDS</span> 🎁</div>
          <h1 className={styles.heroTitle}>Unlock <span className={styles.gradientText}>Rewards</span></h1>
          <p className={styles.heroSubtitle}>Level up and unlock amazing rewards!</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardGlow1}></div>
        <div className={styles.cardContent}>
          <div className={styles.earnGrid}>
            {rewards.map((card, idx) => (
              <div key={idx} className={styles.earnCard}>
                <div className={`${styles.earnCardIcon} ${styles[card.color]}`}>{card.icon}</div>
                <div className={styles.earnCardTitle}>{card.title}</div>
                <div className={styles.earnCardSub}>{card.sub}</div>
                <div className={styles.earnCardReward}>
                  <span className={styles.earnCardXP}>{card.badge}</span>
                  <span className={styles.earnCardArrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Rewards;