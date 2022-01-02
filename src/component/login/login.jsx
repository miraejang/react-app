import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = e => {
    authService
      .login(e.currentTarget.textContent)
      .then(console.log)
      .catch(error => console.log(`login ${error}`));
  };

  return (
    <div className={styles.login}>
      <Header />
      <section className={styles.content}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
