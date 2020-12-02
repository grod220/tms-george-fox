import React from 'react';
import styled from 'styled-components';

import VeggieSVG from './veggie-mark.svg';
import GlutenFreePNG from './gluten-free-icon.png';

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 37px;
  font-size: 12px;
  color: #4c4c4c;
`;

const Veg = styled.div`
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
`;

const GF = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Legend = () => {
  return (
    <Container>
      <Veg>
        <img width="16px" src={VeggieSVG} alt="Veggie options" /> = Veg options
      </Veg>
      <GF>
        <img width="21px" src={GlutenFreePNG} alt="gluten-free options" /> = Gluten-free options
      </GF>
    </Container>
  );
};

export default Legend;
