import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, addOrder }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const statusRef = useRef();
  const sendRef = useRef();
  const telRef = useRef();
  const dateRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ name: null, url: null });

  const onFileChange = file => {
    setFile({
      name: file.name,
      url: file.url,
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    const order = {
      id: Date.now(),
      title: titleRef.current.value || '',
      status: statusRef.current.value || '',
      send: sendRef.current.value || '',
      tel: telRef.current.value || '',
      date: dateRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.name,
      fileURL: file.url,
    };
    formRef.current.reset();
    setFile({ name: null, url: null });
    addOrder(order);
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <select ref={statusRef} className={styles.select} name="status">
        <option value="receipt">접수</option>
        <option value="working">작업중</option>
        <option value="complete">완료</option>
        <option value="hold">보류</option>
      </select>
      <input
        ref={sendRef}
        className={styles.input}
        type="text"
        name="send"
        placeholder="send"
      />
      <input
        ref={telRef}
        className={styles.input}
        type="tel"
        name="tel"
        placeholder="tel"
      />
      <input
        ref={dateRef}
        className={styles.input}
        type="date"
        name="date"
        placeholder="date"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      />
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} buttonText="Add Image" />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
