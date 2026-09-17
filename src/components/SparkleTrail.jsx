import React, { useEffect } from 'react';

const SparkleTrail = () => {
  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 100) return;
      lastTime = now;

      const sparkle = document.createElement('div');
      const emojis = ['✨', '⭐', '💫', '🌟'];
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.position = 'fixed';
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '9999';
      sparkle.style.fontSize = '16px';
      sparkle.style.animation = 'sparklePop 0.8s ease-out forwards';
      sparkle.style.userSelect = 'none';
      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 800);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default SparkleTrail;
