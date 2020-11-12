import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';
import FoodPicData from './food-pic-data';
import FoodPicSquare from './food-pic-square';
import { Category } from '../../../utilities/contentful-types';

const Container = styled.div`
  column-width: 35rem;
  column-gap: 1.5rem;
  width: 93%;
  column-fill: auto;
  margin: 0 auto;

  > div {
    break-inside: avoid-column;
    margin: 0 0.2rem 1.5rem;
    transition: all 0.5s;
    -webkit-backface-visibility: hidden;
  }
`;

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const interweaveData = (categories: Category[]) => {
  const MenuArr = categories.map((categoryData, i) => (
    <MenuItem
      category={categoryData.title}
      menuItems={categoryData.menuItemsCollection.items}
      key={i + FoodPicData.length}
    />
  ));
  const FoodPicArr = shuffle(FoodPicData.map((foodObj, i) => <FoodPicSquare {...foodObj} key={i} />));
  const largerLength = MenuArr.length > FoodPicArr.length ? MenuArr.length : FoodPicArr.length;
  const interwoven = [];
  for (let i = 0; i < largerLength; i++) {
    interwoven.push(MenuArr[i]);
    interwoven.push(FoodPicArr[i]);
  }
  return interwoven;
};

const MenuGrid = ({ menu }: { menu: Category[] }) => <Container>{interweaveData(menu)}</Container>;

export default MenuGrid;
