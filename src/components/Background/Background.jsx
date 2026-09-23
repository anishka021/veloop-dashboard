import React, { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    const bgLayer = document.getElementById('bgLayer');
    if (!bgLayer) return;

    const emojis = ['💎', '🏆', '⭐', '💫', '🎯', '🚀', '🔥', '✨', '🎊', '💡', '🎨', '🌟'];
    const colors = ['#ffd93d', '#ff6bcb', '#b388ff', '#64b5f6', '#6ee7b7', '#ffa94d'];

    for (let i = 0; i < 25; i++) {
      const e = document.createElement('div');
      e.style.position = 'absolute';
      e.style.opacity = '0.12';
      e.style.fontSize = (22 + Math.random() * 22) + 'px';
      e.style.animation = 'floatAnim 12s ease-in-out infinite';
      e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      e.style.left = Math.random() * 100 + '%';
      e.style.top = Math.random() * 100 + '%';
      e.style.color = colors[Math.floor(Math.random() * colors.length)];
      e.style.animationDelay = Math.random() * 10 + 's';
      e.style.animationDuration = (10 + Math.random() * 8) + 's';
      bgLayer.appendChild(e);
    }

    return () => {
      while (bgLayer.firstChild) {
        bgLayer.removeChild(bgLayer.firstChild);
      }
    };
  }, []);

  return (
    <div
      id="bgLayer"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    />
  );
};

export default Background;