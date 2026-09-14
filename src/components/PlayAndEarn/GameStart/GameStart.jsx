import React from 'react';
import styles from './GameStart.module.css';
import { Play, Trophy, Clock, Target, Coins } from 'lucide-react';

const GameStart = ({ onStart }) => {
  return (
    <div className={styles.start}>
      <div className={styles.illustration}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.coinMain}>
          <Coins size={44} strokeWidth={1.5} />
        </div>
      </div>

      <h2 className={styles.gameTitle}>VE Coin Catch</h2>
      <p className={styles.desc}>
        Catch as many falling VE coins as you can in 20 seconds!
      </p>

      <div className={styles.rules}>
        <div className={styles.rule}>
          <Clock size={14} />
          <span>20 sec</span>
        </div>
        <div className={styles.ruleDivider} />
        <div className={styles.rule}>
          <Target size={14} />
          <span>Catch coins</span>
        </div>
        <div className={styles.ruleDivider} />
        <div className={styles.rule}>
          <Trophy size={14} />
          <span>+25 XP</span>
        </div>
      </div>

      <button className={styles.startBtn} onClick={onStart}>
        <Play size={16} fill="currentColor" />
        Start Game
      </button>

      <p className={styles.note}>Score 80+ to earn maximum reward</p>
    </div>
  );
};

export default GameStart;