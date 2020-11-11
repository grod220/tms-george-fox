import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledButton = styled.button`
  margin-top: 1rem;
  font-size: 19px;
  padding: 10px 27px;
  text-transform: uppercase;
  color: white;
  background-color: rgb(91, 192, 222);
  border-color: #46b8da;
  text-align: center;
  border-radius: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BlueButton = ({ href, linkTo, children }) => (
  <>
    {linkTo && (
      <Link to={linkTo}>
        <StyledButton>{children}</StyledButton>
      </Link>
    )}
    {href && (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <StyledButton>{children}</StyledButton>
      </a>
    )}
  </>
);
