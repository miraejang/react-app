import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  const login = false;

  return (
    <header className={styles.header}>
      <img
        className={styles.headerImg}
        src="/images/header_img.png"
        alt="header"
      />
      <h1 className={styles.title}>Flower Order Manager</h1>
      {onLogout && (
        <div className={styles.userBox}>
          <p className={styles.user}>미래</p>
          <button className={styles.logoutBtn} onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
