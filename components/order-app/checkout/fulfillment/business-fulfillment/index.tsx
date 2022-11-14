import React from 'react';
import { observer } from 'mobx-react-lite';
import CheckoutSectionHeader from '../../checkout-section-header';
import OrderStore from '../../../stores/order-store';
import OrderTypeSelector from '../order-type-selector';
import FulfillmentOptions from '../fulfillment-options';
import BusinessFulfillmentOptions from './options';

const BusinessFulfillment = observer(() => {
  return (
    <>
      <CheckoutSectionHeader>{OrderStore.fulfillment.option} info</CheckoutSectionHeader>
      <BusinessFulfillmentOptions />
    </>
  );
});

export default BusinessFulfillment;
