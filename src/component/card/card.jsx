import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = `${process.env.PUBLIC_URL}/images/default_image.jpg`;

const Card = ({ order }) => {
  const {
    title,
    status,
    sender,
    sender_tel,
    send_date,
    receiver,
    receiver_tel,
    receive_date,
    message,
    fileURL,
  } = order;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(status)}`}>
      <div className={styles.imageBox}>
        <img className={styles.image} src={url} alt="user" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.status}>{statusText(status)}</p>
        <div className={styles.senderBox}>
          <h4 className={styles.h4}>보낸 분</h4>
          <p className={styles.sender}>
            <span className={styles.name}>{sender || '-'}</span>
            <span className={styles.line}>/</span>
            <span className={styles.tel}>{sender_tel || '-'}</span>
            <span className={styles.line}>/</span>
            <span className={styles.date}>{send_date || '-'}</span>
          </p>
        </div>
        <div className={styles.receiverBox}>
          <h4 className={styles.h4}>받는 분</h4>
          <p className={styles.receiver}>
            <span className={styles.name}>{receiver || '-'}</span>
            <span className={styles.line}>/</span>
            <span className={styles.tel}>{receiver_tel || '-'}</span>
            <span className={styles.line}>/</span>
            <span className={styles.date}>{receive_date || '-'}</span>
          </p>
        </div>
        <pre className={styles.message}>{message}</pre>
      </div>
    </li>
  );
};

function statusText(status) {
  switch (status) {
    case 'receipt':
      return '접수';
    case 'working':
      return '작업중';
    case 'complete':
      return '완료';
    default:
      return '보류';
  }
}

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
