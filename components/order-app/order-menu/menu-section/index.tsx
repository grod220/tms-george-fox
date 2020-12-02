import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';
import { removeHashes } from '../../../../utilities/contentful-formatter';
import { Category } from '../../../../utilities/contentful-types';

const CategoryTitle = styled.h2`
  font-weight: normal;
  margin-bottom: 10px;
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  user-select: none;
`;

const MenuSection = ({ category }: { category: Category }) => {
  return (
    <>
      <CategoryTitle>{removeHashes(category?.title)}</CategoryTitle>
      <MenuItems>
        {category.menuItemsCollection.items?.map((item, i) => (
          <MenuItem itemData={item} key={i} />
        ))}
      </MenuItems>
    </>
  );
};

export default MenuSection;
