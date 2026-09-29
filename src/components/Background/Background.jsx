import React, { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    const bgLayer = document.getElementById('bgEmojisLayer');
    if (!bgLayer) return;

    const emojis = ['💎', '🏆', '⭐', '💫', '🎯', '🚀', '🔥', '✨', '🎊', '💡', '🎨', '🌟'];

    for (let i = 0; i < 20; i++) {
      const e = document.createElement('div');
      e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      e.style.position = 'absolute';
      e.style.opacity = '0.08';
      e.style.left = Math.random() * 100 + '%';
      e.style.top = Math.random() * 100 + '%';
      e.style.fontSize = (24 + Math.random() * 24) + 'px';
      e.style.animation = `float ${10 + Math.random() * 8}s ease-in-out infinite`;
      e.style.animationDelay = Math.random() * 10 + 's';
      e.style.pointerEvents = 'none';
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
      id="bgEmojisLayer"
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