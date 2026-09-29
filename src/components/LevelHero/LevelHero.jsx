import React, { useMemo, useState, useEffect } from 'react';
import styles from './LevelHero.module.css';
import { OwlMascot } from '../Icons/SvgIcons';
import { motivationalQuotes, mascotMessages, levelData } from '../../data/appData';

const LevelHero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 2 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
      color: ['#ffd93d', '#ff6bcb', '#b388ff', '#64b5f6', '#6ee7b7'][Math.floor(Math.random() * 5)],
    })), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setQuoteIndex(i => (i + 1) % motivationalQuotes.length);
        setFading(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(i => (i + 1) % mascotMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleMascotClick = (e) => {
    const el = e.currentTarget;
    el.style.animation = 'none';
    setTimeout(() => { el.style.animation = 'jump 0.6s ease-in-out'; }, 10);

    const emojis = ['✨','⭐','💫','🌟','🎉','💎'];
    for (let i = 0; i < 20; i++) {
      const c = document.createElement('div');
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      c.style.position = 'fixed';
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.style.fontSize = (14 + Math.random() * 12) + 'px';
      c.style.transition = 'all 1s ease-out';
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 80 + Math.random() * 150;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.5) rotate(720deg)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1100);
    }
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
            background: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }} />
        ))}
      </div>

      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.glowOrb3} />
      <div className={styles.glowOrb4} />

      <div className={styles.content}>
        <div className={styles.mascot} onClick={handleMascotClick}>
          <OwlMascot size={160} />
          <span className={`${styles.mascotSparkle} ${styles.s1}`}>✨</span>
          <span className={`${styles.mascotSparkle} ${styles.s2}`}>⭐</span>
          <span className={`${styles.mascotSparkle} ${styles.s3}`}>💫</span>
          <span className={`${styles.mascotSparkle} ${styles.s4}`}>🌟</span>
          <div className={styles.speechBubble}>{mascotMessages[msgIndex]}</div>
        </div>

        <div className={styles.badge}>
          <span className={styles.badgeIcon}>✨</span>
          <span className={styles.badgeText}>LEVEL UP YOUR REWARDS</span>
          <span className={styles.badgeIcon}>✨</span>
        </div>

        <h1 className={styles.title}>
          Level Up Your
          <span className={styles.gradientText}> Rewards</span>
          <span className={styles.titleSparkle}>🎉</span>
        </h1>

        <p className={styles.subtitle}>
          Keep earning XP, unlock new levels, and discover
          better rewards along the way. Play games, complete challenges, and watch your rewards grow! 🌟
        </p>

        <div className={styles.statsStrip}>
          <div className={`${styles.statPill} ${styles.green}`}>
            <span className={styles.statIcon}>📈</span>
            <div className={styles.statText}>
              <span className={styles.statValue}>80%</span>
              <span className={styles.statLabel}>to next level</span>
            </div>
          </div>
          <div className={`${styles.statPill} ${styles.gold}`}>
            <span className={styles.statIcon}>⚡</span>
            <div className={styles.statText}>
              <span className={styles.statValue}>1,580</span>
              <span className={styles.statLabel}>XP left</span>
            </div>
          </div>
          <div className={`${styles.statPill} ${styles.purple}`}>
            <span className={styles.statIcon}>🎁</span>
            <div className={styles.statText}>
              <span className={styles.statValue}>500</span>
              <span className={styles.statLabel}>VEs waiting</span>
            </div>
          </div>
        </div>

        <div className={styles.quoteBox}>
          <div className={`${styles.quoteText} ${fading ? styles.fading : ''}`}>
            <span dangerouslySetInnerHTML={{ __html: motivationalQuotes[quoteIndex] }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelHero;