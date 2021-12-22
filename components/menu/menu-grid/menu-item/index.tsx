import React, { FC } from 'react';
import styled from 'styled-components';
import { MenuItem as MenuItemType } from '../../../../utilities/contentful-types';

import addZeroIfNeeded from '../../../../utilities/add-zero';

const RedBox = styled.div`
  background-color: #902e2d;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  text-align: center;
`;

const Top = styled.div`
  align-self: center;
  text-align: center;
`;

const Category = styled.span`
  font-size: 5rem;
  font-family: 'Dancing Script';
  margin-right: 1rem;
`;

const MenuItems = styled.div`
  line-height: 2rem;
`;

interface MenuItemProps {
  category: string;
  menuItems: Pick<MenuItemType, 'title' | 'price'>[];
}

const MenuItem: FC<MenuItemProps> = ({ category, menuItems }) => (
  <RedBox>
    <Top>
      <Category>{category}</Category>
    </Top>
    <MenuItems>
      {menuItems.map((item, i) => (
        <p key={i}>
          {item.title}
          <em>{item.price && ' : $' + addZeroIfNeeded(item.price)}</em>
        </p>
      ))}
    </MenuItems>
  </RedBox>
);

export default MenuItem;
