import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import FulfillmentInput from '../fulfillment-input';
import OrderStore from '../../../stores/order-store';
import { businessOrderConfig } from './config';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-top: -10px;
`;

const PickupLocation = styled.div`
  width: 100%;
  font-style: italic;
  color: #902e2d;
  font-size: 16px;
  margin-top: 10px;
`;

const RedAnchor = styled.a`
  color: #902e2d;
  text-decoration: underline;
`;

const BusinessFulfillmentOptions = observer(() => {
  return (
    <Container>
      <FulfillmentInput
        title="Name"
        type="text"
        value={OrderStore.fulfillment.contactName}
        setFunc={(val) => OrderStore.fulfillment.setContactName(val)}
      />

      <select name="building" onChange={({ target: { value } }) => OrderStore.fulfillment.setBuildingName(value)}>
        <option value="">--Choose delivery location--</option>
        {businessOrderConfig.map((config) => {
          return (
            <option value={config.buildingName}>
              {config.buildingName} - {config.addr}
            </option>
          );
        })}
      </select>

      <FulfillmentInput
        title="Suite"
        type="text"
        value={OrderStore.fulfillment.businessSuite}
        setFunc={(val) => OrderStore.fulfillment.setBusinessSuite(val)}
      />

      <select name="delivery-time">
        {businessOrderConfig
          .filter((config) => config.buildingName === OrderStore.fulfillment.buildingName)
          .map((config) =>
            config.deliveryTimes
              // .filter( within lead time ) = delivery date - lead time > date.now()?
              .map((date) => <option value={'fillstore'}>{date.toString()}</option>),
          )}
      </select>

      <FulfillmentInput
        title="Any special instructions?"
        type="text"
        value={OrderStore.fulfillment.specialInstructions}
        setFunc={(val) => OrderStore.fulfillment.setSpecialInstructions(val)}
      />
    </Container>
  );
});

export default BusinessFulfillmentOptions;
