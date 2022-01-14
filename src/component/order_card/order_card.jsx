import Card from 'component/card/card';
import CardEditForm from 'component/card_edit_form/card_edit_form';
import React from 'react';
import styles from './order_card.module.css';

const OrderCard = ({ FileInput, order, createOrUpdateOrder, deleteOrder }) => {
  return (
    <li className={styles.card}>
      {order.editing && (
        <CardEditForm
          FileInput={FileInput}
          order={order}
          updateOrder={createOrUpdateOrder}
          deleteOrder={deleteOrder}
        />
      )}
      <Card
        order={order}
        updateOrder={createOrUpdateOrder}
        deleteOrder={deleteOrder}
      />
    </li>
  );
};

export default OrderCard;
