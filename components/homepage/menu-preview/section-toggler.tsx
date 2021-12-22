import React, { FC } from 'react';
import styled from 'styled-components';

const MenuTitle = styled.span<SectionTogglerProps>`
  padding: 1rem;
  text-align: center;
  color: ${(props) => (props.activeSection === props.name ? '#902e2d' : '#bbb')};
  border-bottom: ${(props) => (props.activeSection === props.name ? '.1rem solid #902e2d' : 'none')};
  margin-bottom: ${(props) => (props.activeSection === props.name ? '-.1rem' : '0')};
  font-variant: small-caps;
  font-size: 2.5rem;

  &:hover {
    color: ${(props) => (props.activeSection === props.name ? '#902e2d' : '#ffa2a2')};
    cursor: pointer;
  }
`;

interface SectionTogglerProps {
  name: string;
  activeSection?: string;
  onClick: () => void;
}

const SectionToggler: FC<SectionTogglerProps> = (props) => <MenuTitle {...props}>{props.name}</MenuTitle>;

export default SectionToggler;
