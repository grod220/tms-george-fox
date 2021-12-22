import React from 'react';
import OrderStore from '../../stores/order-store';

import OrderPickupOptionButton from './order-pickup-option-button';
import OrderInfoSectionHeader from '../checkout-section-header';

const OrderTypeSelector = () => {
  if (OrderStore.orderType !== 'catering') {
    return null;
  }

  return (
    <>
      <OrderInfoSectionHeader>order type</OrderInfoSectionHeader>
      <OrderPickupOptionButton text="delivery" />
      <OrderPickupOptionButton text="pickup" func={() => OrderStore.fulfillment.setDeliveryLocation(undefined)} />
    </>
  );
};

export default OrderTypeSelector;
