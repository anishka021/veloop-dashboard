import React from 'react';
import styles from './GameStart.module.css';

const GameStart = ({ onStart }) => {
  return (
    <div className={styles.start}>
      <div className={styles.illustration}>
        <div className={styles.coinMain}>🪙</div>
      </div>

      <h2 className={styles.gameTitle}>VE Coin Catch</h2>
      <p className={styles.desc}>Catch as many falling VE coins as you can in 20 seconds!</p>

      <div className={styles.rules}>
        <div className={styles.rule}>⏱ <span>20 sec</span></div>
        <div className={styles.ruleDivider} />
        <div className={styles.rule}>🎯 <span>Catch coins</span></div>
        <div className={styles.ruleDivider} />
        <div className={styles.rule}>🏆 <span>+25 XP</span></div>
      </div>

      <button className={styles.startBtn} onClick={onStart}>
        ▶ Start Game
      </button>

      <p className={styles.note}>Score 80+ to earn maximum reward</p>
    </div>
  );
};

export default GameStart;
