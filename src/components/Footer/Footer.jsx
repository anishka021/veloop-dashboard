import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <div className={styles.navLogo} onClick={() => navigate('/')}>
            <div className={styles.logoIcon}>💎</div>
            <span className={styles.logoText}>VELOOP</span>
          </div>
          <p className={styles.footerDesc}>
            Level up your rewards, play games, and earn XP every day. Join millions of users already unlocking premium rewards.
          </p>
          <div className={styles.footerSocials}>
            <div className={styles.socialBtn}>𝕏</div>
            <div className={styles.socialBtn}>📷</div>
            <div className={styles.socialBtn}>💬</div>
            <div className={styles.socialBtn}>📧</div>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Platform</h4>
          <a onClick={() => navigate('/')}>🏠 Dashboard</a>
          <a onClick={() => navigate('/games')}>🎮 Games</a>
          <a onClick={() => navigate('/rewards')}>🎁 Rewards</a>
          <a onClick={() => navigate('/achievements')}>🏆 Achievements</a>
          <a onClick={() => navigate('/refer')}>👥 Refer & Earn</a>
        </div>

        <div className={styles.footerCol}>
          <h4>Company</h4>
          <a>About Us</a>
          <a>Careers</a>
          <a>Blog</a>
          <a>Press Kit</a>
        </div>

        <div className={styles.footerCol}>
          <h4>Support</h4>
          <a>Help Center</a>
          <a>Contact Us</a>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>© 2026 VELOOP Rewards. All rights reserved.</div>
        <div>Made with ❤️ by Anishka Negi</div>
      </div>
    </footer>
  );
};

export default Footer;