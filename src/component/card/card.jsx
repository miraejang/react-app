import React from 'react';
import styles from './card.module.css';

const Card = ({ order }) => {
  const { title, status, send, tel, date, time, message, fileURL } = order;

  return (
    <li className={`${styles.card} ${getStyles(status)}`}>
      <img className={styles.image} src={fileURL} alt="user" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.status}>{status}</p>
        <p className={styles.send}>{send}</p>
        <p className={styles.tel}>{tel}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
        <pre className={styles.message}>{message}</pre>
      </div>
    </li>
  );
};

function getStyles(status) {
  switch (status) {
    case 'receipt':
      return styles.receipt;
    case 'working':
      return styles.working;
    case 'complete':
      return styles.complete;
    default:
      return styles.hold;
  }
}

export default Card;
