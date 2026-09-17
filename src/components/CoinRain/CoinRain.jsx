import React, { useEffect } from 'react';

const CoinRain = () => {
  useEffect(() => {
    const rainCoins = () => {
      const coins = ['🪙', '💰', '💎', '⭐'];
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const c = document.createElement('div');
          c.textContent = coins[Math.floor(Math.random() * coins.length)];
          c.style.position = 'fixed';
          c.style.top = '-50px';
          c.style.left = Math.random() * 100 + 'vw';
          c.style.pointerEvents = 'none';
          c.style.zIndex = '9998';
          c.style.fontSize = (18 + Math.random() * 14) + 'px';
          c.style.animation = `coinFall ${4 + Math.random() * 3}s linear forwards`;
          c.style.filter = 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))';
          document.body.appendChild(c);
          setTimeout(() => c.remove(), 8000);
        }, i * 200);
      }
    };

    const timer1 = setTimeout(rainCoins, 2000);
    const interval = setInterval(rainCoins, 6000);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default CoinRain;