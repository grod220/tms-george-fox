import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import ItemStore from '../../../stores/item-store';

import AddZero from '../../../../../utilities/add-zero';
import { removeHashes } from '../../../../../utilities/contentful-formatter';

const SectionHeader = styled.div`
  font-size: 22px;
  color: black;
  background-color: #e0e0e0;
  padding: 20px;
`;

const OptionsContainer = styled.div`
  padding: 20px;
  font-size: 20px;
`;

const SingleOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectionBox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid gray;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const InnerSelect = styled.div<{ selected: boolean }>`
  background: ${(props) => (props.selected ? '#902e2d' : 'white')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const AdditionsCheckbox = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 3px;
  margin-right: 10px;
  margin-left: 2px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const InnerCheck = styled.div<{ selected: boolean }>`
  background: ${(props) => (props.selected ? '#902e2d' : 'white')};
  width: 17px;
  height: 17px;
`;

const MaxNotify = styled.div`
  font-size: 16px;
  color: #4c4c4c;
`;

const ExtraCost = styled.span`
  color: #4c4c4c;
  font-size: 16px;
  font-style: italic;
`;

interface MenuItemOptionsProps {
  itemStore: ItemStore;
}

const MenuItemOptions = observer(({ itemStore }: MenuItemOptionsProps) => {
  if (!itemStore.options.length) return <></>;

  return (
    <>
      {itemStore.options.map((option, i) => (
        <div key={i}>
          <SectionHeader>
            {option.title}
            {option.maximum && option.maximum > 1 && <MaxNotify>Choose {option.maximum} maximum</MaxNotify>}
          </SectionHeader>
          {/*<OptionsContainer>*/}
          {/*  {combineOptionItems(option.freeOptionItem, option.pricedOptionItems).map((optionItem, i) => (*/}
          {/*    <SingleOption key={i} onClick={() => itemStore.handleChoice(option, optionItem, optionItem.isFree)}>*/}
          {/*      <SelectWrapper>*/}
          {/*        {option.maximum === 1 ? (*/}
          {/*          <SelectionBox>*/}
          {/*            <InnerSelect selected={itemStore.isSelected(option.title, optionItem.title)} />*/}
          {/*          </SelectionBox>*/}
          {/*        ) : (*/}
          {/*          <AdditionsCheckbox>*/}
          {/*            <InnerCheck selected={itemStore.isSelected(option.title, optionItem.title)} />*/}
          {/*          </AdditionsCheckbox>*/}
          {/*        )}*/}
          {/*        {removeHashes(optionItem?.title)}*/}
          {/*      </SelectWrapper>*/}
          {/*      {!optionItem.isFree && (*/}
          {/*        <ExtraCost>*/}
          {/*          <span>add: ${AddZero(optionItem?.price)}</span>*/}
          {/*        </ExtraCost>*/}
          {/*      )}*/}
          {/*    </SingleOption>*/}
          {/*  ))}*/}
          {/*</OptionsContainer>*/}
        </div>
      ))}
    </>
  );
});

export default MenuItemOptions;
