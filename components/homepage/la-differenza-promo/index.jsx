import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import StrawberryCakeImg from './strawberry-cake.jpg';

const CakeHero = styled.div`
  background: url(${StrawberryCakeImg}) no-repeat center 0;
  background-size: cover;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

const BigText = styled.div`
  font-size: 11rem;
  font-family: 'Dancing Script', cursive;

  ${media.tablet`
      font-size: 10rem;`}

  ${media.phone`
      font-size: 9rem;`};
`;
const Subtext = styled.div`
  font-size: 2.2rem;
  text-align: right;
`;

const DetailsTextContainer = styled.div`
  width: 75vw;
  margin: 0 auto;

  ${media.tablet`
    width: 90vw`}

  ${media.phone`
    width: 90vw`}
`;

const RedLink = styled.a`
  color: #902e2d;
`;

const LaDifferenzaPromo = () => (
  <div>
    <CakeHero>
      <div>
        <BigText>La Differenza</BigText>
        <Subtext>An Artisanal Bakery</Subtext>
      </div>
    </CakeHero>
    <DetailsTextContainer>
      <div>
        <p>
          La Differenza is a different approach to desserts and baking. Our desserts are made in small batches, often a
          single cake at a time, using the best ingredients available.{' '}
          <RedLink rel="noopener noreferrer" target="_blank" href="https://www.ladifferenzabakery.com/">
            <b>
              <i>See more about our bakery →</i>
            </b>
          </RedLink>
        </p>
      </div>
    </DetailsTextContainer>
  </div>
);

export default LaDifferenzaPromo;
