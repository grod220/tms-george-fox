import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import OrderStore from '../../stores/order-store';

const Input = styled.input`
  height: 40px;
  width: 90px;
  font-family: Vollkorn;
  text-align: right;
  margin-left: 20px;
  margin-right: -15px;
  font-size: 20px;
`;

const Tip = observer(() => {
  return (
    <>
      <div>support the staff with a tip {OrderStore.tip > 0 && <>({OrderStore.tipPercent}%)</>}</div>
      <div>
        <Input
          onChange={(e) => OrderStore.setTip(e.target.value)}
          value={OrderStore.tip}
          type="number"
          min="0.00"
          step="0.1"
        />
      </div>
    </>
  );
});

export default Tip;
