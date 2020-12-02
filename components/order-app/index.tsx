import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import OrderStore from './stores/order-store';

import OrderNav from './order-nav';
import { MenuVersion } from '../../utilities/contentful-types';
import OrderMenu from './order-menu';

interface OrderAppProps {
  catering?: boolean;
  menus: MenuVersion[];
}

const OrderApp = observer(({ catering, menus }: OrderAppProps) => {
  useEffect(() => OrderStore.initializeModule(catering), [catering]);

  return (
    <>
      <OrderNav catering={catering} menus={menus} />
      <OrderMenu activeTab={OrderStore.activeTab} menus={menus} />
      {/*{OrderStore.activeTab === 'Checkout' ? <Checkout /> : <OrderMenu activeTab={OrderStore.activeTab} />}*/}
    </>
  );
});

export default OrderApp;
