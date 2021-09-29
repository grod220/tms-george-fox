import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import MenuWidget from './menu-widget';
import MenuHeroImg from './our_menu.jpg';
import { Category } from '../../../utilities/contentful-types';

const MenuHero = styled.div`
  text-align: center;
  background: url(${MenuHeroImg.src}) no-repeat center 0;
  background-size: cover;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 11rem;

  ${media.tablet`
      font-size: 10rem;`}

  ${media.phone`
      font-size: 9rem;`};
`;

const MenuPreview = ({ menu }: { menu: Category[] }) => (
  <div>
    <MenuHero>Our Menu</MenuHero>
    <MenuWidget menu={menu} />
  </div>
);

export default MenuPreview;
