import React from 'react';
import styles from './GameStart.module.css';

const GameStart = ({ onStart }) => {
  const handleStart = (e) => {
    const emojis = ['🎉', '🎊', '🪙', '💎', '⭐', '🏆', '🎁'];
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
    <div className={styles.gameBody}>
      <div className={styles.gameIllustration}>
        <span className={styles.gameCoin} style={{ top: '10px', left: '20px' }}>🪙</span>
        <span className={styles.gameCoin} style={{ top: '30px', right: '20px', animationDelay: '0.5s' }}>⭐</span>
        <span className={styles.gameCoin} style={{ top: '60px', left: '60px', animationDelay: '1s' }}>💎</span>
        <div className={styles.gameBasket}>🧺</div>
      </div>
      <div className={styles.gameContent}>
        <h2 className={styles.gameH2}>
          VE <span className={styles.gradient}>Coin Catch</span>
        </h2>
        <p className={styles.gameDesc}>
          Catch as many falling VE coins as you can in 20 seconds and win XP!
        </p>
        <div className={styles.gameRules}>
          <div className={styles.gameRule}>⏱ 20 sec</div>
          <div className={styles.gameRule}>🎯 Catch coins</div>
          <div className={styles.gameRule}>🏆 +25 XP</div>
        </div>
        <button className={styles.startBtn} onClick={handleStart}>
          ▶ Start Game
        </button>
      </div>
    </div>
  );
};

export default GameStart;