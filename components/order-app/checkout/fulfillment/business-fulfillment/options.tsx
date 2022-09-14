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
        title="Customer phone"
        type="text"
        value={OrderStore.fulfillment.contactNumber}
        setFunc={(val) => OrderStore.fulfillment.setContactNumber(val)}
      />

      <FulfillmentSelect
        title="location"
        onChange={({ target: { value: buildingName } }) => {
          const info = getBusinessOrderConfig().filter((item) => item.buildingName === buildingName)[0];
          OrderStore.fulfillment.setBuildingInfo(info);
        }}
        disabled={false}
      >
        <option value="">--Choose delivery location--</option>
        {getBusinessOrderConfig().map((config) => {
          return (
            <option value={config.buildingName}>
              {config.buildingName} - {config.addr}
            </option>
          );
        })}
      </FulfillmentSelect>

      <FulfillmentSelect
        title="Delivery Time"
        onChange={({ target: { value: dateStr } }) =>
          OrderStore.fulfillment.dateStore.setFulfillmentWithISOStr(dateStr)
        }
        disabled={OrderStore.fulfillment.buildingInfo === undefined}
      >
        <option value="">--Choose delivery time--</option>
        {getBusinessOrderConfig()
          .filter((config) => config.buildingName === OrderStore.fulfillment.buildingInfo?.buildingName)
          .map((config) =>
            config.deliveryTimes.map((date) => (
              <option value={date.toISOString()}>{format(date, 'EEEE, MMM do')}</option>
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
