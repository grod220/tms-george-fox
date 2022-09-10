import React from 'react';
import { observer } from 'mobx-react-lite';
import CheckoutSectionHeader from '../../checkout-section-header';
import OrderStore from '../../../stores/order-store';
import OrderTypeSelector from '../order-type-selector';
import FulfillmentOptions from '../fulfillment-options';

const CateringFulfillment = observer(() => {
  return (
    <>
      <OrderTypeSelector />
      <CheckoutSectionHeader>{OrderStore.fulfillment.option} info</CheckoutSectionHeader>
      <FulfillmentOptions />
    </>
  );
});

export default CateringFulfillment;
