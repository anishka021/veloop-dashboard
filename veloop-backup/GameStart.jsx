import React from 'react';
import styles from './GameStart.module.css';
import { BasketCharacter } from '../../Icons/SvgIcons';

const GameStart = ({ onStart }) => {
  const handleStart = (e) => {
    // Confetti
    const emojis = ['🎉','🎊','🪙','💎','⭐','🏆','🎁'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const c = document.createElement('div');
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.position = 'fixed';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = '-30px';
        c.style.pointerEvents = 'none';
        c.style.zIndex = '9999';
        c.style.fontSize = (20 + Math.random() * 16) + 'px';
        c.style.transition = `all ${2 + Math.random() * 2}s ease-in`;
        document.body.appendChild(c);
        setTimeout(() => {
          c.style.top = '110vh';
          c.style.transform = `rotate(${Math.random() * 720}deg)`;
          c.style.opacity = '0';
        }, 20);
        setTimeout(() => c.remove(), 4000);
      }, i * 40);
    }
    onStart();
  };

  return (
    <div className={styles.start}>
      <div className={styles.illustration}>
        <BasketCharacter size={160} />
      </div>
      <h2 className={styles.gameTitle}>VE Coin Catch</h2>
      <p className={styles.desc}>
        Catch as many falling VE coins as you can in 20 seconds and win XP!
      </p>

      <div className={styles.rules}>
        <div className={styles.rule}>⏱ <span>20 sec</span></div>
        <div className={styles.ruleDivider} />
        <div className={styles.rule}>🎯 <span>Catch coins</span></div>
        <div className={styles.ruleDivider} />
        <div className={styles.rule}>🏆 <span>+25 XP</span></div>
      </div>

      <button className={styles.startBtn} onClick={handleStart}>
        ▶ Start Game
      </button>

      <p className={styles.note}>Score 80+ to earn maximum reward</p>
    </div>
  );
};

export default GameStart;
