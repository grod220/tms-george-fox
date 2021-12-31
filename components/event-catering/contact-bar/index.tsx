import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import BakedZiti from './baked-ziti.jpg';

const TwoBoxContainer = styled.div`
  display: flex;
  height: 20rem;
  background-color: #902e2d;

  ${media.phone`
    flex-direction: column;
    text-align: center;`}
`;

const LeftImage = styled.div`
  flex: 2;
  background: url(${BakedZiti.src});
  background-size: cover;
  background-position: 50%;
`;

const RightContactInfo = styled.div`
  flex: 3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  flex-direction: column;

  ${media.tablet`
    font-size: 2.6rem`}

  ${media.phone`
    font-size: 6vw`}
`;

const ContactBar = () => (
  <div>
    <TwoBoxContainer>
      <LeftImage />
      <RightContactInfo>
        Place your catering order with:
        <u>
          <i>
            <a rel="noopener noreferrer" target="_blank" href="https://www.ladifferenzabakery.com/catering/">
              Isabella's Bella Cucina →
            </a>
          </i>
        </u>
      </RightContactInfo>
    </TwoBoxContainer>
  </div>
);

export default ContactBar;
