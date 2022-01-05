import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = user => {
    navigate({
      pathname: '/',
      state: { id: user.uid },
    });
  };
  const onLogin = e => {
    authService
      .login(e.currentTarget.textContent)
      .then(data => goToMaker(data.user))
      .catch(error => console.log(`login ${error}`));
  };
  useEffect(() => {
    authService.onAuthChange(user => user && goToMaker(user));
  });

  return (
    <div className={styles.login}>
      <div className={styles.container}>
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
    </div>
  );
};

export default Login;
