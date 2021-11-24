import React from 'react';
import styled from 'styled-components';

import { BlueButton } from '../blue-button';
import UberEatsLogo from './uber.png';
import GrubHubLogo from './grubhub.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70%;
    max-width: 40rem;
  }
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: 21rem;
  background: #a3a3a3;
  margin: 4rem 0;
`;

const UberEatsBlock = styled.div`
  a + a {
    margin-left: 10px;
  }
`;

const DeliveryServices = () => (
  <Container>
    <UberEatsBlock>
      <img src={UberEatsLogo.src} alt="Uber Eats logo" />
      <div />
      <BlueButton href="https://www.ubereats.com/orlando/food-delivery/the-meatball-stoppe/yBDto8eNQ2-X2HhNvMY39Q">
        Full Menu
      </BlueButton>
      <BlueButton href="https://www.ubereats.com/en-US/orlando/food-delivery/primo-vegan-vegetarian-and-gluten-free-by-the-meatball-stoppe/PV2V5fEsTEaVEUBSQdLcSQ/">
        Vegan Menu
      </BlueButton>
    </UberEatsBlock>
  </Container>
);

export default DeliveryServices;
