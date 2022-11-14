import React from 'react';
import { observer } from 'mobx-react-lite';
import CheckoutSectionHeader from '../../checkout-section-header';
import OrderStore from '../../../stores/order-store';
import FulfillmentOptions from '../fulfillment-options';

const NormalFulfillment = observer(() => {
  return (
    <>
      <CheckoutSectionHeader>{OrderStore.fulfillment.option} info</CheckoutSectionHeader>
      <FulfillmentOptions />
    </>
  );
});

export default NormalFulfillment;
