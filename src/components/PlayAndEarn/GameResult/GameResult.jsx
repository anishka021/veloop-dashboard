import React, { useEffect, useState } from 'react';
import styles from './GameResult.module.css';
import { Trophy, RotateCcw, Zap } from 'lucide-react';

const GameResult = ({ score, onReset }) => {
  const reward = score >= 80 ? 25 : score >= 50 ? 15 : 10;
  const isHighScore = score >= 80;
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(score / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= score) { setAnimatedScore(score); clearInterval(timer); }
      else setAnimatedScore(current);
    }, 30);
    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className={styles.result}>
      <div className={styles.trophyWrap}>
        <div className={styles.trophyGlow} />
        <div className={`${styles.trophy} ${isHighScore ? styles.high : ''}`}>
          <Trophy size={44} strokeWidth={1.5} />
        </div>
      </div>

      <h2 className={styles.title}>
        {isHighScore ? 'Excellent!' : score >= 50 ? 'Great Job!' : 'Good Try!'}
      </h2>

      <div className={styles.scoreBox}>
        <div className={styles.scoreLabel}>YOUR SCORE</div>
        <div className={styles.scoreValue}>{animatedScore}</div>
      </div>

      <div className={styles.rewardBox}>
        <Zap size={18} />
        <span>+{reward} XP Earned</span>
      </div>

      <button className={styles.replayBtn} onClick={onReset}>
        <RotateCcw size={16} />
        Play Again
      </button>

      <p className={styles.note}>Demo reward — final values pending approval</p>
    </div>
  );
};

export default GameResult;