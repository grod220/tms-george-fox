import React from 'react';
import styled from 'styled-components';
import Highlight from '../../shared/highlight';
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

const DateCentering = styled.div`
  text-align: center;
`;

export default function Overlay() {
  const [shouldDisplay, closeModal] = useModal('quick-serve-alert');
  return (
    shouldDisplay && (
      <BlurredBackground onClick={closeModal}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <X onClick={closeModal}>X</X>
          <WelcomeTitle>New quick-service model</WelcomeTitle>
          <p>To all of our great customers and friends,</p>
          <p>
            We will testing our new{' '}
            <Highlight>
              <i>Modified Quick Service model</i>
            </Highlight>{' '}
            effective immediately. Our guests will order at the front counter then be seated for service. This is all in
            the effort to increase efficiency and speed to our guests all while adjusting to the long range impact of
            COVID-19.
          </p>
          <p>Grazie for your ongoing support.</p>
          <p>
            <i>— Jeff & Isabella Morgia</i>
          </p>
        </Modal>
      </BlurredBackground>
    )
  );
}
