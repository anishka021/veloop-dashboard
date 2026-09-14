import React from 'react';
import styles from './NextLevelReward.module.css';
import { Lock, Gift, Info, Sparkles } from 'lucide-react';
import { levelData } from '../../data/levelData';

const NextLevelReward = () => {
  return (
    <div className={styles.card}>
      <div className={styles.bgGlow} />
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Lock size={12} />
          <span className={styles.label}>NEXT LEVEL REWARD</span>
        </div>
        <Info size={14} className={styles.infoIcon} />
      </div>

      <div className={styles.visual}>
        <div className={styles.chestWrap}>
          <div className={styles.chestGlow} />
          <div className={styles.chest}>
            <Gift size={42} strokeWidth={1.5} />
          </div>
          <div className={styles.sparkle1}><Sparkles size={14} /></div>
          <div className={styles.sparkle2}><Sparkles size={10} /></div>
        </div>
        <div className={styles.amount}>
          <span className={styles.amountNum}>{levelData.nextLevelReward.amount}</span>
          <span className={styles.amountUnit}>{levelData.nextLevelReward.type}</span>
        </div>
      </div>

      <div className={styles.lockMsg}>
        <Lock size={13} />
        <span>Reach <strong>Level {String(levelData.nextLevel).padStart(2, '0')}</strong> to unlock</span>
      </div>

      <div className={styles.progressWrap}>
        <div className={styles.miniProgress}>
          <div className={styles.miniFill} style={{ width: '80%' }}>
            <div className={styles.miniGlow} />
          </div>
        </div>
        <span className={styles.percent}>80%</span>
      </div>
    </div>
  );
};

export default NextLevelReward;