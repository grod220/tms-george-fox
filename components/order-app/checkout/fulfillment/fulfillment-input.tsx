import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import OrderStore from '../../stores/order-store';

const WidgetWrapper = styled.div`
  position: relative;
`;

const ErrorMessage = styled.span`
  position: absolute;
  color: #ff1310;
  font-size: 16px;
  font-style: italic;
  top: -16px;
  user-select: none;
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
  ${({ hasError }) => hasError && 'border: 2px #ff1310 dotted;'}
`;

interface FulfillmentInputProps {
  title: string;
  type: string;
  setFunc: (arg0: any) => any;
  value: string;
  error?: string;
  min?: string;
  max?: string;
  step?: string;
}

const FulfillmentInput = observer(({ title, setFunc, error, value, ...others }: FulfillmentInputProps) => {
  return (
    <WidgetWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <LabelHelper>{title}</LabelHelper>
      <InputEl {...others} hasError={Boolean(error)} onChange={(e) => setFunc(e.target.value)} value={value} required />
    </WidgetWrapper>
  );
});

export default FulfillmentInput;