import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import SparkleTrail from './components/SparkleTrail/SparkleTrail';
import GuideOwl from './components/GuideOwl/GuideOwl';
import Dashboard from './pages/Dashboard/Dashboard';
import Games from './pages/Games/Games';
import Rewards from './pages/Rewards/Rewards';
import Achievements from './pages/Achievements/Achievements';
import Refer from './pages/Refer/Refer';

function App() {
  return (
    <>
      <Background />
      <SparkleTrail />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/games" element={<Games />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/refer" element={<Refer />} />
      </Routes>
      <Footer />
      <GuideOwl />
    </>
  );
}

export default App;