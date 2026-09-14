import React from 'react';
import styles from './EarnMoreXP.module.css';
import { Target, Video, Users, Gamepad2, Star, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { earningOpportunities } from '../../data/levelData';

const iconMap = {
  target: Target, video: Video, users: Users,
  gamepad: Gamepad2, star: Star, flame: Flame,
};

const EarnMoreXP = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>
            <Sparkles size={18} />
            Earn More XP & Rewards
          </h3>
          <p className={styles.subtitle}>Complete activities to level up faster</p>
        </div>
      </div>

      <div className={styles.grid}>
        {earningOpportunities.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className={`${styles.card} ${item.comingSoon ? styles.disabled : ''} ${styles[item.color]}`}
              style={{ animationDelay: `${0.5 + idx * 0.05}s` }}
            >
              <div className={styles.cardGlow} />
              {item.comingSoon && (
                <span className={styles.badge}>Coming Soon</span>
              )}

              <div className={styles.iconWrap}>
                <Icon size={22} strokeWidth={1.75} />
              </div>

              <h4 className={styles.cardTitle}>{item.title}</h4>
              <div className={styles.reward}>{item.reward}</div>
              <p className={styles.desc}>{item.desc}</p>

              {!item.comingSoon && (
                <button className={styles.cta}>
                  Start
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EarnMoreXP;