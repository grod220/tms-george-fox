import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import formatPrice from '../../../../../utilities/add-zero';
import { removeHashes } from '../../../../../utilities/contentful-formatter';
import OrderStore from '../../../stores/order-store';
import { MenuItem as MenuItemType } from '../../../../../utilities/contentful-types';
import Image from 'next/image';
import MenuItemModal from './modal';

const ItemContainer = styled.div<{ hasItem: boolean }>`
  border: ${({ hasItem }) => (hasItem ? '3px solid #84bf5b' : '1px solid #cecece')};
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const ItemCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #84bf5b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ItemTitle = styled.h5`
  margin: 0;
  color: #902e2d;
`;

const Price = styled.span`
  font-size: 18px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  font-size: 16px;
  color: #4c4c4c;
`;

const Details = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
`;

const LeftSide = styled.div`
  padding: 12px;
`;

const RightSide = styled.div`
  flex: 0 0 160px;
  position: relative;
`;

const MenuItem = ({ itemData }: { itemData: MenuItemType }) => {
  const [modal, setModal] = useState(false);
  // const itemCount = OrderStore.shoppingCart.filter((item) => item.dishName === itemData.title).length;
  return (
    <>
      {modal && <MenuItemModal itemData={itemData} closeFunc={() => setModal(false)} />}
      <ItemContainer
        // hasItem={OrderStore.shoppingCart.map((item) => item.dishName).includes(itemData.title)}
        onClick={() => setModal(!modal)}
      >
        {/*{itemCount > 0 && <ItemCounter>{itemCount}</ItemCounter>}*/}
        <LeftSide>
          <ItemTitle>{(removeHashes(itemData.title) ?? '').replace(/\b\S/g, (t) => t.toUpperCase())}</ItemTitle>
          <Description>{itemData.description}</Description>
          <Details>
            <Price>${formatPrice(itemData.price)}</Price>
          </Details>
        </LeftSide>
        {itemData.image && (
          <RightSide image={itemData.image.url}>
            <Image src={itemData.image.url} layout="fill" objectFit="cover" />
          </RightSide>
        )}
      </ItemContainer>
    </>
  );
};

export default MenuItem;
