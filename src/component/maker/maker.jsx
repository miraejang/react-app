import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'component/card/card';
import CardAddForm from 'component/card_add_form/card_add_form';
import CardEditForm from 'component/card_edit_form/card_edit_form';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateState = location.state;
  const [orders, setOrders] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [userName, setUserName] = useState();
  const [open, setOpen] = useState(false);

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
  const toggleOpen = e => {
    e.preventDefault();
    setOpen(!open);
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
        <div className={styles.addForm}>
          {!open && (
            <button className={styles.addOpenBtn} onClick={toggleOpen}>
              Add Order Card
            </button>
          )}
          {open && (
            <>
              <h2>Add Order Card</h2>
              <button className={styles.addCloseBtn} onClick={toggleOpen}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
              <div className={open ? styles.open : styles.close}>
                <CardAddForm
                  FileInput={FileInput}
                  addOrder={createOrUpdateOrder}
                />
              </div>
            </>
          )}
        </div>
        <ul className={styles.cards}>
          {Object.keys(orders).map(key => (
            <li className={styles.card}>
              <CardEditForm
                key={key}
                FileInput={FileInput}
                order={orders[key]}
                updateOrder={createOrUpdateOrder}
                deleteOrder={deleteOrder}
              />
              <Card key={key} order={orders[key]} />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Maker;
