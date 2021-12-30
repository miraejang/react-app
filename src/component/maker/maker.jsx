import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = props => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      title: '생일용 꽃반구니',
      status: 'receipt',
      send: '장미래',
      tel: '01020808308',
      date: '2021-12-28',
      time: '',
      message: '화려한 스타일',
      fileName: 'mirae',
      fileUrl: '',
    },
    {
      id: '2',
      title: '축하용 꽃다발',
      status: 'working',
      send: '장미래',
      tel: '01020808308',
      date: '2021-12-28',
      time: '',
      message: '화려한 스타일',
      fileName: 'mirae',
      fileUrl: '',
    },
    {
      id: '3',
      title: '이사선물 화분',
      status: 'complete',
      send: '장미래',
      tel: '01020808308',
      date: '2021-12-28',
      time: '',
      message: '화려한 스타일',
      fileName: 'mirae',
      fileUrl: '',
    },
    {
      id: '4',
      title: '개업축하 화분',
      status: 'hold',
      send: '장미래',
      tel: '01020808308',
      date: '2021-12-28',
      time: '',
      message: '화려한 스타일',
      fileName: 'mirae',
      fileUrl: '',
    },
  ]);

  return (
    <section className={styles.orders}>
      <Editor orders={orders} />
      <Preview orders={orders} />
    </section>
  );
};

export default Maker;
