import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateState = location.state;
  const [orders, setOrders] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [userName, setUserName] = useState();

  const onLogout = e => {
    authService.logout();
  };
  const createOrUpdateOrder = order => {
    setOrders(orders => {
      const updated = { ...orders };
      updated[order.id] = order;
      return updated;
    });
    cardRepository.saveCard(userId, order);
  };
  const deleteOrder = order => {
    setOrders(orders => {
      const updated = { ...orders };
      delete updated[order.id];
      return updated;
    });
    cardRepository.removeCard(userId, order);
  };
  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserName(user.displayName);
        setUserId(user.uid);
      } else {
        navigate('/login');
      }
    });
  });
  useEffect(() => {
    if (!userId) return;
    const stopSync = cardRepository.syncCards(userId, cards =>
      setOrders(cards)
    );
    return () => stopSync();
  }, [cardRepository, userId]);

  return (
    <div className={styles.maker}>
      <Header userName={userName} onLogout={onLogout} />
      <section className={styles.orders}>
        <Editor
          FileInput={FileInput}
          orders={orders}
          createOrUpdateOrder={createOrUpdateOrder}
          deleteOrder={deleteOrder}
        />
        <Preview orders={orders} />
      </section>
      <Footer />
    </div>
  );
};

export default Maker;
