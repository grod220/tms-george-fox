import React, { FC } from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';
import FoodPicSquare from './food-pic-square';
import { Category } from '../../../utilities/contentful-types';

const Container = styled.div`
  column-width: 35rem;
  column-gap: 1.5rem;
  width: 93%;
  column-fill: auto;
  margin: 30px auto;

  > div {
    break-inside: avoid-column;
    margin: 0 0.2rem 1.5rem;
    transition: all 0.5s;
    -webkit-backface-visibility: hidden;
  }
`;

const shuffle = <T extends any>(array: T[]) => {
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
    <MenuItem category={categoryData.title} menuItems={categoryData.menuItemsCollection.items} key={i + 100} />
  ));

  const filteredCats = categories.filter(
    (category) => !['Beverages', 'Alcoholic Beverages', 'Desserts'].includes(category.title),
  );
  const itemsWithPicture = filteredCats
    .map((cat) => cat.menuItemsCollection.items)
    .flat()
    .filter((item) => item.image);

  const shuffledItems = shuffle(itemsWithPicture);
  const shortenedItems = shuffledItems.slice(0, MenuArr.length);

  const FoodPicArr = shortenedItems.map((foodObj, i) => {
    const { url: src, width, height } = foodObj.image!;
    return <FoodPicSquare imagePath={{ src, width, height }} name={foodObj.title} key={i} />;
  });

  const interwoven = [];
  for (let i = 0; i < MenuArr.length; i++) {
    interwoven.push(MenuArr[i]);
    interwoven.push(FoodPicArr[i]);
  }
  return interwoven;
};

const MenuGrid: FC<{ menu: Category[] }> = ({ menu }) => <Container>{interweaveData(menu)}</Container>;

export default MenuGrid;
