import React from 'react';
import styles from './header.module.css';

const Header = props => (
  <header className={styles.header}>
    <h1 className={styles.title}>Flower Order Manager</h1>
    <div className={styles.userBox}>
      <p className={styles.user}>미래</p>
      <button className={styles.logoutBtn}>Logout</button>
    </div>
  </header>
);

export default Header;
