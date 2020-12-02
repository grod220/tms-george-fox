import React from 'react';
import { observer } from 'mobx-react-lite';

import OrderStore from '../../stores/order-store';
import OrderTypeSelector from './order-type-selector';
import CheckoutSectionHeader from '../checkout-section-header';
import FulfillmentOptions from './fulfillment-options';

const Fulfillment = observer(() => {
  return (
    <>
      {/*<OrderTypeSelector />*/}
      <CheckoutSectionHeader>{OrderStore.fulfillment.option} info</CheckoutSectionHeader>
      <FulfillmentOptions />
    </>
  );
});

export default Fulfillment;
