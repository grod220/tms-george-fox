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
  const closedDates = [set(new Date(), { year: 2023, month: 6, date: 4 })];
  return closedDates.some((d) => isSameDay(new Date(), d));
};

export const overlayShouldDisplay = (): boolean => {
  const datesToDisplay = [
    set(new Date(), { year: 2023, month: 6, date: 2 }),
    set(new Date(), { year: 2023, month: 6, date: 3 }),
    set(new Date(), { year: 2023, month: 6, date: 4 }),
  ];
  return datesToDisplay.some((d) => isSameDay(new Date(), d)) || isClosedForHoliday();
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
        <WelcomeTitle>Happy Fourth! 🇺🇸</WelcomeTitle>
        <p>
          Hello Meatball Stoppe friends, we will be taking a short break for the July 4th weekend. We will close Monday
          and Tuesday to allow our Staff Family and ourselves some much needed rest and family time. We’ll reopen our
          regular time Wednesday at 11am.
        </p>
        <p>Thank you for all the support and God Bless America 🇺🇸</p>
        <p>
          <i>— Jeff & Isabella Morgia</i>
        </p>
      </Modal>
    </BlurredBackground>
  );
}
