import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import OrderStore from '../../../stores/order-store';
import { initAutocomplete, cleanupMapsElements } from './autocomplete';
import { formatGooglePlacesObj } from '../../../stores/order-utils';

const WidgetWrapper = styled.div`
  position: relative;
`;

const LabelHelper = styled.label`
  position: absolute;
  color: #484848;
  font-size: 16px;
  left: 10px;
  top: 2px;
  user-select: none;
  text-transform: capitalize;
`;

const InputEl = styled.input`
  padding: 26px 25px 0 10px;
  font-size: 18px;
  font-family: vollkorn;
  width: 300px;
`;

const DeliveryAutocomplete = observer(() => {
  useEffect(() => {
    initAutocomplete();
    return cleanupMapsElements;
  }, []);
  return (
    <WidgetWrapper>
      <LabelHelper>Deliver to location</LabelHelper>
      <InputEl
        id="location-input"
        placeholder={
          OrderStore.fulfillment.deliveryLocation ? formatGooglePlacesObj(OrderStore.fulfillment.deliveryLocation) : ''
        }
        required
      />
    </WidgetWrapper>
  );
});

export default DeliveryAutocomplete;
