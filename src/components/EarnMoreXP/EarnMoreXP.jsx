import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EarnMoreXP.module.css';

const earnCards = [
  { icon: '📺', title: 'Watch & Earn', sub: 'Watch ads and earn', xp: '+50 XP', color: 'iconPurple' },
  { icon: '✅', title: 'Daily Missions', sub: 'Complete daily tasks', xp: '+30 XP', color: 'iconGreen' },
  { icon: '👥', title: 'Refer & Earn', sub: 'Invite friends & earn', xp: '+100 XP', color: 'iconOrange' },
  { icon: '🎮', title: 'Mini Games', sub: 'Play games & win', xp: '+75 XP', color: 'iconBlue' },
  { icon: '🔥', title: 'Streak Bonus', sub: 'Maintain your streak', xp: '+25 XP', color: 'iconRed' },
  { icon: '🎯', title: 'XP Catcher', sub: 'Catch orbs & coins', xp: '+10 XP', color: 'iconCyan' },
];

const EarnMoreXP = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.cardGlow1}></div>
      <div className={styles.cardContent}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionTitle}>⚡ Earn More XP & Rewards</div>
            <div className={styles.sectionSub}>Complete activities to level up faster</div>
          </div>
          <div className={styles.sectionLink} onClick={() => navigate('/games')}>
            View All →
          </div>
        </div>
        <div className={styles.earnGrid}>
          {earnCards.map((card, idx) => (
            <div key={idx} className={styles.earnCard}>
              <div className={`${styles.earnCardIcon} ${styles[card.color]}`}>
                {card.icon}
              </div>
              <div className={styles.earnCardTitle}>{card.title}</div>
              <div className={styles.earnCardSub}>{card.sub}</div>
              <div className={styles.earnCardReward}>
                <span className={styles.earnCardXP}>{card.xp}</span>
                <span className={styles.earnCardArrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarnMoreXP;