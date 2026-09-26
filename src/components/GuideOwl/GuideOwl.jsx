import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GuideOwl.module.css';

const GuideOwl = () => {
  const location = useLocation();
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const [guideText, setGuideText] = useState("Hi! I'm your guide owl. Click on any card to interact! 🚀");
  const [tipIndex, setTipIndex] = useState(0);

  const pageTips = {
    '/': 'Welcome to your Dashboard! Track your XP and level up! 📈',
    '/games': 'Pick a game and start earning XP right away! 🎮',
    '/rewards': 'Your rewards are here! Reach the next level to unlock more! 🎁',
    '/achievements': 'Collect achievements to show off your progress! 🏆',
    '/refer': 'Invite friends and earn 100 XP per referral! 👥',
  };

  const guideTips = [
    "Hi! I'm your guide owl. Click on any card to interact! 🚀",
    "Pro tip: Play games daily to earn bonus XP! 🎮",
    "Refer friends to earn 100 XP per friend! 👥",
    "Keep your streak alive for multiplied rewards! 🔥",
    "Reach Level 05 to unlock 500 VEs! 🎁",
    "You're doing great! Keep earning XP! ⭐",
    "Check your achievements — collect them all! 🏆",
  ];

  useEffect(() => {
    const tip = pageTips[location.pathname] || 'Explore VELOOP Rewards! 🚀';
    setGuideText(tip);
    setBubbleOpen(true);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bubbleOpen && Math.random() > 0.4) {
        const nextIdx = (tipIndex + 1) % guideTips.length;
        setTipIndex(nextIdx);
        setGuideText(guideTips[nextIdx]);
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [bubbleOpen, tipIndex]);

  const burstConfetti = (x, y) => {
    const items = ['🎉','🎊','✨','⭐','💫','🏆','🎁','🪙','🌟','💎'];
    for (let i = 0; i < 20; i++) {
      const c = document.createElement('div');
      c.textContent = items[Math.floor(Math.random() * items.length)];
      c.style.position = 'fixed';
      c.style.left = x + 'px';
      c.style.top = y + 'px';
      c.style.fontSize = '22px';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.style.transition = 'all 1.2s ease-out';
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 100 + Math.random() * 150;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(720deg)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1300);
    }
  };

  const handleOwlClick = (e) => {
    const nextIdx = (tipIndex + 1) % guideTips.length;
    setTipIndex(nextIdx);
    setGuideText(guideTips[nextIdx]);
    setBubbleOpen(true);
    burstConfetti(e.clientX, e.clientY);
  };

  return (
    <div className={styles.guideOwl}>
      {bubbleOpen && (
        <div className={styles.guideOwlBubble}>
          <span className={styles.closeGuide} onClick={() => setBubbleOpen(false)}>✕</span>
          <span>{guideText}</span>
        </div>
      )}

      <div className={styles.guideOwlBtn} onClick={handleOwlClick}>
        <div className={styles.guideOwlPulse}></div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gOwlBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b388ff" />
              <stop offset="100%" stopColor="#5e35b1" />
            </linearGradient>
            <linearGradient id="gOwlBelly" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd93d" />
              <stop offset="100%" stopColor="#f4a62a" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="130" rx="55" ry="60" fill="url(#gOwlBody)" />
          <ellipse cx="100" cy="135" rx="40" ry="45" fill="url(#gOwlBelly)" />
          <ellipse cx="100" cy="140" rx="28" ry="32" fill="#ffa94d" />
          <circle cx="100" cy="75" r="50" fill="url(#gOwlBody)" />
          <path d="M 60 40 L 70 15 L 85 40 Z" fill="url(#gOwlBody)" />
          <path d="M 140 40 L 130 15 L 115 40 Z" fill="url(#gOwlBody)" />
          <circle cx="80" cy="75" r="18" fill="#fff" />
          <circle cx="120" cy="75" r="18" fill="#fff" />
          <circle cx="82" cy="77" r="9" fill="#0a0d1a" />
          <circle cx="122" cy="77" r="9" fill="#0a0d1a" />
          <circle cx="85" cy="73" r="3.5" fill="#fff" />
          <circle cx="125" cy="73" r="3.5" fill="#fff" />
          <path d="M 100 88 L 95 98 L 105 98 Z" fill="#ffa94d" />
        </svg>
      </div>
    </div>
  );
};

export default GuideOwl;