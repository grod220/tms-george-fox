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
    set(new Date(), { year: 2022, month: 11, date: 25 }),
    set(new Date(), { year: 2022, month: 11, date: 26 }),
    set(new Date(), { year: 2023, month: 0, date: 1 }),
  ];
  return closedDates.some((d) => isSameDay(new Date(), d));
};

export const overlayShouldDisplay = (): boolean => {
  const datesToDisplay = [
    set(new Date(), { year: 2022, month: 11, date: 18 }),
    set(new Date(), { year: 2022, month: 11, date: 19 }),
    set(new Date(), { year: 2022, month: 11, date: 20 }),
    set(new Date(), { year: 2022, month: 11, date: 21 }),
    set(new Date(), { year: 2022, month: 11, date: 22 }),
    set(new Date(), { year: 2022, month: 11, date: 23 }),
    set(new Date(), { year: 2022, month: 11, date: 24 }),
    set(new Date(), { year: 2022, month: 11, date: 31 }),
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
        <WelcomeTitle>Holiday hours 🎄</WelcomeTitle>
        <ul>
          <li>
            <b>December 24th</b>: closing early at 4pm
          </li>
          <li>
            <b>December 25th</b>: closed
          </li>
          <li>
            <b>December 26th</b>: closed
          </li>
          <li>
            <b>December 31st</b>: closing early at 5pm
          </li>
          <li>
            <b>January 1st</b>: closed
          </li>
          <li>
            <b>January 2nd</b>: regular hours resume
          </li>
        </ul>
        <p>Wish you and your family a wonderful holiday!</p>
        <p>
          <i>— Jeff & Isabella Morgia</i>
        </p>
      </Modal>
    </BlurredBackground>
  );
}
