import React from 'react';
import styles from './LevelDashboard.module.css';
import LevelHero from '../../components/LevelHero/LevelHero';
import AchievementsStrip from '../../components/AchievementsStrip/AchievementsStrip';
import CurrentLevel from '../../components/CurrentLevel/CurrentLevel';
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward';
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap';
import GameContainer from '../../components/PlayAndEarn/GameContainer/GameContainer';
import XPActivity from '../../components/XPActivity/XPActivity';
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP';
import SparkleTrail from '../../components/SparkleTrail/SparkleTrail';
import CoinRain from '../../components/CoinRain/CoinRain';

const LevelDashboard = () => {
  return (
    <div className={styles.page}>
      <SparkleTrail />
      <CoinRain />

      <div className={styles.container}>
        <LevelHero />
        <AchievementsStrip />

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
