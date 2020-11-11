import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import Highlight from '../../shared/highlight';

const Container = styled.div`
  width: 75vw;
  margin: 4rem auto;

  li {
    margin-bottom: 2rem;
  }

  ${media.tablet`
    width: 90vw`}

  ${media.phone`
    width: 90vw`}
`;

const BodyText = () => (
  <Container>
    Let The Meatball Stoppe help you create menus to suit your many catering needs! We are your missing ingredient for
    your event.
    <ul>
      <li>
        <Highlight i>Corporate Catering</Highlight> - The Meatball Stoppe's unique menu and services allows you to stand
        above the rest. For delivery to your office call Isabella, Owner/Chef at 407-267-6033
      </li>
      <li>
        <Highlight i>Social Catering</Highlight> - Intimate or larger weddings, cocktail receptions, dinner parties,
        holiday parties... and more.
      </li>
      <li>
        <Highlight i>Private Cooking Classes - Corporate Team Building, Client Appreciation</Highlight> and many other
        celebrations.
      </li>
      <li>
        <Highlight i>Premier Dining Experience </Highlight>with Chef Isabella in your home.
      </li>
    </ul>
  </Container>
);

export default BodyText;
