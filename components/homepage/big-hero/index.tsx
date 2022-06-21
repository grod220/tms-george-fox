import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { media } from '../../../utilities/media';
import { VideoBackground } from './video-background';
import { isMobile } from 'react-device-detect';
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

const BigHero = () => {
  const [Background, setBackground] = useState<JSX.Element | null>(<VideoBackground />);

  // to fix hydration error, set the background in useEffect
  useEffect(() => {
    isMobile
      ? setBackground(<Image src={generateHeroImage()} layout="fill" objectFit="cover" quality="100" />)
      : setBackground(<VideoBackground />);
  }, []);

  return (
    <HeroBackground>
      <HeroText>
        <div>As featured on Diners, Drive-Ins & Dives</div>
        <div>
          <em>with Guy Fieri, Food Network</em>
        </div>
      </HeroText>

      {Background}
    </HeroBackground>
  );
};

export default BigHero;
