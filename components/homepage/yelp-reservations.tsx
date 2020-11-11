import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';

const OrangeBar = styled.div`
  background: #d78d44;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.phone`
      height: 10rem;`};
`;

const Container = styled.div`
  width: 80vw;
  padding: 15px 0 0 0;

  ${media.tablet`
    width: 90vw;
  `}

  ${media.phone`
    width: 95vw;
  `}
`;

const YelpIframe = styled.iframe`
  width: 49%;
  height: 55px;

  ${media.tablet`
    width: 100%;
  `}

  ${media.phone`
    width: 100%;
  `}
`;

export const YelpReservations = () => (
  <OrangeBar>
    <Container>
      <YelpIframe
        title="yelp reservation"
        frameBorder="0"
        scrolling="no"
        src="//www.yelp.com/reservations/the-meatball-stoppe-orlando-2/widget?orientation=horizontal&color-scheme=light"
      />
    </Container>
  </OrangeBar>
);
