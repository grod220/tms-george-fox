import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  border-top: 1px #aaaaaa solid;
  flex-grow: 1;
  height: 1px;
  margin-left: 30px;
`;

const Title = styled.h4`
  margin: 0;
  text-transform: uppercase;
`;

const Separator: FC<{ title: string }> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <Divider />
  </Container>
);

export default Separator;
