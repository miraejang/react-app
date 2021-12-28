import React from 'react';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card.module.css';

const Card = ({ order }) => {
  const { title, status, send, tel, date, message, fileName, fileUrl } = order;
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="title" value={title} />
      <select className={styles.select} name={status} id="">
        <option value="receipt">접수</option>
        <option value="working">작업중</option>
        <option value="complete">완료</option>
        <option value="hold">보류</option>
      </select>
      <input className={styles.input} type="text" name="send" value={send} />
      <input className={styles.input} type="tel" name="tel" value={tel} />
      <input className={styles.input} type="date" name="date" value={date} />
      <textarea className={styles.textarea} name="message" value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} />
      </div>
      {true && <button className={styles.button}>Delete</button>}
      {false && <button className={styles.button}>Add</button>}
    </form>
  );
};

export default Card;
