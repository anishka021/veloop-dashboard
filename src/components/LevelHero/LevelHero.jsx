import React from 'react';
import styles from './LevelHero.module.css';
import { Sparkles, TrendingUp } from 'lucide-react';

const LevelHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={styles.badge}>
        <Sparkles size={14} />
        <span>LEVEL UP YOUR REWARDS</span>
      </div>

      <h1 className={styles.title}>
        Level Up Your
        <span className={styles.gradientText}> Rewards</span>
      </h1>

      <p className={styles.subtitle}>
        Keep earning XP, unlock new levels, and discover
        <br className={styles.desktopBr} />
        better rewards along the way.
      </p>

      <div className={styles.statsStrip}>
        <div className={styles.statPill}>
          <TrendingUp size={14} />
          <span>80% to next level</span>
        </div>
      </div>
    </div>
  );
};

export default LevelHero;