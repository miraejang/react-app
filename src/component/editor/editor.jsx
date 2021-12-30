import React from 'react';
import CardForm from '../card_form/card_form';
import styles from './editor.module.css';

const Editor = ({ orders }) => (
  <div className={styles.editor}>
    {orders.map(order => (
      <CardForm key={order.id} order={order} />
    ))}
  </div>
);

export default Editor;
