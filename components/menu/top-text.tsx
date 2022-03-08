import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/media';
import Highlight from '../shared/highlight';

import NormalMenu from './tms-menu-2021.pdf';
import VeganMenu from './primo-vegan-menu.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

const Centered = styled.div`
  width: 78vw;
  ${media.tablet`
    width: 94vw;`}
  ${media.phone`
    width: 94vw;`};
`;

const TopText = () => (
  <Container>
    <Centered>
      Hand made like your Mamma and Nonna’s. All of our dishes are made with the highest quality meat and fresh
      ingredients. Also! There are plenty of options for vegan &amp; gluten free (*gf) guests.{' '}
      <Highlight i>
        <a href={NormalMenu} target="_blank" rel="noopener noreferrer">
          Full Menu
        </a>
      </Highlight>{' '}
      -{' '}
      <Highlight i>
        <a href={VeganMenu.src} target="_blank" rel="noopener noreferrer">
          Primo Vegan Menu
        </a>
      </Highlight>
    </Centered>
  </Container>
);

export default TopText;
