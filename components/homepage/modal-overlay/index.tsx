import React, { useState } from 'react';
import styled from 'styled-components';
import { isSameDay, set } from 'date-fns';
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
        <WelcomeTitle>Ciao famiglia! 👋</WelcomeTitle>
        <p>
          You're not the only one who's gone remote. We've taken our balls and are ready to go. We’re proud and humbled
          to announce that we’ve sold this location. TMS has always been much more than just meatballs. Over these last
          9 years, thousands of you have walked through our doors and given us the opportunity to share our passion for
          food and love for people. It's been a gathering spot for laughter, sharing stories, and an Italian home away
          from home. As of today, we are changing directions and focusing on{' '}
          <Highlight b>Catering, Private Cooking Classes and Airbnb dining experiences.</Highlight>
        </p>
        <p>
          We are so grateful for the blessing of having your continued support and loyalty every step of this journey.
        </p>
        <p> Salute amici to seeing you again at your table or ours! Con tanto amore,</p>
        <p>
          <Highlight i>— Jeff & Isabella Morgia</Highlight>
        </p>
      </Modal>
    </BlurredBackground>
  );
}
