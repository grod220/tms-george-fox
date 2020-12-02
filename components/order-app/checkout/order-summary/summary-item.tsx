import * as React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import OrderStore from '../../stores/order-store';
import addZero from '../../../../utilities/add-zero';
import ItemStore from '../../stores/item-store';

const Highlight = styled.div`
  color: #902e2d;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PicksContainer = styled(ItemContainer)`
  margin-left: 20px;
`;

const Dots = styled.div`
  flex-grow: 1;
  height: 10px;
  margin: 0 9px;
  border-bottom: 2px dotted #4e4e4e;
`;

const Choices = styled.div`
  font-size: 18px;
  margin-left: 20px;
  color: #484848;
`;

const Price = styled.div`
  color: black;
`;

const Category = styled.span`
  font-style: italic;
`;

const RemoveX = styled.div`
  margin-right: 10px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

const SpaceBetween = styled.div`
  margin-bottom: 15px;
`;

interface SummaryItemProps {
  item: ItemStore;
  shoppingCartIndex: number;
}

const SummaryItem = observer(({ item, shoppingCartIndex }: SummaryItemProps) => {
  const removeFromCart = (index) => {
    OrderStore.shoppingCart.splice(index, 1);
  };
  return (
    <SpaceBetween>
      <ItemContainer>
        <RemoveX onClick={() => removeFromCart(shoppingCartIndex)}>×</RemoveX>
        <Highlight>{item.dishName}</Highlight>
        <Dots />
        <div>${addZero(item.basePrice)}</div>
      </ItemContainer>
      {item.options.map(({ title, choices }, i) => (
        <Choices key={i}>
          {Boolean(choices.length) && <Category>{title}:</Category>}
          {choices.map((choice, i) => (
            <PicksContainer key={i}>
              <div>{choice.title}</div>
              {Boolean(choice.price) && (
                <>
                  <Dots />
                  <Price>+${addZero(choice.price)}</Price>
                </>
              )}
            </PicksContainer>
          ))}
        </Choices>
      ))}
    </SpaceBetween>
  );
});

export default SummaryItem;
