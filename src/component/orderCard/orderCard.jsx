import Card from 'component/card/card';
import CardEditForm from 'component/card_edit_form/card_edit_form';
import React from 'react';
import styles from './orderCard.module.css';

const OrderCard = ({ FileInput, order, createOrUpdateOrder, deleteOrder }) => (
  <li className={styles.card}>
    <CardEditForm
      FileInput={FileInput}
      order={order}
      updateOrder={createOrUpdateOrder}
      deleteOrder={deleteOrder}
    />
    <Card order={order} deleteOrder={deleteOrder} />
  </li>
);

export default OrderCard;
