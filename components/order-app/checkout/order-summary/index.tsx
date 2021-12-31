import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import OrderStore from '../../stores/order-store';
import SummaryItem from './summary-item';

const SectionHeader = styled.h3`
  margin: 20px 0 10px 0;
  text-transform: capitalize;
`;

const Notice = styled.div`
  display: flex;
  justify-content: center;
  color: #4c4c4c;
  font-style: italic;
`;

const OrderSummary = observer(() => {
  return (
    <>
      <SectionHeader>Order Summary</SectionHeader>
      {OrderStore.shoppingCart.length ? (
        OrderStore.shoppingCart.map((itemObj, i) => <SummaryItem item={itemObj} key={i} shoppingCartIndex={i} />)
      ) : (
        <Notice>~ Nothing in your shopping cart ~</Notice>
      )}
    </>
  );
});

export default OrderSummary;
