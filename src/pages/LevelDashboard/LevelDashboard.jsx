import React, { useState, useEffect } from 'react';
import styles from './LevelDashboard.module.css';
import LevelHero from '../../components/LevelHero/LevelHero';
import CurrentLevel from '../../components/CurrentLevel/CurrentLevel';
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward';
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap';
import GameContainer from '../../components/PlayAndEarn/GameContainer/GameContainer.jsx';
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP';
import XPActivity from '../../components/XPActivity/XPActivity';
import LevelUpModal from '../../components/LevelUpModal/LevelUpModal';

const LevelDashboard = () => {
  const [showLevelUp, setShowLevelUp] = useState(false);

  // Demo: Modal open after 3s (sirf test ke liye)
  // Baad mein hata dena
  useEffect(() => {
    const t = setTimeout(() => setShowLevelUp(true), 3000);
    return () => clearTimeout(t);
  }, []);

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

        <EarnMoreXP />
      </div>

      <LevelUpModal
        isOpen={showLevelUp}
        onClose={() => setShowLevelUp(false)}
        newLevel={5}
        newLevelName="Achiever"
        reward="500 VEs"
      />
    </div>
  );
};

export default LevelDashboard;