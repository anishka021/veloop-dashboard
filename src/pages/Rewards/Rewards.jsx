import React from 'react';
import styles from './Rewards.module.css';
import ColorCard from '../../components/ColorCard/ColorCard';
import { rewardCards } from '../../data/appData';

const Rewards = () => {
  const handleClick = (e) => {
    if (!e) return;
    const items = ['💎', '🎁', '✨', '⭐'];
    for (let i = 0; i < 20; i++) {
      const c = document.createElement('div');
      c.textContent = items[Math.floor(Math.random() * items.length)];
      c.style.position = 'fixed';
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
      c.style.fontSize = '24px';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.style.transition = 'all 1.2s ease-out';
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 120 + Math.random() * 150;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.8)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1300);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHero}>
          <span className={styles.pageIcon}>🎁</span>
          <h1 className={styles.gradientText}>Your Rewards</h1>
          <p>Unlock premium rewards as you level up. Each level brings new and better rewards!</p>
        </div>

        <div className={styles.colorGrid}>
          {rewardCards.map((card) => (
            <ColorCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              badge={card.badge}
              color={card.color}
              disabled={card.locked}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;