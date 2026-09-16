import React, { useMemo } from 'react';
import styles from './LevelHero.module.css';

const LevelHero = () => {
  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.5,
    })), []);

  const handleMascotClick = (e) => {
    const mascot = e.currentTarget;
    mascot.style.animation = 'none';
    setTimeout(() => { mascot.style.animation = 'jump 0.6s ease-in-out'; }, 10);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.particles}>
        {particles.map(p => (
          <span key={p.id} className={styles.particle} style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }} />
        ))}
      </div>

      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.glowOrb3} />

      <div className={styles.content}>
        <div className={styles.mascot} onClick={handleMascotClick}>
          🦉
          <span className={`${styles.mascotSparkle} ${styles.s1}`}>✨</span>
          <span className={`${styles.mascotSparkle} ${styles.s2}`}>⭐</span>
          <span className={`${styles.mascotSparkle} ${styles.s3}`}>💫</span>
        </div>

        <div className={styles.badge}>
          ✨ <span>LEVEL UP YOUR REWARDS</span>
        </div>

        <h1 className={styles.title}>
          Level Up Your
          <span className={styles.gradientText}> Rewards</span>
          <span className={styles.titleSparkle}>🎉</span>
        </h1>

        <p className={styles.subtitle}>
          Keep earning XP, unlock new levels, and discover
          <br className={styles.desktopBr} />
          better rewards along the way.
        </p>

        <div className={styles.statsStrip}>
          <div className={`${styles.statPill} ${styles.green}`}>📈 <span>80% to next level</span></div>
          <div className={`${styles.statPill} ${styles.gold}`}>⚡ <span>1,580 XP left</span></div>
        </div>
      </div>
    </div>
  );
};

export default LevelHero;
