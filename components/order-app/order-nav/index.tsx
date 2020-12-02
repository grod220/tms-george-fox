import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import SectionTab from './section-tab';
import { MenuVersion } from '../../../utilities/contentful-types';
import { ActiveTab } from '../stores/order-store';
import CheckoutTab from './checkout-tab';

const Container = styled.div`
  height: 7rem;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  div + div {
    margin-left: 20px;
  }
`;

const MenuNavItemsWrapper = styled.div`
  display: flex;
`;

const CATERING_MENUS = ['Catering Menu'];
const NORMAL_MENUS = ['Full menu', 'Vegetarian', 'Vegan', 'Gluten Free #meat'];

const menuComparator = (menus: string[], a: string, b: string): number => {
  return menus.indexOf(a) - menus.indexOf(b);
};

interface OrderNavProps {
  catering?: boolean;
  menus: MenuVersion[];
}

const OrderNav = observer(({ catering, menus }: OrderNavProps) => {
  const menuVersions = catering ? CATERING_MENUS : NORMAL_MENUS;

  return (
    <Container>
      <Content>
        <MenuNavItemsWrapper>
          {menus
            .map((obj) => obj.type)
            .filter((version) => menuVersions.includes(version))
            .sort((a, b) => menuComparator(menuVersions, a, b))
            .map((menuVersion) => (
              <SectionTab key={menuVersion} menuVersion={menuVersion as ActiveTab} />
            ))}
        </MenuNavItemsWrapper>
        <CheckoutTab />
      </Content>
    </Container>
  );
});

export default OrderNav;
