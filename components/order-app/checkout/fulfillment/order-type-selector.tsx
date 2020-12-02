import React from 'react';
import OrderStore from '../../stores/order-store';

import OrderPickupOptionButton from './order-pickup-option-button';
import OrderInfoSectionHeader from '../checkout-section-header';

const OrderTypeSelector = () => {
  return (
    OrderStore.orderType === 'catering' && (
      <>
        <OrderInfoSectionHeader>order type</OrderInfoSectionHeader>
        <OrderPickupOptionButton>delivery</OrderPickupOptionButton>
        <OrderPickupOptionButton
          func={() => {
            OrderStore.deliveryLocation = undefined;
          }}
        >
          pickup
        </OrderPickupOptionButton>
      </>
    )
  );
};

export default OrderTypeSelector;
