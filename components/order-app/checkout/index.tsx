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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  flex-direction: column;
`;

const ErrorMsg = styled.div`
  color: #902e2d;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 10px;
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
        {Boolean(OrderStore.shoppingCart.length) || (
          <>
            <Total />
            <Wrapper>
              {OrderStore.registerStore.grandTotalRaw < 1000 && <ErrorMsg>⚠️ Minimum cart total is $1000</ErrorMsg>}
              <StripeButton />
            </Wrapper>
          </>
        )}
      </Content>
    </Container>
  );
});

export default Checkout;
