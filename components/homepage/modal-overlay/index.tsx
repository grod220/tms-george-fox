import React, { useState } from 'react';
import styled from 'styled-components';
import Highlight from '../../shared/highlight';

const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.62);
`;

const Modal = styled.div`
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 800px;
  margin: 40px;
  border-radius: 10px;
  padding: 35px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`;

const X = styled.span`
  position: absolute;
  right: 45px;
  top: 45px;
  font-family: sans-serif;
  font-size: 35px;
  color: #902e2d;

  &:hover {
    cursor: pointer;
  }
`;

const WelcomeTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  color: #902e2d;
  font-size: 55px;
  margin-top: 0;

  @media (max-width: 550px) {
    font-size: 40px;
    max-width: 200px;
  }
`;

const DateCentering = styled.div`
  text-align: center;
`;

export default function Overlay() {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <BlurredBackground onClick={() => setOpen(false)}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <X onClick={() => setOpen(false)}>X</X>
          <WelcomeTitle>We are taking covid-19 seriously</WelcomeTitle>
          <p>
            Nothing is more important to us than the safety and well being of our staff, customers and family. In the
            interest of minimizing the exposure of our staff and more opportunity to clean and sanitize the entire
            restaurant, we have decided to modify our hours of operation.
          </p>
          <p>
            Effective now, our hours will be as listed below until further notice. we will continue to have dine in
            service, delivery and curb side pickup while adhering to all state mandated guidelines. We pray this
            horrible situation will soon pass and everyone takes every necessary precaution to be safe and healthy.
          </p>
          <DateCentering>
            <p>
              <Highlight b>Monday-Wednesday: 3pm to 9pm</Highlight>
            </p>
            <p>
              <Highlight b>Thursday-Saturday: 11am to 9pm</Highlight>
            </p>
          </DateCentering>
          <p>Grazie for your ongoing support.</p>
          <p>
            <i>— Jeff & Isabella Morgia</i>
          </p>
        </Modal>
      </BlurredBackground>
    )
  );
}
