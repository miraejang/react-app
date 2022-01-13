import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, addOrder }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const statusRef = useRef();
  const senderRef = useRef();
  const senderTelRef = useRef();
  const sendDateRef = useRef();
  const receiverRef = useRef();
  const receiverTelRef = useRef();
  const receiveDateRef = useRef();
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
      sender: senderRef.current.value || '',
      senderTel: senderTelRef.current.value || '',
      sendDate: sendDateRef.current.value || '',
      receiver: receiverRef.current.value || '',
      receiverTel: receiverTelRef.current.value || '',
      receiveDate: receiveDateRef.current.value || '',
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
      <div className={styles.row}>
        <input
          ref={titleRef}
          className={styles.title}
          type="text"
          name="title"
          placeholder="주문 내역"
        />
        <select
          ref={statusRef}
          className={styles.select}
          name="status"
          placeholder="주문 내역"
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
            ref={senderRef}
            className={styles.input}
            type="text"
            id="sender"
            name="sender"
            placeholder="보낸 분"
          />
        </div>
        <div className={styles.cell}>
          <label className={styles.label} htmlFor="sender_tel">
            연락처
          </label>
          <input
            ref={senderTelRef}
            className={styles.input}
            type="tel"
            id="sender_tel"
            name="sender_tel"
            placeholder="보낸 분 연락처"
          />
        </div>
        <div className={styles.cell}>
          <label className={styles.label} htmlFor="send_date">
            주문일
          </label>
          <input
            ref={sendDateRef}
            className={styles.input}
            type="date"
            name="send_date"
            placeholder="주문일"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label htmlFor="receiver" className={styles.label}>
            이름
          </label>
          <input
            ref={receiverRef}
            className={styles.input}
            type="text"
            id="receiver"
            name="receiver"
            placeholder="받는 분"
          />
        </div>
        <div className={styles.cell}>
          <label htmlFor="receiver_tel" className={styles.label}>
            연락처
          </label>
          <input
            ref={receiverTelRef}
            className={styles.input}
            type="tel"
            id="receiver_tel"
            name="receiver_tel"
            placeholder="받는 분 연락처"
          />
        </div>
        <div className={styles.cell}>
          <label htmlFor="receive_date" className={styles.label}>
            배송일
          </label>
          <input
            ref={receiveDateRef}
            className={styles.input}
            type="date"
            id="receive_date"
            name="receive_date"
            placeholder="배송일"
          />
        </div>
      </div>
      <div className={styles.row}>
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          placeholder="내용"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.fileInput}>
          <FileInput
            fileName={file.name}
            onFileChange={onFileChange}
            buttonText="Add Image"
          />
        </div>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
