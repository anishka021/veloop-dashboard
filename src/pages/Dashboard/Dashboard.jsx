import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import LevelHero from '../../components/LevelHero/LevelHero';
import CurrentLevel from '../../components/CurrentLevel/CurrentLevel';
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward';
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap';
import GameContainer from '../../components/PlayAndEarn/GameContainer/GameContainer';
import XPActivity from '../../components/XPActivity/XPActivity';
import ColorCard from '../../components/ColorCard/ColorCard';
import { earnCards } from '../../data/appData';

const Dashboard = () => {
  const handleCardClick = (e) => {
    const items = ['🎉', '🎊', '✨', '⭐', '💫', '🏆', '🎁'];
    for (let i = 0; i < 25; i++) {
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

      const angle = (Math.PI * 2 * i) / 25;
      const distance = 120 + Math.random() * 180;

      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.8) rotate(720deg)`;
        c.style.opacity = '0';
      }, 10);

      setTimeout(() => c.remove(), 1300);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LevelHero />

        <div className={styles.row2}>
          <CurrentLevel />
          <NextLevelReward />
        </div>

        <LevelRoadmap />

        <div className={styles.row2Game}>
          <GameContainer />
          <XPActivity />
        </div>

        <div>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTitle}>✨ Earn More XP & Rewards</div>
              <div className={styles.sectionSubtitle}>Complete activities to level up faster</div>
            </div>
            <div className={styles.sectionBadge}>6 Opportunities</div>
          </div>

          <div className={styles.colorGrid}>
            {earnCards.map((card) => (
              <ColorCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                badge={card.badge}
                color={card.color}
                disabled={!card.active}
                onClick={(e) => handleCardClick(e)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;