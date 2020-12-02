import React from 'react';
import { observer } from 'mobx-react-lite';
import OrderStore from '../../stores/order-store';
import styled from 'styled-components';

const OrderPickupOption = styled.button`
  background-color: ${({ selected }) => (selected ? '#902e2d' : '#e0e0e0')};
  padding: 10px 20px;
  text-transform: uppercase;
  color: ${({ selected }) => (selected ? 'white' : '#4c4c4c')};
  font-family: Vollkorn;
  font-size: 18px;
  letter-spacing: 1px;
  border: ${({ selected }) => (selected ? '2px #a54e4d solid' : '2px transparent solid')};

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const OrderPickupOptionButton = observer(({ children: buttonName, func }) => {
  return (
    <OrderPickupOption
      selected={OrderStore.fulfillment.option === buttonName}
      onClick={() => {
        if (func) {
          func();
        }
        OrderStore.fulfillment.setFulfillmentOption(buttonName);
      }}
    >
      {buttonName}
    </OrderPickupOption>
  );
});

export default OrderPickupOptionButton;
