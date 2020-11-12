import * as React from 'react';
import styled from 'styled-components';

import addZeroIfNeeded from '../../../utilities/add-zero';
import { MenuItem } from '../../../utilities/contentful-types';

const Wrapper = styled.div`
  display: ${(props) => (props.activeSection === props.category ? 'flex' : 'none')};
  transition: opacity 0.2s linear;
  opacity: ${(props) => (props.activeSection === props.category ? props.opacity : 0)};
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 2rem;
  flex: 1;
`;

const AllItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LineItem = styled.div`
  padding: 2rem;
`;

const Price = styled.span`
  color: #902e2d;
`;

interface SectionDescriptionProps {
  menuItems: Pick<MenuItem, 'title' | 'price'>[];
  activeSection: string;
  opacity: number;
  category: string;
}

const SectionDescription = ({ category, menuItems, activeSection, opacity }: SectionDescriptionProps) => (
  <Wrapper activeSection={activeSection} category={category} opacity={opacity}>
    <AllItems>
      {menuItems.map((item, i) => (
        <LineItem key={i}>
          {item.title} :: <Price>{'$' + addZeroIfNeeded(item.price)}</Price>
        </LineItem>
      ))}
    </AllItems>
  </Wrapper>
);

export default SectionDescription;
