import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = props => {
  const [orders, setOrders] = useState([
    {
      title: '생일용 꽃다발',
      status: 'hold',
      send: '장미래',
      tel: '01020808308',
      date: '2021-12-28',
      time: '',
      message: '화려한 스타일',
      fileName: 'mirae',
      fileUrl: '',
    },
    {
      title: '생일용 꽃다발',
      status: 'hold',
      send: '장미래',
      tel: '01020808308',
      date: '2021-12-28',
      time: '',
      message: '화려한 스타일',
      fileName: 'mirae',
      fileUrl: '',
    },
    {
      title: '생일용 꽃다발',
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
