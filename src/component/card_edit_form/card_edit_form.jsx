import React from 'react';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ order, updateOrder, deleteOrder }) => {
  const { title, status, send, tel, date, message, fileName, fileURL } = order;
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
        className={styles.select}
        name="status"
        defaultValue={status}
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
        <ImageFileInput name={fileName} url={fileURL} />
      </div>
      <button className={styles.button} onClick={onSubmit}>
        Delete
      </button>
    </form>
  );
};

export default CardEditForm;
