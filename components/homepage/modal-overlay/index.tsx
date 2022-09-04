import React, { useState } from 'react';
import styled from 'styled-components';
import { isSameDay, set } from 'date-fns';

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

export const isClosedForHoliday = (): boolean => {
  const closedDates = [
    set(new Date(), { year: 2022, month: 8, date: 4 }),
    set(new Date(), { year: 2022, month: 8, date: 5 }),
  ];
  return closedDates.some((d) => isSameDay(new Date(), d));
};

export default function Overlay() {
  // const [shouldDisplay, closeModal] = useModal('quick-serve-alert');
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const closeModal = () => setShouldDisplay(false);

  if (!shouldDisplay) return <></>;

  return (
    <BlurredBackground onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <X onClick={closeModal}>X</X>
        <WelcomeTitle>Happy Labor Day</WelcomeTitle>
        <p>
          We’ll be closed Labor Day to allow our staff to spend time with their famiglia. We’ll reopen{' '}
          <b>Tuesday at 2pm</b>.
        </p>
        <p>
          <i>— Jeff & Isabella Morgia</i>
        </p>
      </Modal>
    </BlurredBackground>
  );
}
