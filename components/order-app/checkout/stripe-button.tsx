import React, { useState } from 'react';
import styled from 'styled-components';
import { TailSpin } from 'svg-loaders-react';
import { observer } from 'mobx-react-lite';

import OrderStore from '../stores/order-store';
import handleCheckoutRequest from './stripe-utils';
import StripeLogo from './stripe-logo-white.svg';

const Button = styled.button<{ error: boolean; spinner: boolean; ready: boolean }>`
  height: 54px;
  width: 328px;
  border-radius: 4px;
  background-color: ${({ error, spinner, ready }) =>
    error ? '#d34545' : spinner ? '#59b771' : !ready ? '#e0e0e0' : '#6d5492'};
  color: white;
  border: none;
  font-size: 20px;
  font-family: Vollkorn;
  cursor: ${({ error, spinner, ready }) => (spinner ? 'wait' : error || !ready ? 'not-allowed' : 'pointer')};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-top: 10px;

  ${({ spinner, error, ready }) =>
    !spinner &&
    !error &&
    ready &&
    `
    &:hover {
        background-color: #7e5faa;
        box-shadow: 0 6px 7px rgb(135, 107, 176, 0.22),
                    0 1px 18px rgb(135, 107, 176, 0.22);  }`}
`;

const StripeButton = observer(() => {
  const [spinner, showSpinner] = useState(false);
  const [error, showError] = useState(false);

  return (
    <Button
      ready={OrderStore.inputFieldsReady}
      error={error}
      spinner={spinner}
      onClick={() => OrderStore.inputFieldsReady && handleCheckoutRequest(showSpinner, showError)}
    >
      {error ? (
        <div>
          There was an error{' '}
          <span role="img" aria-label="sad">
            😢
          </span>
        </div>
      ) : spinner ? (
        <TailSpin />
      ) : (
        <>
          Checkout with <img src={StripeLogo} width="80px" alt="Stripe logo" />
        </>
      )}
    </Button>
  );
});

export default StripeButton;
