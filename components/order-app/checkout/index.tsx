import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import OrderSummary from './order-summary';
import OrderStore from '../stores/order-store';
import Total from './total';
import StripeButton from './stripe-button';
import CateringHighlightPromos from './catering-highlight-promos';
import NormalFulfillment from './fulfillment/normal-fulfillment';
import CateringFulfillment from './fulfillment/catering-fulfillment';
import BusinessFulfillment from './fulfillment/business-fulfillment';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
`;

const Checkout = observer(() => {
  return (
    <Container>
      <Content>
        {OrderStore.orderType === 'normal' && <NormalFulfillment />}
        {OrderStore.orderType === 'catering' && (
          <>
            <CateringHighlightPromos />
            <CateringFulfillment />
          </>
        )}
        {OrderStore.orderType === 'business' && <BusinessFulfillment />}

        <OrderSummary />
        {Boolean(OrderStore.shoppingCart.length) && (
          <>
            <Total />
            <StripeButton />
          </>
        )}
      </Content>
    </Container>
  );
});

export default Checkout;
