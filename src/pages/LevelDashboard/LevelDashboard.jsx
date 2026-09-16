import React from 'react';
import styles from './LevelDashboard.module.css';
import LevelHero from '../../components/LevelHero/LevelHero';
import CurrentLevel from '../../components/CurrentLevel/CurrentLevel';
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward';
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap';
import GameContainer from '../../components/PlayAndEarn/GameContainer/GameContainer';
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP';
import XPActivity from '../../components/XPActivity/XPActivity';
import SparkleTrail from '../../components/SparkleTrail/SparkleTrail';

const LevelDashboard = () => {
  return (
    <div className={styles.page}>
      <SparkleTrail />

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
    </div>
  );
};

export default LevelDashboard;
