import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './GamePlay.module.css';

const GAME_DURATION = 20;

const GamePlay = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [coins, setCoins] = useState([]);
  const [playerX, setPlayerX] = useState(50);
  const gameRef = useRef(null);

  useEffect(() => {
    if (timeLeft <= 0) { onComplete(score); return; }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, score, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prev => [...prev, {
        id: Date.now() + Math.random(),
        x: Math.random() * 88 + 6,
        y: -10,
        speed: 2.5 + Math.random() * 2,
      }]);
    }, 650);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const move = setInterval(() => {
      setCoins(prev => {
        const updated = [];
        prev.forEach(coin => {
          const newY = coin.y + coin.speed;
          if (newY > 80 && newY < 94 && Math.abs(coin.x - playerX) < 11) {
            setScore(s => s + 1);
          } else if (newY < 102) {
            updated.push({ ...coin, y: newY });
          }
        });
        return updated;
      });
    }, 45);
    return () => clearInterval(move);
  }, [playerX]);

  const handleMouseMove = useCallback((e) => {
    if (!gameRef.current) return;
    const rect = gameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.max(6, Math.min(94, x)));
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!gameRef.current) return;
    const rect = gameRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.max(6, Math.min(94, x)));
  }, []);

  const timePercent = (timeLeft / GAME_DURATION) * 100;

  return (
    <div
      ref={gameRef}
      className={styles.gameArea}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
    >
      <div className={styles.hud}>
        <div className={styles.scoreBox}>
          <span className={styles.hudLabel}>SCORE</span>
          <span className={styles.hudValue}>{score}</span>
        </div>
        <div className={styles.timerBox}>
          <span className={styles.hudLabel}>TIME</span>
          <div className={styles.timerBarWrap}>
            <div className={styles.timerBar} style={{ width: `${timePercent}%` }} />
          </div>
          <span className={`${styles.hudValue} ${timeLeft <= 5 ? styles.danger : ''}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {coins.map(coin => (
        <div
          key={coin.id}
          className={styles.coin}
          style={{ left: `${coin.x}%`, top: `${coin.y}%` }}
        >
          🪙
        </div>
      ))}

      <div className={styles.player} style={{ left: `${playerX}%` }}>🧺</div>
    </div>
  );
};

export default GamePlay;
