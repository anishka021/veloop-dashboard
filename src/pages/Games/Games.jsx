import React from 'react';
import styles from './Games.module.css';

const gameCards = [
  { icon: '🪙', title: 'VE Coin Catch', sub: 'Catch falling coins — 20 sec challenge', xp: '🔥 Most Popular', color: 'iconBlue' },
  { icon: '🧩', title: 'Reward Memory', sub: 'Match cards, test memory', xp: '+20 XP', color: 'iconPurple' },
  { icon: '⚡', title: 'Tap Challenge', sub: 'Complete timed taps', xp: '+15 XP', color: 'iconGreen' },
  { icon: '🎁', title: 'Lucky Box', sub: 'Pick a reward box', xp: '+10 XP', color: 'iconOrange' },
  { icon: '🏃', title: 'VE Sprint', sub: 'Skill-based challenge', xp: '+25 XP', color: 'iconRed' },
  { icon: '🧠', title: 'Daily Puzzle', sub: 'Coming soon', xp: '🔜 Soon', color: 'iconCyan' },
];

const Games = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>🎮 <span>PLAY & EARN</span> 🎮</div>
            <h1 className={styles.heroTitle}>Games <span className={styles.gradientText}>Hub</span></h1>
            <p className={styles.heroSubtitle}>Challenge yourself, play games, and earn XP with every win!</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardGlow1}></div>
          <div className={styles.cardContent}>
            <div className={styles.earnGrid}>
              {gameCards.map((card, idx) => (
                <div key={idx} className={styles.earnCard}>
                  <div className={`${styles.earnCardIcon} ${styles[card.color]}`}>{card.icon}</div>
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
      </div>
    </div>
  );
};

export default Games;