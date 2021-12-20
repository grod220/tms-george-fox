import React, { useState } from 'react';
import styled from 'styled-components';
import useModal from './use-modal';

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

export default function Overlay() {
  // const [shouldDisplay, closeModal] = useModal('quick-serve-alert');
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const closeModal = () => setShouldDisplay(false)
  return (
    shouldDisplay && (
      <BlurredBackground onClick={closeModal}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <X onClick={closeModal}>X</X>
          <WelcomeTitle>Special Holiday hours</WelcomeTitle>
          <p>
            Closed from <b>Dec 24-26 & Jan 1st</b> & closing at 5pm on <b>Dec 31st</b>.
          </p>
          <p>We wish your family a wonderful holiday 🎄</p>
          <p>
            <i>— Jeff & Isabella Morgia</i>
          </p>
        </Modal>
      </BlurredBackground>
    )
  );
}
