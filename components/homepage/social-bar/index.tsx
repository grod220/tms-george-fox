import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';
import Image from 'next/image';

import allSocialIcons from './social-icons-info';
import LivePost from './live-post';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TwoItemHolder = styled.div`
  display: flex;
  width: 80vw;
  justify-content: center;

  > div {
    flex: 1;
  }

  ${media.tablet`
    flex-direction:column;`}

  ${media.phone`
    flex-direction:column;
    width: 95vw;`};
`;

const LeftSide = styled.div`
  font-size: 2.4rem;
  padding: 4rem 2%;
`;

const Highlight = styled.span`
  color: #902e2d;
  font-weight: 700;
  font-style: italic;
`;

const Connect = styled.div`
  font-family: 'Dancing Script', cursive;
  font-size: 4.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${media.tablet`
    display:none;`}

  ${media.phone`
    display:none;`};
`;

const SocialIcons = styled.div`
  a {
    margin-right: 2.4rem;

    ${media.tablet`
      margin-right: 0;`}

    ${media.phone`
      margin-right: 0;`};
  }

  ${media.desktop`
    min-width: 35.5rem;`}

  ${media.tablet`
    display:flex;
    justify-content: space-around;
    margin: 2rem;`}

  ${media.phone`
    display:flex;
    justify-content: space-around;
    margin: 2rem;`};
`;

const SocialBar = () => (
  <Container>
    <TwoItemHolder>
      <LeftSide>
        <div>
          Catering, private cooking classes and dining experiences.
          <br />
          <Highlight>Be our guest!</Highlight>
        </div>
        <Connect>Connect with us!</Connect>
        <SocialIcons>
          {allSocialIcons.map((service, i) => (
            <a href={service.linkTo} target="_blank" rel="noopener noreferrer" key={i}>
              <Image src={service.url} height="64" width="64" key={i} alt={service.name + ' icon'} />
            </a>
          ))}
        </SocialIcons>
      </LeftSide>
      <LivePost />
    </TwoItemHolder>
  </Container>
);

export default SocialBar;
