import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import OrderStore from '../../../stores/order-store';
import { cleanupMapsElements, initAutocomplete } from './autocomplete';
import { formatGooglePlacesObj } from '../../../stores/order-utils';
import { InputEl, LabelHelper, WidgetWrapper } from '../fulfillment-input';

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
        size="30"
        required
      />
    </WidgetWrapper>
  );
});

export default DeliveryAutocomplete;
