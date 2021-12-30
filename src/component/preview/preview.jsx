import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ orders }) => (
  <div className={styles.preview}>
    <h2 className={styles.title}>Order List</h2>
    <ul className={styles.cards}>
      {orders.map(order => (
        <Card key={order.id} order={order} />
      ))}
    </ul>
  </div>
);

export default Preview;
