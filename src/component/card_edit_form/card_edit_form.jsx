import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, order, updateOrder, deleteOrder }) => {
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
    fileName,
  } = order;

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
      <div className={styles.row}>
        <input
          className={styles.title}
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
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label className={styles.label} htmlFor="sender">
            이름
          </label>
          <input
            className={styles.input}
            type="text"
            id="sender"
            name="sender"
            value={sender}
            onChange={onChange}
          />
        </div>
        <div className={styles.cell}>
          <label className={styles.label} htmlFor="sender_tel">
            연락처
          </label>
          <input
            className={styles.input}
            type="tel"
            id="sender_tel"
            name="sender_tel"
            value={sender_tel}
            onChange={onChange}
          />
        </div>
        <div className={styles.cell}>
          <label className={styles.label} htmlFor="send_date">
            주문일
          </label>
          <input
            className={styles.input}
            type="date"
            name="send_date"
            value={send_date}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label htmlFor="receiver" className={styles.label}>
            이름
          </label>
          <input
            className={styles.input}
            type="text"
            id="receiver"
            name="receiver"
            value={receiver}
            onChange={onChange}
          />
        </div>
        <div className={styles.cell}>
          <label htmlFor="receiver_tel" className={styles.label}>
            연락처
          </label>
          <input
            className={styles.input}
            type="tel"
            id="receiver_tel"
            name="receiver_tel"
            value={receiver_tel}
            onChange={onChange}
          />
        </div>
        <div className={styles.cell}>
          <label htmlFor="receive_date" className={styles.label}>
            배송일
          </label>
          <input
            className={styles.input}
            type="date"
            id="receive_date"
            name="receive_date"
            value={receive_date}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <textarea
          className={styles.textarea}
          name="message"
          value={message}
          onChange={onChange}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.fileInput}>
          <FileInput fileName={fileName} onFileChange={onFileChange} />
        </div>
        <Button name="Delete" onChange={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
