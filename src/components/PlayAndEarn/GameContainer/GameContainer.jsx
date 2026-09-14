import React, { useState } from 'react';
import styles from './GameContainer.module.css';
import GameStart from '../GameStart/GameStart';
import GamePlay from '../GamePlay/GamePlay';
import GameResult from '../GameResult/GameResult';
import { Gamepad2 } from 'lucide-react';

const GameContainer = () => {
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScore(0);
    setGameState('play');
  };

  const handleComplete = (finalScore) => {
    setScore(finalScore);
    setGameState('result');
  };

  const handleReset = () => {
    setGameState('start');
    setScore(0);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <Gamepad2 size={18} />
          Play & Earn
        </h3>
        <span className={styles.tag}>Daily Challenge</span>
      </div>
      <div>
        {gameState === 'start' && <GameStart onStart={handleStart} />}
        {gameState === 'play' && <GamePlay onComplete={handleComplete} />}
        {gameState === 'result' && <GameResult score={score} onReset={handleReset} />}
      </div>
    </div>
  );
};

export default GameContainer;