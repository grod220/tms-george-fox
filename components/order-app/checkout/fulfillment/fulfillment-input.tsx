import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

export const WidgetWrapper = styled.div`
  position: relative;
  margin: 30px 5px 0 5px;
`;

const ErrorMessage = styled.span`
  position: absolute;
  color: #ff1310;
  font-size: 16px;
  font-style: italic;
  top: -18px;
  right: 0;
  user-select: none;
`;

export const LabelHelper = styled.label`
  position: absolute;
  color: #484848;
  font-size: 16px;
  left: 0px;
  top: -18px;
  user-select: none;
  text-transform: capitalize;
`;

export const InputEl = styled.input<{ hasError?: boolean }>`
  padding: 10px;
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
      <InputEl
        {...others}
        hasError={Boolean(error)}
        onChange={(e) => {
          // Guard against the case where users can add non-valid inputs, e.g.: 6-31-2021
          if (!e.target.value) return;
          setFunc(e.target.value);
        }}
        value={value}
        required
      />
    </WidgetWrapper>
  );
});

export default FulfillmentInput;
