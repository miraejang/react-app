import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, order, updateOrder, deleteOrder }) => {
  const { title, status, send, tel, date, message, fileName } = order;

  const onFileChange = file => {
    updateOrder({ ...order, fileName: file.name, fileURL: file.url });
  };
  const onChange = e => {
    if (e.currentTarget === null) return;
    e.preventDefault();
    updateOrder({
      ...order,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteOrder(order);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <select
        defaultValue={status}
        className={styles.select}
        name="status"
        onChange={onChange}
      >
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
        <FileInput fileName={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onChange={onSubmit} />
    </form>
  );
};

export default CardEditForm;
