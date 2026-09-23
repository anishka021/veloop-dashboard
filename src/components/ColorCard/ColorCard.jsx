import React from 'react';
import styles from './ColorCard.module.css';

const ColorCard = ({ icon, title, desc, badge, color, onClick, disabled }) => {
  return (
    <div
      className={`${styles.colorCard} ${styles[color]} ${disabled ? styles.disabled : ''}`}
      onClick={disabled ? undefined : onClick}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3>{title}</h3>
        <p className={styles.cardSubtitle}>{desc}</p>
        <span className={styles.cardBadge}>{badge}</span>
      </div>
    </div>
  );
};

export default ColorCard;