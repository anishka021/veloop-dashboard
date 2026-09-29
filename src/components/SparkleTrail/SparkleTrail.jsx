import React, { useEffect } from 'react';

const SparkleTrail = () => {
  useEffect(() => {
    let lastSparkle = 0;

    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastSparkle > 100) {
        const s = document.createElement('div');
        const colors = ['#ffd93d', '#ff6bcb', '#b388ff', '#64b5f6', '#6ee7b7'];
        s.textContent = ['✨', '⭐', '💫', '🌟', '💎'][Math.floor(Math.random() * 5)];
        s.style.position = 'fixed';
        s.style.color = colors[Math.floor(Math.random() * colors.length)];
        s.style.left = e.clientX + 'px';
        s.style.top = e.clientY + 'px';
        s.style.fontSize = '18px';
        s.style.pointerEvents = 'none';
        s.style.zIndex = '9999';
        s.style.animation = 'sparkPop 0.9s ease-out forwards';
        s.style.filter = 'drop-shadow(0 0 8px currentColor)';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 900);
        lastSparkle = now;
      }
    };

    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
};

export default SparkleTrail;