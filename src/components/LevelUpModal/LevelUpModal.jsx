import React from 'react';
import styles from './LevelUpModal.module.css';
import { Sparkles, Trophy, X, Gift } from 'lucide-react';

const LevelUpModal = ({ isOpen, onClose, newLevel = 5, newLevelName = "Achiever", reward = "500 VEs" }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={18} />
        </button>

        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        <div className={styles.particles}>
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.celebrateIcon}>
            <Sparkles size={22} />
          </div>

          <h2 className={styles.title}>
            <span className={styles.titleGradient}>LEVEL UP!</span>
          </h2>

          <div className={styles.badgeWrap}>
            <div className={styles.badgeGlow} />
            <div className={styles.badge}>
              <span className={styles.badgeNum}>{String(newLevel).padStart(2, '0')}</span>
            </div>
          </div>

          <div className={styles.levelName}>{newLevelName}</div>

          <div className={styles.rewardBox}>
            <Gift size={16} />
            <span>{reward} Unlocked</span>
          </div>

          <div className={styles.achievement}>
            <Trophy size={14} />
            <span>Achievement Unlocked</span>
          </div>

          <button className={styles.continueBtn} onClick={onClose}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelUpModal;