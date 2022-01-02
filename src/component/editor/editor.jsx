import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ orders, addOrder }) => (
  <div className={styles.editor}>
    {orders.map(order => (
      <CardEditForm key={order.id} order={order} />
    ))}
    <CardAddForm addOrder={addOrder} />
  </div>
);

export default Editor;
