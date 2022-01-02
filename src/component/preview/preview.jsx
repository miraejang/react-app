import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ orders }) => (
  <div className={styles.preview}>
    <h2 className={styles.title}>Order List</h2>
    <ul className={styles.cards}>
      {Object.keys(orders).map(key => (
        <Card key={key} order={orders[key]} />
      ))}
    </ul>
  </div>
);

export default Preview;
