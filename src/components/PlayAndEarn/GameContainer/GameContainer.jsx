import React, { useState } from 'react';
import styles from './GameContainer.module.css';
import GameStart from '../GameStart/GameStart';
import GamePlay from '../GamePlay/GamePlay';
import GameResult from '../GameResult/GameResult';

const GameContainer = () => {
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameHeader}>
        <div className={styles.gameTitle}>🎮 Play & Earn</div>
        <div className={styles.gameTag}>🔥 Daily Challenge</div>
      </div>

      {gameState === 'start' && (
        <GameStart onStart={() => { setScore(0); setGameState('play'); }} />
      )}
      {gameState === 'play' && (
        <GamePlay onComplete={(finalScore) => { setScore(finalScore); setGameState('result'); }} />
      )}
      {gameState === 'result' && (
        <GameResult score={score} onReset={() => { setGameState('start'); setScore(0); }} />
      )}
    </div>
  );
};

export default GameContainer;