import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import OrderStore from '../../stores/order-store';
import Tip from './tip';

const Container = styled.div`
  float: right;
  display: grid;
  grid-template-columns: 10fr 1fr;
  grid-gap: 10px 10px;
  justify-items: end;
  align-items: center;
  font-size: 20px;
  color: #4c4c4c;
  font-style: italic;
  margin-top: 20px;
`;

const GrandTotal = styled.div`
  font-weight: bold;
  font-style: normal;
  color: black;
`;

const Fee = styled.div`
  text-align: right;
  ${({ error }) => error && 'color: #902e2d;'};
`;

const Total = observer(() => {
  return (
    <>
      <Container>
        <div>subtotal</div>
        <div>${OrderStore.subTotal}</div>
        <div>tax (7%)</div>
        <div>${OrderStore.tax}</div>
        {OrderStore.fulfillment.option === 'delivery' && (
          <>
            <div>delivery fee</div>
            <Fee error={typeof OrderStore.deliveryFee === 'string'}>
              {typeof OrderStore.deliveryFee === 'number' ? `$${OrderStore.deliveryFee}` : OrderStore.deliveryFee}
            </Fee>
          </>
        )}
        <Tip />
        <GrandTotal>Order Total</GrandTotal>
        <GrandTotal>${OrderStore.grandTotal}</GrandTotal>
      </Container>
    </>
  );
});

export default Total;
