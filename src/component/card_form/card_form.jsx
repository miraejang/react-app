import React from 'react';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_form.module.css';

const CardForm = ({ order }) => {
  const { title, status, send, tel, date, message, fileName, fileUrl } = order;
  const onChange = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <select className={styles.select} name={status} onChange={onChange}>
        <option value="receipt">접수</option>
        <option value="working">작업중</option>
        <option value="complete">완료</option>
        <option value="hold">보류</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="send"
        value={send}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="tel"
        name="tel"
        value={tel}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="date"
        name="date"
        value={date}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} />
      </div>
      {true && <button className={styles.button}>Delete</button>}
      {false && <button className={styles.button}>Add</button>}
    </form>
  );
};

export default CardForm;
