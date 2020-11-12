import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { media } from '../../../utilities/media';
import { generateHeroImage } from './generate-hero';

const HeroBackground = styled.div`
  position: relative;
  height: 40rem;
  z-index: -100;
  background-color: #674c4d;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const HeroText = styled.div`
  z-index: 1000;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 -21rem 5rem 0;
  font-size: 3.2rem;

  ${media.tablet`
    margin-right: -11rem;
    font-size: 2.7rem;`};

  ${media.phone`
    align-items: center;
    font-size 5.3vw;
    margin: 0 0 5rem 0;`};
`;

const BigHero = () => (
  <HeroBackground>
    <HeroText>
      <div>As featured on Diners, Drive-Ins & Dives</div>
      <div>
        <em>with Guy Fieri, Food Network</em>
      </div>
    </HeroText>
    <Image src={generateHeroImage()} layout="fill" objectFit="cover" quality="100" />
  </HeroBackground>
);

export default BigHero;
