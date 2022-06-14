import Store from './display-store';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active: boolean; activeColor: string; inactiveColor: string }>`
  color: ${({ active, activeColor }) => (active ? 'white' : activeColor)};
  border-radius: 8px;
  border: 0;
  background-color: ${({ active, activeColor, inactiveColor }) => (active ? activeColor : inactiveColor)};
  padding: 6px 16px;
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 4px;
`;

export const Filters = observer(() => {
  return (
    <Container>
      <FilterButton
        activeColor="#f08f25"
        inactiveColor="#ffd7ab"
        active={Store.onlyGlutenFree}
        onClick={() => Store.toggleGlutenFree()}
      >
        gluten-free
        <input type="checkbox" checked={Store.onlyGlutenFree} readOnly />
      </FilterButton>
      <FilterButton
        activeColor="#44c78e"
        inactiveColor="#c2e7d5"
        active={Store.onlyVegetarian}
        onClick={() => Store.toggleVegetarian()}
      >
        vegetarian
        <input type="checkbox" checked={Store.onlyVegetarian} readOnly />
      </FilterButton>
      <FilterButton
        activeColor="#39be3a"
        inactiveColor="#c7e7c2"
        active={Store.onlyVegan}
        onClick={() => Store.toggleVegan()}
      >
        vegan
        <input type="checkbox" checked={Store.onlyVegan} readOnly />
      </FilterButton>
    </Container>
  );
});
