import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import FulfillmentInput from '../fulfillment-input';
import OrderStore from '../../../stores/order-store';
import { getBusinessOrderConfig } from './config';
import { FulfillmentSelect } from '../fulfillment-select';
import { format } from 'date-fns';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-top: -10px;
`;

const BusinessFulfillmentOptions = observer(() => {
  return (
    <Container>
      <FulfillmentInput
        title="Customer name"
        type="text"
        value={OrderStore.fulfillment.contactName}
        setFunc={(val) => OrderStore.fulfillment.setContactName(val)}
      />

      <FulfillmentInput
        title="Customer cell phone"
        type="text"
        value={OrderStore.fulfillment.contactNumber}
        setFunc={(val) => OrderStore.fulfillment.setContactNumber(val)}
      />

      <FulfillmentSelect
        title="location"
        onChange={({ target: { value } }) => {
          OrderStore.fulfillment.dateStore.setFulfillmentWithISOStr(undefined);
          OrderStore.fulfillment.setBuildingName(value);
        }}
        value={OrderStore.fulfillment.buildingName}
        disabled={false}
      >
        <option value="">--Choose delivery location--</option>
        {getBusinessOrderConfig().map((config) => {
          return (
            <option value={config.buildingName} key={config.buildingName}>
              {config.buildingName} - {config.addr}
            </option>
          );
        })}
      </FulfillmentSelect>

      <FulfillmentSelect
        title="Delivery Date"
        onChange={({ target: { value } }) => {
          if (value === '') {
            OrderStore.fulfillment.dateStore.setFulfillmentWithISOStr(undefined);
          } else {
            OrderStore.fulfillment.dateStore.setFulfillmentWithISOStr(value);
          }
        }}
        value={
          OrderStore.fulfillment.dateStore.fulfillmentTimeAndDate === undefined
            ? ''
            : OrderStore.fulfillment.dateStore.fulfillmentTimeAndDate.toISOString()
        }
        disabled={OrderStore.fulfillment.buildingName === ''}
      >
        <option value="">--Choose delivery date--</option>
        {getBusinessOrderConfig()
          .filter((config) => config.buildingName === OrderStore.fulfillment.buildingName)
          .map((config) =>
            config.deliveryTimes.map((date) => (
              <option key={date.toISOString()} value={date.toISOString()}>
                {format(date, 'EEEE, MMM do @ h:mm a')}
              </option>
            )),
          )}
      </FulfillmentSelect>

      <FulfillmentInput
        title="Company name"
        type="text"
        value={OrderStore.fulfillment.companyName}
        setFunc={(val) => OrderStore.fulfillment.setCompanyName(val)}
      />

      <FulfillmentInput
        title="Business Suite"
        type="text"
        value={OrderStore.fulfillment.businessSuite}
        setFunc={(val) => OrderStore.fulfillment.setBusinessSuite(val)}
      />

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
