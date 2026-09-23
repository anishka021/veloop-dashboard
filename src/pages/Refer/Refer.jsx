import React from 'react';
import styles from './Refer.module.css';
import ColorCard from '../../components/ColorCard/ColorCard';
import { referCards } from '../../data/appData';

const Refer = () => {
  const handleClick = (e) => {
    const items = ['👥', '💰', '🎁', '🏆', '🚀'];
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
          <span className={styles.pageIcon}>👥</span>
          <h1 className={styles.gradientText}>Refer & Earn</h1>
          <p>Invite friends to VELOOP and earn 100 XP per successful referral. Unlimited earning potential!</p>
        </div>

        <div className={styles.colorGrid}>
          {referCards.map((card) => (
            <ColorCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              badge={card.badge}
              color={card.color}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Refer;