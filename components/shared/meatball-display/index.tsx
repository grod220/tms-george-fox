import styled from 'styled-components';
import Image from 'next/image';
import Store from './display-store';
import { observer } from 'mobx-react-lite';
import { Filters } from './filters';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;

const MeatballGrid = styled.div`
  max-width: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

const MeatballName = styled.div`
  margin-top: 10px;
  color: #902e2d;
  text-align: center;
  font-size: 20px;
`;

export const MeatballDisplay = observer(() => {
  return (
    <Container>
      <Filters />
      <MeatballGrid>
        {Store.meatballsToDisplay.map((m, i) => (
          <Card key={i}>
            <Image src={m.image} />
            <MeatballName>{m.name}</MeatballName>
          </Card>
        ))}
      </MeatballGrid>
    </Container>
  );
});
