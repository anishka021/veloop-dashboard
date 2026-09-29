import React from 'react';
import styles from './Refer.module.css';

const referCards = [
  { icon: '💰', title: '+100 XP', sub: 'Per successful referral', badge: '⚡ Instant', color: 'iconOrange' },
  { icon: '🎁', title: '+500 VEs', sub: '5 friends milestone', badge: '🎯 Milestone', color: 'iconRed' },
  { icon: '🏆', title: 'Referrer Badge', sub: '3 referrals unlock', badge: '🎖️ Badge', color: 'iconPurple' },
  { icon: '🚀', title: 'Super Referrer', sub: '10 friends premium', badge: '⭐ Premium', color: 'iconGreen' },
];

const Refer = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>👥 <span>REFER & EARN</span> 👥</div>
          <h1 className={styles.heroTitle}>Invite Friends, <span className={styles.gradientText}>Earn More</span></h1>
          <p className={styles.heroSubtitle}>Get 100 XP per successful referral. Unlimited earning!</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardGlow1}></div>
        <div className={styles.cardContent}>
          <div className={styles.earnGrid}>
            {referCards.map((card, idx) => (
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

export default Refer;