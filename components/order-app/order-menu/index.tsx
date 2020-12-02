import * as React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import MenuSection from './menu-section';
import { MenuVersion } from '../../../utilities/contentful-types';
import { ActiveTab } from '../stores/order-store';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  position: relative;
`;

interface OrderMenuProps {
  activeTab: ActiveTab;
  menus: MenuVersion[];
}

const OrderMenu = observer(({ activeTab, menus }: OrderMenuProps) => {
  const activeMenuData = menus.filter((menu) => menu.type === activeTab)[0];

  return (
    <Container>
      <Content>
        {/*<Legend />*/}
        {activeMenuData?.categoriesCollection.items?.map((category, i) => (
          <MenuSection category={category} key={i} />
        ))}
      </Content>
    </Container>
  );
});

export default OrderMenu;
