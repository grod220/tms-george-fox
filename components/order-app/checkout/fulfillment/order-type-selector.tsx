import React from 'react';
import OrderStore from '../../stores/order-store';

import OrderPickupOptionButton from './order-pickup-option-button';
import OrderInfoSectionHeader from '../checkout-section-header';

const OrderTypeSelector = () => {
  return (
    OrderStore.orderType === 'catering' && (
      <>
        <OrderInfoSectionHeader>order type</OrderInfoSectionHeader>
        <OrderPickupOptionButton text="delivery" />
        <OrderPickupOptionButton text="pickup" func={() => OrderStore.fulfillment.setDeliveryLocation(undefined)} />
      </>
    )
  );
};

export default OrderTypeSelector;
