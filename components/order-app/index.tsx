import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import OrderStore, { OrderType } from './stores/order-store';

import OrderNav from './order-nav';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderMenu from './order-menu';
import Checkout from './checkout';

interface OrderAppProps {
  type: OrderType;
  menus: MenuVersion[];
}

const OrderApp = observer(({ menus, type }: OrderAppProps) => {
  useEffect(() => OrderStore.initializeModule(type), [type]);

  return (
    <>
      <OrderNav type={type} menus={menus} />
      {OrderStore.activeTab === 'Checkout' ? (
        <Checkout />
      ) : (
        <OrderMenu activeTab={OrderStore.activeTab} menus={menus} />
      )}
    </>
  );
});

export default OrderApp;
