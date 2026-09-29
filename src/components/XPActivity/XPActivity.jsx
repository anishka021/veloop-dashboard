import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './XPActivity.module.css';

const activities = [
  { icon: '👥', title: 'Referral Bonus', time: 'Today, 10:45 AM', amount: '+20 XP', iconClass: 'referral' },
  { icon: '🎯', title: 'Daily Mission', time: 'Today, 09:12 AM', amount: '+50 XP', iconClass: 'daily' },
  { icon: '🎮', title: 'Mini Game Win', time: 'Today, 08:30 AM', amount: '+75 XP', iconClass: 'mini' },
  { icon: '💎', title: 'XP Catcher Reward', time: 'Today, 07:50 AM', amount: '+10 VEs', iconClass: 'catcher', ves: true },
  { icon: '🔥', title: 'Streak Bonus', time: 'Today, 07:20 AM', amount: '+25 XP', iconClass: 'streak' },
];

const XPActivity = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.cardGlow1}></div>
      <div className={styles.cardContent}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionTitle}>📈 Recent Activity</div>
            <div className={styles.sectionSub}>Your latest rewards</div>
          </div>
          <div className={styles.sectionLink} onClick={() => navigate('/rewards')}>
            View All →
          </div>
        </div>
        <div className={styles.activityList}>
          {activities.map((activity, idx) => (
            <div key={idx} className={styles.activityItem}>
              <div className={`${styles.rewardIcon} ${styles[activity.iconClass]}`}>
                {activity.icon}
              </div>
              <div className={styles.activityBody}>
                <div className={styles.activitySource}>{activity.title}</div>
                <div className={styles.activityTime}>{activity.time}</div>
              </div>
              <div className={`${styles.activityAmount} ${activity.ves ? styles.ves : ''}`}>
                {activity.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XPActivity;