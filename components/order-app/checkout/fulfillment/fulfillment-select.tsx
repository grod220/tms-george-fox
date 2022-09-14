import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

export const WidgetWrapper = styled.div`
  position: relative;
  margin: 30px 5px 0 5px;
`;

export const LabelHelper = styled.label`
  position: absolute;
  color: #484848;
  font-size: 16px;
  left: 0;
  top: -18px;
  user-select: none;
  text-transform: capitalize;
`;

export const SelectEl = styled.select<{ hasError?: boolean }>`
  padding: 10px;
  font-size: 18px;
  font-family: vollkorn, serif;
`;

interface FulfillmentSelectProps {
  title: string;
  onChange: (arg0: any) => any;
  children: React.ReactNode;
  disabled: boolean;
}

export const FulfillmentSelect = ({ title, onChange, ...others }: FulfillmentSelectProps) => {
  return (
    <WidgetWrapper>
      <LabelHelper>{title}</LabelHelper>
      <SelectEl {...others} onChange={onChange} />
    </WidgetWrapper>
  );
};
