import React from 'react';
import styles from './Dashboard.module.css';
import LevelHero from '../../components/LevelHero/LevelHero';
import StatsGrid from '../../components/StatsGrid/StatsGrid';
import CurrentLevel from '../../components/CurrentLevel/CurrentLevel';
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward';
import GameContainer from '../../components/PlayAndEarn/GameContainer/GameContainer';
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap';
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP';
import XPActivity from '../../components/XPActivity/XPActivity';

const Dashboard = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LevelHero />
        <StatsGrid />
        <CurrentLevel />
        <NextLevelReward />
        <GameContainer />
        <LevelRoadmap />
        <EarnMoreXP />
        <XPActivity />
      </div>
    </div>
  );
};

export default Dashboard;