import React from 'react';
import styles from './Achievements.module.css';

const achievements = [
  { icon: '⭐', title: 'First Step', sub: 'Complete first task', badge: '✓ Unlocked', color: 'iconOrange' },
  { icon: '🎯', title: 'Focused', sub: '5 daily challenges in a row', badge: '✓ Unlocked', color: 'iconBlue' },
  { icon: '🔥', title: 'On Fire', sub: '7-day streak', badge: '✓ Unlocked', color: 'iconRed' },
  { icon: '🏅', title: 'Champion', sub: 'Reach Level 05', badge: '🔒 Locked', color: 'iconPurple' },
  { icon: '👑', title: 'Legend', sub: 'Reach Level 10', badge: '🔒 Locked', color: 'iconGreen' },
  { icon: '💎', title: 'Diamond', sub: 'All achievements', badge: '🔒 Locked', color: 'iconCyan' },
];

const Achievements = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>🏆 <span>ACHIEVEMENTS</span> 🏆</div>
          <h1 className={styles.heroTitle}>Your <span className={styles.gradientText}>Badges</span></h1>
          <p className={styles.heroSubtitle}>Collect badges and show off your progress!</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardGlow1}></div>
        <div className={styles.cardContent}>
          <div className={styles.earnGrid}>
            {achievements.map((card, idx) => (
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

export default Achievements;