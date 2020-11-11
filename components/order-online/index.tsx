import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';

import Highlight from '../shared/highlight';
import DeliveryServices from './delivery-services/';
import { BlueButton } from './blue-button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
  max-width: 1200px;
  padding: 0 20px;

  > div + div {
    margin-left: 20px;
  }

  ${media.phone`
    flex-direction: column;

    > div + div {
    margin: 50px 0 0 0;
  }
  `}
`;

const Box = styled.div`
  font-size: 27px;
  border: 2px solid ${({ color }) => color};
  border-radius: 10px;
  padding: 0 10px 4.2rem 10px;
  max-width: calc(50% - 10px);
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 23px;
  }

  ${media.phone`
    max-width: 100%;
  `}
`;

const BoxHeader = styled.div`
  border: 2rem solid #fff;
  width: 340px;
  margin: -50px auto 1rem auto;
  padding: 0.2rem 2rem 0.8rem;
  text-align: center;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 52px;
  font-family: 'Dancing Script', cursive;

  @media (max-width: 950px) {
    width: 70%;
    font-size: 6vw;
  }

  ${media.phone`
    font-size: 8vw;
  `}
`;

const PushDown = styled.div`
  margin-top: 20px;
`;

const ServiceWrapper = styled.div`
  padding-top: 2rem;
`;

const OrderOnline = () => (
  <Container>
    <Box color="#84bf5b">
      <BoxHeader color="#84bf5b">Pickup</BoxHeader>Want to pickup your order directly from the Stoppe? Orders typically
      ready in ~30mins.
      <PushDown>
        <BlueButton href="/order/pickup" internal>
          Pickup Order
        </BlueButton>
      </PushDown>
    </Box>
    <Box color="#eea34c">
      <BoxHeader color="#eea34c">Delivery</BoxHeader>
      Do you live within a{' '}
      <Highlight i color="#eea34c">
        7-8mile radius
      </Highlight>{' '}
      of the Meatball Stoppe? We’ll come to you!
      <br />
      <ServiceWrapper>
        <DeliveryServices />
      </ServiceWrapper>
    </Box>
  </Container>
);

export default OrderOnline;
