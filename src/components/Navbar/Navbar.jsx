import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { icon: '🏠', label: 'Dashboard', subtitle: 'Level & XP', path: '/' },
    { icon: '🎮', label: 'Games', subtitle: 'Play & Earn', path: '/games' },
    { icon: '🎁', label: 'Rewards', subtitle: 'Unlock Now', path: '/rewards' },
    { icon: '🏆', label: 'Achievements', subtitle: 'Badges', path: '/achievements' },
    { icon: '👥', label: 'Refer', subtitle: 'Earn More', path: '/refer' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  const handleLogout = () => {
    setShowDropdown(false);
    setShowMobileMenu(false);
    localStorage.removeItem('veloop_user');
    localStorage.removeItem('veloop_token');

    // Confetti
    for (let i = 0; i < 25; i++) {
      const c = document.createElement('div');
      const emojis = ['👋', '✨', '🌟', '💫', '🎉', '⭐'];
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      c.style.position = 'fixed';
      c.style.left = '50%';
      c.style.top = '100px';
      c.style.fontSize = '24px';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.style.transition = 'all 1.2s ease-out';
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 25;
      const distance = 150 + Math.random() * 150;
      setTimeout(() => {
        c.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(720deg)`;
        c.style.opacity = '0';
      }, 10);
      setTimeout(() => c.remove(), 1300);
    }

    setTimeout(() => {
      alert('👋 You have been logged out successfully!\n\nSee you soon at VELOOP Rewards!');
    }, 500);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowDropdown(false);
    setShowMobileMenu(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.navLogo} onClick={() => handleNavigate('/')}>
          <div className={styles.logoIcon}>💎</div>
          <span className={styles.logoText}>VELOOP</span>
        </div>

        {/* Desktop Menu */}
        <div className={styles.navMenu}>
          {menuItems.map((item) => (
            <a
              key={item.path}
              className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
              onClick={() => handleNavigate(item.path)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navText}>
                <span className={styles.navLabel}>{item.label}</span>
                <span className={styles.navSubtitle}>{item.subtitle}</span>
              </span>
            </a>
          ))}
        </div>

        <div className={styles.navRight}>
          <div className={styles.notifBtn}>
            🔔
            <span className={styles.notifDot}></span>
          </div>

          <div className={styles.userProfileWrap} ref={dropdownRef}>
            <div
              className={styles.userProfile}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className={styles.userAvatar}>AN</div>
              <span className={styles.userName}>Anishka</span>
              <span className={`${styles.dropdownArrow} ${showDropdown ? styles.rotated : ''}`}>▾</span>
            </div>

            {showDropdown && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownHeader}>
                  <div className={styles.dropdownAvatar}>AN</div>
                  <div>
                    <div className={styles.dropdownName}>Anishka Negi</div>
                    <div className={styles.dropdownEmail}>anishka@veloop.com</div>
                  </div>
                </div>

                <div className={styles.dropdownDivider}></div>

                <div className={styles.dropdownItem} onClick={() => { setShowDropdown(false); alert('Profile page coming soon!'); }}>
                  <span className={styles.dropdownIcon}>👤</span>
                  <span>My Profile</span>
                </div>

                <div className={styles.dropdownItem} onClick={() => { setShowDropdown(false); alert('Settings page coming soon!'); }}>
                  <span className={styles.dropdownIcon}>⚙️</span>
                  <span>Settings</span>
                </div>

                <div className={styles.dropdownItem} onClick={() => { setShowDropdown(false); alert('Wallet page coming soon!'); }}>
                  <span className={styles.dropdownIcon}>💼</span>
                  <span>My Wallet</span>
                </div>

                <div className={styles.dropdownItem} onClick={() => { setShowDropdown(false); alert('Notifications page coming soon!'); }}>
                  <span className={styles.dropdownIcon}>🔔</span>
                  <span>Notifications</span>
                  <span className={styles.dropdownBadge}>3</span>
                </div>

                <div className={styles.dropdownDivider}></div>

                <div className={`${styles.dropdownItem} ${styles.logout}`} onClick={handleLogout}>
                  <span className={styles.dropdownIcon}>🚪</span>
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={styles.menuBtn}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Toggle menu"
          >
            {showMobileMenu ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <a
              key={item.path}
              className={`${styles.mobileLink} ${isActive(item.path) ? styles.mobileActive : ''}`}
              onClick={() => handleNavigate(item.path)}
            >
              <span className={styles.mobileIcon}>{item.icon}</span>
              <span className={styles.mobileText}>
                <span className={styles.mobileLabel}>{item.label}</span>
                <span className={styles.mobileSubtitle}>{item.subtitle}</span>
              </span>
              <span className={styles.mobileArrow}>→</span>
            </a>
          ))}

          <div className={styles.mobileDivider}></div>

          <a
            className={`${styles.mobileLink} ${styles.mobileLogout}`}
            onClick={handleLogout}
          >
            <span className={styles.mobileIcon}>🚪</span>
            <span className={styles.mobileText}>
              <span className={styles.mobileLabel}>Logout</span>
              <span className={styles.mobileSubtitle}>Sign out</span>
            </span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;